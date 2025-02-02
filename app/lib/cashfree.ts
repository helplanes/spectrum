interface CustomerDetails {
  customerId: string;
  customerEmail: string;
  customerPhone: string;
  customerName: string;
}

interface PaymentSessionRequest {
  orderId: string;
  amount: number;
  currency: string;
  customerDetails: CustomerDetails;
}

export class Cashfree {
  private appId: string;
  private secretKey: string;
  private baseUrl: string;

  constructor(appId: string, secretKey: string) {
    this.appId = appId;
    this.secretKey = secretKey;
    this.baseUrl = process.env.NODE_ENV === 'production'
      ? 'https://api.cashfree.com/pg'
      : 'https://sandbox.cashfree.com/pg';
  }

  async createPaymentSession(params: PaymentSessionRequest) {
    const response = await fetch(`${this.baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'x-api-version': '2022-09-01',
        'x-client-id': this.appId,
        'x-client-secret': this.secretKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_id: params.orderId,
        order_amount: params.amount,
        order_currency: params.currency,
        customer_details: {
          customer_id: params.customerDetails.customerId,
          customer_email: params.customerDetails.customerEmail,
          customer_phone: params.customerDetails.customerPhone,
          customer_name: params.customerDetails.customerName
        },
        order_meta: {
          return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/events/payment?order_id={order_id}`,
          notify_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/cashfree`
        }
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Cashfree API error:', error);
      throw new Error(error.message || 'Failed to create payment session');
    }

    return response.json();
  }

  async verifySignature(orderId: string, orderAmount: string, referenceId: string, txStatus: string, paymentMode: string, txMsg: string, txTime: string, signature: string): Promise<boolean> {
    const data = orderId + orderAmount + referenceId + txStatus + paymentMode + txMsg + txTime;
    const computedSignature = await this.computeSignature(data);
    return computedSignature === signature;
  }

  private async computeSignature(data: string): Promise<string> {
    const encoder = new TextEncoder();
    const messageBuffer = encoder.encode(data);
    const keyBuffer = encoder.encode(this.secretKey);
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signatureBuffer = await crypto.subtle.sign(
      'HMAC',
      cryptoKey,
      messageBuffer
    );
    
    return Array.from(new Uint8Array(signatureBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
}
