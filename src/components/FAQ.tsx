import { Reveal } from "@/components/Reveal";
import { ContactSalesCTA } from "@/components/TelegramCTA";
import { site } from "@/lib/site";
import type { Dictionary } from "@/i18n/getDictionary";

type FAQProps = {
  t: Dictionary;
};

export function FAQ({ t }: FAQProps) {
  const helpQ = t.faq.items[t.faq.items.length - 1]?.q;

  return (
    <section
      id="faq"
      className="bg-concrete py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container-pad max-w-3xl">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-steel">
            {t.faq.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-wide uppercase text-charcoal"
          >
            {t.faq.heading}
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {t.faq.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.04}>
              <details className="faq-item group py-5">
                <summary className="flex items-center justify-between gap-4 text-left text-[1.05rem] font-semibold text-charcoal">
                  {item.q}
                  <span
                    className="font-display text-xl font-normal text-amber transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                {item.q === helpQ ? (
                  <div className="mt-3 max-w-2xl pr-8">
                    <p className="text-[0.98rem] leading-relaxed text-charcoal-soft">
                      {t.faq.helpLinkPrefix}{" "}
                      <a
                        href={site.supportTelegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-charcoal underline decoration-amber/60 underline-offset-2 hover:decoration-amber"
                      >
                        @{site.supportUsername}
                      </a>{" "}
                      {t.faq.helpLinkSuffix}
                    </p>
                    <ContactSalesCTA
                      label={t.cta.contactSales}
                      className="mt-4 border-charcoal/35 text-charcoal"
                    />
                  </div>
                ) : (
                  <p className="mt-3 max-w-2xl pr-8 text-[0.98rem] leading-relaxed text-charcoal-soft">
                    {item.a}
                  </p>
                )}
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
