import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  notchVariant?: "top-right" | "bottom-left" | "both" | "none"; // Tambah bottom-left
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  showArrow?: boolean;
  notchSize?: number;
  className?: string;
}

const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
  notchVariant = "top-right", // Default: notch kanan atas aja
  size = "md",
  fullWidth = false,
  disabled = false,
  showArrow = true,
  notchSize = 12,
  className = "",
}: ButtonProps) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-3 
    font-bold uppercase tracking-wide 
    transition-all duration-300 hover:scale-105 
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    relative
  `;

  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary-dark text-black shadow-lg hover:shadow-xl",
    secondary:
      "bg-secondary hover:bg-surface-hover text-black border border-border",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  // Clip-path berdasarkan notch variant
  const notchStyles = {
    // Notch di kanan atas aja (yang orange di gambar)
    "top-right": {
      clipPath: `polygon(
        0 0, 
        calc(100% - ${notchSize}px) 0, 
        100% ${notchSize}px, 
        100% 100%, 
        0 100%
      )`,
    },
    // Notch di kiri bawah aja (yang cream di gambar)
    "bottom-left": {
      clipPath: `polygon(
        0 0,
        100% 0, 
        100% 100%, 
        ${notchSize}px 100%,
        0 calc(100% - ${notchSize}px)
      )`,
    },
    // Notch di kanan atas DAN kiri bawah (kedua-duanya)
    both: {
      clipPath: `polygon(
        0 0,
        calc(100% - ${notchSize}px) 0, 
        100% ${notchSize}px, 
        100% 100%,
        ${notchSize}px 100%,
        0 calc(100% - ${notchSize}px)
      )`,
    },
    // Tanpa notch
    none: {},
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <FiArrowUpRight className="text-xl shrink-0" />}
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={classes} style={notchStyles[notchVariant]}>
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={notchStyles[notchVariant]}
    >
      {content}
    </button>
  );
};

export default Button;

// ============================================
// STYLED VARIATIONS
// ============================================

// Orange button - notch kanan atas aja
export const PrimaryButton = (props: Omit<ButtonProps, "variant">) => (
  <Button {...props} variant="primary" notchVariant="top-right" />
);

// Cream button - notch kiri bawah aja
export const SecondaryButton = (props: Omit<ButtonProps, "variant">) => (
  <Button {...props} variant="secondary" notchVariant="bottom-left" />
);

// Outline button
export const OutlineButton = (props: Omit<ButtonProps, "variant">) => (
  <Button {...props} variant="outline" />
);

// Ghost button
export const GhostButton = (props: Omit<ButtonProps, "variant">) => (
  <Button {...props} variant="ghost" />
);

// ============================================
// USAGE EXAMPLES
// ============================================

/*

import Button, { PrimaryButton, SecondaryButton } from './components/Button';

// ===== Seperti Gambar Anda =====

// Cream button - notch kiri bawah aja
<SecondaryButton>Konsultasi Gratis</SecondaryButton>

// Orange button - notch kanan atas aja
<PrimaryButton>Hubungi Kami</PrimaryButton>


// ===== Manual Notch Variant =====

// Notch kanan atas aja
<Button variant="primary" notchVariant="top-right">
  Hubungi Kami
</Button>

// Notch kiri bawah aja
<Button variant="secondary" notchVariant="bottom-left">
  Konsultasi Gratis
</Button>

// Notch di 2 pojok (kanan atas & kiri bawah)
<Button variant="outline" notchVariant="both">
  Both Notches
</Button>

// Tanpa notch
<Button variant="primary" notchVariant="none">
  Regular Button
</Button>


// ===== Custom Notch Size =====

<Button notchVariant="top-right" notchSize={25}>
  Large Notch Right
</Button>

<Button notchVariant="bottom-left" notchSize={30}>
  Large Notch Left
</Button>

<Button notchVariant="both" notchSize={20}>
  Both Notches
</Button>


// ===== Sizes =====

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>


// ===== Real World Example =====

// Hero Section (seperti gambar Anda)
<div className="flex gap-4">
  <SecondaryButton size="lg" notchSize={25}>
    Konsultasi Gratis
  </SecondaryButton>
  <PrimaryButton size="lg" notchSize={25}>
    Hubungi Kami
  </PrimaryButton>
</div>

// Form
<PrimaryButton fullWidth size="lg">
  Kirim Pesan
</PrimaryButton>

// Card
<OutlineButton size="sm" notchVariant="bottom-left">
  Lihat Detail
</OutlineButton>

*/
