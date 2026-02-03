import { Card } from "../ui/card";

type Fabric = {
  id: string;
  name: string;
  description: string;
};

export function FabricFeatureListCard({
  fabrics = [],
}: {
  fabrics?: Fabric[];
}) {
  return (
    <Card>
      <h3>Available Fabrics</h3>

      {fabrics.length === 0 ? (
        <p style={{ color: "#6b7280" }}>No fabrics available.</p>
      ) : (
        <ul>
          {fabrics.map((f, index) => (
            <li key={`${f.id}-${index}`}>
              <strong>{f.name}</strong> — {f.description}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
