"use client";

import { useState } from "react";
import { FabricOptionCard } from "../ui/FabricOptionCard";
import { FABRICS, type FabricId } from "../fabric/FabricRegistry";

export function InteractableFabricSelector() {
  // current selected fabric
  const [fabricId, setFabricId] = useState<FabricId>("linen");

  // current fabric data
  const fabric = FABRICS[fabricId];

 const [gsm, setGsm] = useState<number>(fabric.baseGsm);
 const [costPerMeter, setCostPerMeter] = useState<number>(fabric.baseCost);
 const [breathability, setBreathability] = useState<number>(
   fabric.baseBreathability,
 );

  return (
    <div>
      {/* Fabric selector dropdown */}
      <div style={{ marginBottom: 12 }}>
        <label style={{ fontWeight: 600 }}>Fabric</label>
        <select
          value={fabricId}
          onChange={(e) => {
            const nextFabric = e.target.value as FabricId;
            const next = FABRICS[nextFabric];

            setFabricId(nextFabric);
            setGsm(next.baseGsm);
            setCostPerMeter(next.baseCost);
            setBreathability(next.baseBreathability);
          }}
          style={{ width: "100%", padding: 6, marginTop: 4 }}
        >
          {Object.entries(FABRICS).map(([id, f]) => (
            <option key={id} value={id}>
              {f.name}
            </option>
          ))}
        </select>
      </div>

      {/* Single Fabric Card */}
      <FabricOptionCard
        id={fabricId}
        name={fabric.name}
        gsm={gsm}
        costPerMeter={costPerMeter}
        breathability={breathability}
        sustainabilityScore={fabric.sustainabilityScore}
        selected={true}
        onUpdate={(updates) => {
          if (updates.gsm !== undefined) setGsm(updates.gsm);
          if (updates.costPerMeter !== undefined)
            setCostPerMeter(updates.costPerMeter);
          if (updates.breathability !== undefined)
            setBreathability(updates.breathability);
        }}
      />
    </div>
  );
}
