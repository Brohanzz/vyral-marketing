"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/site/Button";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  website: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const input =
  "min-h-12 w-full rounded-md border bg-surface px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted";
const inputBorder = (hasError?: boolean) => (hasError ? " border-primary-strong" : " border-hairline-strong");
const label = "mb-1.5 block text-[14px] font-medium text-ink-2";
const errorText = "mt-1 mb-0 text-[13px] text-primary-strong";
const required = (
  <span aria-hidden="true" className="text-primary-strong">
    *
  </span>
);
const optional = <span className="text-[13px] text-muted">(optional)</span>;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!form.email.includes("@")) {
      e.email = "Please enter a valid email";
    }
    if (!form.message.trim()) {
      e.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters";
    }
    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Couldn't reach the server. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (submitted) {
    return (
      <div role="status" className="rounded-lg bg-surface p-10 text-center shadow-3">
        <h2 className="m-0 font-display text-heading-2 font-medium text-ink">Message sent!</h2>
        <p className="mt-3.5 mb-0 text-[16px] leading-[1.7] text-muted">
          We&apos;ll get back to you as soon as possible. You can also reach us at{" "}
          <a href="mailto:hello@getvyral.io" className="font-semibold text-primary-hover underline underline-offset-2">
            hello@getvyral.io
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative rounded-lg bg-surface p-6 shadow-3 desk:p-10">
      {/* Honeypot: hidden from real users, filled only by bots */}
      <div className="pointer-events-none absolute -left-[9999px] size-px opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className="mb-5 grid gap-4 desk:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={label}>
            First Name {required}
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            aria-invalid={!!errors.firstName}
            className={input + inputBorder(!!errors.firstName)}
          />
          {errors.firstName && <p className={errorText}>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={label}>
            Last Name {required}
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            aria-invalid={!!errors.lastName}
            className={input + inputBorder(!!errors.lastName)}
          />
          {errors.lastName && <p className={errorText}>{errors.lastName}</p>}
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="email" className={label}>
          Email {required}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          className={input + inputBorder(!!errors.email)}
        />
        {errors.email && <p className={errorText}>{errors.email}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className={label}>
          Phone {optional}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          className={input + inputBorder()}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="company" className={label}>
          Company {optional}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          className={input + inputBorder()}
        />
      </div>

      <div className="mb-7">
        <label htmlFor="message" className={label}>
          Message {required}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          className={input + " resize-y" + inputBorder(!!errors.message)}
        />
        {errors.message && <p className={errorText}>{errors.message}</p>}
      </div>

      {submitError && (
        <p className={errorText + " mt-0 mb-3"} role="alert">
          {submitError}
        </p>
      )}

      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
