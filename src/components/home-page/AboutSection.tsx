import { PrimaryButton } from "../Button";
import Pill from "../Pill";

export default function AboutSection() {
  return (
    <section className="py-5 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-7xl sm:grid sm:grid-cols-2 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <Pill className="w-fit">Tentang Solinex</Pill>
            <p className="text-[40px] leading-snug font-medium lg:w-[470px]">
              Membangun Fondasi Teknologi yang Terkoneksi & Terkelola
            </p>
          </div>
          <div>
            <p className="text-secondary mb-5 leading-snug">
              PT Solinex Data Integrasi adalah perusahaan penyedia solusi
              infrastruktur teknologi informasi yang berfokus pada pengadaan
              perangkat server, jaringan, storage, serta layanan integrasi dan
              pemeliharaan sistem.
            </p>
            <p className="text-secondary mb-8 leading-snug">
              Kami berkomitmen membantu instansi pemerintah, BUMN, dan
              perusahaan swasta dalam membangun sistem yang stabil, aman, dan
              efisien untuk mendukung akselerasi transformasi digital di
              Indonesia.
            </p>
            <PrimaryButton href="/about">Lihat Selengkapnya</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
