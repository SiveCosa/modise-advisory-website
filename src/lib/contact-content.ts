import { siteConfig } from "./constants";

export const contactHeroContent = {
  eyebrow: "Contact Modise Advisory Group",
  headline: "Let's Discuss Your Business Challenges.",
  subheading:
    "Speak to Modise Advisory Group about advisory, recoveries, operational excellence, contact centre, procurement, and outsourcing solutions tailored to your organisation.",
} as const;

export const contactDetails = {
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
  email: siteConfig.email,
  emailHref: siteConfig.emailHref,
  directEmail: "thabo@modiseadvisory.co.za",
  directEmailHref: "mailto:thabo@modiseadvisory.co.za",
  whatsapp: siteConfig.phone,
  whatsappHref: siteConfig.whatsappHref,
  website: siteConfig.website,
  websiteHref: siteConfig.websiteHref,
  linkedIn: "Coming soon",
} as const;

export const contactOptionsHeading = "Start the Conversation";

export const contactOptions = [
  {
    title: "Phone",
    lines: [{ label: contactDetails.phone, href: contactDetails.phoneHref }],
  },
  {
    title: "Email",
    lines: [
      { label: contactDetails.email, href: contactDetails.emailHref },
      { label: `Direct: ${contactDetails.directEmail}`, href: contactDetails.directEmailHref },
    ],
  },
  {
    title: "WhatsApp",
    lines: [{ label: contactDetails.whatsapp, href: contactDetails.whatsappHref }],
  },
  {
    title: "Website",
    lines: [{ label: contactDetails.website, href: contactDetails.websiteHref }],
  },
] as const;

export const serviceOptions = [
  "Insurance & Claims Advisory",
  "Recoveries & Liability Management",
  "Operational Excellence",
  "Contact Centre & BPO Solutions",
  "Procurement & Vendor Management",
  "Outsourcing Solutions",
  "General Enquiry",
] as const;

export const formNotice = {
  message:
    "Thank you. This form is currently being configured. Please contact us directly at info@modiseadvisory.co.za or via WhatsApp for immediate assistance.",
  emailHref: contactDetails.emailHref,
  email: contactDetails.email,
} as const;

export const consultationCtaContent = {
  heading: "Prefer to speak directly?",
  body: "For urgent or direct enquiries, contact Modise Advisory Group by phone or WhatsApp.",
} as const;

export const businessInfoContent = {
  heading: "Business Information",
  linkedInNote: "LinkedIn page details will be added once available.",
} as const;

export const formFieldClass =
  "w-full rounded-sm border border-midnight-navy/20 bg-pure-white px-4 py-2.5 text-base text-midnight-navy placeholder:text-slate-grey-light transition-colors focus:border-rich-gold focus:outline-none focus:ring-2 focus:ring-rich-gold/20";

export const formLabelClass = "mb-2 block text-sm font-medium text-midnight-navy";
