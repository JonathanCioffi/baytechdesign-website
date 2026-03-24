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
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-text-heading mb-4">
        {title}
      </h3>
      <p className="text-text-body leading-relaxed">{description}</p>
    </div>
  );

  return (
    <section className="py-16 bg-bg-white">
      <div className="mx-auto max-w-6xl px-6">
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
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/build-hero.jpg"
          alt="Design Build Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Recipe For Success
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
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

      <div className="border-t border-border-light" />

      <AlternatingSection
        title="Collaborate"
        description="The hybrid workplace is here to stay. We deliver the tools and infrastructure teams need to work together seamlessly — whether they are in the office, at home, or on the road."
        imageSrc="/images/build-collab.jpg"
        imageAlt="Collaboration"
        imageLeft={false}
      />

      <div className="border-t border-border-light" />

      <AlternatingSection
        title="Public Address"
        description="PA systems provide clear, intelligible audio to large audiences. From corporate campuses to houses of worship, we design public address solutions that ensure every message is heard."
        imageSrc="/images/build-pa.jpg"
        imageAlt="Public address systems"
        imageLeft={true}
      />

      <div className="border-t border-border-light" />

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
