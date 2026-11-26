import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a Ratesboard demo or contact our team.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Request a demo</h1>
          <p>
            Tell us about your pricing stack, channels, and lock desk setup. We&apos;ll schedule a
            walkthrough focused on your workflows — no obligations and no guaranteed outcomes.
          </p>
        </div>
      </header>

      <section className="container prose">
        <div className="contact-card">
          <p>
            Email is the fastest way to reach us today. Share your name, organization, and what
            you&apos;d like to see in a demo.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}?subject=Ratesboard%20demo%20request`} className="btn btn--primary">
            Email {CONTACT_EMAIL}
          </a>
        </div>

        <p style={{ marginTop: "2rem", color: "var(--slate-600)" }}>
          Prefer to explore first?{" "}
          <Link href="/platform">Review the platform overview</Link> or return to the{" "}
          <Link href="/">homepage</Link>.
        </p>
      </section>
    </>
  );
}