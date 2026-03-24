import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DSP Programming — Bay Tech Design Group",
};

function AudioColumn({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="text-center">
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg mb-6">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-text-heading mb-3">{title}</h3>
      <p className="text-text-body text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function DSPProgramming() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/dsp-hero.jpg"
          alt="DSP Programming"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Clear Audio Is Mandatory&hellip;
          </h1>
          <p className="text-xl sm:text-2xl font-light opacity-90">
            We Hear You
          </p>
        </div>
      </section>

      {/* Three columns */}
      <section className="py-20 bg-bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AudioColumn
              title="Say It"
              imageSrc="/images/dsp-mic.jpg"
              imageAlt="Microphone"
              description="Microphones capture the human voice and instruments in every environment — from boardrooms to stadiums. Understanding microphone purpose and application is the first step to clear audio."
            />
            <AudioColumn
              title="Analyze It"
              imageSrc="/images/dsp-analyze.jpg"
              imageAlt="Audio analysis"
              description="Digital Signal Processing (DSP) is the brain of any audio system. It manipulates audio signals in real time — equalization, feedback suppression, noise cancellation, and automatic mixing — to ensure clarity and intelligibility."
            />
            <AudioColumn
              title="Hear It"
              imageSrc="/images/dsp-speaker.jpg"
              imageAlt="Speaker"
              description="Speakers deliver the final product. From ceiling-mounted conference speakers to line arrays for large venues, the right speaker type and design ensures every participant hears the message clearly."
            />
          </div>
        </div>
      </section>

      {/* Manufacturers */}
      <section className="py-16 bg-bg-light">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Q-Sys", "Biamp", "Symetrix", "Shure"].map((name) => (
              <span
                key={name}
                className="rounded bg-bg-white border border-border-light px-5 py-2.5 text-sm font-medium text-text-heading shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom text */}
      <section className="py-20 bg-bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-text-body leading-relaxed text-lg">
            Applying years of experience in live sound and conference support to
            state of the art digital signal processors allows Bay Tech to
            deliver quality sound to participants locally and on the
            &ldquo;far&nbsp;end&rdquo; of your collaborative meetings. We are
            certified with most of the major manufacturers. Contact us to see
            how we can tune your audio for intelligibility.
          </p>
        </div>
      </section>
    </>
  );
}
