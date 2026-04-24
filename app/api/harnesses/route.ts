import { NextResponse } from "next/server";
import { foundryHarnesses } from "@/lib/harnesses";
import { recommendHarness, type HarnessTaskType } from "@/lib/harness-router";

const defaultTasks: HarnessTaskType[] = [
  "strategy",
  "coding",
  "crm",
  "browser_gui",
  "distribution"
];

export async function GET() {
  return NextResponse.json({
    status: "configured",
    doctrine:
      "FOUNDRYOS sits above specialised harnesses. PaperAI/Paperclip governs strategy, OpenAgent handles internal operator swarm work, MoltClaw/HighLevel runs revenue and client operations, and Orgo handles cloud computer-use workers.",
    harnesses: foundryHarnesses,
    routing: defaultTasks.map((taskType) => ({
      taskType,
      recommendation: recommendHarness(taskType)
    }))
  });
}
