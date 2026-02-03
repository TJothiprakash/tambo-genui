"use client";

import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";
import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";
import { InteractableFabricOptionCard } from "@/components/fabric/InteractableFabricOptionCard";

/**
 * Chat page with GenUI (left) and persistent interactables (right)
 */
export default function Home() {
  const mcpServers = useMcpServers();

  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      components={components}
      tools={tools}
      tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
      mcpServers={mcpServers}
    >
      <div className="h-screen flex">
        {/* LEFT — GenUI / Chat (65%) */}
        <div className="w-[65%] border-r border-gray-200">
          <MessageThreadFull />
        </div>

        {/* RIGHT — Persistent Interactables (35%) */}
        <div className="w-[35%] bg-gray-50 p-4 overflow-y-auto">
          <InteractableFabricOptionCard
            id="linen"
            name="Linen"
            gsm={160}
            costPerMeter={260}
            breathability={9}
            sustainabilityScore={9}
            selected={false}
          />

          <InteractableFabricOptionCard
            id="cotton"
            name="Cotton"
            gsm={140}
            costPerMeter={220}
            breathability={7}
            sustainabilityScore={6}
            selected={false}
          />
        </div>
      </div>
    </TamboProvider>
  );
}
