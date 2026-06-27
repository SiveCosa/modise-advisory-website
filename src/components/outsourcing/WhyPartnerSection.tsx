import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnerBenefits } from "@/lib/outsourcing-content";

export function WhyPartnerSection() {
  return (
    <section
      className="bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="why-partner-heading"
    >
      <Container as="div">
        <SectionHeading
          id="why-partner-heading"
          title="Why Partner With Modise Advisory Group?"
          subtitle="Practical outsourcing support backed by executive experience in insurance, operations, and service delivery."
          theme="light"
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerBenefits.map((benefit) => (
            <li key={benefit.title}>
              <Card className="h-full border-midnight-navy-light/20 bg-pure-white/5 hover:border-rich-gold/30">
                <div className="h-0.5 w-10 bg-rich-gold" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-pure-white sm:text-xl">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-grey-light sm:text-base">
                  {benefit.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
