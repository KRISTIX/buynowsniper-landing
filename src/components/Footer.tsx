import { site } from "@/lib/site";
import type { Dictionary } from "@/i18n/getDictionary";

type FooterProps = {
  t: Dictionary;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-[var(--line)] bg-concrete py-10">
      <div className="container-pad flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
            {t.brand}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel">
            {t.footer.blurb}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={site.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-charcoal hover:text-amber"
          >
            {t.footer.openBot}
          </a>
          <a
            href={site.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-charcoal hover:text-amber"
          >
            {t.footer.miniApp}
          </a>
          <a
            href={site.supportTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-charcoal hover:text-amber"
          >
            {t.footer.contactSales}
          </a>
          <a href="#pricing" className="font-medium text-charcoal hover:text-amber">
            {t.footer.pricing}
          </a>
        </div>
      </div>
      <div className="container-pad mt-8 border-t border-[var(--line)] pt-6">
        <p className="text-xs text-steel">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
