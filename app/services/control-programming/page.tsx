import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Control Programming — Bay Tech Design Group",
};

export default function ControlProgramming() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/control-hero.jpg"
          alt="Control programming"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Know So Your System Will Know
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
            There was a time when user interaction was paramount to controlling
            an environment. As our business and home systems evolved, it became
            obvious that our spaces can &ldquo;know&rdquo; what we want before
            we enter the room.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/control-code.jpg"
                alt="Control system code"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-heading mb-6">
                Deciphering the Code
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                Overall, control system programming plays a critical role in the
                design and implementation of complex systems, and it is constantly
                evolving with new technologies and techniques.
              </p>
              <p className="text-text-body leading-relaxed mb-6">
                We can guide you into solutions that involve scheduling, analytics,
                monitoring, and communicate with building management and critical
                systems to meet all of your daily functions and cyber-security
                goals.
              </p>
              <p className="text-text-body leading-relaxed mb-8">
                By working with industry staples, we are able to deliver versatile
                solutions custom fit for our client&rsquo;s needs.
              </p>

              {/* Manufacturer badges */}
              <div className="flex flex-wrap gap-3">
                {["Crestron", "Q-Sys", "Control4", "Extron", "Cisco"].map(
                  (name) => (
                    <span
                      key={name}
                      className="rounded bg-bg-light border border-border-light px-4 py-2 text-sm font-medium text-text-heading"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
