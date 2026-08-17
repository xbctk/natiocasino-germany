"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { GENERAL_AFFILIATE_URL } from "./affiliateLinks";
import { Brand } from "./Brand";

const pages = [
  { href: "/", label: "Main" },
  { href: "/bonuses", label: "Bonuses" },
  { href: "/app", label: "App" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand-link" href="/" aria-label="National casino main page">
          <Brand />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {pages.map((page, index) => (
            <Fragment key={page.href}>
              <Link
                aria-current={pathname === page.href ? "page" : undefined}
                className={pathname === page.href ? "desktop-nav__link is-active" : "desktop-nav__link"}
                href={page.href}
              >
                {page.label}
              </Link>
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
            Log In
          </a>
          <a className="button button--primary" href={GENERAL_AFFILIATE_URL} rel="sponsored">
            Register now
          </a>
          <div className="location" aria-label="Location: New Zealand">
            <span className="location__flag" aria-hidden="true">
              <Image alt="" height={36} src="/brand/flag-nz.svg" width={36} />
            </span>
            <span>NZ</span>
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
            <Link
              aria-current={pathname === page.href ? "page" : undefined}
              className={pathname === page.href ? "is-active" : undefined}
              href={page.href}
              key={page.href}
              onClick={() => setOpen(false)}
            >
              {page.label}
            </Link>
          ))}
          <div className="mobile-primary-nav__actions">
            <a className="button button--secondary" href={GENERAL_AFFILIATE_URL} rel="sponsored">Log In</a>
            <a className="button button--primary" href={GENERAL_AFFILIATE_URL} rel="sponsored">Register now</a>
            <div className="location" aria-label="Location: New Zealand"><span className="location__flag" aria-hidden="true"><Image alt="" height={36} src="/brand/flag-nz.svg" width={36} /></span><span>NZ</span></div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
