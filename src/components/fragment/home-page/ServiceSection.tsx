"use client";
import { FaServer, FaCogs, FaTools, FaLightbulb } from "react-icons/fa";
import { PrimaryButton } from "../../element/Button";
import Card from "../../element/Card";
import Pill from "../../element/Pill";
import {
  staggerContainer,
  viewportOnce,
  fadeInUp,
  defaultTransition,
  staggerSlow,
  scaleUp,
} from "@/lib/motion";
import { motion } from "framer-motion";

export default function ServiceSection() {
  const services = [
    {
      icon: <FaServer className="text-4xl text-primary" />,
      title: "Distribusi & Pengadaan Perangkat",
      description:
        "Penyediaan perangkat server, storage, dan networking berkualitas tinggi.",
    },
    {
      icon: <FaCogs className="text-4xl text-primary" />,
      title: "Integrasi Sistem",
      description:
        "Integrasi sistem IT yang seamless untuk mendukung operasional Anda.",
    },
    {
      icon: <FaTools className="text-4xl text-primary" />,
      title: "Managed Service & Maintenance",
      description:
        "Layanan pemeliharaan dan dukungan teknis yang komprehensif.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "Konsultasi & Perencanaan IT",
      description:
        "Konsultasi strategis untuk merencanakan infrastruktur IT Anda.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <Pill className="w-fit">Service Kami</Pill>
          </motion.div>

          <motion.h2
            className="text-[40px] font-medium md:w-[780px]"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Layanan Terintegrasi untuk Kebutuhan Teknologi Anda
          </motion.h2>

          <motion.p
            className="text-muted text-lg max-w-3xl mx-auto"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Dari pengadaan perangkat hingga pengelolaan sistem, semua kami
            tangani secara end-to-end agar organisasi Anda dapat beroperasi
            tanpa gangguan
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8"
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              transition={{
                ...defaultTransition,
                delay: index * 0.1,
              }}
            >
              <Card
                index={index}
                title={service.title}
                icon={service.icon}
                variant="centered"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...defaultTransition, delay: 0.4 }}
        >
          <PrimaryButton href="/service">Pelajari Selengkapnya</PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}
