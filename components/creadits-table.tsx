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
  todayLimit: number | string;
  monthlyUsed: number;
  monthlyLimit: number | string;
}

export function CreditsTable({
  plan,
  todayUsed,
  todayLimit,
  monthlyUsed,
  monthlyLimit,
}: UsageProps) {
  const parseLimit = (limit: number | string) =>
    typeof limit === "number" ? limit : 999999;

  const tLimit = parseLimit(plan === "free" ? todayLimit : monthlyLimit);
  const mLimit = parseLimit(monthlyLimit);

  const todayPercent = (todayUsed / tLimit) * 100;
  const monthPercent = (monthlyUsed / mLimit) * 100;

  const remaining = mLimit - monthlyUsed;

  return (
    <Table>
      <TableCaption>
        {todayUsed !== todayLimit
          ? "Your plan & credit usage"
          : "Credit will reset in 12 am night"}
      </TableCaption>

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
          <TableCell className="font-medium">Today Used</TableCell>
          <TableCell>
            {todayUsed} / {plan == "free" ? todayLimit : monthlyLimit}
          </TableCell>
          <TableCell>
            <Progress value={todayPercent} />
          </TableCell>
          <TableCell className="text-right">
            {plan == "free" ? todayLimit : monthlyLimit}
          </TableCell>
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
            {isNaN(remaining) ? "Unlimited" : remaining}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
