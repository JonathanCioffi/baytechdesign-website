import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSP Programming — Bay Tech Design Group",
};

function Column({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-bg-card border border-glass-border p-8 text-center hover:border-accent-blue/40 transition-colors">
      <h3 className="text-xl font-semibold mb-4 text-accent-gold">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function DSPProgramming() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Clear Audio Is Mandatory&hellip;{" "}
            <span className="text-accent-blue">We Hear You</span>
          </h1>
        </div>
      </section>

      {/* Three columns */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Column
              title="Say It"
              description="Microphones capture the human voice and instruments in every environment — from boardrooms to stadiums. Understanding microphone purpose and application is the first step to clear audio."
            />
            <Column
              title="Analyze It"
              description="Digital Signal Processing (DSP) is the brain of any audio system. It manipulates audio signals in real time — equalization, feedback suppression, noise cancellation, and automatic mixing — to ensure clarity and intelligibility."
            />
            <Column
              title="Hear It"
              description="Speakers deliver the final product. From ceiling-mounted conference speakers to line arrays for large venues, the right speaker type and design ensures every participant hears the message clearly."
            />
          </div>
        </div>
      </section>

      {/* Manufacturers */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Q-Sys", "Biamp", "Symetrix", "Shure"].map((name) => (
              <span
                key={name}
                className="rounded-lg bg-bg-card border border-glass-border px-5 py-2.5 text-sm font-medium text-text-primary"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom text */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-text-secondary leading-relaxed text-lg">
            Applying years of experience in live sound and conference support to
            state of the art digital signal processors allows Bay Tech to
            deliver quality sound to participants locally and on the
            &ldquo;far&nbsp;end&rdquo; of your collaborative meetings. We are
            certified with most of the major manufacturers.{" "}
            <span className="text-accent-blue font-semibold">
              Contact us to see how we can tune your audio for intelligibility.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
