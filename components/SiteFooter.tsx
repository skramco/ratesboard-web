import Image from "next/image";
import Link from "next/link";
import { KNOWE_URL } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Link href="/" aria-label="Ratesboard home">
          <Image
            src="/brand/ratesboard-wordmark-color.svg"
            alt="Ratesboard"
            width={140}
            height={28}
          />
        </Link>

        <nav className="site-footer__links" aria-label="Footer">
          <Link href="/platform">Platform</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>

        <p className="site-footer__copy">
          ©{" "}
          <a href={KNOWE_URL} target="_blank" rel="noopener noreferrer">
            Knowe LLC
          </a>{" "}
          {year}
        </p>
      </div>
    </footer>
  );
}