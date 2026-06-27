import type { Metadata } from "next";
import { BusinessInfoSection } from "@/components/contact/BusinessInfoSection";
import { ConsultationCtaSection } from "@/components/contact/ConsultationCtaSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactOptionsSection } from "@/components/contact/ContactOptionsSection";
import { createPageMetadata } from "@/lib/metadata";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  ...siteMetadata.contact,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactOptionsSection />
      <ContactFormSection />
      <ConsultationCtaSection />
      <BusinessInfoSection />
    </>
  );
}
