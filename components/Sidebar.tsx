"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BONUS_AFFILIATE_URL, GENERAL_AFFILIATE_URL } from "./affiliateLinks";

export const mainSections: ReadonlyArray<readonly [string, string]> = [
  ["national-casino-new-zealand", "National Casino New Zealand"],
  ["advantages-and-disadvantages", "Advantages and Disadvantages"],
  ["how-to-register-and-log-in", "How to Register and Log In"],
  ["verification-process", "Verification Process"],
  ["national-casino-mobile-app", "National Casino Mobile App"],
  ["how-to-download-the-app", "How to Download the National Casino App"],
  ["promotions-and-bonuses", "National Casino Promotions & Bonuses"],
  ["vip-programme", "VIP Programme"],
  ["vip-levels-and-rewards", "VIP Levels and Rewards"],
  ["game-tournaments", "National Casino Game Tournaments"],
  ["online-slots", "Online Slots"],
  ["table-games", "National Casino Table Games"],
  ["live-games", "Live Games"],
  ["license-and-regulations", "License & Local iGaming Regulations"],
  ["deposits-and-withdrawals", "Deposits & Withdrawals"],
  ["customer-support", "Customer Support"],
  ["faqs", "FAQs"],
  ["feedback-from-players", "Feedback from Players"],
  ["national-casino-grade", "National Casino Grade"],
  ["summary", "Summary"],
];

type BrandMenuIconName =
  | "games"
  | "dealers"
  | "promotions"
  | "tournaments"
  | "hall"
  | "vip";

const brandMenuItems: Array<{
  badge?: string;
  icon: BrandMenuIconName;
  label: string;
}> = [
  { icon: "games", label: "Games" },
  { icon: "dealers", label: "Live dealers" },
  { icon: "promotions", label: "Promotions", badge: "14" },
  { icon: "tournaments", label: "Tournaments", badge: "3" },
  { icon: "hall", label: "Hall of fame" },
  { icon: "vip", label: "VIP" },
];

function BrandMenuIcon({ name }: { name: BrandMenuIconName }) {
  const iconClass = {
    games: "nc-puzzle",
    dealers: "nc-dealer",
    promotions: "nc-horn",
    tournaments: "nc-tournament",
    hall: "nc-wreath",
    vip: "nc-vip",
  }[name];

  return <span aria-hidden="true" className={`brand-menu__icon brand-menu__icon--font ${iconClass}`} />;
}

function BrandSidebarMenu() {
  return (
    <div className="brand-menu">
      <div className="brand-menu__promos">
        <a className="brand-menu__promo" href={GENERAL_AFFILIATE_URL} rel="sponsored">
          <span className="brand-menu__promo-art brand-menu__promo-art--wheel" aria-hidden="true">
            <Image alt="" className="brand-menu__wheel-frame" height={70} src="/sidebar/fortune-wheel-frame.webp" width={70} />
            <span className="brand-menu__wheel-rotor">
              <Image alt="" className="brand-menu__wheel" height={65} src="/sidebar/fortune-wheel.webp" width={65} />
            </span>
          </span>
          <strong>Fortune wheel</strong>
        </a>
        <a className="brand-menu__promo" href={GENERAL_AFFILIATE_URL} rel="sponsored">
          <span className="brand-menu__promo-art brand-menu__promo-art--missions" aria-hidden="true">
            <Image alt="" height={46} src="/sidebar/missions.svg" width={46} />
          </span>
          <strong>Missions</strong>
        </a>
      </div>

      <nav className="brand-menu__navigation" aria-label="National Casino platform navigation">
        <ul>
          {brandMenuItems.map((item) => (
            <li key={item.label}>
              <a
                className="brand-menu__item"
                href={item.icon === "promotions" ? BONUS_AFFILIATE_URL : GENERAL_AFFILIATE_URL}
                rel="sponsored"
              >
                <BrandMenuIcon name={item.icon} />
                <span>{item.label}</span>
                {item.badge ? <span className="brand-menu__badge">{item.badge}</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a className="brand-menu__application" href={GENERAL_AFFILIATE_URL} rel="sponsored">
        <div>
          <strong>Application</strong>
          <p>Download our app!</p>
        </div>
        <div className="brand-menu__application-media" aria-hidden="true">
          <Image alt="" height={332} src="/sidebar/application.png" width={284} />
        </div>
      </a>
    </div>
  );
}

function SectionLinks({
  active,
  onNavigate,
  sections,
}: {
  active: string;
  onNavigate: (id: string) => void;
  sections: ReadonlyArray<readonly [string, string]>;
}) {
  const navigateToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    window.history.pushState(null, "", `#${id}`);
    onNavigate(id);

    window.requestAnimationFrame(() => {
      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <ul className="section-links">
      {sections.map(([id, label]) => (
        <li key={id}>
          <a
            className={active === id ? "is-active" : ""}
            href={`#${id}`}
            onClick={(event) => navigateToSection(event, id)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Sidebar({
  label = "Main page sections",
  sections = mainSections,
}: {
  label?: string;
  sections?: ReadonlyArray<readonly [string, string]>;
}) {
  const [active, setActive] = useState(sections[0]?.[0] ?? "");
  const [desktopOpen, setDesktopOpen] = useState(true);

  useEffect(() => {
    const sectionElements = sections
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;
      const activationLine = 220;
      let current = sectionElements[0]?.id ?? "";

      for (const section of sectionElements) {
        if (section.getBoundingClientRect().top <= activationLine) {
          current = section.id;
        } else {
          break;
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1]?.[0] ?? current;
      }

      setActive(current);
    };

    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [sections]);

  const handleNavigate = (id: string) => {
    setActive(id);
    document.querySelector<HTMLDetailsElement>(".mobile-section-nav")?.removeAttribute("open");
  };

  return (
    <>
      <aside className="sidebar" aria-label={label}>
        <BrandSidebarMenu />
        <details
          className="sidebar__navigation"
          onToggle={(event) => setDesktopOpen(event.currentTarget.open)}
          open={desktopOpen}
        >
          <summary>Navigation</summary>
          <SectionLinks active={active} onNavigate={handleNavigate} sections={sections} />
        </details>
      </aside>

      <details className="mobile-section-nav">
        <summary>Navigation</summary>
        <SectionLinks active={active} onNavigate={handleNavigate} sections={sections} />
      </details>
    </>
  );
}
