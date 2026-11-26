import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Ratesboard terms of use placeholder.",
};

export default function TermsPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Terms of use</h1>
          <p>Placeholder terms for the Ratesboard marketing website.</p>
        </div>
      </header>

      <section className="container prose">
        <p>
          This marketing site is provided for informational purposes about Ratesboard. Product terms,
          service agreements, and SLAs are negotiated separately with customers.
        </p>
        <h2>Illustrative content</h2>
        <p>
          Rates, prices, and workflow examples shown on this site are illustrative only. They do not
          represent live market data or offers of credit.
        </p>
        <h2>Questions</h2>
        <p>
          For legal or contractual questions, contact us via the{" "}
          <a href="/contact">contact page</a>.
        </p>
      </section>
    </>
  );
}