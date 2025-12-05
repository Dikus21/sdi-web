import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import Card from "../Card";

export default function VisionMissionSection() {
  return (
    <section className="container-custom">
      <div className="flex sm:flex-row items-center justify-between sm:gap-10 flex-col gap-4">
        <Card
          icon={<IoDiamondOutline className="text-4xl text-primary" />}
          title="Misi Kami"
          titleColor="primary"
          description="Kami bercita-cita menjadi perusahaan nasional terdepan dalam pengadaan dan integrasi sistem data, yang berperan aktif mendukung transformasi digital Indonesia melalui teknologi yang andal, efisien, dan berstandar tinggi. Berbekal pengalaman, keahlian, serta komitmen terhadap inovasi, kami hadir untuk membangun fondasi digital yang kokoh bagi setiap organisasi."
        ></Card>
        <Card
          icon={<IoDiamondOutline className="text-4xl text-primary" />}
          title="Visi Kami"
          titleColor="primary"
          description="Kami bercita-cita menjadi perusahaan nasional terdepan dalam pengadaan dan integrasi sistem data, yang berperan aktif mendukung transformasi digital Indonesia melalui teknologi yang andal, efisien, dan berstandar tinggi. Berbekal pengalaman, keahlian, serta komitmen terhadap inovasi, kami hadir untuk membangun fondasi digital yang kokoh bagi setiap organisasi."
        ></Card>
      </div>
    </section>
  );
}
