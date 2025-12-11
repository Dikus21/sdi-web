"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  IoMedicalOutline,
  IoSparklesOutline,
  IoPeopleOutline,
  IoTvOutline,
} from "react-icons/io5";
import Card from "../../element/Card";
import Pill from "../../element/Pill";
import {
  fadeInUp,
  scaleUp,
  staggerContainer,
  staggerSlow,
  defaultTransition,
  viewportOnce,
} from "@/lib/motion";

export default function ExcellenceSection() {
  const excellences = [
    {
      icon: <IoMedicalOutline className="text-4xl text-primary" />,
      title: "Pendekatan Terpadu",
      description:
        "Kami menangani pengadaan hingga pemeliharaan sistem dalam satu solusi menyeluruh.",
    },
    {
      icon: <IoSparklesOutline className="text-4xl text-primary" />,
      title: "Kepatuhan & Standar Nasional",
      description:
        "Seluruh pengadaan dan implementasi kami mengikuti regulasi TKDN dan standar keamanan nasional.",
    },
    {
      icon: <IoPeopleOutline className="text-4xl text-primary" />,
      title: "Tim Profesional & Berpengalaman",
      description:
        "Didukung oleh tenaga ahli bersertifikat di bidang server, jaringan, dan keamanan data.",
    },
    {
      icon: <IoTvOutline className="text-4xl text-primary" />,
      title: "Layanan Berkelanjutan",
      description:
        "Kami menyediakan dukungan teknis dan monitoring 24/7 agar sistem Anda selalu optimal.",
    },
  ];

  return (
    <section className="container-custom">
      <motion.div
        className="flex flex-col gap-5 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} transition={defaultTransition}>
          <Pill>Keunggulan Kami</Pill>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 text-white text-center"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <h2 className="font-medium text-3xl sm:text-4xl">
            Mengapa Memilih Solinex?
          </h2>
          <p className="font-light sm:px-64">
            Kami bukan sekadar penyedia solusi IT, melainkan mitra strategis
            yang memahami kebutuhan operasional dan tantangan digitalisasi
            setiap organisasi
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex sm:flex-row flex-col sm:gap-8 gap-4"
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {excellences.map((excellence, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              transition={{ ...defaultTransition, delay: index * 0.12 }}
            >
              <Card
                icon={excellence.icon}
                title={excellence.title}
                description={excellence.description}
                variant="centered"
                index={index}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
