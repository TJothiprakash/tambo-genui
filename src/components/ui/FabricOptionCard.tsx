"use client";

import { useRef } from "react";

type FabricOptionCardProps = {
  id: string;
  name: string;
  gsm: number;
  costPerMeter: number;
  breathability: number;
  sustainabilityScore: number;
  selected?: boolean;

  // injected by withInteractable
  onUpdate?: (updates: Partial<FabricOptionCardProps>) => void;
};

/* ---------- Domain constants ---------- */

const GSM_MIN = 80;
const GSM_MAX = 240;

const lerp = (x: number, x1: number, y1: number, x2: number, y2: number) =>
  y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);

const costFromGsm = (gsm: number, baseGsm: number, baseCost: number) =>
  Math.round(lerp(gsm, GSM_MIN, baseCost * 0.7, GSM_MAX, baseCost * 1.4));

const breathabilityFromGsm = (gsm: number, baseBreathability: number) =>
  Math.round(
    lerp(gsm, GSM_MIN, Math.min(10, baseBreathability + 2), GSM_MAX, 2),
  );

/* ---------- Component ---------- */

export function FabricOptionCard({
  id,
  name,
  gsm,
  costPerMeter,
  breathability,
  sustainabilityScore,
  selected = false,
  onUpdate,
}: FabricOptionCardProps) {
  /**
   * TRUE initial values — stored once.
   * This NEVER changes across renders.
   */
  const initialRef = useRef({
    gsm,
    costPerMeter,
    breathability,
    sustainabilityScore,
  });

  return (
    <div
      style={{
        border: selected ? "3px solid #16a34a" : "1px solid #ddd",
        background: selected ? "#f0fdf4" : "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {selected && (
          <span style={{ color: "#16a34a", fontWeight: 600 }}>✓ Selected</span>
        )}
      </div>

      {/* GSM Slider */}
      <div style={{ marginTop: 12 }}>
        <label style={{ fontWeight: 600 }}>
          GSM: <span>{gsm}</span>
        </label>
        <input
          type="range"
          min={GSM_MIN}
          max={GSM_MAX}
          step={10}
          value={gsm}
          style={{ width: "100%" }}
          onChange={(e) => {
            const newGsm = Number(e.target.value);

            onUpdate?.({
              gsm: newGsm,
              costPerMeter: costFromGsm(
                newGsm,
                initialRef.current.gsm,
                initialRef.current.costPerMeter,
              ),
              breathability: breathabilityFromGsm(
                newGsm,
                initialRef.current.breathability,
              ),
            });
          }}
        />
      </div>

      {/* Metrics */}
      <div style={{ marginTop: 12, fontSize: 14 }}>
        <p>Cost / meter: ₹{costPerMeter}</p>
        <p>Breathability: {breathability}/10</p>
        <p>Sustainability: {sustainabilityScore}/10</p>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button
          onClick={() => onUpdate?.({ selected: !selected })}
          style={{
            flex: 1,
            padding: "6px 8px",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: selected ? "#fee2e2" : "#dcfce7",
            cursor: "pointer",
          }}
        >
          {selected ? "Deselect" : "Select"}
        </button>

        <button
          onClick={() =>
            onUpdate?.({
              ...initialRef.current,
              selected: false,
            })
          }
          style={{
            padding: "6px 8px",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: "#f3f4f6",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
