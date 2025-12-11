"use client";
import {
  staggerContainer,
  viewportOnce,
  fadeInLeft,
  defaultTransition,
  fadeInRight,
  slowTransition,
} from "@/lib/motion";
import { motion } from "framer-motion";
import { PrimaryButton } from "../../element/Button";
import OrbitSystem from "../../element/OrbitSystem";
import Pill from "../../element/Pill";

/**
 * Example: Client Showcase Section with Orbit System
 *
 * Contoh penggunaan OrbitSystem untuk menampilkan logo klien
 * dalam layout orbit seperti di design.
 */

const PertnerSection = () => {
  // Konfigurasi orbit - sesuaikan dengan kebutuhanmu
  const orbitConfig = [
    // Ring 1 (Inner) - Orbit terdalam, paling lambat
    {
      radius: 80,
      duration: 30, // Lebih lambat
      direction: "counterclockwise" as const,
      items: [
        { id: 1, image: "/logos/maybank.png", alt: "Maybank", size: 100 },
        { id: 2, image: "/logos/bca.png", alt: "BCA", size: 100 },
        { id: 3, image: "/logos/tokopedia.png", alt: "Tokopedia", size: 100 },
      ],
    },
    // Ring 2 (Middle) - Orbit tengah
    {
      radius: 150,
      duration: 25,
      direction: "clockwise" as const,
      items: [
        { id: 4, image: "/logos/bca.png", alt: "BCA", size: 100 },
        { id: 5, image: "/logos/tokopedia.png", alt: "Tokopedia", size: 100 },
        { id: 6, image: "/logos/maybank.png", alt: "Maybank", size: 100 },
        { id: 7, image: "/logos/maybank.png", alt: "Maybank", size: 100 },
      ],
    },
    // Ring 3 (Outer) - Orbit terluar, paling cepat
    {
      radius: 220,
      duration: 35, // Lebih cepat karena jarak lebih jauh
      direction: "counterclockwise" as const,
      items: [
        { id: 8, image: "/logos/maybank.png", alt: "Maybank", size: 100 },
        { id: 9, image: "/logos/bca.png", alt: "BCA", size: 100 },
        { id: 10, image: "/logos/tokopedia.png", alt: "Tokopedia", size: 100 },
      ],
    },
  ];

  return (
    <section className="w-full py-20 overflow-hidden">
      <motion.div
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="flex flex-col lg:flex-row items-center w-full">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-5 items-start w-full"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <Pill>Partner Kami</Pill>
            <h2 className="text-white text-3xl lg:text-[40px] font-medium leading-tight">
              Mereka Yang Bekerjasama Dengan Kami
            </h2>
            <PrimaryButton href="/contact">Hubungi Kami</PrimaryButton>
          </motion.div>

          {/* Right Content - Orbit System */}
          <motion.div
            className="relative w-full flex lg:justify-end justify-center"
            variants={fadeInRight}
            transition={slowTransition}
          >
            <OrbitSystem
              rings={orbitConfig}
              centerSize={0}
              centerContent={
                <div className="w-full h-full rounded-full bg-linear-to-br from-primary/20 to-transparent border border-white/10" />
              }
              maxWidth={500}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PertnerSection;
