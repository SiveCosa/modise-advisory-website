import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientResults } from "@/lib/home-content";

export function ClientResultsSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="results-heading">
      <Container as="div">
        <SectionHeading
          id="results-heading"
          title="Measurable Business Impact"
          subtitle="Our work delivers tangible outcomes — from recoveries and operational efficiency to customer experience and scalable frameworks."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientResults.map((result) => (
            <li key={result}>
              <Card className="h-full border-l-4 border-l-rich-gold">
                <p className="text-base font-medium leading-snug text-midnight-navy">
                  {result}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
