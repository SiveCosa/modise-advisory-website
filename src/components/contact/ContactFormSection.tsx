"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  contactDetails,
  formFieldClass,
  formLabelClass,
  formNotice,
  serviceOptions,
} from "@/lib/contact-content";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [showNotice, setShowNotice] = useState(false);

  function validate(data: FormData) {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};

    if (!data.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!data.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!data.service) {
      nextErrors.service = "Please select a service.";
    }

    if (!data.message.trim()) {
      nextErrors.message = "Please enter your message.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setShowNotice(false);
      return;
    }

    setShowNotice(true);
  }

  function handleChange(
    field: keyof FormData,
    value: string,
  ) {
    setFormData((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  return (
    <section
      className="bg-midnight-navy/[0.03] py-16 sm:py-24"
      aria-labelledby="contact-form-heading"
    >
      <Container as="div">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            id="contact-form-heading"
            title="Send an Enquiry"
            subtitle="Complete the form below and we will respond once our enquiry system is fully configured."
            align="center"
            className="mx-auto"
          />

          <Card className="mt-12">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={formLabelClass}>
                    Name <span className="text-rich-gold">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    className={formFieldClass}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="contact-name-error" className="mt-1.5 text-sm text-rich-gold-dark">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-company" className={formLabelClass}>
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(event) => handleChange("company", event.target.value)}
                    className={formFieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className={formLabelClass}>
                    Email <span className="text-rich-gold">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    className={formFieldClass}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="contact-email-error" className="mt-1.5 text-sm text-rich-gold-dark">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-phone" className={formLabelClass}>
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    className={formFieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className={formLabelClass}>
                  Service Required <span className="text-rich-gold">*</span>
                </label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={(event) => handleChange("service", event.target.value)}
                  className={`${formFieldClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "contact-service-error" : undefined}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service ? (
                  <p id="contact-service-error" className="mt-1.5 text-sm text-rich-gold-dark">
                    {errors.service}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-message" className={formLabelClass}>
                  Message <span className="text-rich-gold">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  className={`${formFieldClass} resize-y min-h-[8rem]`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-1.5 text-sm text-rich-gold-dark">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Submit Enquiry
              </Button>
            </form>

            {showNotice ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-8 rounded-sm border border-rich-gold/30 bg-rich-gold/10 px-5 py-4"
              >
                <p className="text-sm leading-relaxed text-midnight-navy sm:text-base">
                  Thank you. This form is currently being configured. Please contact us directly
                  at{" "}
                  <a
                    href={formNotice.emailHref}
                    className="font-medium text-rich-gold transition-colors hover:text-rich-gold-dark"
                  >
                    {formNotice.email}
                  </a>{" "}
                  or via{" "}
                  <a
                    href={contactDetails.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-rich-gold transition-colors hover:text-rich-gold-dark"
                  >
                    WhatsApp
                  </a>{" "}
                  for immediate assistance.
                </p>
              </div>
            ) : null}
          </Card>
        </div>
      </Container>
    </section>
  );
}
