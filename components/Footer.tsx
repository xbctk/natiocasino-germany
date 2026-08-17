import Image from "next/image";
import Link from "next/link";
import { GENERAL_AFFILIATE_URL } from "./affiliateLinks";

const footerLinks = [
  ["VERANTWORTUNGSVOLLES SPIELEN", "/responsible-gaming"],
  ["ALLGEMEINE GESCHÄFTSBEDINGUNGEN", GENERAL_AFFILIATE_URL],
  ["DATENSCHUTRICHTLINIE", GENERAL_AFFILIATE_URL],
  ["BONUSBEDINGUNGEN", GENERAL_AFFILIATE_URL],
  ["FAQ", GENERAL_AFFILIATE_URL],
  ["ÜBER UNS", GENERAL_AFFILIATE_URL],
  ["KONTAKT", GENERAL_AFFILIATE_URL],
] as const;

export function Footer() {
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
            Diese Website wird als Zahlungsabwickler verwaltet und betrieben von TechSolutions (CY) Group Limited
            (Registrierungsnummer HE 377018) mit eingetragenem Sitz in Parthenonos 5, Apartment 103, 2020, Nikosia,
            Zypern und von der TechSolutions Group N.V. (Registrierungsnummer 144920 (0)) als Lizenzinhaber
            (8048/JAZ2017-067) mit der Adresse in Dr. H. Fergusonweg 1, Curacao betrieben.
          </p>
          <p>Das Glücksspiel kann süchtig machen. Spielen Sie verantwortungsvoll.</p>
        </div>
        <div className="site-footer__validator">
          <Image alt="GCB certification — cert.gcb.cw" height={180} src="/footer/gcb-validator.png" width={326} />
        </div>
      </div>
    </footer>
  );
}
