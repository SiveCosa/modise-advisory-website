import type { Metadata } from "next";
import { BestFitClientsSection } from "@/components/outsourcing/BestFitClientsSection";
import { OperatingModelSection } from "@/components/outsourcing/OperatingModelSection";
import { OutsourcingCtaSection } from "@/components/outsourcing/OutsourcingCtaSection";
import { OutsourcingHeroSection } from "@/components/outsourcing/OutsourcingHeroSection";
import { OutsourcingServicesSection } from "@/components/outsourcing/OutsourcingServicesSection";
import { WhyPartnerSection } from "@/components/outsourcing/WhyPartnerSection";
import { WhySouthAfricaSection } from "@/components/outsourcing/WhySouthAfricaSection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Outsourcing",
  description: `${siteConfig.name} helps overseas businesses access skilled South African talent for customer service, sales, claims, and back-office outsourcing operations.`,
};

export default function OutsourcingPage() {
  return (
    <>
      <OutsourcingHeroSection />
      <WhySouthAfricaSection />
      <OutsourcingServicesSection />
      <OperatingModelSection />
      <WhyPartnerSection />
      <BestFitClientsSection />
      <OutsourcingCtaSection />
    </>
  );
}
