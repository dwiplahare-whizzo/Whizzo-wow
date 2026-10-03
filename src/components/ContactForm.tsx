"use client";

import { useState } from "react";

export function ContactForm({ context = "general" }: { context?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, context }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="wz-form__status">
        Thanks — your message is in. We reply within two business days.
      </div>
    );
  }

  return (
    <form className="wz-form" onSubmit={onSubmit}>
      <div className="wz-form__two">
        <div className="wz-form__row">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required />
        </div>
        <div className="wz-form__row">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" />
        </div>
      </div>
      <div className="wz-form__two">
        <div className="wz-form__row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="wz-form__row">
          <label htmlFor="country">Country</label>
          <input id="country" name="country" />
        </div>
      </div>
      <div className="wz-form__row">
        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button className="wz-btn wz-btn--primary" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send"}
      </button>
      {state === "error" ? (
        <div className="wz-form__status">Something went wrong. Email us directly at sales@whizzo.org.</div>
      ) : null}
    </form>
  );
}
