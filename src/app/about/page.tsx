import BackgroundSection from "@/components/about-page/BackgroundSection";
import ExcellenceSection from "@/components/about-page/ExcellenceSection";
import HeroSection from "@/components/about-page/HeroSection";
import VisionMissionSection from "@/components/about-page/VisionMissionSection";
import CoreValueSection from "@/components/CoreValueSection";
import Image from "next/image";
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="relative flex flex-col gap-10 sm:gap-20 w-full overflow-hidden">
      <Image
        src="/background/about/bg-gradient-1.png"
        width={2000}
        height={500}
        alt="About background gradient"
        className="absolute -top-1/4 md:-right-1/4 sm:-right-1/3 -right-3/5 w-full h-full"
      />
      <Image
        src="/background/about/bg-gradient-1.png"
        width={2000}
        height={500}
        alt="About background gradient"
        className="absolute top-1/4 md:-right-1/4 sm:-right-1/3 -right-3/5 w-full h-3/4 lg:visible invisible"
      />
      <Image
        src="/background/about/bg-gradient-2.png"
        width={2000}
        height={500}
        alt="About background gradient 2"
        className="absolute 2xl:-left-1/8 -left-1/4 -top-1/20 h-full w-full"
      />
      <HeroSection />
      <BackgroundSection />
      <VisionMissionSection />
      <ExcellenceSection />
      <CoreValueSection button={false} />
    </div>
  );
}
