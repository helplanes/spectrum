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
