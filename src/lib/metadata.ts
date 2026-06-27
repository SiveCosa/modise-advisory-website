import type { Metadata } from "next";
import { siteConfig } from "./constants";
import { logoIconPath } from "./seo";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_ZA",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  icons: {
    icon: [{ url: logoIconPath, type: "image/svg+xml" }],
    apple: [{ url: logoIconPath, type: "image/svg+xml" }],
    shortcut: [logoIconPath],
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
