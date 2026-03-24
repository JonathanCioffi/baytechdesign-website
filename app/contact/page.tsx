"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20 bg-bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-heading">
            Contact us.
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-bg-light">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Email
                </h2>
                <a
                  href="mailto:info@baytechdesign.com"
                  className="text-text-heading hover:text-accent-gold transition-colors"
                >
                  info@baytechdesign.com
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Phone
                </h2>
                <a
                  href="tel:+17322323910"
                  className="text-text-heading hover:text-accent-gold transition-colors"
                >
                  (732) 232-3910
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Address
                </h2>
                <address className="not-italic text-text-body leading-relaxed">
                  123 Freedom Hills Drive
                  <br />
                  Barnegat, NJ 08005
                </address>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-lg bg-bg-white border border-border-light p-10 text-center shadow-sm">
                  <p className="text-2xl font-semibold text-text-heading mb-2">
                    Thank you!
                  </p>
                  <p className="text-text-muted">
                    We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-body mb-1.5"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded border border-border-light bg-bg-white px-4 py-2.5 text-text-heading placeholder-text-light focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-body mb-1.5"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded border border-border-light bg-bg-white px-4 py-2.5 text-text-heading placeholder-text-light focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-body mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded border border-border-light bg-bg-white px-4 py-2.5 text-text-heading placeholder-text-light focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded bg-text-heading px-6 py-3 font-semibold text-white hover:bg-black transition-colors"
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
