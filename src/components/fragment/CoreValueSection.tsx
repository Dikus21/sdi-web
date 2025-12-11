"use client";
import { motion } from "framer-motion";
import { FaBolt, FaRecycle } from "react-icons/fa";
import { PrimaryButton } from "../element/Button";
import Card from "../element/Card";
import Pill from "../element/Pill";
import {
  IoLockClosedOutline,
  IoMedalOutline,
  IoRocketOutline,
} from "react-icons/io5";
import {
  fadeInUp,
  fadeInLeft,
  scaleUp,
  staggerContainer,
  staggerSlow,
  defaultTransition,
  viewportOnce,
} from "@/lib/motion";

interface CoreValueSectionProps {
  button?: boolean;
}

export default function CoreValueSection({
  button = true,
}: CoreValueSectionProps) {
  const coreValues = [
    {
      icon: <IoMedalOutline className="text-5xl text-primary" />,
      title: "Keandalan",
      description:
        "Kami berkomitmen menyediakan solusi dan layanan yang stabil, terpercaya, dan dapat diandalkan dalam jangka panjang, demi mendukung operasional penting institusi pemerintah dan korporasi.",
    },
    {
      icon: <FaBolt className="text-5xl text-primary" />,
      title: "Efisiensi",
      description:
        "Kami mengedepankan proses kerja yang tepat guna dan solusi yang hemat sumber daya, untuk memastikan hasil maksimal dengan biaya dan waktu yang optimal.",
    },
    {
      icon: <IoLockClosedOutline className="text-5xl text-primary" />,
      title: "Kepatuhan & Keamanan",
      description:
        "Kami menjunjung tinggi standar nasional, termasuk TKDN dan regulasi keamanan informasi, sebagai bentuk tanggung jawab terhadap kedaulatan digital Indonesia.",
    },
    {
      icon: <FaRecycle className="text-5xl text-primary" />,
      title: "Komitmen Berkelanjutan",
      description:
        "Kami hadir tidak hanya untuk pengadaan dan integrasi awal, tetapi juga untuk mendampingi klien melalui layanan pemeliharaan dan peningkatan sistem secara berkelanjutan.",
    },
    {
      icon: <IoRocketOutline className="text-5xl text-primary" />,
      title: "Inovasi",
      description:
        "Kami senantiasa mencari cara baru dan solusi kreatif untuk menyederhanakan kompleksitas teknologi. Inovasi adalah kunci agar layanan kami tetap relevan dan siap menghadapi tantangan masa depan.",
    },
  ];

  return (
    <section className="py-10 relative">
      <motion.div
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="mb-12 flex md:flex-row flex-col gap-22">
          {/* Left Column - Text Content */}
          <motion.div
            className="flex flex-col gap-5 items-start"
            variants={fadeInLeft}
            transition={defaultTransition}
          >
            <Pill>Core Values Kami</Pill>
            <h2 className="text-3xl sm:text-4xl font-medium mb-2">
              Partner Integrasi yang Dipercaya dan Teruji
            </h2>
            <div className="text-white font-light flex flex-col items-start gap-5 mb-2">
              <p>
                Core values adalah fondasi yang membentuk identitas dan arah
                perusahaan kami. Nilai-nilai ini menjadi kompas yang menuntun
                setiap langkah kami, memastikan setiap layanan yang kami berikan
                berakar pada integritas, profesionalisme, dan inovasi.
              </p>
              <p>
                Mereka bukan sekadar kata, tetapi prinsip yang kami jalani dalam
                membangun kepercayaan, menciptakan solusi, dan menghadirkan
                dampak nyata bagi klien serta bangsa.
              </p>
            </div>
            {button && (
              <motion.div
                variants={fadeInUp}
                transition={{ ...defaultTransition, delay: 0.2 }}
              >
                <PrimaryButton href="/about">Lihat Selengkapnya</PrimaryButton>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Cards Grid */}
          <motion.div
            className="grid sm:grid-cols-2 grid-cols-1"
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
              >
                <Card
                  index={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  showBorder={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
