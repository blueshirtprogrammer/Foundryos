import Link from "next/link";
import { connectorLinks, deploymentTargets, companyTemplates } from "@/lib/catalog";

const commandLinks = [
  ["Runtime Status", "/api/runtime/status", "Runtime readiness, harness status, and next actions."],
  ["Harness Registry", "/api/harnesses", "OpenAgent, MoltClaw, Orgo, Paperclip, and distribution doctrine."],
  ["Cloud Control Plane", "/cloud", "Tenant control plane and hosted company runtime plan."],
  ["War Room", "/war-room", "Cash, MRR, installs, leases, and execution bottlenecks."],
  ["MoltClaw", "/moltclaw", "Department extension for HighLevel-native execution."],
  ["Distribution", "/distribution", "Docker, npm, AWS, GHL, Product Hunt, and affiliates."],
  ["Settings", "/settings", "Autopilot layers, licence heartbeat, and approval chain."]
] as const;

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <div className="badge">FOUNDRYOS™ / Clean Repo Core</div>
          <h1>Deploy AI companies, not AI assistants.</h1>
          <p>
            This is the clean root of FoundryOS: the company brain, harness registry, runtime doctrine,
            and deployment-ready shell for OpenAgent, MoltClaw, Orgo, Paperclip, and commercial distribution.
          </p>
          <div className="card">
            <h2>Company templates</h2>
            <div className="grid">
              {companyTemplates.map((template) => (
                <div className="step" key={template.slug}>
                  <div className="num">✓</div>
                  <div>
                    <strong>{template.name}</strong><br />
                    <span className="small">{template.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="card grid">
          <h2>Command surfaces</h2>
          {commandLinks.map(([label, href, description], i) => (
            <Link href={href} key={href}>
              <button className={i === 0 ? undefined : "secondary"} style={{ width: "100%", textAlign: "left" }}>
                {label}<br />
                <span className="small">{description}</span>
              </button>
            </Link>
          ))}
        </aside>
      </section>

      <section className="grid2" style={{ marginTop: 24 }}>
        <div className="card">
          <h2>Connector cockpit</h2>
          <p>Open exact provider pages where users create keys or authenticate. Clean repo, clean root, clean deploy path.</p>
          <div className="grid">
            {connectorLinks.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noreferrer">
                <button className="secondary" style={{ width: "100%" }}>
                  {c.name} → {c.purpose}
                </button>
              </a>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Deployment targets</h2>
          <p>Clean repo means Vercel and Fly can deploy from repo root instead of nested project directories.</p>
          <div className="grid">
            {deploymentTargets.map((target) => (
              <div key={target.slug} className="step">
                <div className="num">→</div>
                <div>
                  <strong>{target.name}</strong><br />
                  <span className="small">{target.command}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
