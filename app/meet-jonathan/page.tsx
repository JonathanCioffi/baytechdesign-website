import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Jonathan — Bay Tech Design Group",
};

export default function MeetJonathan() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-bg-dark">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            I&rsquo;m Jonathan&hellip;
          </h1>
          <p className="text-lg sm:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            With 30 years experience in the AVIT solutions market, we can
            design, implement, and service your project.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
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
              <p className="text-text-body leading-relaxed">
                I&rsquo;m Jonathan Cioffi, and I want to thank you for learning
                more about Bay Tech. The story of Bay Tech is not necessarily
                that different from most in the AVIT market. I wanted to be in
                the entertainment industry as a screen or stage playwrite and
                director.
              </p>
              <p className="text-text-body leading-relaxed">
                Until this happened, I used my experience in the theater and my
                technology knowledge temporarily in rentals, staging, and
                finally permanent installations. As I continued to learn the
                AVIT business, I knew I found a home.
              </p>
              <p className="text-text-body leading-relaxed">
                I am able to create memorable experiences in a variety of
                venues. It would be my pleasure to execute your vision and look
                forward to working with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
