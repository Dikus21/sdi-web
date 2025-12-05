import React from "react";
import {
  IoMedicalOutline,
  IoSparklesOutline,
  IoPeopleOutline,
  IoTvOutline,
} from "react-icons/io5";
import Card from "../../element/Card";
import Pill from "../../element/Pill";

export default function ExcellenceSection() {
  const excellences = [
    {
      icon: <IoMedicalOutline className="text-4xl text-primary" />,
      title: "Pendekatan Terpadu",
      description:
        "Kami menangani pengadaan hingga pemeliharaan sistem dalam satu solusi menyeluruh.",
    },
    {
      icon: <IoSparklesOutline className="text-4xl text-primary" />,
      title: "Kepatuhan & Standar Nasional",
      description:
        "Seluruh pengadaan dan implementasi kami mengikuti regulasi TKDN dan standar keamanan nasional.",
    },
    {
      icon: <IoPeopleOutline className="text-4xl text-primary" />,
      title: "Tim Profesional & Berpengalaman",
      description:
        "Didukung oleh tenaga ahli bersertifikat di bidang server, jaringan, dan keamanan data.",
    },
    {
      icon: <IoTvOutline className="text-4xl text-primary" />,
      title: "Layanan Berkelanjutan",
      description:
        "Kami menyediakan dukungan teknis dan monitoring 24/7 agar sistem Anda selalu optimal.",
    },
  ];
  return (
    <section className="container-custom">
      <div className="flex flex-col gap-5 items-center">
        <Pill>Keunggulan Kami</Pill>
        <div className="flex flex-col gap-4 text-white text-center">
          <h2 className="font-medium text-3xl sm:text-4xl">
            Mengapa Memilih Solinex?
          </h2>
          <p className="font-light sm:px-64">
            Kami bukan sekadar penyedia solusi IT, melainkan mitra strategis
            yang memahami kebutuhan operasional dan tantangan digitalisasi
            setiap organisasi
          </p>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-8 gap-4">
          {excellences.map((excellence, index) => (
            <Card
              icon={excellence.icon}
              title={excellence.title}
              description={excellence.description}
              variant="centered"
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
