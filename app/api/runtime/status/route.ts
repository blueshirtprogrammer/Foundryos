import { NextResponse } from "next/server";
import { foundryHarnesses } from "@/lib/harnesses";

export async function GET() {
  return NextResponse.json({
    status: "runtime_alpha_ready",
    version: "0.1.0",
    product: "FOUNDRYOS",
    doctrine: "Deploy AI companies, not AI assistants.",
    harnesses: foundryHarnesses.map((harness) => ({
      key: harness.key,
      name: harness.name,
      status: harness.status,
      type: harness.type
    })),
    nextRequiredActions: [
      "Add Cloud control plane pages and tenant APIs.",
      "Connect authorised MoltClaw/HighLevel runtime.",
      "Connect OpenAgent internal operator harness.",
      "Connect Orgo cloud worker harness.",
      "Connect Stripe or entitlement provider.",
      "Deploy clean repo to Vercel and Fly."
    ]
  });
}
