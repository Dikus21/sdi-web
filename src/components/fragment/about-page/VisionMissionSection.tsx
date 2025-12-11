"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoDiamondOutline } from "react-icons/io5";
import Card from "../../element/Card";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  defaultTransition,
  viewportOnce,
} from "@/lib/motion";

export default function VisionMissionSection() {
  return (
    <section className="container-custom">
      <motion.div
        className="flex sm:flex-row items-center justify-between sm:gap-10 flex-col gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div
          variants={fadeInLeft}
          transition={defaultTransition}
          className="w-full"
        >
          <Card
            icon={<IoDiamondOutline className="text-4xl text-primary" />}
            title="Misi Kami"
            titleColor="primary"
            description="Kami bercita-cita menjadi perusahaan nasional terdepan dalam pengadaan dan integrasi sistem data, yang berperan aktif mendukung transformasi digital Indonesia melalui teknologi yang andal, efisien, dan berstandar tinggi. Berbekal pengalaman, keahlian, serta komitmen terhadap inovasi, kami hadir untuk membangun fondasi digital yang kokoh bagi setiap organisasi."
          />
        </motion.div>

        <motion.div
          variants={fadeInRight}
          transition={{ ...defaultTransition, delay: 0.15 }}
          className="w-full"
        >
          <Card
            icon={<IoDiamondOutline className="text-4xl text-primary" />}
            title="Visi Kami"
            titleColor="primary"
            description="Kami bercita-cita menjadi perusahaan nasional terdepan dalam pengadaan dan integrasi sistem data, yang berperan aktif mendukung transformasi digital Indonesia melalui teknologi yang andal, efisien, dan berstandar tinggi. Berbekal pengalaman, keahlian, serta komitmen terhadap inovasi, kami hadir untuk membangun fondasi digital yang kokoh bagi setiap organisasi."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
