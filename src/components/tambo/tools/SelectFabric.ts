import { z } from "zod";
import { FABRICS, type FabricId } from "../../fabric/FabricRegistry";

// derive enum values from FABRICS (single source of truth)
const fabricIds = Object.keys(FABRICS) as [FabricId, ...FabricId[]];

export const selectFabricTool = {
  name: "selectFabric",
  description: "Selects a fabric and loads its base properties",

  inputSchema: z.object({
    fabricId: z.enum(fabricIds),
  }),

  outputSchema: z.object({
    name: z.string(),
    gsm: z.number(),
    costPerMeter: z.number(),
    breathability: z.number(),
    sustainabilityScore: z.number(),
  }),

  tool: ({ fabricId }: { fabricId: FabricId }) => {
    const fabric = FABRICS[fabricId];

    return {
      name: fabric.name,
      gsm: fabric.baseGsm,
      costPerMeter: fabric.baseCost,
      breathability: fabric.baseBreathability,
      sustainabilityScore: fabric.sustainabilityScore,
    };
  },
};
