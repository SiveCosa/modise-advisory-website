import type { Metadata } from "next";
import { ApproachSection } from "@/components/industries/ApproachSection";
import { CrossIndustryCapabilitiesSection } from "@/components/industries/CrossIndustryCapabilitiesSection";
import { IndustriesCtaSection } from "@/components/industries/IndustriesCtaSection";
import { IndustriesHeroSection } from "@/components/industries/IndustriesHeroSection";
import { IndustriesOverviewSection } from "@/components/industries/IndustriesOverviewSection";
import { SectorChallengesSection } from "@/components/industries/SectorChallengesSection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description: `${siteConfig.name} provides operational advisory and outsourcing support across insurance, financial services, banking, government, and other complex industries.`,
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHeroSection />
      <IndustriesOverviewSection />
      <CrossIndustryCapabilitiesSection />
      <SectorChallengesSection />
      <ApproachSection />
      <IndustriesCtaSection />
    </>
  );
}
