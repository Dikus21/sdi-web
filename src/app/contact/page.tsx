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
          alt="Hero Image"
          width={1440}
          height={1100}
          className="object-cover w-full h-full scale-100"
          priority
        />
      </div>
      <Image
        src="/background/bg-gradient-1.png"
        alt="Hero Image"
        width={1440}
        height={1100}
        className="object-cover w-full h-full scale-100 absolute lg:-right-1/2 lg:top-0 -right-1/2 top-1/4"
        priority
      />
      <Image
        src="/background/bg-gradient-3.png"
        alt="Hero Image"
        width={1440}
        height={1100}
        className="object-cover w-full h-full scale-100 absolute -left-1/2"
        priority
      />
      {/* Content */}
      <HeroSection />
      <FormSection />
      <ContactSection />
    </div>
  );
}
