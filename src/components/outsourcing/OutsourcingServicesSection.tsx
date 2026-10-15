import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { outsourcingServices } from "@/lib/outsourcing-content";

export function OutsourcingServicesSection() {
  return (
    <section
      className="bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="outsourcing-services-heading"
    >
      <Container as="div">
        <SectionHeading
          id="outsourcing-services-heading"
          title="Outsourcing Services We Support"
          subtitle="Flexible outsourcing capabilities across customer service, sales, claims, and back-office operations."
          align="center"
          theme="light"
          className="mx-auto"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {outsourcingServices.map((service) => (
            <li key={service.title}>
              <Card className="h-full border-t-2 border-t-rich-gold/60">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-rich-gold/10"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-rich-gold" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold leading-snug text-midnight-navy sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
