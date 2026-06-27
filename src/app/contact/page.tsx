import type { Metadata } from "next";
import { BusinessInfoSection } from "@/components/contact/BusinessInfoSection";
import { ConsultationCtaSection } from "@/components/contact/ConsultationCtaSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactOptionsSection } from "@/components/contact/ContactOptionsSection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for advisory, recoveries, operational excellence, and outsourcing support. Phone: ${siteConfig.phone}. Email: ${siteConfig.email}.`,
};

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
