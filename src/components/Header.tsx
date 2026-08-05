"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[rgba(236,236,235,0.92)] backdrop-blur-md text-charcoal"
          : "border-b border-transparent bg-transparent text-ink-on-dark"
      }`}
    >
      <div className="container-pad flex h-full items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-[0.06em] uppercase"
        >
          Auction Watch
        </a>

        <nav
          className="hidden items-center gap-7 text-sm font-medium md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-85 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-semibold transition-colors ${
            scrolled
              ? "text-charcoal hover:text-amber"
              : "text-ink-on-dark hover:text-amber"
          }`}
        >
          Open in Telegram
        </a>
      </div>
    </header>
  );
}
