import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Jonathan — Bay Tech Design Group",
};

export default function MeetJonathan() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/5" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            I&rsquo;m <span className="text-accent-gold">Jonathan&hellip;</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            With 30 years experience in the AVIT solutions market, we can
            design, implement, and service your project.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-bg-secondary">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="md:col-span-2 flex justify-center">
              <div className="w-64 h-80 rounded-2xl bg-bg-card border border-glass-border flex items-center justify-center">
                <span className="text-text-muted text-sm text-center px-4">
                  Jonathan Cioffi
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-text-secondary leading-relaxed">
                I&rsquo;m Jonathan Cioffi, and I want to thank you for learning
                more about Bay Tech. The story of Bay Tech is not necessarily
                that different from most in the AVIT market. I wanted to be in
                the entertainment industry as a screen or stage playwrite and
                director.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Until this happened, I used my experience in the theater and my
                technology knowledge temporarily in rentals, staging, and
                finally permanent installations. As I continued to learn the
                AVIT business, I knew I found a home.
              </p>
              <p className="text-text-secondary leading-relaxed">
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
