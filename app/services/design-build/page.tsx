import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Design Build Solutions — Bay Tech Design Group",
};

function AlternatingSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imageLeft,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
}) {
  const imageBlock = (
    <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <h3
        className="mb-4"
        style={{
          fontFamily: "orpheus-pro, serif",
          fontSize: "35.2px",
          fontWeight: 400,
          color: "#000",
        }}
      >
        {title}
      </h3>
      <p
        className="leading-relaxed"
        style={{
          fontFamily: "adobe-garamond-pro, serif",
          fontSize: "19.2px",
          color: "#000",
        }}
      >
        {description}
      </p>
    </div>
  );

  return (
    <section className="py-16" style={{ backgroundColor: "#e0e0db" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {imageLeft ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function DesignBuild() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center"
        style={{ height: "805px", backgroundColor: "#e0e0db" }}
      >
        <Image
          src="/images/build-hero.jpg"
          alt="Design Build Solutions"
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
            Recipe For Success
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "adobe-garamond-pro, serif",
              fontSize: "24px",
              color: "#000",
            }}
          >
            When your technologist is well versed in hardware and software
            solutions, on premises or cloud deployment, it&rsquo;s a recipe for a
            successful state of the art AVIT system.
          </p>
        </div>
      </section>

      {/* Alternating sections */}
      <AlternatingSection
        title="Network Infrastructure"
        description="Network infrastructure is the foundation of modern communication. We design and deploy secure, stable networks that support today's demanding AV and IT workloads with room to grow."
        imageSrc="/images/build-network.jpg"
        imageAlt="Network infrastructure"
        imageLeft={true}
      />

      <AlternatingSection
        title="Collaborate"
        description="The hybrid workplace is here to stay. We deliver the tools and infrastructure teams need to work together seamlessly — whether they are in the office, at home, or on the road."
        imageSrc="/images/build-collab.jpg"
        imageAlt="Collaboration"
        imageLeft={false}
      />

      <AlternatingSection
        title="Public Address"
        description="PA systems provide clear, intelligible audio to large audiences. From corporate campuses to houses of worship, we design public address solutions that ensure every message is heard."
        imageSrc="/images/build-pa.jpg"
        imageAlt="Public address systems"
        imageLeft={true}
      />

      <AlternatingSection
        title="Entertainment Systems"
        description="High-quality components, smart home integration, and customization create immersive entertainment experiences. We bring cinema-quality audio and video into your space."
        imageSrc="/images/build-entertainment.jpg"
        imageAlt="Entertainment systems"
        imageLeft={false}
      />
    </>
  );
}
