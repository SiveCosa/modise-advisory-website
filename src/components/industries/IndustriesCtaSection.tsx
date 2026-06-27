import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industriesCtaContent } from "@/lib/industries-content";

export function IndustriesCtaSection() {
  return (
    <section
      className="bg-midnight-navy/[0.03] py-16 sm:py-24"
      aria-labelledby="industries-cta-heading"
    >
      <Container as="div">
        <SectionHeading
          id="industries-cta-heading"
          title={industriesCtaContent.heading}
          subtitle={industriesCtaContent.body}
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Contact Us
          </Button>
          <Button href="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
