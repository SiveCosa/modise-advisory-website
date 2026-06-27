import { ClientResultsSection } from "@/components/home/ClientResultsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { OutsourcingSection } from "@/components/home/OutsourcingSection";
import { ServicesPreviewSection } from "@/components/home/ServicesPreviewSection";
import { WhyModiseSection } from "@/components/home/WhyModiseSection";
import { createPageMetadata } from "@/lib/metadata";
import { siteMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...siteMetadata.home,
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyModiseSection />
      <ServicesPreviewSection />
      <IndustriesSection />
      <OutsourcingSection />
      <ClientResultsSection />
      <CtaSection />
    </>
  );
}
