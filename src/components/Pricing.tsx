import { CreditCard } from "lucide-react";
import { planWatches, site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { ContactSalesCTA, TelegramCTA } from "@/components/TelegramCTA";
import type { Dictionary } from "@/i18n/getDictionary";

type PricingProps = {
  t: Dictionary;
};

export function Pricing({ t }: PricingProps) {
  return (
    <section
      id="pricing"
      className="border-t border-[var(--line)] bg-concrete-deep py-20 md:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="container-pad">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-steel">
                {t.pricing.eyebrow}
              </p>
              <h2
                id="pricing-heading"
                className="mt-3 font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-wide uppercase text-charcoal"
              >
                {t.pricing.heading}
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-charcoal-soft">
                {t.pricing.body}
              </p>
              <p className="mt-3 inline-flex items-start gap-2 text-sm text-steel">
                <CreditCard className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                <span>{t.pricing.paymentsNote}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 self-start lg:self-auto">
              <TelegramCTA label={t.cta.startTrial} />
              <ContactSalesCTA
                label={t.cta.contactSales}
                className="border-charcoal/35 text-charcoal"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.pricing.plans.map((plan, index) => {
            const featured = plan.id === "monthly";
            const highlight = plan.id === "monthly" || plan.id === "quarterly";
            return (
              <Reveal key={plan.id} delay={index * 0.05}>
                <article
                  className={`plan-card h-full ${
                    featured
                      ? "plan-card--featured plan-card--popular"
                      : highlight
                        ? "plan-card--featured"
                        : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-charcoal">
                      {plan.name}
                    </h3>
                    {plan.badge ? (
                      <span className="shrink-0 rounded-sm bg-amber/15 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-amber">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>

                  <div>
                    <p className="font-display text-[2.15rem] font-semibold leading-none tracking-wide text-charcoal">
                      {plan.price}
                    </p>
                    {plan.perDay ? (
                      <p className="mt-2 text-sm text-steel">
                        {plan.perDay}{" "}
                        <span className="opacity-80">{t.pricing.perDayLabel}</span>
                      </p>
                    ) : null}
                    <p className="mt-1 text-sm text-charcoal-soft">{plan.priceNote}</p>
                  </div>

                  <dl className="mt-auto space-y-2.5 border-t border-[var(--line)] pt-4 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-steel">{t.pricing.watchesLabel}</dt>
                      <dd className="font-semibold text-charcoal">
                        {planWatches[plan.id] ?? "—"}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-steel">{t.pricing.durationLabel}</dt>
                      <dd className="font-semibold text-charcoal">{plan.duration}</dd>
                    </div>
                  </dl>

                  <a
                    href={site.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-1 inline-flex min-h-11 items-center justify-center text-sm font-semibold transition-colors ${
                      featured
                        ? "bg-amber text-charcoal hover:bg-amber-hover"
                        : "border border-[var(--line)] text-charcoal hover:border-charcoal/40"
                    }`}
                  >
                    {plan.id === "trial" ? t.pricing.trialCta : t.pricing.planCta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col gap-4 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-steel">
              {t.pricing.disclaimer}
            </p>
            <ContactSalesCTA
              label={t.cta.contactSales}
              className="shrink-0 self-start border-charcoal/35 text-charcoal sm:self-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
