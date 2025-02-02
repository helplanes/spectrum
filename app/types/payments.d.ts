export interface CashfreeWebhookPayload {
  data: {
    order: {
      order_id: string;
      order_amount: number;
      order_currency: string;
      order_tags: any;
      order_status: string;
    };
    payment: {
      cf_payment_id: string;
      payment_status: string;
      payment_amount: number;
      payment_currency: string;
      payment_message: string;
      payment_time: string;
      bank_reference: string;
      auth_id: string | null;
      payment_method: {
        card?: {
          card_number: string;
          card_network: string;
          card_type: string;
          card_bank_name: string;
        };
        upi?: {
          channel: string | null;
          upi_id: string;
        };
        netbanking?: {
          netbanking_bank_code: string;
          netbanking_bank_name: string;
        };
        app?: {
          channel: string;
          upi_id: string | null;
        };
      };
      payment_group: string;
    };
    customer_details: {
      customer_name: string | null;
      customer_id: string | null;
      customer_email: string;
      customer_phone: string;
    };
    error_details?: {
      error_code: string;
      error_description: string;
      error_reason: string;
      error_source: string;
    };
  };
  event_time: string;
  type: 'PAYMENT_SUCCESS_WEBHOOK' | 'PAYMENT_FAILED_WEBHOOK' | 'PAYMENT_USER_DROPPED_WEBHOOK';
}
