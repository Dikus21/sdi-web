import { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  variant?: "default" | "centered" | "left-aligned";
  showBorder?: boolean;
  className?: string;
  index?: number;
  titleColor?: string;
}

const Card = ({
  icon,
  title,
  description,
  variant = "default",
  showBorder = true,
  className = "",
  index,
  titleColor = "foreground",
}: CardProps) => {
  const borderClass = showBorder ? "border border-[#FF9F1C]/20" : "";
  const bgClass = "bg-transparent";

  const alignmentClass = {
    default: "text-left",
    centered: "text-center items-center",
    "left-aligned": "text-left",
  }[variant];

  return (
    <div
      key={index}
      className={`
        ${bgClass} 
        ${borderClass} 
        rounded-xl p-6 lg:p-8 
        flex flex-col gap-5
        ${alignmentClass}
        hover:border-primary transition-all duration-300
        ${className}
      `}
    >
      {/* Icon */}
      {icon && <div className="text-primary text-4xl lg:text-5xl">{icon}</div>}

      {/* Title */}
      <h2 className={`text-xl font-medium text-${titleColor}`}>{title}</h2>

      {/* Description */}
      <p className="text-white text-sm font-light">{description}</p>
    </div>
  );
};

export default Card;

// ============================================
// USAGE EXAMPLES
// ============================================

/*

import ServiceCard from './components/ServiceCard';
import { FaAward, FaShieldAlt, FaServer } from 'react-icons/fa';
import { GiDiamondTrophy } from 'react-icons/gi';

// ===== Card 1: Centered dengan Icon & Border (Image 1) =====
<ServiceCard
  icon={<GiDiamondTrophy />}
  title="Distribusi & Pengadaan Perangkat"
  description="Penyediaan perangkat server, storage, dan networking berkualitas tinggi."
  variant="centered"
  showBorder={true}
/>


// ===== Card 2: Left-aligned dengan Icon (Image 2) =====
<ServiceCard
  icon={<FaAward />}
  title="Keandalan"
  description="Kami berkomitmen menyediakan solusi dan layanan yang stabil, terpercaya, dan dapat diandalkan dalam jangka panjang, demi mendukung operasional penting institusi pemerintah dan korporasi."
  variant="left-aligned"
  showBorder={false}
/>


// ===== Card 3: Left-aligned dengan Icon & Border (Image 3) =====
<ServiceCard
  icon={<GiDiamondTrophy />}
  title="Misi Kami"
  description="Kami berfokus menjadi perusahaan nasional terdepan dalam pengadaan dan integrasi sistem data, yang berperan aktif mendukung transformasi digital Indonesia melalui teknologi yang andal, efisien, dan bersandar tinggi."
  variant="left-aligned"
  showBorder={true}
/>


// ===== Grid Layout untuk Multiple Cards =====
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ServiceCard
    icon={<FaServer />}
    title="Distribusi & Pengadaan"
    description="Lorem ipsum dolor sit amet..."
    variant="centered"
  />
  
  <ServiceCard
    icon={<FaShieldAlt />}
    title="Keamanan"
    description="Lorem ipsum dolor sit amet..."
    variant="centered"
  />
  
  <ServiceCard
    icon={<FaAward />}
    title="Keandalan"
    description="Lorem ipsum dolor sit amet..."
    variant="centered"
  />
</div>


// ===== Tanpa Border =====
<ServiceCard
  icon={<FaAward />}
  title="Core Value"
  description="Description here..."
  showBorder={false}
/>


// ===== Custom Styling =====
<ServiceCard
  icon={<FaServer />}
  title="Custom Card"
  description="Description here..."
  className="bg-surface hover:bg-surface-hover shadow-lg"
/>


// ===== Tanpa Icon =====
<ServiceCard
  title="Text Only Card"
  description="Card without icon"
  variant="left-aligned"
/>

*/
