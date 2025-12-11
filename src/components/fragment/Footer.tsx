"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { PrimaryButton } from "../element/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  fadeInUp,
  staggerContainer,
  staggerFast,
  defaultTransition,
  viewportOnce,
} from "@/lib/motion";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  const menuLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Service Kami", href: "/services" },
    { name: "Projek", href: "/projects" },
  ];

  const services = [
    "Distribusi & Pengadaan",
    "Integrasi Sistem",
    "Managed Service",
    "Konsultasi IT",
  ];

  const contactInfo = [
    "info@solinex.co.id",
    "021 27893462",
    "Jakarta, Indonesia",
  ];

  return (
    <footer className="text-white">
      <div className="flex flex-col">
        {/* CTA Section */}
        {!isContactPage && (
          <div className="flex flex-col">
            {/* CTA Banner */}
            <motion.div
              className="py-20 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center w-full h-full">
                <Image
                  src="/background/bg-footer.png"
                  alt="footer background"
                  width={1440}
                  height={500}
                  className="absolute top-0 h-full w-full"
                />
              </div>
              <motion.div
                className="container-custom text-center relative z-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  variants={fadeInUp}
                  transition={defaultTransition}
                >
                  Ingin diskusikan projek atau ada pertanyaan?
                </motion.h2>
                <motion.p
                  className="text-xl text-secondary mb-8 max-w-2xl mx-auto"
                  variants={fadeInUp}
                  transition={defaultTransition}
                >
                  Hubungi kami via WhatsApp atau Email. Tim kami akan segera
                  membantu menyesuaikan solusi sesuai dengan kebutuhan anda.
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  transition={{ ...defaultTransition, delay: 0.1 }}
                >
                  <PrimaryButton href="/contact">Hubungi Kami</PrimaryButton>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Footer Links Grid */}
            <motion.div
              className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 py-10"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {/* Company Info */}
              <motion.div variants={fadeInUp} transition={defaultTransition}>
                <div className="flex items-center space-x-2 mb-4">
                  <Image
                    src="/logo-name.png"
                    className="items-center w-auto lg:h-12 h-8"
                    alt="logo"
                    width={500}
                    height={300}
                  />
                </div>
                <p className="text-gray-300 mb-4">
                  PT Solinex Data Integrasi - Mitra terpercaya untuk solusi
                  infrastruktur IT Indonesia
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={fadeInUp} transition={defaultTransition}>
                <h4 className="text-lg font-semibold mb-4">Menu</h4>
                <ul className="space-y-2">
                  {menuLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div variants={fadeInUp} transition={defaultTransition}>
                <h4 className="text-lg font-semibold mb-4">Layanan</h4>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="text-gray-300">
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div variants={fadeInUp} transition={defaultTransition}>
                <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
                <ul className="space-y-2 text-gray-300">
                  {contactInfo.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Copyright */}
        <motion.div
          className="border-t border-white/10 pt-8 text-center text-gray-400 pb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>PT Solinex Data Integrasi Copyright © 2025. All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
}
