"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { getBillingHistory } from "@/services/subscriptionApi";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Payment {
  _id: string;
  plan: string;
  status: string;
  razorpayPaymentId: string;
  createdAt: string;
}

const BillingHistory = () => {
  const { getToken } = useAuth();
  const { toast } = useToast();

  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = await getToken();

        if (!token) return;

        const res = await getBillingHistory(token);

        if (res.success) {
          setPayments(res.payments);
        }
      } catch (error) {
        console.error(error);

        toast({
          title: "Error",
          description: "Failed to load billing history.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [getToken, toast]);

  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Billing History</CardTitle>
        <CardDescription>View your past payments and invoices.</CardDescription>
      </CardHeader>

      <CardContent>
        {payments.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No billing history available.
          </p>
        ) : (
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment._id}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div>
                  <p className="text-sm font-medium">{payment.plan} access</p>

                  <p className="text-xs text-muted-foreground">
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm capitalize">{payment.status}</p>

                  <p className="text-xs text-muted-foreground">
                    {payment.razorpayPaymentId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BillingHistory;
