import { Card } from "../ui/card";
import { ProgressBar } from "../ui/ProgressBar";

type DecisionReason = {
  id: string;
  text: string;
};

type DecisionSummaryProps = {
  recommendedFabric: string;
  reasons?: DecisionReason[];
  confidence?: number; // 0–100
};

export function DecisionSummaryCard({
  recommendedFabric,
  reasons = [],
  confidence = 0,
}: DecisionSummaryProps) {
  return (
    <Card>
      <h3 style={{ marginBottom: 8 }}>
        ✅ Recommended Fabric: <strong>{recommendedFabric}</strong>
      </h3>

      {reasons.length > 0 && (
        <>
          <p style={{ fontWeight: 600, marginTop: 8 }}>Why?</p>
          <ul>
            {reasons.map((r, index) => (
              <li key={`${r.id}-${index}`}>{r.text}</li>
            ))}
          </ul>
        </>
      )}

      <div style={{ marginTop: 12 }}>
        <p style={{ fontSize: 14, marginBottom: 4 }}>
          Confidence: {confidence}%
        </p>
        <ProgressBar value={Math.round(confidence / 10)} />
      </div>
    </Card>
  );
}
