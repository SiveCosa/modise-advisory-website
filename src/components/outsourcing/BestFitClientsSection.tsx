import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bestFitClients } from "@/lib/outsourcing-content";

export function BestFitClientsSection() {
  return (
    <section
      className="bg-midnight-navy/[0.03] py-16 sm:py-24"
      aria-labelledby="best-fit-heading"
    >
      <Container as="div">
        <SectionHeading
          id="best-fit-heading"
          title="Who This Is Best For"
          subtitle="Our outsourcing offering is designed for organisations seeking skilled South African talent with structured operational support."
          align="center"
          className="mx-auto"
        />

        <ul className="mx-auto mt-12 grid max-w-3xl gap-4">
          {bestFitClients.map((client) => (
            <li key={client}>
              <Card className="hover:border-rich-gold/30">
                <div className="flex items-start gap-4">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rich-gold"
                    aria-hidden="true"
                  />
                  <p className="text-base leading-relaxed text-midnight-navy sm:text-lg">
                    {client}
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
