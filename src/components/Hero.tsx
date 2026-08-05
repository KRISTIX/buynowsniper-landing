"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TelegramCTA } from "@/components/TelegramCTA";

export function Hero() {
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
      aria-label="Auction Watch hero"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-auction-lot.webp"
          alt="Salvage auction lot at dusk with wet asphalt and sodium yard lights"
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
        <div className="max-w-[34rem]">
          <motion.p
            className="font-display text-[clamp(2.75rem,8vw,5.25rem)] font-semibold leading-[0.92] tracking-[0.04em] uppercase"
            {...fade(0.08)}
          >
            Auction Watch
          </motion.p>

          <motion.h1
            className="mt-5 max-w-[28rem] text-[clamp(1.2rem,2.4vw,1.55rem)] font-medium leading-snug text-[rgba(244,243,240,0.92)]"
            {...fade(0.22)}
          >
            Telegram alerts when Copart &amp; IAAI Buy Now matches appear
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[28rem] text-[0.98rem] leading-relaxed text-[rgba(244,243,240,0.72)]"
            {...fade(0.34)}
          >
            Create a Watch. Get price, damage, location, and a listing link —
            checked about every 15 minutes.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            {...fade(0.46)}
          >
            <TelegramCTA />
            <a href="#how-it-works" className="cta-secondary border-ink-on-dark/55 text-ink-on-dark">
              See how it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
