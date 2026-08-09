import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { en } from "@/i18n/dictionaries/en";
import { lt } from "@/i18n/dictionaries/lt";
import { pl } from "@/i18n/dictionaries/pl";
import { ru } from "@/i18n/dictionaries/ru";
import { uk } from "@/i18n/dictionaries/uk";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru,
  uk,
  lt,
  pl,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
