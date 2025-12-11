"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { PrimaryButton } from "../element/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Service Kami", path: "/services" },
    { name: "Kontak", path: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm z-50 shadow-lg">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 grid-cols-2 py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-name.png"
              className="items-center w-auto lg:h-12 h-8"
              alt="Logo"
              width={500}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:grid col-span-2">
            <div className="flex items-center justify-center lg:space-x-8 space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.name}
                  {/* Active indicator tanpa layoutId */}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ originX: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center justify-end xl:space-x-8 space-x-3">
            <PrimaryButton
              href="/contact"
              className="lg:h-full lg:px-6 lg:py-3 lg:text-sm lg:gap-3 px-2 py-2 text-xs"
            >
              Hubungi Kami
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end space-x-4">
            <motion.button
              className="text-foreground text-2xl"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex flex-col space-y-4 pb-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive(item.path)
                          ? "text-primary"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                >
                  <PrimaryButton href="/contact">Hubungi Kami</PrimaryButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
