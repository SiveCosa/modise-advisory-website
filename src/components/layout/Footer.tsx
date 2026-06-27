import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-navy pb-20 text-pure-white sm:pb-0">
      <Container as="div" className="py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-4 sm:col-span-2 lg:col-span-4">
            <h2 className="font-heading text-xl font-semibold text-pure-white">
              {siteConfig.name}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-slate-grey-light">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-rich-gold">
              Services
            </h3>
            <ul className="flex flex-wrap gap-x-2 gap-y-2 text-sm leading-relaxed text-slate-grey-light">
              {siteConfig.services.map((service, index) => (
                <li key={service} className="inline-flex items-center">
                  <span>{service}</span>
                  {index < siteConfig.services.length - 1 ? (
                    <span className="ml-2 text-rich-gold/60" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-rich-gold">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wide text-slate-grey-light">
                  Phone
                </span>
                <a
                  href={siteConfig.phoneHref}
                  className="text-pure-white transition-colors hover:text-rich-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wide text-slate-grey-light">
                  Email
                </span>
                <a
                  href={siteConfig.emailHref}
                  className="break-all text-pure-white transition-colors hover:text-rich-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wide text-slate-grey-light">
                  Direct
                </span>
                <a
                  href={siteConfig.directEmailHref}
                  className="break-all text-pure-white transition-colors hover:text-rich-gold"
                >
                  {siteConfig.directEmail}
                </a>
              </li>
              <li>
                <span className="mb-1 block text-xs uppercase tracking-wide text-slate-grey-light">
                  Website
                </span>
                <a
                  href={siteConfig.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pure-white transition-colors hover:text-rich-gold"
                >
                  {siteConfig.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-pure-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-grey-light">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-sm font-medium text-rich-gold transition-colors hover:text-pure-white"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </footer>
  );
}
