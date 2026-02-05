export const FABRICS = {
  linen: {
    name: "Linen",
    baseGsm: 160,
    baseCost: 260,
    baseBreathability: 9,
    sustainabilityScore: 9,
  },
  cotton: {
    name: "Cotton",
    baseGsm: 140,
    baseCost: 220,
    baseBreathability: 7,
    sustainabilityScore: 6,
  },
} as const;


export type FabricId = keyof typeof FABRICS;
