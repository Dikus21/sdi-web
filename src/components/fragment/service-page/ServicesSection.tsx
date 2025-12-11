"use client";
import { motion } from "framer-motion";
import Card from "@/components/element/Card";
import React, { ReactNode } from "react";
import { FaServer, FaClipboardList } from "react-icons/fa";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerFast,
  defaultTransition,
  viewportOnce,
} from "@/lib/motion";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  icon: ReactNode;
  title: string;
  description: string;
  items: ServiceItem[];
  reversed?: boolean;
  index: number;
}

// Sub-component untuk item di sebelah kanan dengan nomor
const ServiceItemComponent = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="shrink-0 w-15 h-11 rounded-3xl border border-primary flex items-center justify-center">
        <span className="text-primary text-sm font-medium">
          {number.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-primary font-medium text-xl group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-white font-light">{description}</p>
      </div>
    </div>
  );
};

const ServiceSection = ({
  icon,
  title,
  description,
  items,
  reversed = false,
}: ServiceSectionProps) => {
  // Alternate animation direction based on reversed prop
  const cardVariant = reversed ? fadeInRight : fadeInLeft;
  const itemsVariant = reversed ? fadeInLeft : fadeInRight;

  return (
    <motion.section
      className="w-full"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div
        className={`flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-10 lg:gap-16`}
      >
        {/* Left Side - Card */}
        <motion.div
          className="lg:w-5/12 w-full"
          variants={cardVariant}
          transition={defaultTransition}
        >
          <Card
            icon={icon}
            title={title}
            titleSize="text-3xl md:text-4xl"
            description={description}
            showBorder={false}
          />
        </motion.div>

        {/* Right Side - Service Items Grid */}
        <motion.div
          className="flex flex-col lg:w-7/12 w-full"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map((item, itemIndex) => (
            <motion.div
              key={itemIndex}
              className={
                itemIndex !== 0 ? "border-t border-white/20 pt-5 mt-5" : ""
              }
              variants={itemsVariant}
              transition={{ ...defaultTransition, delay: itemIndex * 0.1 }}
            >
              <ServiceItemComponent
                number={itemIndex + 1}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const servicesData = [
  {
    icon: <FaServer size={48} />,
    title: "Distribusi & Pengadaan Perangkat",
    description:
      "Softwix menyediakan berbagai kebutuhan infrastruktur IT — mulai dari server, storage, perangkat jaringan, hingga endpoint user — dengan proses konsultasi, instalasi, dan keamanan TKDN.",
    items: [
      {
        title: "Perangkat Server & Jaringan",
        description:
          "Pengadaan server rack, blade, tower, serta perangkat jaringan (switch, firewall, router)",
      },
      {
        title: "Data Storage Systems",
        description: "Pengadaan NAS, SAN, hingga solusi backup",
      },
      {
        title: "Software Infrastruktur",
        description: "Virtualisasi, monitoring, dan solusi cloud",
      },
      {
        title: "End-Point Devices",
        description: "Pengadaan perangkat end-user sesuai kebutuhan organisasi",
      },
    ],
  },
  {
    icon: <MdOutlineIntegrationInstructions size={48} />,
    title: "Integrasi Sistem & Migrasi",
    description:
      "Mulai dari integrasi data center, migrasi sistem, hingga implementasi arsitektur hybrid cloud — semua dilakukan dengan standar industri dan tim ahli bersertifikat.",
    items: [
      {
        title: "Konsolidasi Server & Data Center",
        description:
          "Penggabungan beberapa server dan sistem data menjadi satu kesatuan yang efisien untuk operasional lebih efektif dan biaya dikelola",
      },
      {
        title: "Migrasi Sistem IT",
        description:
          "Pendampingan dalam proses transisi sistem IT ke platform baru, mulai dari perencanaan, eksekusi, hingga pemeliharaan",
      },
      {
        title: "Integrasi Sistem Keamanan & Jaringan Internal",
        description:
          "Penggabungan infrastruktur jaringan dengan perangkat sistem keamanan yang komprehensif",
      },
    ],
  },
  {
    icon: <RiCustomerService2Line size={48} />,
    title: "Managed Service & Maintenance",
    description:
      "Kami memantau performa, keamanan, serta ketersediaan infrastruktur Anda dengan sistem pemantauan real-time dan dukungan teknis berkala.",
    items: [
      {
        title: "Monitoring 24/7",
        description:
          "Layanan pemantauan server dan jaringan secara real-time, tersedia 24 jam penuh",
      },
      {
        title: "Technical Support",
        description:
          "Dukungan teknis menyeluruh, mulai dari troubleshooting, patching, hingga pemeliharaan preventif OS & yang tersistem terintegrasi dengan kebutuhan klien",
      },
      {
        title: "Pelatihan & Implementasi",
        description:
          "Tim pelatihan dan asistensi implementasi sistem berbasis kebutuhan digital klien/end-user",
      },
    ],
  },
  {
    icon: <FaClipboardList size={48} />,
    title: "Konsultasi & Perencanaan IT",
    description:
      "Melalui proses audit, analisa, dan perencanaan menyeluruh, kami memastikan infrastruktur Anda siap menghadapi berbagai masa depan.",
    items: [
      {
        title: "Audit Arsitektur IT",
        description:
          "Audit menyeluruh dan identifikasi infrastruktur teknologi yang ada untuk mendapatkan keamanan, efisiensi, dan kesiapan sistem mencapai pertumbuhan organisasi",
      },
      {
        title: "Roadmap IT",
        description:
          "Penyusunan peta jalan strategis digital jangka panjang, melalui perencanaan evolusi teknologi, prioritas pengembangan yang terstruktur serta selaras dengan visi & misi klien",
      },
      {
        title: "Perencanaan Teknologi Berkelanjutan",
        description:
          "Merencanakan solusi IT yang relevan, modern, dan adaptif terhadap perubahan kebutuhan bisnis",
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="container-custom flex flex-col w-full py-10 lg:py-16">
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          className={index !== 0 ? "border-t border-white/20 pt-12 mt-12" : ""}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.3 }}
        >
          <ServiceSection
            icon={service.icon}
            title={service.title}
            description={service.description}
            items={service.items}
            reversed={index % 2 !== 0}
            index={index}
          />
        </motion.div>
      ))}
    </section>
  );
}
