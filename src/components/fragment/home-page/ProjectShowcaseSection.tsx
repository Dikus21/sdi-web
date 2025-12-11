"use client";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiInfo, FiX } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";
import Pill from "../../element/Pill";
import Image from "next/image";
import {
  staggerContainer,
  viewportOnce,
  fadeInLeft,
  defaultTransition,
  fadeInUp,
} from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion";

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
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsDescriptionOpen(false);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsDescriptionOpen(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const currentProject = projects[currentIndex];

  // Variants untuk slide transition
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full">
      {/* Header */}
      <motion.div
        className="container-custom mb-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="flex justify-between items-center">
          <motion.div
            className="flex flex-col gap-5 items-start"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <Pill>Project Kami</Pill>
            <h2 className="text-white text-[40px] text-medium">
              Implementasi Nyata, Dampak Nyata
            </h2>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            className="hidden sm:flex gap-3"
            variants={fadeInUp}
            transition={defaultTransition}
          >
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
          </motion.div>
        </div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="container-custom-desktop"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          {...swipeHandlers}
          className="relative max-h-[500px] cursor-grab active:cursor-grabbing overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                height={500}
                width={1440}
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full max-h-[500px] object-cover select-none pointer-events-none"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Container */}
          <div className="absolute bottom-0 right-0">
            {/* Desktop Card */}
            <motion.div
              className="hidden lg:flex self-end max-w-lg flex-col gap-2 bg-primary py-8 px-14"
              style={{
                clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              key={`desktop-${currentIndex}`}
            >
              <h3 className="text-xl font-medium text-black">
                {currentProject.title}
              </h3>
              <p className="text-black font-light leading-tight">
                {currentProject.description}
              </p>
            </motion.div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex flex-col items-end">
              <motion.button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="w-12 h-12 bg-primary flex items-center justify-center text-black mb-2 mr-2 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={
                  isDescriptionOpen ? "Close description" : "Show description"
                }
              >
                {isDescriptionOpen ? (
                  <FiX className="text-xl" />
                ) : (
                  <FiInfo className="text-xl" />
                )}
              </motion.button>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative aspect-1440/500"
                >
                  <Image
                    fill
                    src={currentProject.image}
                    alt={currentProject.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1400px"
                    quality={75}
                    priority={currentIndex === 0}
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                    className="object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsDescriptionOpen(false);
                }}
                className={`h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-white/50"
                }`}
                animate={{ width: index === currentIndex ? 32 : 8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectShowcaseSection;
