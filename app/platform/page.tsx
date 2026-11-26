import type { Metadata } from "next";
import Link from "next/link";
import { LockWorkflowIllustration } from "@/components/LockWorkflowIllustration";
import { RateDashboardIllustration } from "@/components/RateDashboardIllustration";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Ratesboard platform overview: rate-sheet ingestion, pricing rules, channels, lock desk workflows, APIs, and audit.",
};

const pillars = [
  {
    title: "Ingest & version rate sheets",
    body: "Load investor and proprietary sheets, attach effective windows, and roll forward with clear version history. Retire outdated sheets without orphan quotes.",
  },
  {
    title: "Price with rules, not spreadsheets",
    body: "Model LLPAs, caps, state overlays, and product eligibility in one rules layer. Changes publish atomically to all connected channels.",
  },
  {
    title: "Operate retail and wholesale",
    body: "Configure retail, wholesale, and broker paths with comp plans and overlays while sharing the same underlying price stack.",
  },
  {
    title: "Run the lock desk",
    body: "Queue lock requests, apply desk policies, and confirm locks with an auditable record for secondary and capital markets.",
  },
  {
    title: "Protect sensitive economics",
    body: "Margin and profitability analytics remain in desk and capital-markets roles — never surfaced in LO or broker-facing views.",
  },
  {
    title: "Connect via APIs",
    body: "Expose pricing and lock operations to your LOS, broker portal, or custom apps with a consistent contract.",
  },
];

const workflow = [
  {
    title: "Publish sheet",
    body: "Capital markets loads or approves a new sheet version with an effective timestamp.",
  },
  {
    title: "Quote in channel",
    body: "Retail, wholesale, or API consumers price loans against the active ruleset.",
  },
  {
    title: "Request lock",
    body: "Originators submit lock requests; desk sees economics required for a decision.",
  },
  {
    title: "Confirm & audit",
    body: "Confirmed locks and adjustments are stored for reporting and downstream systems.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Platform</h1>
          <p>
            Ratesboard is a mortgage pricing engine built for operational reality: multiple channels,
            changing sheets, desk approvals, and strict separation between customer-facing rates and
            internal margin.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container platform-split">
          <div>
            <p className="section__eyebrow">Pricing core</p>
            <h2>One engine, every channel</h2>
            <p className="section__intro">
              The same calculation path powers your retail LO tools, broker portal, and lock desk —
              so “what we quoted” and “what we locked” stay aligned.
            </p>
            <div className="feature-grid">
              {pillars.slice(0, 3).map((item) => (
                <article key={item.title} className="feature-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <RateDashboardIllustration />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container platform-split">
          <LockWorkflowIllustration />
          <div>
            <p className="section__eyebrow">Lock & governance</p>
            <h2>Desk workflows with clear boundaries</h2>
            <p className="section__intro">
              Lock desks need more than a rate — they need policy, margin context, and a trail.
              Ratesboard keeps those tools in the right hands.
            </p>
            <div className="feature-grid">
              {pillars.slice(3).map((item) => (
                <article key={item.title} className="feature-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section__eyebrow">How it fits together</p>
          <h2>From sheet publish to confirmed lock</h2>
          <div className="workflow-steps" style={{ marginTop: "2rem", maxWidth: "40rem" }}>
            {workflow.map((step, index) => (
              <div key={step.title} className="workflow-step">
                <span className="workflow-step__num">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "2.5rem" }}>
            <Link href="/contact" className="btn btn--primary">
              Request a demo
            </Link>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--secondary" style={{ marginLeft: "0.5rem" }}>
              Talk to us
            </a>
          </p>
        </div>
      </section>
    </>
  );
}