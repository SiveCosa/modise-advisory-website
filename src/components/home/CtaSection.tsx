import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.1),transparent_60%)]"
        aria-hidden="true"
      />

      <Container as="div" className="relative">
        <SectionHeading
          id="cta-heading"
          title="Let's Discuss Your Business Challenges"
          subtitle="Partner with Modise Advisory Group to improve operations, recover value, and build scalable service solutions."
          align="center"
          theme="light"
          className="mx-auto"
        />

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Contact Us
          </Button>
          <Button
            href={siteConfig.whatsappHref}
            variant="outline"
            size="lg"
            className="w-full border-pure-white/30 text-pure-white hover:bg-pure-white/10 sm:w-auto"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
