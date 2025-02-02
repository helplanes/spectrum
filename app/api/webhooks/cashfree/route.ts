import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";
import { CashfreeWebhookPayload } from "@/app/types/payments";

export async function POST(request: Request) {
  const supabase = await createClient();

  try {
    const payload = (await request.json()) as CashfreeWebhookPayload;
    const { order, payment } = payload.data;

    // 1. Log webhook event
    const { error: logError } = await supabase
      .from('payment_logs')
      .insert({
        event_type: payload.type,
        order_id: order.order_id,
        payload
      });

    if (logError) {
      console.error("Failed to log webhook:", logError);
    }

    // 2. Get existing payment record
    const { data: existingPayment, error: fetchError } = await supabase
      .from('payments')
      .select('*')
      .eq('order_id', order.order_id)
      .single();

    if (fetchError) {
      throw new Error(`Payment not found for order ${order.order_id}`);
    }

    // 3. Map Cashfree status to our status
    const statusMap: Record<string, string> = {
      'SUCCESS': 'success',
      'FAILED': 'failed',
      'USER_DROPPED': 'failed'
    };

    const mappedStatus = statusMap[payment.payment_status] || 'pending';

    // 4. Build payment update data
    const paymentUpdateData = {
      status: mappedStatus,
      payment_method: payment.payment_group,
      transaction_id: payment.cf_payment_id,
      bank_reference: payment.bank_reference,
      cf_payment_id: payment.cf_payment_id,
      payment_time: new Date(payment.payment_time).toISOString(),
      metadata: {
        webhook_event: payload,
        payment_details: {
          message: payment.payment_message,
          method: payment.payment_method,
          group: payment.payment_group
        }
      },
      updated_at: new Date().toISOString()
    };

    // 5. Update payment record
    const { error: updateError } = await supabase
      .from('payments')
      .update(paymentUpdateData)
      .eq('id', existingPayment.id)
      .eq('order_id', order.order_id); // Double check order_id for safety

    if (updateError) {
      throw new Error(`Failed to update payment: ${updateError.message}`);
    }

    // 6. Handle successful payment
    if (mappedStatus === 'success' && !existingPayment.registration_id) {
      const { data: registration, error: regError } = await supabase
        .from('registrations')
        .insert({
          event_id: existingPayment.event_id,
          team_id: existingPayment.team_id,
          individual_id: existingPayment.team_id ? null : existingPayment.user_id,
          registration_status: 'confirmed',
          payment_status: 'success'
        })
        .select()
        .single();

      if (regError) {
        throw new Error(`Failed to create registration: ${regError.message}`);
      }

      // Update payment with registration_id
      await supabase
        .from('payments')
        .update({ 
          registration_id: registration.id,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingPayment.id);
    }

    // 7. Log success
    await supabase
      .from('payment_logs')
      .insert({
        payment_id: existingPayment.id,
        order_id: order.order_id,
        event_type: 'webhook_processed',
        payload: {
          status: mappedStatus,
          payment_id: payment.cf_payment_id,
          timestamp: new Date().toISOString()
        }
      });

    return NextResponse.json({ 
      success: true,
      status: mappedStatus,
      order_id: order.order_id 
    });

  } catch (error: any) {
    console.error("Webhook error:", error);

    // Log error but don't expose internal details
    await supabase
      .from('payment_logs')
      .insert({
        event_type: 'webhook_error',
        payload: {
          error: error.message,
          stack: error.stack,
          timestamp: new Date().toISOString()
        }
      });

    // Return 200 to prevent Cashfree retries, but indicate error
    return NextResponse.json({ 
      success: false,
      error: "Webhook processing failed"
    });
  }
}
