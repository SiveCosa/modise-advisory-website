import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-navy text-pure-white">
      <Container as="div" className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="font-heading text-xl font-semibold text-pure-white">
              {siteConfig.name}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-slate-grey-light">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-rich-gold">
              Services
            </h3>
            <p className="text-sm leading-relaxed text-slate-grey-light">
              {siteConfig.services.join(" | ")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-rich-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-slate-grey-light">Phone</span>
                <a
                  href={siteConfig.phoneHref}
                  className="text-pure-white transition-colors hover:text-rich-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="block text-slate-grey-light">Email</span>
                <a
                  href={siteConfig.emailHref}
                  className="text-pure-white transition-colors hover:text-rich-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block text-slate-grey-light">Website</span>
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

        <div className="mt-10 flex flex-col gap-4 border-t border-pure-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
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
