import {
  FaShieldAlt,
  FaBolt,
  FaLock,
  FaRecycle,
  FaRocket,
} from "react-icons/fa";
import { PrimaryButton } from "../Button";
import Card from "../Card";
import Pill from "../Pill";

export default function CoreValueSection() {
  const coreValues = [
    {
      icon: <FaShieldAlt className="text-3xl text-primary mb-4" />,
      title: "Keandalan",
      description:
        "Kami berkomitmen menyediakan solusi dan layanan yang stabil, terpercaya, dan dapat diandalkan dalam jangka panjang, demi mendukung operasional penting institusi pemerintah dan korporasi.",
    },
    {
      icon: <FaBolt className="text-3xl text-primary mb-4" />,
      title: "Efisiensi",
      description:
        "Kami mengedepankan proses kerja yang tepat guna dan solusi yang hemat sumber daya, untuk memastikan hasil maksimal dengan biaya dan waktu yang optimal.",
    },
    {
      icon: <FaLock className="text-3xl text-primary mb-4" />,
      title: "Kepatuhan & Keamanan",
      description:
        "Kami menjunjung tinggi standar nasional, termasuk TKDN dan regulasi keamanan informasi, sebagai bentuk tanggung jawab terhadap kedaulatan digital Indonesia.",
    },
    {
      icon: <FaRecycle className="text-3xl text-primary mb-4" />,
      title: "Komitmen Berkelanjutan",
      description:
        "Kami hadir tidak hanya untuk pengadaan dan integrasi awal, tetapi juga untuk mendampingi klien melalui layanan pemeliharaan dan peningkatan sistem secara berkelanjutan.",
    },
    {
      icon: <FaRocket className="text-3xl text-primary mb-4" />,
      title: "Inovasi",
      description:
        "Kami senantiasa mencari cara baru dan solusi kreatif untuk menyederhanakan kompleksitas teknologi. Inovasi adalah kunci agar layanan kami tetap relevan dan siap menghadapi tantangan masa depan.",
    },
  ];
  return (
    <section className="py-10 relative">
      <div className="container-custom">
        <div className="mb-12 flex md:flex-row flex-col gap-22">
          <div>
            <Pill className="mb-5">Core Values Kami</Pill>
            <h2 className="text-[40px] font-medium mb-8">
              Partner Integrasi yang Dipercaya dan Teruji
            </h2>
            <p className="text-secondary text-lg mb-5 leading-relaxed">
              Core values adalah fondasi yang membentuk identitas dan arah
              perusahaan kami. Nilai-nilai ini menjadi kompas yang menuntun
              setiap langkah kami, memastikan setiap layanan yang kami berikan
              berakar pada integritas, profesionalisme, dan inovasi.
            </p>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              Mereka bukan sekadar kata, tetapi prinsip yang kami jalani dalam
              membangun kepercayaan, menciptakan solusi, dan menghadirkan dampak
              nyata bagi klien serta bangsa.
            </p>
            <PrimaryButton href="/about">Lihat Selengkapnya</PrimaryButton>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1">
            {coreValues.map((value, index) => (
              <Card
                index={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                showBorder={false}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
