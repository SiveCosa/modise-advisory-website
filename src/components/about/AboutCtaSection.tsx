import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCtaContent } from "@/lib/about-content";

export function AboutCtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="about-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.1),transparent_60%)]"
        aria-hidden="true"
      />

      <Container as="div" className="relative">
        <SectionHeading
          id="about-cta-heading"
          title={aboutCtaContent.heading}
          subtitle={aboutCtaContent.body}
          align="center"
          theme="light"
          className="mx-auto"
        />

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button
            href="/contact"
            size="lg"
            className="w-full focus-visible:ring-offset-midnight-navy sm:w-auto"
          >
            Contact Us
          </Button>
          <Button
            href="/services"
            variant="outlineOnDark"
            size="lg"
            className="w-full focus-visible:ring-offset-midnight-navy sm:w-auto"
          >
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
