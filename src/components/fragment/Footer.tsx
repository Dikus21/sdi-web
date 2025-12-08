"use client";
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

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  return (
    <footer className="text-white">
      <div className="flex flex-col">
        {/* CTA Section */}
        {isContactPage ? (
          ""
        ) : (
          <div className="flex flex-col">
            <div className="py-20 relative">
              <div className="flex justify-center w-full h-full">
                <Image
                  src="/background/bg-footer.png"
                  alt="footer background"
                  width={1440}
                  height={500}
                  className="absolute top-0 h-full w-full"
                />
              </div>
              <div className="container-custom text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ingin diskusikan projek atau ada pertanyaan?
                </h2>
                <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                  Hubungi kami via WhatsApp atau Email. Tim kami akan segera
                  membantu menyesuaikan solusi sesuai dengan kebutuhan anda.
                </p>
                <PrimaryButton href="/contact">Hubungi Kami</PrimaryButton>
              </div>
            </div>
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 py-10">
              {/* Company Info */}
              <div>
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
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                  >
                    <FaFacebookF className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                  >
                    <FaTwitter className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                  >
                    <FaInstagram className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                  >
                    <FaLinkedinIn className="text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Menu</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Service Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Projek
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Layanan</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">Distribusi & Pengadaan</li>
                  <li className="text-gray-300">Integrasi Sistem</li>
                  <li className="text-gray-300">Managed Service</li>
                  <li className="text-gray-300">Konsultasi IT</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>info@solinex.co.id</li>
                  <li>021 27893462</li>
                  <li>Jakarta, Indonesia</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 pb-10">
          <p>PT Solinex Data Integrasi Copyright © 2025. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
