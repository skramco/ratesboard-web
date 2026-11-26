import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Ratesboard privacy policy placeholder.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Privacy</h1>
          <p>Placeholder privacy notice for the Ratesboard marketing site.</p>
        </div>
      </header>

      <section className="container prose">
        <p>
          This page is a placeholder while formal privacy terms are finalized. The public marketing
          site does not offer account registration or in-browser form submission at this time.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions related to Ratesboard, reach out through the address on our{" "}
          <a href="/contact">contact page</a>.
        </p>
        <h2>Updates</h2>
        <p>We will publish an updated policy here before collecting personal data through this site.</p>
      </section>
    </>
  );
}