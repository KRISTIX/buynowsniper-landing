import { Reveal } from "@/components/Reveal";
import { ContactSalesCTA } from "@/components/TelegramCTA";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "How do I pay?",
    a: "Payment is Telegram Stars only — no card checkout in the app. Buy Stars in Telegram, then purchase a plan inside Auction Watch.",
  },
  {
    q: "How often do you check inventory?",
    a: "About every 15 minutes. This is not real-time or instant. Listings can appear and sell between checks.",
  },
  {
    q: "Does Auction Watch bid or buy for me?",
    a: "No. You get an alert with listing details and a link. You open Copart or IAAI and buy yourself. There is no auto-bid and no auto-buy.",
  },
  {
    q: "What happens when my plan expires?",
    a: "Your Watches pause and stop alerting until you renew. Paused Watches still occupy slots.",
  },
  {
    q: "Can I trust the listing details in an alert?",
    a: "Treat alerts as a heads-up. Always verify price, damage, location, and availability on the auction site before you buy — inventory moves quickly.",
  },
  {
    q: "Need help or custom pricing?",
    a: "Message our support bot on Telegram for help, custom plans, and sales.",
  },
] as const;

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-concrete py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container-pad max-w-3xl">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-steel">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-wide uppercase text-charcoal"
          >
            Straight answers
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((item, index) => (
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
                {item.q === "Need help or custom pricing?" ? (
                  <div className="mt-3 max-w-2xl pr-8">
                    <p className="text-[0.98rem] leading-relaxed text-charcoal-soft">
                      Message{" "}
                      <a
                        href={site.supportTelegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-charcoal underline decoration-amber/60 underline-offset-2 hover:decoration-amber"
                      >
                        @{site.supportUsername}
                      </a>{" "}
                      on Telegram for support, custom pricing, and sales.
                    </p>
                    <ContactSalesCTA className="mt-4 border-charcoal/35 text-charcoal" />
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
