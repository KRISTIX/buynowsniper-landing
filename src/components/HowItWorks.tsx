import {
  Bot,
  Eye,
  MessageSquare,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    icon: Bot,
    title: "Start the bot",
    body: "Open Auction Watch on Telegram. Your free 7-day trial begins automatically.",
  },
  {
    icon: Eye,
    title: "Create a Watch",
    body: "Pick a make and model in the Mini App. Add optional filters if you want tighter matches.",
  },
  {
    icon: RefreshCw,
    title: "We check the yards",
    body: "The system scans Copart and IAAI Buy Now inventory about every 15 minutes.",
  },
  {
    icon: MessageSquare,
    title: "Get a Telegram alert",
    body: "A match includes price, damage, location, and a link to the listing.",
  },
  {
    icon: ExternalLink,
    title: "Buy on Copart or IAAI",
    body: "You open the auction site yourself and complete the purchase there.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-[var(--line)] bg-concrete-deep py-20 md:py-28"
      aria-labelledby="how-heading"
    >
      <div className="container-pad">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-steel">
            How it works
          </p>
          <h2
            id="how-heading"
            className="mt-3 max-w-xl font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-wide uppercase text-charcoal"
          >
            From bot to Buy Now in five steps
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, body }, index) => (
            <li
              key={title}
              className="relative border-t border-[var(--line)] py-8 pr-4 sm:border-t-0 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0 lg:min-h-[14rem]"
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
          ))}
        </ol>
      </div>
    </section>
  );
}
