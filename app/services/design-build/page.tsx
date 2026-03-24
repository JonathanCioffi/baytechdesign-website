import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Build Solutions — Bay Tech Design Group",
};

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-bg-card border border-glass-border p-8 hover:border-accent-gold/40 transition-colors">
      <h3 className="text-xl font-semibold mb-3 text-accent-blue">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function DesignBuild() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Recipe For{" "}
            <span className="text-accent-gold">Success</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            When your technologist is well versed in hardware and software
            solutions, on premises or cloud deployment, it&rsquo;s a recipe for a
            successful state of the art AVIT system.
          </p>
        </div>
      </section>

      {/* Four service cards */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Network Infrastructure"
              description="Network infrastructure is the foundation of modern communication. We design and deploy secure, stable networks that support today's demanding AV and IT workloads with room to grow."
            />
            <ServiceCard
              title="Collaborate"
              description="The hybrid workplace is here to stay. We deliver the tools and infrastructure teams need to work together seamlessly — whether they are in the office, at home, or on the road."
            />
            <ServiceCard
              title="Public Address"
              description="PA systems provide clear, intelligible audio to large audiences. From corporate campuses to houses of worship, we design public address solutions that ensure every message is heard."
            />
            <ServiceCard
              title="Entertainment Systems"
              description="High-quality components, smart home integration, and customization create immersive entertainment experiences. We bring cinema-quality audio and video into your space."
            />
          </div>
        </div>
      </section>
    </>
  );
}
