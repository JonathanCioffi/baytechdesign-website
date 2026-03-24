import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Control Programming — Bay Tech Design Group",
};

export default function ControlProgramming() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Know So Your System{" "}
            <span className="text-accent-blue">Will Know</span>
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-3xl px-4 space-y-6">
          <p className="text-text-secondary leading-relaxed text-lg">
            There was a time when user interaction was paramount to controlling
            an environment. As our business and home systems evolved, it became
            obvious that our spaces can &ldquo;know&rdquo; what we want before
            we enter the room.
          </p>
          <p className="text-text-secondary leading-relaxed text-lg">
            We can guide you into solutions that involve scheduling, analytics,
            monitoring, and communicate with building management and critical
            systems to meet all of your daily functions and cyber-security
            goals.
          </p>
        </div>
      </section>

      {/* Deciphering the Code */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Deciphering the{" "}
            <span className="text-accent-gold">Code</span>
          </h2>
          <p className="text-text-secondary text-center leading-relaxed max-w-3xl mx-auto mb-12">
            Overall, control system programming plays a critical role in the
            design and implementation of complex systems, and it is constantly
            evolving with new technologies and techniques. By working with
            industry staples, such as Crestron, Q-Sys, Control4, Extron, and
            Cisco, we are able to deliver versatile solutions custom fit for our
            client&rsquo;s needs.
          </p>

          {/* Manufacturer badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {["Crestron", "Q-Sys", "Control4", "Extron", "Cisco"].map(
              (name) => (
                <span
                  key={name}
                  className="rounded-lg bg-bg-card border border-glass-border px-5 py-2.5 text-sm font-medium text-text-primary"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
