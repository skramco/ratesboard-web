import Link from "next/link";
import { RateDashboardIllustration } from "@/components/RateDashboardIllustration";
import { CONTACT_EMAIL } from "@/lib/constants";

const capabilities = [
  {
    title: "Rate-sheet ingestion",
    body: "Import investor and internal sheets with versioning, effective dates, and channel-specific overlays — one source of truth for pricing.",
  },
  {
    title: "Eligibility & LLPAs",
    body: "Encode credit, LTV, occupancy, and product rules. Apply adjustments consistently so every quote reflects the same policy.",
  },
  {
    title: "Retail & wholesale",
    body: "Run retail and wholesale channels from one engine, with broker compensation and tiering handled in line with your program rules.",
  },
  {
    title: "Lock desk workflows",
    body: "Route lock requests, confirmations, and exceptions through desks configured for your capital markets and secondary processes.",
  },
  {
    title: "Margin visibility",
    body: "Profitability and margin views stay with the lock desk and capital markets — not exposed on the loan officer or broker side.",
  },
  {
    title: "Audit trail",
    body: "Every price, adjustment, and lock decision is recorded for compliance, secondary, and post-close review.",
  },
  {
    title: "LOS & portal APIs",
    body: "Integrate with your loan origination system or borrower portal so pricing matches everywhere you quote.",
  },
  {
    title: "AI-ready platform",
    body: "Built for automation and intelligent workflows as part of the same product family as Owen AI — ready when your roadmap is.",
  },
];

const audiences = [
  "Capital markets & secondary",
  "Lock desks",
  "Wholesale lending",
  "Retail lending",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="hero__eyebrow">Enterprise mortgage pricing</span>
            <h1>Fast, accurate, consistent pricing across every screen and channel</h1>
            <p className="hero__lead">
              Ratesboard is an enterprise-grade mortgage pricing engine (PPE) for lenders, brokers,
              and lock desks. One engine for rate sheets, rules, channels, and locks — so your
              teams quote with confidence.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Request a demo
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--secondary">
                Talk to us
              </a>
            </div>
            <p className="hero__note">
              Built by a team with 30+ years of mortgage industry and mortgage technology experience.
            </p>
          </div>
          <RateDashboardIllustration />
        </div>
      </section>

      <section className="section section--muted" id="capabilities">
        <div className="container">
          <p className="section__eyebrow">Capabilities</p>
          <h2>Everything your pricing stack needs in one platform</h2>
          <p className="section__intro">
            From sheet ingestion through lock confirmation, Ratesboard keeps pricing aligned across
            retail, wholesale, and desk workflows — without pushing margin data to the wrong audience.
          </p>
          <div className="feature-grid feature-grid--3">
            {capabilities.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="pill-row">
            {audiences.map((label) => (
              <span key={label} className="pill">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section__eyebrow">Why Ratesboard</p>
          <h2>Designed for lenders who cannot afford pricing drift</h2>
          <p className="section__intro">
            When rate sheets, LLPAs, and channel rules live in different places, quotes diverge.
            Ratesboard centralizes the logic so the number on the lock desk matches the broker portal
            and the retail LO screen.
          </p>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Consistent by design</h3>
              <p>
                Single rule sets and sheet versions propagate to every integration point — reducing
                rework and disputes between channels.
              </p>
            </article>
            <article className="feature-card">
              <h3>Desk-grade controls</h3>
              <p>
                Separate what loan officers and brokers see from what capital markets needs for
                margin, profitability, and hedge alignment.
              </p>
            </article>
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/platform" className="btn btn--secondary">
              Explore the platform
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container cta-band">
          <h2>See Ratesboard on your programs</h2>
          <p>
            Walk through sheet ingestion, channel rules, and lock workflows with our team — tailored
            to how your shop prices today.
          </p>
          <div className="cta-band__actions">
            <Link href="/contact" className="btn btn--primary">
              Request a demo
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--ghost-light">
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}