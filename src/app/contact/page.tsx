import Image from "next/image";
import React from "react";
import FormSection from "../../components/fragment/contact-page/FormSection";
import ContactSection from "@/components/fragment/contact-page/ContactSection";
import HeroSection from "@/components/fragment/contact-page/HeroSection";
import { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: `${pageMetadata.contact.title} | ${siteConfig.name}`,
    description: pageMetadata.contact.description,
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
  twitter: {
    title: `${pageMetadata.contact.title} | ${siteConfig.name}`,
    description: pageMetadata.contact.description,
  },
};
export default function ContactPage() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden pt-4 sm:pb-0 pb-12 gap-5">
      {/* Background Image */}
      <div className="min-h-screen absolute z-0 w-full h-full flex justify-center">
        <Image
          src="/background/contact/bg-hero.png"
          alt=""
          aria-hidden="true"
          width={960}
          height={334}
          quality={40}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover w-full h-full scale-100"
        />
      </div>
      <Image
        src="/background/bg-gradient-1.png"
        alt=""
        aria-hidden="true"
        width={960}
        height={334}
        quality={40}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover w-full h-full scale-100 absolute lg:-right-1/2 lg:top-0 -right-1/2 top-1/4"
      />
      <Image
        src="/background/bg-gradient-3.png"
        alt=""
        aria-hidden="true"
        width={960}
        height={334}
        quality={40}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover w-full h-full scale-100 absolute -left-1/2"
      />
      {/* Content */}
      <HeroSection />
      <FormSection />
      <ContactSection />
    </div>
  );
}
