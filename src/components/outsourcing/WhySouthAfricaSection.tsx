import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  southAfricaBenefits,
  whySouthAfricaContent,
} from "@/lib/outsourcing-content";

export function WhySouthAfricaSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="why-south-africa-heading">
      <Container as="div">
        <SectionHeading
          id="why-south-africa-heading"
          title={whySouthAfricaContent.heading}
          subtitle={whySouthAfricaContent.body}
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {southAfricaBenefits.map((benefit) => (
            <li key={benefit}>
              <Card className="h-full hover:border-rich-gold/30">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rich-gold"
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium leading-snug text-midnight-navy">
                    {benefit}
                  </span>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
