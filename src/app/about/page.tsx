import type { Metadata } from "next";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { HowWeWorkSection } from "@/components/about/HowWeWorkSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { OurStorySection } from "@/components/about/OurStorySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} provides practical business solutions backed by more than 20 years of executive experience in insurance, operations, and strategic leadership.`,
};

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
