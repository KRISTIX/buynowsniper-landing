"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { LanguageSelector } from "@/components/LanguageSelector";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  locale: Locale;
  t: Dictionary;
};

export function Header({ locale, t }: HeaderProps) {
  const links = [
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[var(--line)] bg-white text-charcoal">
      <div className="container-pad flex h-full items-center justify-between gap-3">
        <a href="#top" className="relative flex h-9 w-[min(11.5rem,42vw)] shrink-0 items-center">
          <Image
            src="/brand/logo-wordmark.webp"
            alt={t.brand}
            width={640}
            height={120}
            priority
            className="h-9 w-auto object-contain object-left"
          />
        </a>

        <nav
          className="hidden items-center gap-7 text-sm font-medium md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-charcoal-soft transition-colors hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSelector locale={locale} label={t.nav.language} />
          <a
            href={site.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-semibold text-charcoal transition-colors hover:text-amber sm:inline"
          >
            {t.nav.openTelegram}
          </a>
        </div>
      </div>
    </header>
  );
}
