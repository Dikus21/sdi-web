// ===========================================
// SEO Configuration for PT Solinex Data Integrasi
// ===========================================

export const siteConfig = {
  name: "PT Solinex Data Integrasi",
  shortName: "Solinex",
  description:
    "PT Solinex Data Integrasi - Mitra terpercaya untuk solusi infrastruktur IT, jaringan, dan sistem data terintegrasi. Mendukung transformasi digital Indonesia dengan layanan pengadaan server, integrasi sistem, dan managed service.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://solinex.co.id",
  ogImage: "/og-image.jpg",
  locale: "id_ID",
  language: "id",
  creator: "PT Solinex Data Integrasi",
  keywords: [
    "infrastruktur IT Indonesia",
    "integrasi sistem Jakarta",
    "pengadaan server Indonesia",
    "managed service IT",
    "solusi jaringan perusahaan",
    "IT solutions Indonesia",
    "sistem data terintegrasi",
    "transformasi digital Indonesia",
    "layanan IT enterprise",
    "konsultasi IT Jakarta",
    "maintenance server",
    "network infrastructure",
    "TKDN IT",
    "vendor IT Indonesia",
  ],
  contact: {
    email: "info@solinex.co.id",
    phone: `+${process.env.NEXT_PUBLIC_SITE_URL ?? "622211166999"}`,
    address: "Jakarta, Indonesia",
  },
  social: {
    // Tambahkan social media links jika ada
    linkedin: "",
    instagram: "",
    facebook: "",
  },
};

// ===========================================
// Page-specific Metadata
// ===========================================

export const pageMetadata = {
  home: {
    title: "Solusi Infrastruktur IT Terpercaya",
    description:
      "PT Solinex Data Integrasi - Mitra terpercaya untuk solusi infrastruktur IT, pengadaan server, integrasi sistem, dan managed service. Mendukung transformasi digital Indonesia.",
    keywords: [
      "infrastruktur IT Indonesia",
      "solusi IT enterprise",
      "transformasi digital",
    ],
  },
  about: {
    title: "Tentang Kami",
    description:
      "PT Solinex Data Integrasi adalah perusahaan penyedia solusi infrastruktur teknologi informasi yang berfokus pada pengadaan perangkat server, jaringan, storage, serta layanan integrasi dan pemeliharaan sistem.",
    keywords: [
      "tentang solinex",
      "perusahaan IT Indonesia",
      "vendor IT terpercaya",
    ],
  },
  services: {
    title: "Layanan Kami",
    description:
      "Layanan lengkap infrastruktur IT: Distribusi & Pengadaan Perangkat, Integrasi Sistem, Managed Service & Maintenance, dan Konsultasi IT untuk kebutuhan bisnis Anda.",
    keywords: [
      "layanan IT",
      "managed service",
      "integrasi sistem",
      "konsultasi IT",
    ],
  },
  contact: {
    title: "Hubungi Kami",
    description:
      "Hubungi PT Solinex Data Integrasi untuk konsultasi solusi infrastruktur IT. Tim kami siap membantu kebutuhan teknologi informasi perusahaan Anda.",
    keywords: ["kontak solinex", "konsultasi IT", "hubungi kami"],
  },
  projects: {
    title: "Proyek Kami",
    description:
      "Portfolio proyek PT Solinex Data Integrasi: Smart City Infrastructure, Integrasi Sistem Enterprise, dan berbagai implementasi teknologi untuk instansi pemerintah dan swasta.",
    keywords: [
      "proyek IT",
      "smart city",
      "portfolio infrastruktur",
      "implementasi sistem",
    ],
  },
};

// ===========================================
// Services Data for Schema
// ===========================================

export const services = [
  {
    name: "Distribusi & Pengadaan Perangkat",
    description:
      "Pengadaan perangkat server, jaringan, storage, dan infrastruktur IT lainnya dengan standar TKDN.",
  },
  {
    name: "Integrasi Sistem",
    description:
      "Layanan integrasi sistem IT end-to-end untuk membangun infrastruktur yang terhubung dan efisien.",
  },
  {
    name: "Managed Service & Maintenance",
    description:
      "Layanan pemeliharaan dan pengelolaan sistem IT secara berkelanjutan untuk operasional tanpa gangguan.",
  },
  {
    name: "Konsultasi & Perencanaan IT",
    description:
      "Konsultasi ahli untuk perencanaan infrastruktur IT yang optimal sesuai kebutuhan bisnis.",
  },
];
