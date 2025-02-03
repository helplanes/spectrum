export interface PaymentDetailsResponse {
  orderId: string;
  paymentSessionId: string;
  amount: number;
}

export interface PaymentInitiationRequest {
  eventId: string;
  teamId?: string;
  type: 'solo' | 'team';
}

export interface PaymentVerificationResponse {
  success: boolean;
  orderId: string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  message?: string;
}

export interface PaymentRecord {
  id: string;
  order_id: string;
  user_id: string;
  team_id?: string;
  event_id?: string;
  amount: number;
  currency: string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  payment_method?: string;
  transaction_id?: string;
  bank_reference?: string;
  created_at?: string;
  updated_at?: string;
  cf_order_id?: string;
  cf_payment_id?: string;
  payment_time?: string;
  registration_id?: string;
  metadata?: {
    webhook_type?: string;
    payment_status?: string;
    customer_info?: {
      customer_id: string;
      customer_name: string;
      customer_email: string;
      customer_phone: string;
    };
    payment_details?: {
      payment_time: string;
      cf_payment_id: number;
      payment_group: string;
      bank_reference: string;
      payment_method: {
        upi?: {
          upi_id: string;
          channel: string | null;
        };
      };
    };
    transaction_details?: {
      amount: number;
      status: string;
      currency: string;
      order_id: string;
    };
    gateway_info?: {
      gateway_name: string;
      gateway_order_id: string | null;
      gateway_payment_id: string | null;
      gateway_settlement: string;
      gateway_status_code: string | null;
      gateway_order_reference_id: string | null;
    };
  };
  event?: {
    name: string;
  };
  team?: {
    team_name: string;
  };
}
