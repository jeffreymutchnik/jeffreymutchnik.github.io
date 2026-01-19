import { Header, Footer } from "@/components/layout";
import { Hero, StatsSection, FeaturedWork, CTASection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <StatsSection />
        <FeaturedWork />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
