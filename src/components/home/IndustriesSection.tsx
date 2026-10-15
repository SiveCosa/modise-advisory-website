import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/home-content";

export function IndustriesSection() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="industries-heading">
      <Container as="div">
        <SectionHeading
          id="industries-heading"
          title="Industries We Serve"
          subtitle="We partner with organisations across regulated and operationally complex sectors to deliver lasting performance improvements."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry}>
              <Card size="compact" className="flex h-full items-center justify-center text-center">
                <span className="text-sm font-medium text-midnight-navy sm:text-base">
                  {industry}
                </span>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
