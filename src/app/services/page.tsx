import type { Metadata } from "next";
import { HowWeDeliverSection } from "@/components/services/HowWeDeliverSection";
import { ServiceDetailsSection } from "@/components/services/ServiceDetailSection";
import { ServicesCtaSection } from "@/components/services/ServicesCtaSection";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection";
import { createPageMetadata } from "@/lib/metadata";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  ...siteMetadata.services,
  path: "/services",
});

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
