type StatsCardProps = {
  title: string;
  value: string | number;
  description?: string;
};
export function StatsCard({ title, value, description }: StatsCardProps) {
  return (
    <div
      style={{
        padding: 16,
        border: "3px dashed #7c3aed",
        borderRadius: 12,
        background: "#f5f3ff",
        maxWidth: 320,
      }}
    >
      <div style={{ fontSize: 12, color: "#7c3aed" }}>
        🔍 StatsCard component
      </div>

      <p>{title}</p>
      <h2>{value}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}


import { z } from "zod";

export const statsCardSchema = z.object({
  title: z.string(),
  value: z.union([z.string(), z.number()]),
  description: z.string().optional(),
});
