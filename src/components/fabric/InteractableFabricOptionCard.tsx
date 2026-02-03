import { withInteractable } from "@tambo-ai/react";
import { FabricOptionCard } from "../ui/FabricOptionCard";
import { fabricOptionSchema } from "./fabricSchemas";

export const InteractableFabricOptionCard = withInteractable(
  FabricOptionCard,
  {
    componentName: "FabricOptionCard",
    description:
      "An interactive fabric card that allows updating GSM, cost, and selection state for a fabric option.",
    propsSchema: fabricOptionSchema,
  }
);
