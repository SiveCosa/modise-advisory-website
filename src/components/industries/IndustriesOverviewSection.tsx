import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, industriesOverviewContent } from "@/lib/industries-content";

export function IndustriesOverviewSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="industries-overview-heading">
      <Container as="div">
        <SectionHeading
          id="industries-overview-heading"
          title={industriesOverviewContent.heading}
          subtitle={industriesOverviewContent.body}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry.title}>
              <Card className="h-full border-t-2 border-t-rich-gold/60">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-rich-gold/10"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-rich-gold" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-midnight-navy">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-grey">
                      {industry.description}
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
