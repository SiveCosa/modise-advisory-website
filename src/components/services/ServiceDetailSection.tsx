import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { detailedServices } from "@/lib/services-content";

type ServiceDetail = (typeof detailedServices)[number];

type ServiceDetailSectionProps = {
  service: ServiceDetail;
  index: number;
};

function ServiceIncludeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rich-gold"
            aria-hidden="true"
          />
          <span className="text-sm leading-relaxed text-midnight-navy sm:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ServiceDetailSection({ service, index }: ServiceDetailSectionProps) {
  const isAlternate = index % 2 === 1;
  const hasGroups = Boolean(service.groups?.length);

  return (
    <section
      id={service.id}
      className={`py-16 sm:py-24 ${isAlternate ? "bg-midnight-navy/[0.03]" : "bg-pure-white"}`}
      aria-labelledby={`${service.id}-heading`}
    >
      <Container as="div">
        <div className={hasGroups ? "space-y-10" : "grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16"}>
          <div className={hasGroups ? "max-w-3xl" : undefined}>
            <div className="h-0.5 w-12 bg-rich-gold" aria-hidden="true" />
            <h2
              id={`${service.id}-heading`}
              className="mt-3 font-heading text-3xl font-semibold tracking-tight text-midnight-navy sm:text-4xl"
            >
              {service.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-grey sm:text-lg">
              {service.description}
            </p>
          </div>

          {hasGroups ? (
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {service.groups?.map((group) => (
                <Card key={group.heading} className="border-l-4 border-l-rich-gold">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-rich-gold">
                    {group.heading}
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rich-gold"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-midnight-navy sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-l-4 border-l-rich-gold">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-rich-gold">
                Services Include
              </h3>
              <ServiceIncludeList items={service.includes ?? []} />
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
}

export function ServiceDetailsSection() {
  return (
    <>
      {detailedServices.map((service, index) => (
        <ServiceDetailSection key={service.id} service={service} index={index} />
      ))}
    </>
  );
}
