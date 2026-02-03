export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        background: "#ffffff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
      }}
    >
      {children}
    </div>
  );
}
