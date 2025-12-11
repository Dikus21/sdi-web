import Image from "next/image";
import React from "react";
import FormSection from "../../components/fragment/contact-page/FormSection";
import { TiPhoneOutline } from "react-icons/ti";
import { IoMailOutline } from "react-icons/io5";

export default function ContactPage() {
  const maps =
    process.env.NEXT_PUBLIC_MAP_URL ??
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2947955823115!2d106.82108207094075!3d-6.1856412138851775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4289385f2f7%3A0xc0510d88bba82e2f!2sThamrin%20Menara%20Tower%2C%20Jl.%20M.H.%20Thamrin%20No.3%2C%20RT.10%2FRW.10%2C%20Kebon%20Sirih%2C%20Menteng%2C%20Central%20Jakarta%20City%2C%20Jakarta%2010340!5e0!3m2!1sen!2sid!4v1765176506066!5m2!1sen!2sid";
  return (
    <div>
      <section className="relative flex flex-col justify-center overflow-hidden pt-4 sm:pb-0 pb-12 gap-5">
        {/* Background Image */}
        <div className="min-h-screen absolute z-0 w-full h-full flex justify-center">
          <Image
            src="/background/contact/bg-hero.png"
            alt="Hero Image"
            width={1440}
            height={1100}
            className="object-cover w-full h-full scale-100"
            priority
          />
        </div>
        <Image
          src="/background/bg-gradient-1.png"
          alt="Hero Image"
          width={1440}
          height={1100}
          className="object-cover w-full h-full scale-100 absolute lg:-right-1/2 lg:top-0 -right-1/2 top-1/4"
          priority
        />
        <Image
          src="/background/bg-gradient-3.png"
          alt="Hero Image"
          width={1440}
          height={1100}
          className="object-cover w-full h-full scale-100 absolute -left-1/2"
          priority
        />
        {/* Content */}
        <div className="inset-0 relative z-10 flex flex-col items-center  ">
          <div className="container-custom md:pt-40 pt-30">
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
        <FormSection />
        <section className="w-full bg-background py-10 z-10">
          <div className="container-custom flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
            {/* {Contact} */}
            <div className="flex flex-col gap-3.5 w-full max-w-[470]">
              <p className="text-3xl md:text-4xl font-medium">Kontak Kami</p>
              <div className="flex flex-col gap-5">
                <p className="text-xl font-light text-white">
                  Menara Thamrin, Lantai 3 Jalan M.H. Thamrin Kav.3 Tanah Abang,
                  Jakarta Pusat
                </p>
                <div className="flex flex-row items-center gap-3.5 text-xl text-white font-light">
                  <TiPhoneOutline />
                  <span>021-27893462</span>
                </div>
                <div className="flex flex-row items-center gap-3.5 text-xl text-white font-light">
                  <IoMailOutline />
                  <span>info@solinex.co.id</span>
                </div>
              </div>
            </div>
            <iframe src={maps} className="h-[425] w-full" loading="lazy" />
          </div>
        </section>
      </section>
    </div>
  );
}
