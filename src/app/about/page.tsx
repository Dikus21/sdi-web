import BackgroundSection from "@/components/fragment/about-page/BackgroundSection";
import ExcellenceSection from "@/components/fragment/about-page/ExcellenceSection";
import HeroSection from "@/components/fragment/HeroSection";
import VisionMissionSection from "@/components/fragment/about-page/VisionMissionSection";
import CoreValueSection from "@/components/fragment/CoreValueSection";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `${pageMetadata.about.title} | ${siteConfig.name}`,
    description: pageMetadata.about.description,
    url: `${siteConfig.url}/about`,
    type: "website",
  },
  twitter: {
    title: `${pageMetadata.about.title} | ${siteConfig.name}`,
    description: pageMetadata.about.description,
  },
};
export default function AboutUsPage() {
  return (
    <div className="relative flex flex-col gap-10 sm:gap-20 w-full overflow-hidden">
      <Image
        src="/background/bg-gradient-1.png"
        alt=""
        aria-hidden="true"
        width={1440}
        height={500}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute -top-1/4 md:-right-1/4 sm:-right-1/3 -right-3/5 w-full h-full"
      />
      <Image
        src="/background/bg-gradient-1.png"
        alt=""
        aria-hidden="true"
        width={1440}
        height={500}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute top-1/4 md:-right-1/4 sm:-right-1/3 -right-3/5 w-full h-3/4 lg:visible invisible"
      />
      <Image
        src="/background/bg-gradient-2.png"
        alt=""
        aria-hidden="true"
        width={1440}
        height={500}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute 2xl:-left-1/8 -left-1/4 -top-1/20 h-full w-full"
      />
      <HeroSection
        title="Mitra Terpercaya dalam Integrasi Infrastruktur & Data"
        description="Kami membantu organisasi menghadirkan sistem yang stabil, aman, dan terintegrasi — demi mendukung transformasi digital Indonesia."
        image="/background/about/bg-hero-update.png"
      />
      <BackgroundSection />
      <VisionMissionSection />
      <ExcellenceSection />
      <CoreValueSection button={false} />
    </div>
  );
}
