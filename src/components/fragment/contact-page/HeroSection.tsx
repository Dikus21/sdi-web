"use client";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { motion } from "framer-motion";
import React from "react";

export default function HeroSection() {
  return (
    <section className="inset-0 relative z-10 flex flex-col items-center">
      <div className="container-custom md:pt-40 pt-30">
        <motion.div
          className="text-center flex flex-col items-center w-full justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:w-3/4 font-bold mb-6 leading-tight bg-linear-to-r from-white to-gray-400 text-transparent bg-clip-text"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Siap Meningkatkan Infrastruktur Teknologi Anda?
          </motion.h1>

          <motion.p
            className="sm:text-lg md:text-xl lg:w-3/4 text-text-secondary mb-8 leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Mitra terpercaya untuk solusi infrastruktur IT, jaringan, dan sistem
            data yang terintegrasi — mendukung transformasi digital Indonesia
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Button content here */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
