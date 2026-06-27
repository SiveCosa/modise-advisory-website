import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howWeDeliverSteps } from "@/lib/services-content";

export function HowWeDeliverSection() {
  return (
    <section
      className="bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="how-we-deliver-heading"
    >
      <Container as="div">
        <SectionHeading
          id="how-we-deliver-heading"
          title="How We Deliver Value"
          subtitle="A structured consulting approach focused on assessment, design, implementation, and measurable outcomes."
          theme="light"
          align="center"
          className="mx-auto"
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {howWeDeliverSteps.map((step, index) => (
            <li key={step.title}>
              <Card className="h-full border-midnight-navy-light/20 bg-pure-white/5 hover:border-rich-gold/30">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-rich-gold font-heading text-lg font-semibold text-midnight-navy"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold leading-snug text-pure-white sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-grey-light">
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
