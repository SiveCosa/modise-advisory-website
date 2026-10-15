import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceHighlights, ourStoryContent } from "@/lib/about-content";

export function OurStorySection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="our-story-heading">
      <Container as="div">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              id="our-story-heading"
              title={ourStoryContent.heading}
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-grey sm:text-lg">
              {ourStoryContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <Card className="border-l-4 border-l-rich-gold lg:mt-12">
            <h3 className="font-heading text-xl font-semibold text-midnight-navy">
              Experience at a Glance
            </h3>
            <ul className="mt-6 space-y-4">
              {experienceHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rich-gold"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-midnight-navy">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
