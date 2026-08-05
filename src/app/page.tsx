import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Support } from "@/components/Support";
import { WatchExplained } from "@/components/WatchExplained";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Support />
        <HowItWorks />
        <WatchExplained />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
