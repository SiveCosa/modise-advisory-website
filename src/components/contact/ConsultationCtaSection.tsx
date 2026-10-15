import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { consultationCtaContent, contactDetails } from "@/lib/contact-content";

export function ConsultationCtaSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="consultation-cta-heading">
      <Container as="div">
        <SectionHeading
          id="consultation-cta-heading"
          title={consultationCtaContent.heading}
          subtitle={consultationCtaContent.body}
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button href={contactDetails.phoneHref} size="lg" className="w-full sm:w-auto">
            Call Now
          </Button>
          <Button
            href={contactDetails.whatsappHref}
            size="lg"
            className="w-full sm:w-auto"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
