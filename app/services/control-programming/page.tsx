import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Control Programming — Bay Tech Design Group",
};

export default function ControlProgramming() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{ height: "805px", backgroundColor: "#e0e0db" }}
      >
        <Image
          src="/images/control-hero.jpg"
          alt="Control programming"
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
            className="mb-6"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "64px",
              fontWeight: 400,
              lineHeight: 1.23,
              color: "#000",
            }}
          >
            We Know So Your System Will Know
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "24px",
              color: "#000",
            }}
          >
            There was a time when user interaction was paramount to controlling an
            environment. As our business and home systems evolved, it became
            obvious that our spaces can &ldquo;know&rdquo; what we want before we
            enter the room.
          </p>
        </div>
      </section>

      {/* Body */}
      <section
        className="py-20"
        style={{ backgroundColor: "#e0e0db" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
              <Image
                src="/images/control-code.jpg"
                alt="Control system code"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "orpheus-pro, serif",
                  fontSize: "35.2px",
                  fontWeight: 400,
                  color: "#000",
                }}
              >
                Deciphering the Code
              </h2>
              <p
                className="leading-relaxed mb-6"
                style={{
                  fontFamily: "adobe-garamond-pro, serif",
                  fontSize: "19.2px",
                  color: "#000",
                }}
              >
                Overall, control system programming plays a critical role in the
                design and implementation of complex systems, and it is constantly
                evolving with new technologies and techniques.
              </p>
              <p
                className="leading-relaxed mb-6"
                style={{
                  fontFamily: "adobe-garamond-pro, serif",
                  fontSize: "19.2px",
                  color: "#000",
                }}
              >
                We can guide you into solutions that involve scheduling, analytics,
                monitoring, and communicate with building management and critical
                systems to meet all of your daily functions and cyber-security
                goals.
              </p>
              <p
                className="leading-relaxed mb-8"
                style={{
                  fontFamily: "adobe-garamond-pro, serif",
                  fontSize: "19.2px",
                  color: "#000",
                }}
              >
                By working with industry staples, we are able to deliver versatile
                solutions custom fit for our client&rsquo;s needs.
              </p>

              {/* Manufacturer badges */}
              <div className="flex flex-wrap gap-3">
                {["Crestron", "Q-Sys", "Control4", "Extron", "Cisco"].map(
                  (name) => (
                    <span
                      key={name}
                      className="px-4 py-2"
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
