import { NextResponse } from "next/server";

export async function GET() {
  // Mock real-time density data across the stadium
  const densityData = {
    timestamp: new Date().toISOString(),
    zones: [
      { id: "gate-a", name: "Gate A (North)", density: 94, status: "critical" },
      { id: "concourse-c", name: "Concourse C", density: 81, status: "warning" },
      { id: "food-court-south", name: "Food Court (South)", density: 45, status: "normal" },
      { id: "gate-b", name: "Gate B (East)", density: 32, status: "normal" },
    ],
    ai_recommendation: {
      action: "Reroute",
      target: "Gate B",
      reason: "Gate A congestion expected to clear in 15 mins. Diverting 20% flow to Gate B will balance load."
    }
  };

  return NextResponse.json(densityData);
}
