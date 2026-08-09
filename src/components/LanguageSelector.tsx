"use client";

import { useRouter } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/config";

type LanguageSelectorProps = {
  locale: Locale;
  label: string;
  scrolled?: boolean;
};

export function LanguageSelector({
  locale,
  label,
  scrolled = false,
}: LanguageSelectorProps) {
  const router = useRouter();

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        aria-label={label}
        onChange={(event) => {
          router.push(`/${event.target.value}`);
        }}
        className={`appearance-none cursor-pointer rounded-none border bg-transparent py-1.5 pl-2 pr-7 text-sm font-medium outline-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          scrolled
            ? "border-[var(--line)] text-charcoal focus-visible:outline-charcoal"
            : "border-white/25 text-ink-on-dark focus-visible:outline-ink-on-dark"
        }`}
      >
        {locales.map((code) => (
          <option key={code} value={code} className="text-charcoal">
            {localeLabels[code]}
          </option>
        ))}
      </select>
      <span
        className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[0.65rem] ${
          scrolled ? "text-steel" : "text-ink-on-dark/70"
        }`}
        aria-hidden
      >
        ▾
      </span>
    </label>
  );
}
