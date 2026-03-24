import type { Metadata } from "next";
import Image from "next/image";

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
    <div className="bg-bg-white rounded-lg shadow-md p-8 text-center">
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-gold text-white font-bold text-xl mb-4">
        {number}
      </span>
      <h3 className="text-xl font-semibold text-text-heading mb-3">{title}</h3>
      <p className="text-text-body text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-text-heading text-white font-bold text-sm">
        {number}
      </span>
      <p className="text-text-body leading-relaxed pt-0.5">{text}</p>
    </div>
  );
}

export default function YourProjectRealized() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/project-hero.jpg"
          alt="Your Project Realized"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            It would be great if&hellip;
          </h1>
          <p className="text-xl sm:text-2xl font-light opacity-90">
            I knew where to begin.
          </p>
        </div>
      </section>

      {/* Easy as 1-2-3 */}
      <section className="py-20 bg-bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading text-center mb-12">
            It&rsquo;s Easy as 1-2-3
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

      {/* Image break */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/project-plan.jpg"
          alt="Project planning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* We Have a Plan */}
      <section className="py-20 bg-bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading text-center mb-12">
            We Have a Plan
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
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-lg text-text-body leading-relaxed">
            Remember, executing a project takes time, effort, and commitment.
            But with careful planning, communication, and collaboration, you can
            turn your idea into a successful project. We are here to help!
          </p>
        </div>
      </section>
    </>
  );
}
