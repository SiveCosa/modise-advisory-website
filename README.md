# Modise Advisory Group Website

A professional responsive business website developed for **Modise Advisory Group**, a South African advisory and operational consulting business.

This project was completed as real freelance/client work and was designed to present the company’s services, industries, outsourcing offering, business information and contact channels in a polished and professional way.

The site is built with **Next.js, React, TypeScript and Tailwind CSS**, with deployment configured for **Cloudflare Pages** and a serverless contact form powered by **Cloudflare Pages Functions and Resend**.

## Live Website

[www.modiseadvisory.co.za](https://www.modiseadvisory.co.za)

## Features

### Responsive Business Website

The site is fully responsive and designed to work across desktop and mobile devices.

Key pages include:

- Home
- About
- Services
- Outsourcing
- Industries
- Contact

The navigation automatically adapts between desktop and mobile layouts.

### Component-Based Frontend

The website uses reusable React components for common interface elements and page sections, including:

- Navigation
- Footer
- Buttons
- Containers
- Cards
- Section headings
- Hero sections
- Calls to action

This keeps the interface consistent across the site and makes the application easier to maintain.

### Contact Form

The contact form allows prospective clients to send enquiries directly through the website.

It includes:

- Client-side validation
- Server-side validation
- Required-field validation
- Email-format validation
- Honeypot spam protection
- Submission status feedback
- Reply-to support using the visitor’s submitted email address

The frontend sends requests to a Cloudflare Pages Function at:

```text
/api/contact
```

The backend sends enquiry emails through the Resend API.

Sensitive values are stored securely as Cloudflare environment variables:

```text
RESEND_API_KEY
CONTACT_TO_EMAIL
CONTACT_FROM_EMAIL
```

No production email credentials are stored in the repository.

### Business Contact Integration

The website includes direct contact options such as:

- Telephone links
- Email links
- WhatsApp integration
- Contact enquiry form

### SEO & Metadata

The project includes structured metadata for individual pages using the Next.js Metadata API.

SEO features include:

- Page-specific titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Twitter card metadata
- Search-engine indexing configuration
- Branded favicon and icon metadata

### Static Export

The Next.js application is configured for static export:

```ts
output: "export"
```

This allows the frontend to be deployed efficiently to Cloudflare Pages while the contact form is handled separately through Cloudflare Pages Functions.

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- HTML5
- CSS

### Backend / Serverless

- Cloudflare Pages Functions
- JavaScript
- Resend Email API

### Deployment

- Cloudflare Pages
- Static Next.js export

### Development Tools

- Git
- GitHub
- Cursor IDE
- npm
- ESLint

## Project Structure

```text
modise-advisory-website/
│
├── functions/
│   └── api/
│       └── contact.js          # Cloudflare Pages contact-form backend
│
├── public/
│   └── assets/                 # Logos and public website assets
│
├── scripts/                    # Utility scripts
│
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── industries/
│   │   ├── outsourcing/
│   │   ├── services/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/             # Reusable UI and page components
│   └── lib/                    # Site configuration, metadata and shared content
│
├── next.config.ts
├── package.json
└── README.md
```

## Main Website Sections

The homepage is structured using reusable sections including:

- Hero section
- Why Modise Advisory
- Services preview
- Industries
- Outsourcing
- Client results
- Call to action

The website presents business services including:

- Insurance Advisory
- Recoveries
- Liability
- Operational Excellence
- Contact Centres
- Outsourcing

## Local Development

### Requirements

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/SiveCosa/modise-advisory-website.git
```

Navigate into the project:

```bash
cd modise-advisory-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

Create a production build using:

```bash
npm run build
```

The project is configured as a static export for deployment to Cloudflare Pages.

## Contact Form Configuration

The contact form requires the following environment variables in the Cloudflare Pages environment:

```text
RESEND_API_KEY
CONTACT_TO_EMAIL
CONTACT_FROM_EMAIL
```

These values should never be committed to source control.

## Screenshots

Portfolio screenshots will be added here to demonstrate:

- Desktop homepage
- Mobile homepage
- Services page
- Outsourcing page
- Industries page
- Contact page
- Responsive navigation
- Contact form

## What I Worked On

As the developer on this project, I was responsible for translating the client’s business and branding requirements into a functional responsive website.

My work included:

- Designing and implementing the website structure
- Building the responsive frontend
- Creating reusable React components
- Implementing mobile navigation
- Building service and business-information pages
- Implementing the contact form
- Integrating email delivery through Resend
- Configuring Cloudflare Pages deployment
- Implementing SEO metadata
- Integrating business contact channels
- Applying the client’s branding and visual identity
- Testing and refining the website across desktop and mobile layouts

## What I Learned

This project strengthened my practical experience with:

- Real client requirements
- Next.js App Router
- TypeScript
- React component architecture
- Tailwind CSS
- Responsive web design
- Serverless functions
- REST-style form submission
- Environment-variable management
- Third-party API integration
- Static site deployment
- SEO implementation
- Git-based development workflows

## Project Context

This website was developed as a freelance project for a real business client.

The repository is included in my portfolio to demonstrate my ability to take a business requirement from planning through implementation, testing and deployment.

## Author

**Sive Cosa**

BSc Information Technology graduate specialising in Software Engineering.

- GitHub: [SiveCosa](https://github.com/SiveCosa)
- LinkedIn: To be added after profile update
