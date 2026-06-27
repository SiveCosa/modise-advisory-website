import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectorChallenges } from "@/lib/industries-content";

export function SectorChallengesSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="challenges-heading">
      <Container as="div">
        <SectionHeading
          id="challenges-heading"
          title="Common Challenges We Help Solve"
          subtitle="Organisations across regulated and service-intensive sectors often face similar operational pressures that require structured, practical intervention."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {sectorChallenges.map((challenge) => (
            <li key={challenge}>
              <Card className="hover:border-rich-gold/30">
                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-rich-gold/30 bg-rich-gold/10"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-rich-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-base font-medium leading-snug text-midnight-navy">
                    {challenge}
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
