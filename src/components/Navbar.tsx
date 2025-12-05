"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { PrimaryButton } from "./Button";
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
    { name: "Projek", path: "/projects" },
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
          <div className="hidden md:grid col-span-2">
            <div className="flex items-center justify-center lg:space-x-8 space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-end xl:space-x-8 space-x-3">
            <PrimaryButton
              href="/contact"
              className="lg:h-full lg:px-6 lg:py-3 lg:text-sm lg:gap-3 px-2 py-2 text-xs "
            >
              Hubungi Kami
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end space-x-4">
            <button
              className="text-foreground text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
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
              ))}
              <PrimaryButton href="/contact">Hubungi Kami</PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
