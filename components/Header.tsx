"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { GENERAL_AFFILIATE_URL } from "./affiliateLinks";
import { Brand } from "./Brand";

const pages = [
  { href: "/index.html", label: "Startseite" },
  { href: "/bonuses.html", label: "Boni" },
  { href: "/app.html", label: "App" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activePath = pathname === "/" ? "/index.html" : pathname.endsWith(".html") ? pathname : `${pathname}.html`;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* A plain anchor is required because deployment uses standalone HTML files. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="site-header__brand-link" href="/index.html" aria-label="National casino main page">
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {pages.map((page, index) => (
            <Fragment key={page.href}>
              <a
                aria-current={activePath === page.href ? "page" : undefined}
                className={activePath === page.href ? "desktop-nav__link is-active" : "desktop-nav__link"}
                href={page.href}
              >
                {page.label}
              </a>
              {index < pages.length - 1 ? (
                <span className="desktop-nav__separator" aria-hidden="true">
                  <span />
                </span>
              ) : null}
            </Fragment>
          ))}
        </nav>

        <div className="header-actions">
          <a className="button button--secondary" href={GENERAL_AFFILIATE_URL} rel="sponsored">
            Anmelden
          </a>
          <a className="button button--primary" href={GENERAL_AFFILIATE_URL} rel="sponsored">
            Registrieren
          </a>
          <div className="location" aria-label="Location: Germany">
            <span className="location__flag" aria-hidden="true">
              <Image alt="" height={36} src="/brand/flag-de.svg" width={36} />
            </span>
            <span>DE</span>
          </div>
        </div>

        <button
          aria-controls="mobile-primary-nav"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <nav className="mobile-primary-nav" id="mobile-primary-nav" aria-label="Mobile primary navigation">
          {pages.map((page) => (
            <a
              aria-current={activePath === page.href ? "page" : undefined}
              className={activePath === page.href ? "is-active" : undefined}
              href={page.href}
              key={page.href}
              onClick={() => setOpen(false)}
            >
              {page.label}
            </a>
          ))}
          <div className="mobile-primary-nav__actions">
            <a className="button button--secondary" href={GENERAL_AFFILIATE_URL} rel="sponsored">Anmelden</a>
            <a className="button button--primary" href={GENERAL_AFFILIATE_URL} rel="sponsored">Registrieren</a>
            <div className="location" aria-label="Location: Germany"><span className="location__flag" aria-hidden="true"><Image alt="" height={36} src="/brand/flag-de.svg" width={36} /></span><span>DE</span></div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
