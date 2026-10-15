import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessInfoContent, contactDetails } from "@/lib/contact-content";
import { siteConfig } from "@/lib/constants";

export function BusinessInfoSection() {
  return (
    <section
      className="bg-midnight-navy-soft py-16 sm:py-24"
      aria-labelledby="business-info-heading"
    >
      <Container as="div">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            id="business-info-heading"
            title={businessInfoContent.heading}
            align="center"
            theme="light"
            className="mx-auto"
          />

          <Card tone="dark" className="mt-12">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-rich-gold">
                  Company
                </dt>
                <dd className="mt-1 text-base text-pure-white">{siteConfig.name}</dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-rich-gold">
                  Website
                </dt>
                <dd className="mt-1">
                  <a
                    href={contactDetails.websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-pure-white transition-colors hover:text-rich-gold"
                  >
                    {contactDetails.website}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-rich-gold">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={contactDetails.emailHref}
                    className="text-base text-pure-white transition-colors hover:text-rich-gold"
                  >
                    {contactDetails.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-rich-gold">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={contactDetails.phoneHref}
                    className="text-base text-pure-white transition-colors hover:text-rich-gold"
                  >
                    {contactDetails.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-rich-gold">
                  LinkedIn
                </dt>
                <dd className="mt-1 text-base text-pure-white">{siteConfig.linkedIn}</dd>
              </div>
            </dl>

            <p className="mt-6 border-t border-pure-white/15 pt-6 text-sm leading-relaxed text-pure-white/80">
              {businessInfoContent.linkedInNote}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
