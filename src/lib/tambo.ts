/**
 * @file tambo.ts
 * @description Central configuration file for Tambo components and tools
 *
 * This file serves as the central place to register your Tambo components and tools.
 * It exports arrays that will be used by the TamboProvider.
 *
 * Read more about Tambo at https://tambo.co/docs
 */

import { Graph, graphSchema } from "@/components/tambo/graph";
import { DataCard, dataCardSchema } from "@/components/ui/card-data";
import {
  getCountryPopulations,
  getGlobalPopulationTrend,
} from "@/services/population-stats";
import type { TamboComponent } from "@tambo-ai/react";
import { TamboTool } from "@tambo-ai/react";
import { z } from "zod";
import { StatsCard, statsCardSchema } from "@/components/ui/StatsCard";




import { InteractableFabricOptionCard } from "@/components/fabric/InteractableFabricOptionCard";
import { fabricOptionSchema } from "@/components/fabric/fabricSchemas";
import { FabricFeatureListCard } from "@/components/fabric/FabricFeatureListCard";
import { FabricComparisonTable } from "@/components/fabric/FabricComparisonTable";
import { CostBreakdownCard } from "@/components/fabric/CostBreakdownCard";
import { SustainabilityStatsCard } from "@/components/fabric/SustainabilityStatsCard";
import { DecisionSummaryCard } from "@/components/fabric/DecisionSummaryCard";



/**
 * tools
 *
 * This array contains all the Tambo tools that are registered for use within the application.
 * Each tool is defined with its name, description, and expected props. The tools
 * can be controlled by AI to dynamically fetch data based on user interactions.
 */





const decisionSummarySchema = z.object({
  recommendedFabric: z.string(),
  reasons: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    )
    .optional()
    .default([]),
  confidence: z.number().min(0).max(100).optional().default(0),
});


const fabricFeatureListSchema = z.object({
  fabrics: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
    })
  ).default([]),
});


const fabricComparisonSchema = z.object({
  fabrics: z.array(
    z.object({
      name: z.string(),
      cost: z.number(),
      gsm: z.number(),
      sustainability: z.number(),
    })
  ),
});

const costBreakdownSchema = z.object({
  material: z.number(),
  wastage: z.number(),
  total: z.number(),
});

const sustainabilityStatsSchema = z.object({
  score: z.number().min(0).max(10),
});


export const tools: TamboTool[] = [
  {
    name: "countryPopulation",
    description:
      "A tool to get population statistics by country with advanced filtering options",
    tool: getCountryPopulations,
    inputSchema: z.object({
      continent: z.string().optional(),
      sortBy: z.enum(["population", "growthRate"]).optional(),
      limit: z.number().optional(),
      order: z.enum(["asc", "desc"]).optional(),
    }),
    outputSchema: z.array(
      z.object({
        countryCode: z.string(),
        countryName: z.string(),
        continent: z.enum([
          "Asia",
          "Africa",
          "Europe",
          "North America",
          "South America",
          "Oceania",
        ]),
        population: z.number(),
        year: z.number(),
        growthRate: z.number(),
      }),
    ),
  },
  {
    name: "globalPopulation",
    description:
      "A tool to get global population trends with optional year range filtering",
    tool: getGlobalPopulationTrend,
    inputSchema: z.object({
      startYear: z.number().optional(),
      endYear: z.number().optional(),
    }),
    outputSchema: z.array(
      z.object({
        year: z.number(),
        population: z.number(),
        growthRate: z.number(),
      }),
    ),
  },
  // Add more tools here
];

/**
 * components
 *
 * This array contains all the Tambo components that are registered for use within the application.
 * Each component is defined with its name, description, and expected props. The components
 * can be controlled by AI to dynamically render UI elements based on user interactions.
 */
export const components: TamboComponent[] = [
  {
    name: "Graph",
    description:
      "A component that renders various types of charts (bar, line, pie) using Recharts. Supports customizable data visualization with labels, datasets, and styling options.",
    component: Graph,
    propsSchema: graphSchema,
  },
  {
    name: "DataCard",
    description:
      "A component that displays options as clickable cards with links and summaries with the ability to select multiple items.",
    component: DataCard,
    propsSchema: dataCardSchema,
  },
  {
    name: "StatsCard",
    description:
      "Displays a single important metric such as totals, counts, KPIs, or summary statistics. Best for highlighting key numbers.",
    component: StatsCard,
    propsSchema: statsCardSchema,
  },
  {
  name: "FabricOptionCard",
  description:
    "Displays a fabric option and supports updating properties like GSM, cost, and selection.Interactive fabric option card. Use to present selectable fabrics. Commonly combined with comparison tables, charts, and a decision summary.",
  component: InteractableFabricOptionCard,
  propsSchema: fabricOptionSchema,
},
 {
    name: "FabricFeatureListCard",
    description:
      "Lists available fabric options with short descriptions. Use this when introducing or browsing fabric choices.",
    component: FabricFeatureListCard,
    propsSchema: fabricFeatureListSchema,
  },

  {
    name: "FabricOptionCard",
    description:
      "An interactive fabric card that supports updating GSM, cost, and selection state.",
    component: InteractableFabricOptionCard,
    propsSchema: fabricOptionSchema,
  },

  {
    name: "FabricComparisonTable",
    description:
      "Displays a side-by-side comparison of fabrics based on cost, GSM, and sustainability. Use when the user asks to compare fabrics.Side-by-side comparison of fabrics. Typically used together with fabric cards and charts when evaluating options.",
    component: FabricComparisonTable,
    propsSchema: fabricComparisonSchema,
  },

  {
    name: "CostBreakdownCard",
    description:
      "Shows a breakdown of material cost, wastage percentage, and total production cost.",
    component: CostBreakdownCard,
    propsSchema: costBreakdownSchema,
  },

  {
    name: "SustainabilityStatsCard",
    description:
      "Displays the sustainability score of selected fabrics. Use for eco-friendliness or impact questions.Shows eco impact and sustainability score. Usually paired with fabric cards or charts during eco-focused evaluation",
    component: SustainabilityStatsCard,
    propsSchema: sustainabilityStatsSchema,
  },
  {
  name: "DecisionSummaryCard",
  description:
    "Summarizes the fabric decision by recommending the best fabric with reasons and a confidence score. Final recommendation card. ALWAYS use this component to present conclusions, recommendations, or final decisions instead of plain text.",
  component: DecisionSummaryCard,
  propsSchema: decisionSummarySchema,
},
{
  name: "Graph",
  description:
    "Visualizes fabric data. Use bar for comparisons, line for trends, pie for composition. Often shown alongside cards and a decision summary.",
  component: Graph,
  propsSchema: graphSchema,
}


];

