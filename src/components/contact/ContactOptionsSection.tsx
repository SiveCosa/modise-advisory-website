import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactOptions, contactOptionsHeading } from "@/lib/contact-content";

export function ContactOptionsSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="contact-options-heading">
      <Container as="div">
        <SectionHeading
          id="contact-options-heading"
          title={contactOptionsHeading}
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactOptions.map((option) => (
            <li key={option.title}>
              <Card className="h-full border-t-2 border-t-rich-gold/60 hover:border-rich-gold/30">
                <h3 className="font-heading text-lg font-semibold text-midnight-navy">
                  {option.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {option.lines.map((line) => (
                    <li key={line.label}>
                      <a
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          line.href.startsWith("http") ? "noopener noreferrer" : undefined
                        }
                        className="text-sm leading-relaxed text-slate-grey transition-colors hover:text-rich-gold sm:text-base"
                      >
                        {line.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
