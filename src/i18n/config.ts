export const locales = ["en", "ru", "uk", "lt", "pl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uk: "Українська",
  lt: "Lietuvių",
  pl: "Polski",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localePath(locale: Locale): string {
  return `/${locale}`;
}
