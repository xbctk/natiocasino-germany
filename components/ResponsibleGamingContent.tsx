import Image from "next/image";
import type { ReactNode } from "react";

export const responsibleGamingSections: ReadonlyArray<readonly [string, string]> = [
  ["responsible-gaming-overview", "Responsible Gaming"],
  ["licensing-security", "Licensing & Security"],
  ["self-exclusion-limits", "Self-Exclusion & Limits"],
  ["responsible-gambling-help", "Help in New Zealand"],
];

function Section({ children, className = "", id, title }: { children: ReactNode; className?: string; id: string; title: string }) {
  return (
    <section className={`content-section responsible-section ${className}`.trim()} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

const playerControls = [
  ["Loss", "Set the maximum amount you are prepared to lose."],
  ["Deposit", "Restrict deposits before play begins; cryptocurrency is excluded on the published page."],
  ["Gambling Session", "Limit the duration of casino play or sports betting."],
  ["Wager", "Set a boundary for the amount placed in bets."],
] as const;

function CardsTitle({ children }: { children: ReactNode }) {
  return (
    <span className="responsible-card-title">
      <Image alt="" aria-hidden="true" height={180} src="/content-icons/cards.png" width={188} />
      <span>{children}</span>
    </span>
  );
}

const supportResources = [
  {
    description: "The brand’s public guidance on self-exclusion and account limits.",
    label: "National Casino Responsible Game",
  },
  {
    description: "Guidance, warning signs and local support services across Aotearoa.",
    label: "Safer Gambling Aotearoa",
  },
  {
    description: "Free and confidential 24/7 support: 0800 654 655 or free text 8006.",
    label: "Gambling Helpline",
  },
  {
    description: "Free counselling and support for players and whānau: 0800 664 262.",
    label: "PGF Services",
  },
] as const;

export function ResponsibleGamingContent() {
  return (
    <div className="main-content responsible-gaming-content">
      <Section className="responsible-overview" id="responsible-gaming-overview" title="Responsible Gaming at National Casino New Zealand">
        <div className="responsible-overview__layout">
          <p className="responsible-overview__lead">Casino games and sports betting should be paid entertainment, not a way to earn income or recover losses.</p>
          <ul className="responsible-principles" aria-label="Responsible gaming principles">
            <li className="info-card"><strong><CardsTitle>Set boundaries first</CardsTitle></strong><span>Set a budget and a finishing time before playing.</span></li>
            <li className="info-card"><strong><CardsTitle>Never chase losses</CardsTitle></strong><span>Do not borrow to gamble or increase bets to recover money.</span></li>
            <li className="info-card"><strong><CardsTitle>Notice the impact</CardsTitle></strong><span>Stop if play affects your finances, work, health or relationships.</span></li>
          </ul>
        </div>
      </Section>

      <Section id="licensing-security" title="Licensing, Ownership & Account Security">
        <p className="license-intro">National Casino’s published licence information identifies TechSolutions Group N.V. as the operator and licence holder. This is an international Curaçao licence, not a New Zealand local licence. Check the current certificate on the brand website before registering because regulatory status and displayed details can change.</p>
        <div className="license-feature">
          <Image className="license-feature__image" src="/content/responsible-gaming/license-security.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
          <div className="license-feature__overlay" aria-hidden="true" />
          <div className="license-feature__content">
            <dl className="license-facts">
              <div className="info-card"><dt><CardsTitle>Operator & licence holder</CardsTitle></dt><dd>TechSolutions Group N.V.</dd></div>
              <div className="info-card"><dt><CardsTitle>Company number</CardsTitle></dt><dd>144920</dd></div>
              <div className="info-card"><dt><CardsTitle>Licence</CardsTitle></dt><dd>OGL/2024/590/0758</dd></div>
              <div className="info-card"><dt><CardsTitle>Regulator</CardsTitle></dt><dd>Curaçao Gaming Authority</dd></div>
            </dl>
          </div>
        </div>
        <div className="security-grid">
          <article className="responsible-info-card">
            <h3>SSL / Security</h3>
            <p>The website is delivered over HTTPS/TLS, commonly called SSL, to encrypt data in transit. Encryption does not remove gambling risk: use a unique password, confirm the website address and never share login details.</p>
          </article>
          <article className="responsible-info-card">
            <h3>KYC / AML</h3>
            <p>KYC and AML reviews may require proof of identity, age, address, payment ownership or source of funds. Withdrawals may be paused until verification is complete.</p>
          </article>
        </div>
      </Section>

      <Section id="self-exclusion-limits" title="Self-Exclusion, Limits & Reality Checks">
        <div className="self-exclusion-intro">
          <span className="responsible-eyebrow">24/7 Live Chat</span>
          <h3>Request self-exclusion</h3>
          <p>The original Responsible Game page directs customers to 24/7 Live Chat to request self-exclusion. If control is slipping, stop depositing, request self-exclusion and seek independent help immediately.</p>
        </div>
        <div className="self-exclusion-feature">
          <Image className="self-exclusion-section__image" src="/content/responsible-gaming/self-exclusion-wide.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
          <div className="self-exclusion-section__overlay" aria-hidden="true" />
          <div className="self-exclusion-section__content">
            <h3 className="responsible-subheading">Available account limits</h3>
            <ul className="player-control-list">
              {playerControls.map(([name, description]) => (
                <li className="info-card" key={name}><strong><CardsTitle>{name}</CardsTitle></strong><span>{description}</span></li>
              ))}
            </ul>
            <p>Choose limits before casino play or sports betting begins; do not increase them after a loss.</p>
          </div>
        </div>
        <aside className="reality-check-panel" aria-labelledby="reality-check-title">
          <h3 id="reality-check-title">Reality checks</h3>
          <p>The public page does not separately confirm an automated reality-check feature. Use the Gambling Session limit, device timers and account transaction history as manual reality checks, and ask Live Chat whether periodic pop-up reminders are available for your account.</p>
          <p>A reminder should prompt you to review elapsed time, deposits, wagers and net spend before continuing.</p>
        </aside>
      </Section>

      <Section id="responsible-gambling-help" title="Responsible Gambling Help in New Zealand">
        <p>Independent support is free and confidential. These resources are suitable for players and for whānau concerned about someone else’s gambling:</p>
        <ul className="support-link-list">
          {supportResources.map((resource) => (
            <li key={resource.label}>
              <span><strong>{resource.label}</strong><small>{resource.description}</small></span>
            </li>
          ))}
        </ul>
        <div className="legal-age-warning">
          <span aria-hidden="true">18+</span>
          <p><strong>Adults only.</strong> Gambling is not appropriate for minors. Do not register or play unless you meet both the platform’s minimum age and the legal age that applies where you are located. If gambling is no longer enjoyable or affordable, stop now and contact the Gambling Helpline.</p>
        </div>
      </Section>
    </div>
  );
}
