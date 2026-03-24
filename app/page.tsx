import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ===== Section 1 — Hero (h:805px) ===== */}
      <section
        className="relative flex items-end justify-center"
        style={{ height: "805px", backgroundColor: "#e0e0db" }}
      >
        {/* Hero background image */}
        <Image
          src="/images/hero-home.png"
          alt="Bay Tech Design Group hero"
          fill
          className="object-cover"
          priority
        />
        {/* Warm light gray overlay at 0.7 opacity */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(224, 224, 219, 0.7)" }}
        />
        {/* Text block — centered in lower half */}
        <div
          className="relative z-10 mx-auto max-w-[1200px] px-6 text-center"
          style={{ paddingBottom: "120px" }}
        >
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
            This is where the story begins&hellip;
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "24px",
              color: "#000",
            }}
          >
            You have a project.&nbsp; You have a vision.&nbsp; We have the
            expertise to make it reality.
          </p>
        </div>
      </section>

      {/* ===== Section 2 — "Technology Moves Fast" (h:998px) ===== */}
      <section
        className="flex items-center justify-center"
        style={{
          minHeight: "998px",
          backgroundColor: "#2a2829",
          color: "#fff",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center py-20">
          <h2
            className="mb-8"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "44.8px",
              fontWeight: 400,
              lineHeight: 1.23,
            }}
          >
            Technology Moves Fast. We Move Faster.
          </h2>
          <div
            className="max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "35.2px",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            <p>
              In a world driven by cutting-edge technology, AI, cloud computing,
              and cybersecurity, staying ahead is not optional &mdash; it is
              essential. We share our expertise, foster community, and help you
              harness the technologies that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 3 — "AVIT… Another Abbreviation!" (h:641px) ===== */}
      <section
        className="flex items-center justify-center"
        style={{
          minHeight: "641px",
          backgroundColor: "#e0e0db",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center py-20">
          <h2
            className="mb-8"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "44.8px",
              fontWeight: 400,
              color: "rgb(37, 53, 81)",
            }}
          >
            AVIT&hellip; Another Abbreviation!
          </h2>
          <p
            className="max-w-3xl mx-auto leading-relaxed mb-4"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "19.2px",
              color: "rgb(37, 53, 81)",
            }}
          >
            AVIT stands for Audio-Visual and Information Technology. It is the
            integration of audio-visual systems with information technology to
            create seamless, enhanced communication experiences.
          </p>
          <p
            className="max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "19.2px",
              color: "rgb(37, 53, 81)",
            }}
          >
            Think video conferencing, digital signage, interactive whiteboards,
            and professional sound systems &mdash; all working together on a
            unified IT backbone. That is what we do.
          </p>
        </div>
      </section>

      {/* ===== Section 4 — "Clouds in the Forecast" (h:901px) ===== */}
      <section
        className="relative flex items-center justify-center"
        style={{
          minHeight: "901px",
          backgroundColor: "#e0e0db",
        }}
      >
        {/* Background image */}
        <Image
          src="/images/cloud-section.jpg"
          alt="Cloud technology"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(224, 224, 219, 0.75)" }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "44.8px",
              fontWeight: 400,
              color: "#000",
            }}
          >
            Clouds in the Forecast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                {
                  title: "Cost Savings",
                  desc: "Reduce capital expenditures by leveraging cloud infrastructure. Pay only for what you use and scale on demand.",
                },
                {
                  title: "Scalability",
                  desc: "Grow your systems effortlessly. Cloud platforms scale up or down to meet your organization\u2019s changing needs.",
                },
                {
                  title: "Accessibility",
                  desc: "Access your tools and data from anywhere in the world, on any device, at any time.",
                },
                {
                  title: "Data Security",
                  desc: "Enterprise-grade security, encryption, and compliance built into the cloud from the ground up.",
                },
                {
                  title: "Collaboration",
                  desc: "Empower teams to work together in real time, regardless of location, with shared cloud-based platforms.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3
                    className="mb-1"
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
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
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

      {/* ===== Section 5 — Henry Ford Quote ===== */}
      <section
        className="flex items-center justify-center"
        style={{
          minHeight: "400px",
          backgroundColor: "#e0e0db",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center py-20">
          <blockquote
            className="leading-relaxed"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "35.2px",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#000",
            }}
          >
            &ldquo;Coming together is a beginning, staying together is progress,
            and working together is success.&rdquo;
          </blockquote>
          <p
            className="mt-6"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "19.2px",
              color: "#666",
            }}
          >
            &mdash; Henry Ford
          </p>
        </div>
      </section>

      {/* ===== Section 6 — Collaboration text ===== */}
      <section
        className="flex items-center justify-center"
        style={{
          backgroundColor: "#e0e0db",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2
            className="mb-8"
            style={{
              fontFamily: "orpheus-pro, serif",
              fontSize: "44.8px",
              fontWeight: 400,
              color: "#000",
            }}
          >
            Collaboration Is Key
          </h2>
          <p
            className="max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "19.2px",
              color: "#000",
            }}
          >
            The hybrid workplace is here to stay. We deliver the tools and
            infrastructure teams need to work together seamlessly &mdash; whether
            they are in the office, at home, or on the road.
          </p>
        </div>
      </section>
    </>
  );
}
