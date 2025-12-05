import React from "react";
import Pill from "../../element/Pill";

export default function BackgroundSection() {
  return (
    <section className="container-custom">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex flex-col items-start gap-5">
          <Pill>Siapa Kami</Pill>
          <h2 className="text-white text-3xl md:text-4xl font-medium sm:pr-40">
            Kami Hadir Menyederhanakan Kompleksitas Teknologi
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-white font-light">
          <p>
            Selamat datang di PT Solinex Data Integrasi, mitra terpercaya dalam
            menghadirkan solusi teknologi informasi yang terintegrasi. Kami
            berfokus pada pengembangan server, jaringan, dan infrastruktur data
            dengan komitmen mendukung transformasi digital di Indonesia.
          </p>
          <p>
            Dengan mengedepankan inovasi dan kualitas layanan, kami hadir untuk
            membantu pemerintah, BUMN, dan masyarakat dalam membangun ekosistem
            teknologi yang efisien, andal, dan berkelanjutan.
          </p>
          <p>
            Tidak peduli seberapa besar tantangannya, kami percaya setiap
            organisasi berhak memiliki infrastruktur digital yang terhubung,
            stabil, dan andal.
          </p>
          <p>
            Melalui keahlian, kolaborasi, dan inovasi, Solinex hadir untuk
            mendukung Indonesia menuju masa depan yang semakin terkoneksi.
            Komitmen ini kami wujudkan melalui layanan terpadu yang dirancang
            khusus untuk memenuhi kebutuhan setiap klien.
          </p>
          <p>
            PT Solinex Data Integrasi menyediakan layanan menyeluruh, mulai dari
            pengadaan perangkat TIK, integrasi sistem, layanan managed service,
            hingga konsultasi dan perencanaan jangka panjang. Tujuan kami adalah
            menyederhanakan kompleksitas teknologi menjadi solusi yang efisien,
            aman, dan siap menghadapi masa depan, sehingga setiap klien dapat
            berkembang dengan percaya diri.
          </p>
        </div>
      </div>
    </section>
  );
}
