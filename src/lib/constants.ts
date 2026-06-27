export const siteConfig = {
  name: "Modise Advisory Group",
  tagline: "Transforming Operations. Recovering Value. Delivering Results.",
  url: "https://www.modiseadvisory.co.za",
  services: [
    "Insurance Advisory",
    "Recoveries",
    "Liability",
    "Operational Excellence",
    "Contact Centres",
    "Outsourcing",
  ],
  phone: "+27 84 999 7309",
  phoneHref: "tel:+27849997309",
  whatsappHref: "https://wa.me/27849997309",
  email: "info@modiseadvisory.co.za",
  emailHref: "mailto:info@modiseadvisory.co.za",
  directEmail: "thabo@modiseadvisory.co.za",
  directEmailHref: "mailto:thabo@modiseadvisory.co.za",
  website: "www.modiseadvisory.co.za",
  websiteHref: "https://www.modiseadvisory.co.za",
  linkedIn: "Coming soon",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Outsourcing", href: "/outsourcing" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;
