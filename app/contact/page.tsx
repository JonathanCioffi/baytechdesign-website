"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Contact <span className="text-accent-blue">us.</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                  Email
                </h2>
                <a
                  href="mailto:info@baytechdesign.com"
                  className="text-accent-blue hover:underline"
                >
                  info@baytechdesign.com
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                  Phone
                </h2>
                <a
                  href="tel:+17322323910"
                  className="text-text-primary hover:text-accent-blue transition-colors"
                >
                  (732) 232-3910
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                  Address
                </h2>
                <address className="not-italic text-text-secondary leading-relaxed">
                  123 Freedom Hills Drive
                  <br />
                  Barnegat, NJ 08005
                </address>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-xl bg-bg-card border border-accent-blue/40 p-10 text-center">
                  <p className="text-2xl font-semibold text-accent-blue mb-2">
                    Thank you!
                  </p>
                  <p className="text-text-secondary">
                    We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white hover:bg-accent-blue/90 transition-colors"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
