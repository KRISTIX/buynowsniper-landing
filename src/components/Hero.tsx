"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TelegramCTA } from "@/components/TelegramCTA";
import type { Dictionary } from "@/i18n/getDictionary";

type HeroProps = {
  t: Dictionary;
};

export function Hero({ t }: HeroProps) {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as const,
            delay,
          },
        };

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden text-ink-on-dark"
      aria-label={t.hero.ariaLabel}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-auction-lot.webp"
          alt={t.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[62%_center] ${reduce ? "" : "hero-kenburns"}`}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,11,12,0.78)_0%,rgba(10,11,12,0.55)_38%,rgba(10,11,12,0.22)_62%,rgba(10,11,12,0.35)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,11,12,0.55)_0%,transparent_42%)]"
          aria-hidden
        />
      </div>

      <div className="container-pad flex min-h-[100svh] flex-col justify-end pb-16 pt-[calc(var(--header-h)+2.5rem)] md:justify-center md:pb-24 md:pt-28">
        <div className="max-w-[36rem]">
          <motion.p
            className="font-display text-[clamp(2.5rem,7.5vw,4.75rem)] font-semibold leading-[0.92] tracking-[0.04em] uppercase"
            {...fade(0.08)}
          >
            {t.brand}
          </motion.p>

          <motion.h1
            className="mt-5 max-w-[30rem] text-[clamp(1.25rem,2.5vw,1.65rem)] font-medium leading-snug text-[rgba(244,243,240,0.94)]"
            {...fade(0.22)}
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[30rem] text-[1rem] leading-relaxed text-[rgba(244,243,240,0.74)]"
            {...fade(0.34)}
          >
            {t.hero.sub}
          </motion.p>

          <motion.p
            className="mt-3 text-sm text-[rgba(244,243,240,0.55)]"
            {...fade(0.4)}
          >
            {t.hero.honesty}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            {...fade(0.46)}
          >
            <TelegramCTA label={t.cta.startTrial} />
            <a
              href="#how-it-works"
              className="cta-secondary border-ink-on-dark/55 text-ink-on-dark"
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
