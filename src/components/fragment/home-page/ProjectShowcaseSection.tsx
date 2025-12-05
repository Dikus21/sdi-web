"use client";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiInfo, FiX } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";
import Pill from "../../element/Pill";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Data projects yang di-hardcode
const projects: Project[] = [
  {
    id: 1,
    title: "Smart City Infrastructure",
    description:
      "Implementasi sistem monitoring kota pintar yang terintegrasi dengan IoT sensors untuk memantau kualitas udara, lalu lintas, dan penggunaan energi secara real-time.",
    image: "/project-1.png",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur AI recommendation, payment gateway terintegrasi, dan sistem inventory management yang efisien.",
    image: "/project-1.png",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description:
      "Sistem manajemen rumah sakit digital yang mencakup rekam medis elektronik, penjadwalan dokter, dan telemedicine.",
    image: "/project-1.png",
  },
  {
    id: 4,
    title: "Educational Learning Platform",
    description:
      "Platform pembelajaran online interaktif dengan fitur video streaming, quiz, dan progress tracking untuk institusi pendidikan.",
    image: "/project-1.png",
  },
];

const ProjectShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsDescriptionOpen(false); // Close description when changing slide
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsDescriptionOpen(false); // Close description when changing slide
  };

  // Auto play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const currentProject = projects[currentIndex];

  return (
    <section className="w-full ">
      <div className="container-custom mb-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5 items-start">
            <Pill>Project Kami</Pill>
            <h2 className="text-white text-[40px] text-medium">
              Implementasi Nyata, Dampak Nyata
            </h2>
          </div>
          {/* Navigation Arrows - Hidden on screens smaller than sm */}
          <div className="hidden sm:flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#ff9f1c]/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-all"
              aria-label="Previous project"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#ff9f1c]/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-all"
              aria-label="Next project"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="container-custom-desktop">
        {/* Background Image with Swipe */}
        <div
          {...swipeHandlers}
          className="relative max-h-[500px] cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <Image
            height={500}
            width={1440}
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full max-h-[500px] object-cover select-none pointer-events-none"
            draggable={false}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content Container - Different behavior for lg and smaller screens */}
          <div className="absolute bottom-0 right-0">
            {/* Desktop (lg and above): Always show full card */}
            <div
              className="hidden lg:flex self-end max-w-lg flex-col gap-2 bg-primary py-8 px-14"
              style={{
                clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
              }}
            >
              <h3 className="text-xl font-medium text-black">
                {currentProject.title}
              </h3>
              <p className="text-black font-light leading-tight">
                {currentProject.description}
              </p>
            </div>

            {/* Mobile/Tablet (below lg): Toggleable description */}
            <div className="lg:hidden flex flex-col items-end">
              {/* Toggle Button */}
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="w-12 h-12 bg-primary flex items-center justify-center text-black mb-2 mr-2 rounded-full shadow-lg transition-transform hover:scale-105"
                aria-label={
                  isDescriptionOpen ? "Close description" : "Show description"
                }
              >
                {isDescriptionOpen ? (
                  <FiX className="text-xl" />
                ) : (
                  <FiInfo className="text-xl" />
                )}
              </button>

              {/* Expandable Description Card */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isDescriptionOpen
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="max-w-sm flex flex-col gap-2 bg-primary py-6 px-8"
                  style={{
                    clipPath:
                      "polygon(30px 0, 100% 0, 100% 100%, 0 100%, 0 30px)",
                  }}
                >
                  <h3 className="text-lg font-medium text-black">
                    {currentProject.title}
                  </h3>
                  <p className="text-black font-light leading-tight text-sm">
                    {currentProject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsDescriptionOpen(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
