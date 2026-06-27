import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { heroContent } from "@/lib/home-content";

const heroCtaLinkClass =
  "group inline-flex items-center gap-2 rounded-sm text-base font-medium text-[#c9a84c] underline-offset-4 transition-all duration-200 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b2e4b] sm:text-lg";

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
          <div
            className="mt-8 flex flex-col items-center justify-center gap-5 sm:mt-10 sm:flex-row sm:gap-0"
            aria-label="Hero calls to action"
          >
            <Link href="/contact" className={heroCtaLinkClass}>
              Book a Consultation
              <span
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
            <span
              className="hidden h-1 w-1 shrink-0 rounded-full bg-[#c9a84c]/60 sm:mx-8 sm:inline"
              aria-hidden="true"
            />
            <Link href="/contact" className={heroCtaLinkClass}>
              Request a Proposal
              <span
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
