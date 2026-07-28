export const servicesHeroContent = {
  eyebrow: "Our Services",
  headline: "BPO, Insurance Brokerage & Operational Advisory Solutions.",
  subheading:
    "Modise Advisory Group supports businesses with scalable BPO services, insurance brokerage solutions, claims advisory, recoveries support, and operational improvement across complex service environments.",
} as const;

export const servicesOverviewContent = {
  heading: "Practical Solutions Across the Operational Value Chain",
  body: "Our services are designed to help organisations scale customer operations, access broker-related insurance solutions, strengthen claims and recoveries support, and improve operational performance.",
} as const;

export const serviceOverviewCards = [
  {
    id: "contact-centre-bpo-solutions",
    title: "Contact Centre & BPO Solutions",
    description:
      "Building and supporting scalable customer service, sales, claims administration, and back-office operations.",
    href: "/services#contact-centre-bpo-solutions",
  },
  {
    id: "insurance-brokerage-claims-advisory",
    title: "Insurance Brokerage & Claims Advisory",
    description:
      "Insurance brokerage solutions alongside claims advisory, recoveries support, and liability management guidance for individuals and organisations.",
    href: "/services#insurance-brokerage-claims-advisory",
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    description:
      "Practical frameworks and hands-on support to improve efficiency, reduce costs, and embed sustainable performance improvement across your operations.",
    href: "/services#operational-excellence",
  },
  {
    id: "procurement-vendor-management",
    title: "Procurement & Vendor Management",
    description:
      "Strategic procurement and vendor management support to optimise spend, strengthen supplier governance, and drive measurable value from third-party relationships.",
    href: "/services#procurement-vendor-management",
  },
] as const;

type ServiceGroup = {
  heading: string;
  items: readonly string[];
};

type DetailedService = {
  id: string;
  title: string;
  description: string;
  includes?: readonly string[];
  groups?: readonly ServiceGroup[];
};

export const detailedServices: readonly DetailedService[] = [
  {
    id: "contact-centre-bpo-solutions",
    title: "Contact Centre & BPO Solutions",
    description:
      "Building and supporting scalable customer service, sales, claims administration, and back-office operations.",
    includes: [
      "Contact centre setup",
      "Outsourced customer service",
      "Lead generation teams",
      "Appointment setting",
      "Workforce planning",
      "Quality assurance frameworks",
      "Training and coaching",
      "Back-office processing",
      "Data capturing",
      "Policy administration support",
    ],
  },
  {
    id: "insurance-brokerage-claims-advisory",
    title: "Insurance Brokerage & Claims Advisory",
    description:
      "Supporting individuals and organisations with insurance brokerage solutions, claims advisory, recoveries support, and liability management guidance.",
    groups: [
      {
        heading: "Insurance cover solutions",
        items: [
          "Funeral, travel, car & home insurance",
          "Corporate & commercial insurance",
          "Engineering, construction & heavy vehicle cover",
          "Professional indemnity & liability insurance",
        ],
      },
      {
        heading: "Claims, recoveries, and liability support",
        items: [
          "Claims audits",
          "Claims process review",
          "Claims governance",
          "Fraud management support",
          "Salvage optimisation",
          "Claims outsourcing support",
          "Third-party recoveries support",
          "Liability investigations support",
          "Litigation support coordination",
          "Recovery process optimisation",
          "Subrogation management",
          "Debt recovery consulting",
        ],
      },
    ],
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    description:
      "Improving operational efficiency, reducing costs, and creating practical frameworks for sustainable performance improvement.",
    includes: [
      "Process mapping",
      "SOP development",
      "KPI design",
      "Performance management",
      "Cost reduction initiatives",
      "Business process re-engineering",
    ],
  },
  {
    id: "procurement-vendor-management",
    title: "Procurement & Vendor Management",
    description:
      "Ensuring value creation through strategic procurement, stronger supplier governance, and improved vendor performance.",
    includes: [
      "Tender management",
      "Vendor audits",
      "SLA development",
      "Supplier performance management",
      "Contract reviews",
    ],
  },
] as const;

export const howWeDeliverSteps = [
  {
    title: "Understand operational and insurance service needs",
    description:
      "We take time to understand your BPO, insurance, claims, and operational priorities so solutions are grounded in real business requirements.",
  },
  {
    title: "Identify risks, gaps, and performance opportunities",
    description:
      "We pinpoint inefficiencies, service gaps, and areas where performance, control, or recovered value can be improved.",
  },
  {
    title: "Design practical service and advisory solutions",
    description:
      "We develop fit-for-purpose BPO, insurance brokerage, and operational advisory approaches aligned to your priorities.",
  },
  {
    title: "Support implementation and service delivery",
    description:
      "We support structured execution with clear accountability, practical delivery, and hands-on advisory where needed.",
  },
  {
    title: "Measure outcomes and refine performance",
    description:
      "We track results against defined metrics and refine approaches to sustain long-term improvement.",
  },
] as const;

export const servicesCtaContent = {
  heading: "Need BPO, insurance, or operational support?",
  body: "Speak to Modise Advisory Group about BPO services, insurance brokerage solutions, claims advisory, recoveries support, and operational improvement tailored to your organisation.",
} as const;
