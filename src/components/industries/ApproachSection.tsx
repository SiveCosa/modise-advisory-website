import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approachContent, approachSteps } from "@/lib/industries-content";

export function ApproachSection() {
  return (
    <section
      className="bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="approach-heading"
    >
      <Container as="div">
        <SectionHeading
          id="approach-heading"
          title={approachContent.heading}
          subtitle={approachContent.body}
          theme="light"
        />

        <ol className="mt-12 space-y-4">
          {approachSteps.map((step, index) => (
            <li key={step.title}>
              <Card tone="dark">
                <div className="flex gap-5 sm:gap-6">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-rich-gold font-heading text-lg font-semibold text-midnight-navy sm:h-12 sm:w-12 sm:text-xl"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-pure-white sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-grey-light sm:text-base">
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
