import AboutSection from "@/components/fragment/home-page/AboutSection";
import CoreValueSection from "@/components/fragment/CoreValueSection";
import HeroSection from "@/components/fragment/home-page/HeroSection";
import PertnerSection from "@/components/fragment/home-page/PartnerSection";
import ProjectShowcaseSection from "@/components/fragment/home-page/ProjectShowcaseSection";
import ServiceSection from "@/components/fragment/home-page/ServiceSection";
import Image from "next/image";
import { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | ${pageMetadata.home.title}`,
    description: pageMetadata.home.description,
    url: siteConfig.url,
    type: "website",
  },
  twitter: {
    title: `${siteConfig.name} | ${pageMetadata.home.title}`,
    description: pageMetadata.home.description,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* CSS Gradient - 0 KiB, instant render */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -top-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, transparent 50%)",
        }}
      />

      <div className="relative overflow-hidden">
        <HeroSection />

        {/* Background gradient 1 */}
        <Image
          alt=""
          aria-hidden="true"
          src="/background/bg-gradient-1.png"
          width={960}
          height={334}
          quality={40}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="pointer-events-none absolute w-full h-full lg:left-1/4 left-1/2 -top-40"
        />

        <AboutSection />
        <ServiceSection />
        <CoreValueSection />
      </div>

      <div className="relative">
        {/* Background gradient 2 */}
        <Image
          src="/background/bg-gradient-2.png"
          alt=""
          aria-hidden="true"
          width={960}
          height={334}
          quality={40}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="pointer-events-none absolute w-full h-full md:-left-80 -left-30 -top-1/2"
        />

        {/* Background gradient 3 */}
        <Image
          alt=""
          aria-hidden="true"
          src="/background/bg-gradient-3.png"
          width={960}
          height={334}
          quality={40}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="pointer-events-none absolute w-full h-full sm:-bottom-60 md:-left-80 -left-40"
        />

        <ProjectShowcaseSection />
        <PertnerSection />
      </div>
    </div>
  );
}
