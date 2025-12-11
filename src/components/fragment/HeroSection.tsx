"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/motion";

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
        {/* Ken Burns background */}
        <motion.div
          aria-hidden
          initial={{ scale: 1.02, opacity: 0 }}
          animate={{ scale: 1.06, opacity: 1 }}
          transition={{
            scale: {
              duration: 12,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
            opacity: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          className="absolute inset-0 aspect-1440/500"
        >
          <Image
            src={image}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="h-full w-full object-cover"
            alt=""
            aria-hidden="true"
            fill
            quality={70}
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mx-auto mt-3 max-w-3xl text-white/90"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.35 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
