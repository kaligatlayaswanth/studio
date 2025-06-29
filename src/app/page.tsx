import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import IntegrationsSection from "@/components/landing/integrations-section";
import CostCalculatorSection from "@/components/landing/cost-calculator-section";
import FaqSection from "@/components/landing/faq-section";
import PricingSection from "@/components/landing/pricing-section";
import ContactSection from "@/components/landing/contact-section";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
       <div className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(148,0,211,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <IntegrationsSection />
        <CostCalculatorSection />
        <FaqSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
