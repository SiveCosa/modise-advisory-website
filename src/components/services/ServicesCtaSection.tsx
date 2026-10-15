import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesCtaContent } from "@/lib/services-content";

export function ServicesCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-midnight-navy/[0.03] py-16 sm:py-24"
      aria-labelledby="services-cta-heading"
    >
      <Container as="div" className="relative">
        <SectionHeading
          id="services-cta-heading"
          title={servicesCtaContent.heading}
          subtitle={servicesCtaContent.body}
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 flex justify-center">
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Book a Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
