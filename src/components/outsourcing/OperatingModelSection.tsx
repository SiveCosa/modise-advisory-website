import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { operatingModelSteps } from "@/lib/outsourcing-content";

export function OperatingModelSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="operating-model-heading">
      <Container as="div">
        <SectionHeading
          id="operating-model-heading"
          title="A Practical Model for Managed Outsourcing"
          subtitle="A structured approach to establishing, managing, and scaling outsourced operations with accountability at every stage."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {operatingModelSteps.map((step, index) => (
            <li key={step.title}>
              <Card className="h-full hover:border-rich-gold/30">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-midnight-navy font-heading text-lg font-semibold text-pure-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold leading-snug text-midnight-navy sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                  {step.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
