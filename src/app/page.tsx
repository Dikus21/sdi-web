import AboutSection from "@/components/fragment/home-page/AboutSection";
import CoreValueSection from "@/components/fragment/CoreValueSection";
import HeroSection from "@/components/fragment/home-page/HeroSection";
import PertnerSection from "@/components/fragment/home-page/PartnerSection";
import ProjectShowcaseSection from "@/components/fragment/home-page/ProjectShowcaseSection";
import ServiceSection from "@/components/fragment/home-page/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        <HeroSection />
        <Image
          alt="background gradient"
          src="/background/home/bg-gradient-1.png"
          className="absolute w-full h-full lg:left-1/4 left-1/2 -top-40"
          width={1440}
          height={500}
        />
        <AboutSection />
        <ServiceSection />
        <CoreValueSection />
      </div>
      <div className="relative">
        <Image
          width={1440}
          height={500}
          alt="background gradient"
          src="/background/home/bg-gradient-2.png"
          className="absolute w-full h-full md:-left-80 -left-30 -top-1/2"
        />
        <Image
          width={1440}
          height={500}
          alt="background gradient"
          src="/background/home/bg-gradient-3.png"
          className="absolute w-full h-full sm:-bottom-60 md:-left-80 -left-40"
        />
        <ProjectShowcaseSection />
        <PertnerSection />
      </div>
    </div>
  );
}
