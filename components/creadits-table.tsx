"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface UsageProps {
  plan: "free" | "pro" | "creator";
  todayUsed: number;
  todayLimit: number;
  monthlyUsed: number;
  monthlyLimit: number;
}

export function CreditsTable({
  plan,
  todayUsed,
  todayLimit,
  monthlyUsed,
  monthlyLimit,
}: UsageProps) {
  const todayPercent = (todayUsed / todayLimit) * 100;
  const monthPercent = (monthlyUsed / monthlyLimit) * 100;

  const remaining = monthlyLimit - monthlyUsed;

  return (
    <Table>
      <TableCaption>Your plan & credit usage</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Usage</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead className="text-right">Limit</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {/* Plan */}
        <TableRow>
          <TableCell className="font-medium">Plan</TableCell>
          <TableCell>
            <Badge variant="default" className="capitalize">
              {plan}
            </Badge>
          </TableCell>
          <TableCell className="text-center">—</TableCell>
          <TableCell className="text-right">—</TableCell>
        </TableRow>

        {/* Today */}
        <TableRow>
          <TableCell className="font-medium">Today Credits</TableCell>
          <TableCell>
            {todayUsed} / {todayLimit}
          </TableCell>
          <TableCell>
            <Progress value={todayPercent} />
          </TableCell>
          <TableCell className="text-right">{todayLimit}</TableCell>
        </TableRow>

        {/* Monthly */}
        <TableRow>
          <TableCell className="font-medium">Monthly Credits</TableCell>
          <TableCell>
            {monthlyUsed} / {monthlyLimit}
          </TableCell>
          <TableCell>
            <Progress value={monthPercent} />
          </TableCell>
          <TableCell className="text-right">{monthlyLimit}</TableCell>
        </TableRow>
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Remaining Credits</TableCell>
          <TableCell className="text-right font-semibold">
            {remaining}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
