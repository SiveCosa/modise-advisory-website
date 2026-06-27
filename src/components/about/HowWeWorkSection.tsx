import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howWeWorkSteps } from "@/lib/about-content";

export function HowWeWorkSection() {
  return (
    <section
      className="bg-midnight-navy/[0.03] py-16 sm:py-24"
      aria-labelledby="how-we-work-heading"
    >
      <Container as="div">
        <SectionHeading
          id="how-we-work-heading"
          title="How We Work"
          subtitle="A practical, consulting-oriented approach designed to deliver measurable improvement at every stage."
        />

        <ol className="mt-12 space-y-4">
          {howWeWorkSteps.map((step, index) => (
            <li key={step.title}>
              <Card className="hover:border-rich-gold/30">
                <div className="flex gap-5 sm:gap-6">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-midnight-navy font-heading text-lg font-semibold text-pure-white sm:h-12 sm:w-12 sm:text-xl"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-midnight-navy sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-grey sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
