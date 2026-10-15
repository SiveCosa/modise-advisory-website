import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroContent } from "@/lib/home-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-midnight-navy">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-rich-gold/40 to-transparent"
        aria-hidden="true"
      />

      <Container as="div" className="relative py-14 sm:py-20 lg:py-24 xl:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-rich-gold">
            Modise Advisory Group
          </p>
          <h1 className="font-heading text-3xl font-semibold leading-tight text-pure-white sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem]">
            {heroContent.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-grey-light sm:mt-6 sm:text-lg">
            {heroContent.subheading}
          </p>
          <div className="mt-8 flex justify-center sm:mt-10">
            <Button
              href="/contact"
              size="lg"
              className="w-full focus-visible:ring-offset-midnight-navy sm:w-auto"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
