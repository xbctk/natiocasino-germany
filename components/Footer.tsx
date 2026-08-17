import Image from "next/image";
import Link from "next/link";
import { GENERAL_AFFILIATE_URL } from "./affiliateLinks";

const footerLinks = [
  ["Responsible Gaming", "/responsible-gaming"],
  ["Terms and Conditions", GENERAL_AFFILIATE_URL],
  ["Privacy policy", GENERAL_AFFILIATE_URL],
  ["Bonuses - General Terms", GENERAL_AFFILIATE_URL],
  ["FAQ", GENERAL_AFFILIATE_URL],
  ["About Us", GENERAL_AFFILIATE_URL],
  ["Contact Us", GENERAL_AFFILIATE_URL],
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__ornament" aria-hidden="true">
        <span />
      </div>

      <nav className="site-footer__navigation" aria-label="Footer navigation">
        <ul>
          {footerLinks.map(([label, href]) => (
            <li key={label}>
              {href.startsWith("/") ? <Link href={href}>{label}</Link> : <a href={href} rel="sponsored">{label}</a>}
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-footer__payments" aria-label="Accepted payment methods">
        <div className="site-footer__payment-card">
          <Image alt="Visa" height={35} src="/footer/visa.svg" width={92} />
        </div>
        <div className="site-footer__payment-card">
          <Image alt="Mastercard" height={42} src="/footer/mastercard.svg" width={64} />
        </div>
      </div>

      <div className="site-footer__responsible">
        <span className="site-footer__age" aria-label="Adults only, 18 plus">18+</span>
        <div className="site-footer__legal-copy">
          <p>
            This website is managed and operated by TechSolutions (CY) Group Limited (reg.number HE 377018) with
            registered office located at Parthenonos 5, Flat 103, 2020, Nicosia, Cyprus as a Billing Agent and
            operated by TechSolutions Group N.V. (registration number 144920 (0)) as a licence holder
            (8048/JAZ2017-067) with address at Dr. H. Fergusonweg 1, Curacao.
          </p>
          <p>Gambling can be addictive. Play responsibly.</p>
          <p>© {currentYear} National Casino New Zealand.</p>
        </div>
        <div className="site-footer__validator">
          <Image alt="GCB certification — cert.gcb.cw" height={180} src="/footer/gcb-validator.png" width={326} />
        </div>
      </div>
    </footer>
  );
}
