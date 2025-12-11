import HeroSection from "@/components/fragment/HeroSection";
import ServicesSection from "@/components/fragment/service-page/ServicesSection";
import { pageMetadata, siteConfig } from "@/lib/seo-config";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  keywords: pageMetadata.services.keywords,
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: `${pageMetadata.services.title} | ${siteConfig.name}`,
    description: pageMetadata.services.description,
    url: `${siteConfig.url}/services`,
    type: "website",
  },
  twitter: {
    title: `${pageMetadata.services.title} | ${siteConfig.name}`,
    description: pageMetadata.services.description,
  },
};
export default function page() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/background/bg-gradient-1.png"
        alt=""
        aria-hidden="true"
        width={1440}
        height={500}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute sm:-top-1/10 -top-1/4 xl:-right-1/4 sm:-right-1/3 -right-3/5 w-full h-full"
      />
      <Image
        src="/background/bg-gradient-2.png"
        alt=""
        aria-hidden="true"
        width={1440}
        height={500}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="absolute 2xl:-left-1/8 -left-1/4 top-1/8 h-full w-full"
      />
      <HeroSection
        title="Solusi Terintegrasi untuk Kebutuhan Teknologi Anda"
        description="Kami menyediakan layanan pengadaan, integrasi, dan pengelolaan sistem IT yang dirancang untuk menjaga stabilitas dan efisiensi operasional organisasi Anda"
        image="/background/service/bg-hero.png"
      />
      <ServicesSection />
    </div>
  );
}
