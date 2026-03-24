import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Jonathan — Bay Tech Design Group",
};

export default function MeetJonathan() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex items-center justify-center"
        style={{
          paddingTop: "280px",
          paddingBottom: "80px",
          backgroundColor: "#e0e0db",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
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
            I&rsquo;m Jonathan&hellip;
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "24px",
              color: "#000",
            }}
          >
            With 30 years experience in the AVIT solutions market, we can design,
            implement, and service your project.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section
        className="py-20"
        style={{ backgroundColor: "#e0e0db" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-80 overflow-hidden shadow-lg">
                <Image
                  src="/images/jonathan.jpg"
                  alt="Jonathan Cioffi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-3 space-y-6">
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "adobe-garamond-pro, serif",
                  fontSize: "19.2px",
                  color: "#000",
                }}
              >
                I&rsquo;m Jonathan Cioffi, and I want to thank you for learning
                more about Bay Tech. The story of Bay Tech is not necessarily that
                different from most in the AVIT market. I wanted to be in the
                entertainment industry as a screen or stage playwrite and director.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "adobe-garamond-pro, serif",
                  fontSize: "19.2px",
                  color: "#000",
                }}
              >
                Until this happened, I used my experience in the theater and my
                technology knowledge temporarily in rentals, staging, and finally
                permanent installations. As I continued to learn the AVIT business,
                I knew I found a home.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "adobe-garamond-pro, serif",
                  fontSize: "19.2px",
                  color: "#000",
                }}
              >
                I am able to create memorable experiences in a variety of venues.
                It would be my pleasure to execute your vision and look forward to
                working with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
