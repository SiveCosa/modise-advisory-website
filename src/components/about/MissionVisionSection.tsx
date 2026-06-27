import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { missionVision } from "@/lib/about-content";

export function MissionVisionSection() {
  return (
    <section
      className="bg-midnight-navy/[0.03] py-16 sm:py-24"
      aria-labelledby="mission-vision-heading"
    >
      <Container as="div">
        <h2 id="mission-vision-heading" className="sr-only">
          Mission and Vision
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.values(missionVision).map((item) => (
            <Card
              key={item.title}
              className="border-t-2 border-t-rich-gold hover:border-rich-gold/30"
            >
              <div className="flex items-start gap-4">
                <span
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-rich-gold/10"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-rich-gold" />
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-midnight-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-grey">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
