import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-concrete py-10">
      <div className="container-pad flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
            Auction Watch
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel">
            Telegram alerts for Copart and IAAI Buy Now matches. Always verify
            listings on the auction site before you buy.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={site.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-charcoal hover:text-amber"
          >
            Open bot
          </a>
          <a
            href={site.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-charcoal hover:text-amber"
          >
            Mini App
          </a>
          <a
            href={site.supportTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-charcoal hover:text-amber"
          >
            Support
          </a>
          <a href="#pricing" className="font-medium text-charcoal hover:text-amber">
            Pricing
          </a>
        </div>
      </div>
      <div className="container-pad mt-8 border-t border-[var(--line)] pt-6">
        <p className="text-xs text-steel">
          © {new Date().getFullYear()} Auction Watch. Not affiliated with Copart
          or IAAI.
        </p>
      </div>
    </footer>
  );
}
