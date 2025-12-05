"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
}

export default function HeroSection({
  title,
  description,
  image,
}: HeroSectionProps) {
  return (
    <section className="relative">
      <div className="relative flex min-h-[70vh] sm:min-h-[80vh] items-center overflow-hidden">
        {/* Subtle Ken Burns bg (formal, pelan) */}
        <motion.div
          aria-hidden
          initial={{ scale: 1.02 }}
          animate={{ scale: 1.06 }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            width={2000}
            height={2000}
            alt="Hero green energy"
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>

        <div className="relative mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <motion.h1
            className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mx-auto mt-3 max-w-3xl text-white/90"
            initial="hidden"
            animate="show"
            transition={{ delay: 0.16 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
