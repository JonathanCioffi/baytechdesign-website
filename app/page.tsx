import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/hero-home.png"
          alt="Bay Tech Design Group hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-[#1a1a1a]">
            This is where the story begins&hellip;
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-[#333]">
            You have a project.&nbsp; You have a vision.&nbsp; We have the expertise to make
            it reality.
          </p>
        </div>
      </section>

      {/* Technology Moves Fast */}
      <section className="py-20 bg-bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading mb-6">
            Technology Moves Fast. We Move Faster.
          </h2>
          <p className="text-text-body max-w-3xl mx-auto leading-relaxed text-lg">
            In a world driven by cutting-edge technology, AI, cloud computing,
            and cybersecurity, staying ahead is not optional &mdash; it is
            essential. We share our expertise, foster community, and help you
            harness the technologies that matter most.
          </p>
        </div>
      </section>

      {/* AVIT Section — image background */}
      <section className="relative py-28 flex items-center justify-center">
        <Image
          src="/images/avit-section.jpg"
          alt="AVIT technology"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            AVIT&hellip; Another Abbreviation!
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-lg opacity-90 mb-4">
            AVIT stands for Audio-Visual and Information Technology. It is the
            integration of audio-visual systems with information technology to
            create seamless, enhanced communication experiences.
          </p>
          <p className="max-w-3xl mx-auto leading-relaxed text-lg opacity-90">
            Think video conferencing, digital signage, interactive whiteboards,
            and professional sound systems &mdash; all working together on a
            unified IT backbone. That is what we do.
          </p>
        </div>
      </section>

      {/* Clouds in the Forecast */}
      <section className="py-20 bg-bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading text-center mb-12">
            Clouds in the Forecast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { title: "Cost Savings", desc: "Reduce capital expenditures by leveraging cloud infrastructure. Pay only for what you use and scale on demand." },
                { title: "Scalability", desc: "Grow your systems effortlessly. Cloud platforms scale up or down to meet your organization's changing needs." },
                { title: "Accessibility", desc: "Access your tools and data from anywhere in the world, on any device, at any time." },
                { title: "Data Security", desc: "Enterprise-grade security, encryption, and compliance built into the cloud from the ground up." },
                { title: "Collaboration", desc: "Empower teams to work together in real time, regardless of location, with shared cloud-based platforms." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold text-text-heading mb-1">{item.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/cloud-section.jpg"
                alt="Cloud technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-light italic text-text-heading leading-relaxed">
            &ldquo;Coming together is a beginning, staying together is progress,
            and working together is success.&rdquo;
          </blockquote>
          <p className="mt-6 text-text-muted font-medium">
            &mdash; Henry Ford
          </p>
        </div>
      </section>

      {/* Collaboration Section — image background */}
      <section className="relative py-28 flex items-center justify-center">
        <Image
          src="/images/collab-section.jpg"
          alt="Collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Collaboration Is Key
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-lg opacity-90">
            The hybrid workplace is here to stay. We deliver the tools and
            infrastructure teams need to work together seamlessly &mdash; whether
            they are in the office, at home, or on the road.
          </p>
        </div>
      </section>
    </>
  );
}
