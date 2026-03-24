import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Project Realized — Bay Tech Design Group",
};

function PillarCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-bg-card border border-glass-border p-8 text-center hover:border-accent-blue/40 transition-colors">
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-blue/20 text-accent-blue font-bold text-xl mb-4">
        {number}
      </span>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Step({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-gold/20 text-accent-gold font-bold text-sm">
        {number}
      </span>
      <p className="text-text-secondary leading-relaxed pt-0.5">{text}</p>
    </div>
  );
}

export default function YourProjectRealized() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            It would be great if&hellip;{" "}
            <span className="text-accent-gold">
              I knew where to begin.
            </span>
          </h1>
        </div>
      </section>

      {/* Easy as 1-2-3 */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            It&rsquo;s Easy as{" "}
            <span className="text-accent-blue">1-2-3</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              number="1"
              title="Purpose"
              description="Define the problem you are trying to solve. Brainstorm potential solutions and consult with technologists who understand your industry."
            />
            <PillarCard
              number="2"
              title="Audience"
              description="Identify your stakeholders. Communicate needs clearly, build support, and ensure everyone is aligned on the vision."
            />
            <PillarCard
              number="3"
              title="Scope"
              description="Evaluate feasibility. Create a detailed plan with timelines, budgets, and measurable milestones."
            />
          </div>
        </div>
      </section>

      {/* We Have a Plan */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            We Have a <span className="text-accent-gold">Plan</span>
          </h2>
          <div className="space-y-6">
            <Step number={1} text="Define project goals and success measures." />
            <Step number={2} text="Identify stakeholders." />
            <Step number={3} text="Develop a detailed project plan." />
            <Step number={4} text="Assemble a skilled team." />
            <Step number={5} text="Monitor progress against the plan." />
            <Step number={6} text="Communicate with stakeholders." />
            <Step number={7} text="Test and launch thoroughly." />
            <Step number={8} text="Evaluate and improve." />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-lg text-text-secondary leading-relaxed">
            Remember, executing a project takes time, effort, and commitment.
            But with careful planning, communication, and collaboration, you can
            turn your idea into a successful project.{" "}
            <span className="text-accent-blue font-semibold">
              We are here to help!
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
