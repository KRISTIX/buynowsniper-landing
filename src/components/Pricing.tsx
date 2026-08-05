import { plans, site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { ContactSalesCTA, TelegramCTA } from "@/components/TelegramCTA";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-[var(--line)] bg-concrete-deep py-20 md:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="container-pad">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-steel">
                Pricing
              </p>
              <h2
                id="pricing-heading"
                className="mt-3 font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-wide uppercase text-charcoal"
              >
                Telegram Stars only
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-charcoal-soft">
                Pay in-app with Stars. Paid plans activate immediately. Unused
                time is not prorated.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 self-start md:self-auto">
              <TelegramCTA />
              <ContactSalesCTA className="border-charcoal/35 text-charcoal" />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.05}>
              <article
                className={`plan-card h-full ${
                  plan.highlight ? "plan-card--featured" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-charcoal">
                    {plan.name}
                  </h3>
                  {plan.badge ? (
                    <span className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-amber">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <p className="font-display text-[2rem] font-semibold leading-none tracking-wide text-charcoal">
                  {plan.price}
                </p>
                <p className="text-sm text-steel">{plan.priceNote}</p>

                <dl className="mt-auto space-y-2 border-t border-[var(--line)] pt-4 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-steel">Watches</dt>
                    <dd className="font-semibold text-charcoal">{plan.watches}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-steel">Duration</dt>
                    <dd className="font-semibold text-charcoal">{plan.duration}</dd>
                  </div>
                </dl>

                <a
                  href={site.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-flex min-h-11 items-center justify-center text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-amber text-charcoal hover:bg-amber-hover"
                      : "border border-[var(--line)] text-charcoal hover:border-charcoal/40"
                  }`}
                >
                  {plan.id === "trial" ? "Start free trial" : "Open in Telegram"}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-steel">
              On expiry, Watches pause until you renew. Buy Now availability
              changes fast — always verify price and details on Copart or IAAI
              before you buy. Need more Watches or a custom plan? Contact sales.
            </p>
            <ContactSalesCTA className="shrink-0 self-start border-charcoal/35 text-charcoal sm:self-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
