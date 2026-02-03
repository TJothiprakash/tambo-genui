export function ProgressBar({ value }: { value: number }) {
  return (
    <div style={{ marginTop: 6 }}>
      <div
        style={{
          height: 8,
          background: "#e5e7eb",
          borderRadius: 4,
        }}
      >
        <div
          style={{
            width: `${value * 10}%`,
            height: "100%",
            background: "#10b981",
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
}
