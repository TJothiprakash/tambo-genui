import { z } from "zod";

export const fabricOptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  gsm: z.number(),
  costPerMeter: z.number(),
  breathability: z.number().min(1).max(10),
  sustainabilityScore: z.number().min(1).max(10),
  selected: z.boolean().optional(),
});
