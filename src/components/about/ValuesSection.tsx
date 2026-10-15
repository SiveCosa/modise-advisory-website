import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/about-content";

export function ValuesSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="values-heading">
      <Container as="div">
        <SectionHeading
          id="values-heading"
          title="Our Values"
          subtitle="The principles that guide how we advise, partner, and deliver for every client."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <li key={value.title}>
              <Card className="h-full">
                <h3 className="font-heading text-xl font-semibold text-midnight-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-grey sm:text-base">
                  {value.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
