"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "@/components/element/Button";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  defaultTransition,
  slowTransition,
} from "@/lib/motion";

export default function HeroSection() {
  return (
    <section className="relative flex justify-center overflow-hidden pt-4 sm:pb-0 pb-12">
      {/* Background Image */}
      <motion.div
        className="absolute min-h-[10vh] sm:relative z-0 w-full h-full flex justify-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/background/home/bg-hero.png"
          alt="Hero Image"
          width={1440}
          height={1100}
          className="object-contain w-full"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative inset-0 sm:absolute z-10 flex justify-center">
        <motion.div
          className="container-custom sm:pt-40 pt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
              transition={slowTransition}
            >
              SOLUSI INTEGRASI,
              <br />
              <span className="text-primary">UNTUK NEGERI TERKONEKSI</span>
            </motion.h1>

            <motion.p
              className="sm:text-lg md:text-xl text-text-secondary mb-8 leading-relaxed"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              Mitra terpercaya untuk solusi infrastruktur IT, jaringan, dan
              sistem data yang terintegrasi — mendukung transformasi digital
              Indonesia
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 items-center"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <SecondaryButton href="/Service" className="sm:px-10 sm:py-4">
                Service Kami
              </SecondaryButton>
              <PrimaryButton href="/contact" className="sm:px-10 sm:py-4">
                Hubungi Kami
              </PrimaryButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
