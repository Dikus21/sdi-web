import Image from "next/image";
import { SecondaryButton, PrimaryButton } from "../../element/Button";

export default function HeroSection() {
  return (
    <section className="relative flex justify-center overflow-hidden pt-4 sm:pb-0 pb-12">
      {/* Background Image */}
      <div className="absolute min-h-[10vh] sm:relative z-0 w-full h-full flex justify-center">
        <Image
          src="/background/home/bg-hero.png"
          alt="Hero Image"
          width={1440}
          height={1100}
          className="object-contain w-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative inset-0 sm:absolute z-10 flex justify-center">
        <div className="container-custom sm:pt-40 pt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              SOLUSI INTEGRASI,
              <br />
              <span className="text-primary">UNTUK NEGERI TERKONEKSI</span>
            </h1>
            <p className="sm:text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
              Mitra terpercaya untuk solusi infrastruktur IT, jaringan, dan
              sistem data yang terintegrasi — mendukung transformasi digital
              Indonesia
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <SecondaryButton href="/Service" className="sm:px-10 sm:py-4">
                Service Kami
              </SecondaryButton>
              <PrimaryButton href="/contact" className="sm:px-10 sm:py-4">
                Hubungi Kami
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
