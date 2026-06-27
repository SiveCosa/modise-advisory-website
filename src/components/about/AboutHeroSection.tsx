import { Container } from "@/components/ui/Container";
import { aboutHeroContent } from "@/lib/about-content";

export function AboutHeroSection() {
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

      <Container as="div" className="relative py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-rich-gold">
            {aboutHeroContent.eyebrow}
          </p>
          <h1 className="font-heading text-3xl font-semibold leading-tight text-pure-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            {aboutHeroContent.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-grey-light sm:mt-6 sm:text-lg">
            {aboutHeroContent.subheading}
          </p>
        </div>
      </Container>
    </section>
  );
}
