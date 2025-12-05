import { FaServer, FaCogs, FaTools, FaLightbulb } from "react-icons/fa";
import { PrimaryButton } from "../../element/Button";
import Card from "../../element/Card";
import Pill from "../../element/Pill";

export default function ServiceSection() {
  const services = [
    {
      icon: <FaServer className="text-4xl text-primary" />,
      title: "Distribusi & Pengadaan Perangkat",
      description:
        "Penyediaan perangkat server, storage, dan networking berkualitas tinggi.",
    },
    {
      icon: <FaCogs className="text-4xl text-primary" />,
      title: "Integrasi Sistem",
      description:
        "Integrasi sistem IT yang seamless untuk mendukung operasional Anda.",
    },
    {
      icon: <FaTools className="text-4xl text-primary" />,
      title: "Managed Service & Maintenance",
      description:
        "Layanan pemeliharaan dan dukungan teknis yang komprehensif.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary" />,
      title: "Konsultasi & Perencanaan IT",
      description:
        "Konsultasi strategis untuk merencanakan infrastruktur IT Anda.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center gap-5">
          <Pill className="w-fit">Service Kami</Pill>
          <h2 className="text-[40px] font-medium md:w-[780px]">
            Layanan Terintegrasi untuk Kebutuhan Teknologi Anda
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            Dari pengadaan perangkat hingga pengelolaan sistem, semua kami
            tangani secara end-to-end agar organisasi Anda dapat beroperasi
            tanpa gangguan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {services.map((service, index) => (
            <Card
              index={index}
              title={service.title}
              icon={service.icon}
              variant="centered"
              key={index}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <PrimaryButton href="/service">Pelajari Selengkapnya</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
