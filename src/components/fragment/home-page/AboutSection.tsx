"use client";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/element/Button";
import Pill from "@/components/element/Pill";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  defaultTransition,
  viewportOnce,
} from "@/lib/motion";

export default function AboutSection() {
  return (
    <section className="py-5 relative overflow-hidden">
      <motion.div
        className="container-custom relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="max-w-7xl sm:grid sm:grid-cols-2 flex flex-col gap-5">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-5"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <Pill className="w-fit">Tentang Solinex</Pill>
            <p className="text-[40px] leading-snug font-medium lg:w-[470px]">
              Membangun Fondasi Teknologi yang Terkoneksi & Terkelola
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={fadeInRight} transition={defaultTransition}>
            <p className="text-secondary mb-5 leading-snug">
              PT Solinex Data Integrasi adalah perusahaan penyedia solusi
              infrastruktur teknologi informasi yang berfokus pada pengadaan
              perangkat server, jaringan, storage, serta layanan integrasi dan
              pemeliharaan sistem.
            </p>
            <p className="text-secondary mb-8 leading-snug">
              Kami berkomitmen membantu instansi pemerintah, BUMN, dan
              perusahaan swasta dalam membangun sistem yang stabil, aman, dan
              efisien untuk mendukung akselerasi transformasi digital di
              Indonesia.
            </p>
            <PrimaryButton href="/about">Lihat Selengkapnya</PrimaryButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
