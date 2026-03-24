import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DSP Programming — Bay Tech Design Group",
};

export default function DSPProgramming() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{ height: "805px", backgroundColor: "#e0e0db" }}
      >
        <Image
          src="/images/dsp-hero.jpg"
          alt="DSP Programming"
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
            Clear Audio Is Mandatory&hellip;
          </h1>
          <p
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "24px",
              color: "#000",
            }}
          >
            We Hear You
          </p>
        </div>
      </section>

      {/* Three columns */}
      <section
        className="py-20"
        style={{ backgroundColor: "#e0e0db" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Say It",
                imageSrc: "/images/dsp-mic.jpg",
                imageAlt: "Microphone",
                description:
                  "Microphones capture the human voice and instruments in every environment \u2014 from boardrooms to stadiums. Understanding microphone purpose and application is the first step to clear audio.",
              },
              {
                title: "Analyze It",
                imageSrc: "/images/dsp-analyze.jpg",
                imageAlt: "Audio analysis",
                description:
                  "Digital Signal Processing (DSP) is the brain of any audio system. It manipulates audio signals in real time \u2014 equalization, feedback suppression, noise cancellation, and automatic mixing \u2014 to ensure clarity and intelligibility.",
              },
              {
                title: "Hear It",
                imageSrc: "/images/dsp-speaker.jpg",
                imageAlt: "Speaker",
                description:
                  "Speakers deliver the final product. From ceiling-mounted conference speakers to line arrays for large venues, the right speaker type and design ensures every participant hears the message clearly.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="relative aspect-square overflow-hidden shadow-lg mb-6">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
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

      {/* Manufacturers */}
      <section
        className="py-16"
        style={{ backgroundColor: "#e0e0db" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Q-Sys", "Biamp", "Symetrix", "Shure"].map((name) => (
              <span
                key={name}
                className="px-5 py-2.5 shadow-sm"
                style={{
                  fontFamily: "adobe-garamond-pro, serif",
                  fontSize: "16px",
                  color: "rgb(37, 53, 81)",
                  border: "1px solid #ccc",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom text */}
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
            Applying years of experience in live sound and conference support to
            state of the art digital signal processors allows Bay Tech to deliver
            quality sound to participants locally and on the
            &ldquo;far&nbsp;end&rdquo; of your collaborative meetings. We are
            certified with most of the major manufacturers. Contact us to see how
            we can tune your audio for intelligibility.
          </p>
        </div>
      </section>
    </>
  );
}
