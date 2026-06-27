import type { Metadata } from "next";
import { HowWeDeliverSection } from "@/components/services/HowWeDeliverSection";
import { ServiceDetailsSection } from "@/components/services/ServiceDetailSection";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `${siteConfig.name} delivers specialist advisory and outsourcing services across claims, recoveries, operational excellence, contact centres, and procurement.`,
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <ServiceDetailsSection />
      <HowWeDeliverSection />
      <ServicesCtaSection />
    </>
  );
}
