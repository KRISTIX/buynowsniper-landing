import Image from "next/image";
import { Bell, Filter, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const points = [
  {
    icon: Bell,
    title: "Telegram alerts for Buy Now",
    body: "When a matching Copart or IAAI Buy Now listing appears, you get a message with the details that matter.",
  },
  {
    icon: Filter,
    title: "Watches you control",
    body: "Set make and model, then add year, max price, damage, state, mileage, and more — filters don’t use extra slots.",
  },
  {
    icon: MapPin,
    title: "You buy on the auction site",
    body: "Auction Watch notifies. You open the listing on Copart or IAAI and decide. No auto-bid.",
  },
] as const;

export function Support() {
  return (
    <section
      id="why"
      className="bg-concrete py-20 md:py-28"
      aria-labelledby="support-heading"
    >
      <div className="container-pad">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-steel">
            What you get
          </p>
          <h2
            id="support-heading"
            className="mt-3 max-w-xl font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-wide uppercase text-charcoal"
          >
            Stop refreshing yards. Start getting matches.
          </h2>
          <p className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-charcoal-soft">
            Auction Watch monitors Copart and IAAI Buy Now inventory for your
            rules and pushes matches to Telegram.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal delay={0.08}>
            <ul className="space-y-9">
              {points.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--line)] bg-concrete-deep text-charcoal"
                    aria-hidden
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
                    <p className="mt-1.5 max-w-md text-[0.98rem] leading-relaxed text-charcoal-soft">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
              <Image
                src="/images/alerts-phone-night.webp"
                alt="Hands holding a phone at a night auction lot"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,10,0.55)_0%,transparent_45%)]"
                aria-hidden
              />
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8">
                <div className="alert-mock max-w-[17rem]" aria-hidden>
                  <div className="alert-mock__brand">Auction Watch</div>
                  <p className="font-medium">2018 Ford F-150 · Buy Now</p>
                  <p className="mt-1 opacity-80">
                    {"$8,400"} · Front end · TX · 94k mi
                  </p>
                  <p className="mt-2 text-[0.72rem] opacity-65">
                    Open listing on Copart
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
