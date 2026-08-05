import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const filters = [
  "Year",
  "Max price",
  "Damage",
  "State",
  "Mileage",
  "Run condition",
  "Body type",
] as const;

export function WatchExplained() {
  return (
    <section
      id="watches"
      className="bg-concrete py-20 md:py-28"
      aria-labelledby="watch-heading"
    >
      <div className="container-pad grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src="/images/watch-vehicle-yard.webp"
              alt="Clean vehicle parked on industrial concrete at an auction yard"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-steel">
            Watches
          </p>
          <h2
            id="watch-heading"
            className="mt-3 font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-wide uppercase text-charcoal"
          >
            One make/model rule. Filters included.
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-charcoal-soft">
            A Watch is one make and model you want to track. Optional filters
            refine matches without using extra Watch slots.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-sm text-charcoal-soft">
            {filters.map((filter) => (
              <li
                key={filter}
                className="border-b border-[var(--line)] pb-0.5"
              >
                {filter}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-amber pl-4 text-[0.98rem] leading-relaxed text-charcoal-soft">
            Paused Watches don’t send alerts — and they still occupy a slot
            until you delete them or renew after expiry.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
