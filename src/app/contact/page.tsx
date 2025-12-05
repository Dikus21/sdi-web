import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <section className="relative flex justify-center overflow-hidden pt-4 sm:pb-0 pb-12">
        {/* Background Image */}
        <div className="min-h-[100vh] pt-40 relative z-0 w-full h-full flex justify-center">
          <Image
            src="/background/contact/bg-hero.png"
            alt="Hero Image"
            width={1440}
            height={1100}
            className="object-cover w-full h-full sm:scale-120 scale-200"
          />
        </div>

        {/* Content */}
        <div className="inset-0 absolute z-10 flex justify-center">
          <div className="container-custom sm:pt-40 pt-30">
            <div className="text-center flex flex-col items-center w-full justify-center">
              <h1 className="text-4xl md:text-5xl lg:w-3/4 font-bold mb-6 leading-tight bg-linear-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Siap Meningkatkan Infrastruktur Teknologi Anda?
              </h1>
              <p className="sm:text-lg md:text-xl lg:w-3/4 text-text-secondary mb-8 leading-relaxed">
                Mitra terpercaya untuk solusi infrastruktur IT, jaringan, dan
                sistem data yang terintegrasi — mendukung transformasi digital
                Indonesia
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
