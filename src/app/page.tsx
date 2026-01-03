import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Integrations } from "@/components/Integrations";
import { Testimonial, Stats } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { Footer, FinalCTA } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-purple selection:text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <FeaturesGrid />
      <Integrations />
      <Testimonial />
      <Stats />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
