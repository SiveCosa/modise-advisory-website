import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceCards } from "@/lib/home-content";

export function ServicesPreviewSection() {
  return (
    <section
      className="bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="services-preview-heading"
    >
      <Container as="div">
        <SectionHeading
          id="services-preview-heading"
          title="Specialist Advisory & Outsourcing Services"
          subtitle="Comprehensive advisory and outsourcing solutions designed to deliver measurable improvements across your operations."
          theme="light"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {serviceCards.map((service) => (
            <li key={service.title}>
              <Card interactive className="flex h-full flex-col">
                <h3 className="font-heading text-xl font-semibold text-midnight-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-grey sm:text-base">
                  {service.description}
                </p>
                <LearnMoreLink href={service.href} className="mt-6" />
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
