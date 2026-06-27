import type { Metadata } from "next";
import { BestFitClientsSection } from "@/components/outsourcing/BestFitClientsSection";
import { OperatingModelSection } from "@/components/outsourcing/OperatingModelSection";
import { OutsourcingCtaSection } from "@/components/outsourcing/OutsourcingCtaSection";
import { OutsourcingHeroSection } from "@/components/outsourcing/OutsourcingHeroSection";
import { OutsourcingServicesSection } from "@/components/outsourcing/OutsourcingServicesSection";
import { WhyPartnerSection } from "@/components/outsourcing/WhyPartnerSection";
import { WhySouthAfricaSection } from "@/components/outsourcing/WhySouthAfricaSection";
import { createPageMetadata } from "@/lib/metadata";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  ...siteMetadata.outsourcing,
  path: "/outsourcing",
});

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
