"use client";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { TiPhoneOutline } from "react-icons/ti";

export default function ContactSection() {
  const maps =
    process.env.NEXT_PUBLIC_MAP_URL ??
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2947955823115!2d106.82108207094075!3d-6.1856412138851775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4289385f2f7%3A0xc0510d88bba82e2f!2sThamrin%20Menara%20Tower%2C%20Jl.%20M.H.%20Thamrin%20No.3%2C%20RT.10%2FRW.10%2C%20Kebon%20Sirih%2C%20Menteng%2C%20Central%20Jakarta%20City%2C%20Jakarta%2010340!5e0!3m2!1sen!2sid!4v1765176506066!5m2!1sen!2sid";
  const telephoneNum = `+${process.env.NEXT_PUBLIC_WA_NUMBER ?? "622211166999"}`;
  const email = process.env.NEXT_PUBLIC_EMAIL_TO ?? "info@solinex.co.id";
  return (
    <section className="w-full bg-background py-10 z-10">
      <div className="container-custom flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
        {/* Contact Info - Slide dari kiri */}
        <motion.div
          className="flex flex-col gap-3.5 w-full max-w-[470]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-3xl md:text-4xl font-medium"
            variants={fadeInLeft}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Kontak Kami
          </motion.p>

          <motion.div
            className="flex flex-col gap-5"
            variants={fadeInLeft}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xl font-light text-white">
              Menara Thamrin, Lantai 3 Jalan M.H. Thamrin Kav.3 Tanah Abang,
              Jakarta Pusat
            </p>

            <motion.div
              className="flex flex-row items-center gap-3.5 text-xl text-white font-light"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TiPhoneOutline />
              <span>{telephoneNum}</span>
            </motion.div>

            <motion.div
              className="flex flex-row items-center gap-3.5 text-xl text-white font-light"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IoMailOutline />
              <span>{email}</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Map - Slide dari kanan dengan scale effect */}
        <motion.iframe
          src={maps}
          className="h-[425] w-full"
          loading="lazy"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </section>
  );
}
