import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { outsourcingBenefits } from "@/lib/home-content";

export function OutsourcingSection() {
  return (
    <section
      className="bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="outsourcing-heading"
    >
      <Container as="div">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SectionHeading
            id="outsourcing-heading"
            title="Why South Africa for Outsourcing?"
            subtitle="South Africa offers a highly skilled workforce, strong English proficiency, cost-effective operations, world-class infrastructure, excellent customer service culture, and time-zone compatibility with Europe."
            theme="light"
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {outsourcingBenefits.map((benefit) => (
              <li key={benefit}>
                <Card tone="dark" size="compact" className="flex h-full items-start gap-3">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rich-gold"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-pure-white sm:text-base">
                    {benefit}
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
