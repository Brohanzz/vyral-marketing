"use client";

import { useState, FormEvent } from "react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  padding: "10px 14px",
  color: "#fff",
  fontSize: 14,
  fontFamily: "Inter, sans-serif",
  boxSizing: "border-box",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 13,
  color: "rgba(255,255,255,0.65)",
  marginBottom: 6,
  display: "block",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 12,
  color: "#f87171",
  marginTop: 4,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
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

  const borderColor = (field: string) =>
    focused === field ? "#7c3aed" : "rgba(255,255,255,0.12)";

  if (submitted) {
    return (
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 40,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 28,
            color: "#fff",
            margin: "0 0 14px",
          }}
        >
          Message sent!
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          We&apos;ll get back to you as soon as possible. You can also reach us at{" "}
          <a
            href="mailto:hello@getvyral.io"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            hello@getvyral.io
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 40,
      }}
    >
      {/* Name row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 20,
        }}
      >
        <div>
          <label htmlFor="firstName" style={labelStyle}>
            First Name <span style={{ color: "#f87171" }}>*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            onFocus={() => setFocused("firstName")}
            onBlur={() => setFocused(null)}
            style={{ ...inputStyle, borderColor: errors.firstName ? "#f87171" : borderColor("firstName") }}
          />
          {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyle}>
            Last Name <span style={{ color: "#f87171" }}>*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            onFocus={() => setFocused("lastName")}
            onBlur={() => setFocused(null)}
            style={{ ...inputStyle, borderColor: errors.lastName ? "#f87171" : borderColor("lastName") }}
          />
          {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="email" style={labelStyle}>
          Email <span style={{ color: "#f87171" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          style={{ ...inputStyle, borderColor: errors.email ? "#f87171" : borderColor("email") }}
        />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}
      </div>

      {/* Phone */}
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="phone" style={labelStyle}>
          Phone <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          onFocus={() => setFocused("phone")}
          onBlur={() => setFocused(null)}
          style={{ ...inputStyle, borderColor: borderColor("phone") }}
        />
      </div>

      {/* Company */}
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="company" style={labelStyle}>
          Company <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          onFocus={() => setFocused("company")}
          onBlur={() => setFocused(null)}
          style={{ ...inputStyle, borderColor: borderColor("company") }}
        />
      </div>

      {/* Message */}
      <div style={{ marginBottom: 28 }}>
        <label htmlFor="message" style={labelStyle}>
          Message <span style={{ color: "#f87171" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          style={{
            ...inputStyle,
            resize: "vertical",
            borderColor: errors.message ? "#f87171" : borderColor("message"),
          }}
        />
        {errors.message && <p style={errorStyle}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          background: "#7c3aed",
          color: "#fff",
          borderRadius: 10,
          padding: "13px",
          fontSize: 15,
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          border: "none",
          cursor: "pointer",
          marginTop: 8,
        }}
      >
        Send message
      </button>
    </form>
  );
}
