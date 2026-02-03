import { Card } from "../ui/card";
import { ProgressBar } from "../ui/ProgressBar";

export function SustainabilityStatsCard({ score }: { score: number }) {
  return (
    <Card>
      <h3>Sustainability Score</h3>
      <strong>{score}/10</strong>
      <ProgressBar value={score} />
    </Card>
  );
}
