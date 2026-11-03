"use client";

import { useId, useState } from "react";
import { subscribeToNewsletter } from "@/lib/newsletter";
import Button from "./Button";

type Status = "idle" | "loading" | "success" | "error";

const input =
  "min-h-12 min-w-0 flex-1 rounded-md border border-band-hairline-strong bg-band-surface px-4 text-[15px] text-on-dark placeholder:text-on-dark-muted disabled:opacity-60";

// Newsletter signup, drawn for dark surfaces (footer, newsletter page, blog posts).
// Loops double opt-in, so success means a confirmation email was sent.
export default function NewsletterSignup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const uid = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");

    const result = await subscribeToNewsletter(email, firstName);
    if (!result.ok) {
      setError(result.message);
      setStatus("error");
      return;
    }
    setStatus("success");
    setFirstName("");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p role="status" aria-live="polite" className="m-0 text-[15px] leading-normal text-on-dark">
        Almost there. Check your inbox and click the confirmation link to finish signing up.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-2 desk:flex-row">
        <label htmlFor={`${uid}-first`} className="sr-only">
          First name
        </label>
        <input
          id={`${uid}-first`}
          type="text"
          name="firstName"
          autoComplete="given-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          disabled={status === "loading"}
          className={input}
        />
        <label htmlFor={`${uid}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${uid}-email`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className={input}
        />
        <Button type="submit" variant="on-dark" disabled={status === "loading"}>
          {status === "loading" ? "Signing up..." : "Sign up"}
        </Button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-2.5 mb-0 text-[14px] leading-normal text-band-signal-ink">
          {error}
        </p>
      )}
    </form>
  );
}
