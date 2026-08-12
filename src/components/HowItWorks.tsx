import { Bot, Eye, MessageSquare, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/getDictionary";

const icons = [Bot, Eye, MessageSquare, ExternalLink] as const;

type HowItWorksProps = {
  t: Dictionary;
};

export function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="border-t border-[var(--line)] bg-concrete-deep py-20 md:py-28"
      aria-labelledby="how-heading"
    >
      <div className="container-pad">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-steel">
            {t.howItWorks.eyebrow}
          </p>
          <h2
            id="how-heading"
            className="mt-3 max-w-xl font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-wide uppercase text-charcoal"
          >
            {t.howItWorks.heading}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map(({ title, body }, index) => {
            const Icon = icons[index] ?? Bot;
            return (
              <li
                key={title}
                className="relative border-t border-[var(--line)] py-8 pr-5 sm:border-t-0 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0 lg:min-h-[13rem]"
              >
                <Reveal delay={index * 0.06}>
                  <span className="font-display text-sm font-medium tracking-wider text-amber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-4 flex items-center gap-2.5 text-charcoal">
                    <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    <h3 className="text-base font-semibold">{title}</h3>
                  </div>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-charcoal-soft">
                    {body}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
