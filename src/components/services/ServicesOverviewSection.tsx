import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  serviceOverviewCards,
  servicesOverviewContent,
} from "@/lib/services-content";

export function ServicesOverviewSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="services-overview-heading">
      <Container as="div">
        <SectionHeading
          id="services-overview-heading"
          title={servicesOverviewContent.heading}
          subtitle={servicesOverviewContent.body}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {serviceOverviewCards.map((service) => (
            <li key={service.id}>
              <Card className="flex h-full flex-col border-t-2 border-t-rich-gold/60 hover:border-rich-gold/30">
                <h3 className="font-heading text-xl font-semibold text-midnight-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-grey sm:text-base">
                  {service.description}
                </p>
                <LearnMoreLink
                  href={`#${service.id}`}
                  label="View service details"
                  className="mt-6"
                />
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
