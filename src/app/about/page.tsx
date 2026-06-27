import type { Metadata } from "next";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { HowWeWorkSection } from "@/components/about/HowWeWorkSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { OurStorySection } from "@/components/about/OurStorySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { createPageMetadata } from "@/lib/metadata";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  ...siteMetadata.about,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <HowWeWorkSection />
      <AboutCtaSection />
    </>
  );
}
