import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <section className="border-b border-midnight-navy/10 bg-midnight-navy py-16 sm:py-24 lg:py-32">
        <Container as="div">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-rich-gold">
              Specialist Advisory &amp; Outsourcing
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-pure-white sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-grey-light sm:text-lg">
              {siteConfig.tagline}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Contact Us
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-pure-white/30 text-pure-white hover:bg-pure-white/10">
                Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container as="div">
          <SectionHeading
            title="Building the Foundation"
            subtitle="This is a placeholder home page. Full content sections for services, industries, and contact will be added in upcoming phases."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>
    </>
  );
}
