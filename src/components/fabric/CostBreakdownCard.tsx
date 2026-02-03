import { Card } from "../ui/card";
import { MetricRow } from "../ui/MetricRow";

export function CostBreakdownCard({
  material,
  wastage,
  total,
}: {
  material: number;
  wastage: number;
  total: number;
}) {
  return (
    <Card>
      <h3>Cost Breakdown</h3>
      <MetricRow label="Material Cost" value={`₹${material}`} />
      <MetricRow label="Wastage" value={`${wastage}%`} />
      <MetricRow label="Total Cost" value={`₹${total}`} />
    </Card>
  );
}
