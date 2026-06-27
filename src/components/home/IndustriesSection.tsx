import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/home-content";

export function IndustriesSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="industries-heading">
      <Container as="div">
        <SectionHeading
          id="industries-heading"
          title="Industries We Serve"
          subtitle="We partner with organisations across regulated and operationally complex sectors to deliver lasting performance improvements."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry}>
              <div className="flex h-full items-center justify-center rounded-sm border border-midnight-navy/10 bg-pure-white px-4 py-5 text-center transition-colors duration-200 hover:border-rich-gold/30 hover:bg-midnight-navy/[0.02] sm:px-6 sm:py-6">
                <span className="text-sm font-medium text-midnight-navy sm:text-base">
                  {industry}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
