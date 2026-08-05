import { Reveal } from "@/components/Reveal";
import { TelegramCTA } from "@/components/TelegramCTA";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden border-t border-[var(--line)] bg-charcoal py-20 text-ink-on-dark md:py-28"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 80%, rgba(201,146,42,0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 10%, rgba(201,146,42,0.08), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="container-pad relative">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-amber">
            Free trial
          </p>
          <h2
            id="final-cta-heading"
            className="mt-3 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.02] tracking-wide uppercase"
          >
            Start watching Buy Now inventory today
          </h2>
          <p className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-[rgba(244,243,240,0.72)]">
            Open the bot on Telegram. Your 7-day free trial starts automatically
            — one Watch, no Stars required to try.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <TelegramCTA />
            <a
              href="#pricing"
              className="cta-secondary border-ink-on-dark/45 text-ink-on-dark"
            >
              View pricing
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
