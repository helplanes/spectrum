import { createClient } from "@/app/utils/supabase/server";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { formatDate } from "@/app/lib/utils";
import { Badge } from "@/components/ui/badge";
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

interface PaymentRecord {
  id: string;
  order_id: string;
  amount: number;
  status: string;
  payment_time: string;
  created_at: string;
  event: {
    name: string;
  };
  team: {
    team_name: string;
  } | null;
}

export default async function PaymentsPage() {
  const supabase = await createClient();
  const headersList = await headers();
  const url = new URL(headersList.get('x-url') || '', process.env.NEXT_PUBLIC_APP_URL);
  const orderId = url.searchParams.get('order_id');
  
  if (orderId) {
    const verifyResponse = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/verify?order_id=${orderId}`,
      { cache: 'no-store' }
    );
    
    if (verifyResponse.ok) {
      redirect('/dashboard/events/registrations');
    }
  }

  const { data: payments } = await supabase
    .from('payments')
    .select(`
      *,
      event:events(name),
      team:teams(team_name)
    `)
    .order('payment_time', { ascending: false })
    .order('created_at', { ascending: false });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'paid':
      case 'success': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="min-h-screen bg-[#EBE9E0] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Payments' },
          ]}
          className="mb-4"
        />

        <div className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Payment History</h1>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Order ID</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments?.map((payment: PaymentRecord) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">
                      {payment.event?.name}
                    </TableCell>
                    <TableCell>
                      {payment.team ? (
                        <span title={payment.team.team_name}>Team Payment</span>
                      ) : (
                        "Individual"
                      )}
                    </TableCell>
                    <TableCell>₹{payment.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary"
                        className={getStatusColor(payment.status)}
                      >
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {payment.payment_time 
                        ? formatDate(payment.payment_time)
                        : formatDate(payment.created_at)
                      }
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {payment.order_id}
                    </TableCell>
                  </TableRow>
                ))}
                {!payments?.length && (
                  <TableRow>
                    <TableCell 
                      colSpan={6} 
                      className="text-center text-muted-foreground py-8"
                    >
                      No payments found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
}
