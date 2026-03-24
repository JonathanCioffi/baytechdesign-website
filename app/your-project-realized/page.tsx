import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Your Project Realized — Bay Tech Design Group",
};

export default function YourProjectRealized() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{ height: "805px", backgroundColor: "#e0e0db" }}
      >
        <Image
          src="/images/project-hero.jpg"
          alt="Your Project Realized"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(224, 224, 219, 0.7)" }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
          <h1
            className="mb-4"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "64px",
              fontWeight: 400,
              lineHeight: 1.23,
              color: "#000",
            }}
          >
            It would be great if&hellip;
          </h1>
          <p
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "24px",
              color: "#000",
            }}
          >
            I knew where to begin.
          </p>
        </div>
      </section>

      {/* Easy as 1-2-3 */}
      <section
        className="py-20"
        style={{ backgroundColor: "#e0e0db" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "44.8px",
              fontWeight: 400,
              color: "#000",
            }}
          >
            It&rsquo;s Easy as 1-2-3
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Purpose",
                description:
                  "Define the problem you are trying to solve. Brainstorm potential solutions and consult with technologists who understand your industry.",
              },
              {
                number: "2",
                title: "Audience",
                description:
                  "Identify your stakeholders. Communicate needs clearly, build support, and ensure everyone is aligned on the vision.",
              },
              {
                number: "3",
                title: "Scope",
                description:
                  "Evaluate feasibility. Create a detailed plan with timelines, budgets, and measurable milestones.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="text-center p-8"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white mb-4"
                  style={{
                    backgroundColor: "rgb(37, 53, 81)",
                    fontFamily: "orpheus-pro, serif",
                    fontSize: "20px",
                    fontWeight: 400,
                  }}
                >
                  {item.number}
                </span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "orpheus-pro, serif",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "adobe-garamond-pro, serif",
                    fontSize: "19.2px",
                    color: "#000",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative" style={{ height: "400px" }}>
        <Image
          src="/images/project-plan.jpg"
          alt="Project planning"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(224, 224, 219, 0.3)" }}
        />
      </section>

      {/* We Have a Plan */}
      <section
        className="py-20"
        style={{ backgroundColor: "#e0e0db" }}
      >
        <div className="mx-auto max-w-[800px] px-6">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "44.8px",
              fontWeight: 400,
              color: "#000",
            }}
          >
            We Have a Plan
          </h2>
          <div className="space-y-6">
            {[
              "Define project goals and success measures.",
              "Identify stakeholders.",
              "Develop a detailed project plan.",
              "Assemble a skilled team.",
              "Monitor progress against the plan.",
              "Communicate with stakeholders.",
              "Test and launch thoroughly.",
              "Evaluate and improve.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm"
                  style={{
                    backgroundColor: "rgb(37, 53, 81)",
                    fontFamily: "orpheus-pro, serif",
                  }}
                >
                  {i + 1}
                </span>
                <p
                  className="leading-relaxed pt-0.5"
                  style={{
                    fontFamily: "adobe-garamond-pro, serif",
                    fontSize: "19.2px",
                    color: "#000",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        className="py-20"
        style={{ backgroundColor: "#e0e0db" }}
      >
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "19.2px",
              color: "#000",
            }}
          >
            Remember, executing a project takes time, effort, and commitment. But
            with careful planning, communication, and collaboration, you can turn
            your idea into a successful project. We are here to help!
          </p>
        </div>
      </section>
    </>
  );
}
