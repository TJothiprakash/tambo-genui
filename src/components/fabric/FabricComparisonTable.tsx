import { Card } from "../ui/card";

type Fabric = {
  name: string;
  cost: number;
  gsm: number;
  sustainability: number;
};

export function FabricComparisonTable({
  fabrics = [],
}: {
  fabrics?: Fabric[];
}) {
  return (
    <Card>
      <h3>Fabric Comparison</h3>

      {fabrics.length === 0 ? (
        <p style={{ color: "#6b7280" }}>No fabrics to compare.</p>
      ) : (
        <table width="100%">
          <thead>
            <tr>
              <th>Fabric</th>
              <th>Cost</th>
              <th>GSM</th>
              <th>Sustainability</th>
            </tr>
          </thead>
          <tbody>
            {fabrics.map((f, index) => (
              <tr key={`${f.name}-${index}`}>
                <td>{f.name}</td>
                <td>₹{f.cost}</td>
                <td>{f.gsm}</td>
                <td>{f.sustainability}/10</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
}
