import type { Metadata } from "next";
import { ApproachSection } from "@/components/industries/ApproachSection";
import { CrossIndustryCapabilitiesSection } from "@/components/industries/CrossIndustryCapabilitiesSection";
import { IndustriesCtaSection } from "@/components/industries/IndustriesCtaSection";
import { IndustriesHeroSection } from "@/components/industries/IndustriesHeroSection";
import { IndustriesOverviewSection } from "@/components/industries/IndustriesOverviewSection";
import { SectorChallengesSection } from "@/components/industries/SectorChallengesSection";
import { createPageMetadata } from "@/lib/metadata";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  ...siteMetadata.industries,
  path: "/industries",
});

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
