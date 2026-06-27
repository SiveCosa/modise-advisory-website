import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertiseAreas } from "@/lib/home-content";

export function WhyModiseSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="why-modise-heading">
      <Container as="div">
        <SectionHeading
          id="why-modise-heading"
          title="Trusted Experience. Proven Results."
          subtitle="With over 20 years of executive leadership experience across South Africa's leading insurers and financial institutions, we provide practical solutions that improve profitability, efficiency and customer experience."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => (
            <li key={area}>
              <Card className="h-full hover:border-rich-gold/30">
                <div className="flex items-start gap-4">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rich-gold"
                    aria-hidden="true"
                  />
                  <p className="text-base font-medium leading-snug text-midnight-navy">
                    {area}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
