import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { crossIndustryCapabilities } from "@/lib/industries-content";

export function CrossIndustryCapabilitiesSection() {
  return (
    <section
      className="bg-midnight-navy py-16 sm:py-24"
      aria-labelledby="capabilities-heading"
    >
      <Container as="div">
        <SectionHeading
          id="capabilities-heading"
          title="Capabilities That Transfer Across Sectors"
          subtitle="Core advisory and operational capabilities applied with sector awareness and practical execution discipline."
          align="center"
          theme="light"
          className="mx-auto"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {crossIndustryCapabilities.map((capability) => (
            <li key={capability}>
              <Card className="h-full">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rich-gold"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-snug text-midnight-navy sm:text-base">
                    {capability}
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
