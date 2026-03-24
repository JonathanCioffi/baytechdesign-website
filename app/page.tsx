import Link from "next/link";

function CloudCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl bg-bg-card border border-glass-border p-6 hover:border-accent-blue/40 transition-colors">
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="mb-4 text-accent-gold font-medium tracking-wide uppercase text-sm">
            Bay Tech Design Group
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            This is where the story begins&hellip;
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            You have a project. You have a vision. We have the expertise to make
            it reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/your-project-realized"
              className="rounded-lg bg-accent-blue px-6 py-3 font-semibold text-white hover:bg-accent-blue/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-border px-6 py-3 font-semibold text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Moves Fast */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Technology Moves Fast.{" "}
            <span className="text-accent-blue">We Move Faster.</span>
          </h2>
          <p className="text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            In a world driven by cutting-edge technology, AI, cloud computing,
            and cybersecurity, staying ahead is not optional &mdash; it is
            essential. We share our expertise, foster community, and help you
            harness the technologies that matter most.
          </p>
        </div>
      </section>

      {/* AVIT Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            AVIT&hellip;{" "}
            <span className="text-accent-gold">Another Abbreviation!</span>
          </h2>
          <p className="text-text-secondary text-center max-w-3xl mx-auto leading-relaxed mb-4">
            AVIT stands for Audio-Visual and Information Technology. It is the
            integration of audio-visual systems with information technology to
            create seamless, enhanced communication experiences.
          </p>
          <p className="text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            Think video conferencing, digital signage, interactive whiteboards,
            and professional sound systems &mdash; all working together on a
            unified IT backbone. That is what we do.
          </p>
        </div>
      </section>

      {/* Clouds in the Forecast */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Clouds in the <span className="text-accent-blue">Forecast</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CloudCard
              title="Cost Savings"
              description="Reduce capital expenditures by leveraging cloud infrastructure. Pay only for what you use and scale on demand."
            />
            <CloudCard
              title="Scalability"
              description="Grow your systems effortlessly. Cloud platforms scale up or down to meet your organization's changing needs."
            />
            <CloudCard
              title="Accessibility"
              description="Access your tools and data from anywhere in the world, on any device, at any time."
            />
            <CloudCard
              title="Data Security"
              description="Enterprise-grade security, encryption, and compliance built into the cloud from the ground up."
            />
            <CloudCard
              title="Collaboration"
              description="Empower teams to work together in real time, regardless of location, with shared cloud-based platforms."
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <blockquote className="text-2xl sm:text-3xl font-medium italic text-text-primary leading-relaxed">
            &ldquo;Coming together is a beginning, staying together is progress,
            and working together is success.&rdquo;
          </blockquote>
          <p className="mt-6 text-accent-gold font-semibold">
            &mdash; Henry Ford
          </p>
        </div>
      </section>
    </>
  );
}
