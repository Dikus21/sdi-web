import { siteConfig, services } from "./seo-config";

// ===========================================
// JSON-LD Structured Data Schemas
// ===========================================

// Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-name.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
  };
}

// Local Business Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ITService",
    name: siteConfig.name,
    image: `${siteConfig.url}/logo-name.png`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      postalCode: "",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2088,
      longitude: 106.8456,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: [
      "IT Infrastructure",
      "System Integration",
      "Managed Services",
      "IT Consulting",
    ],
  };
}

// Service Schema
export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Layanan PT Solinex Data Integrasi",
    description: "Layanan lengkap infrastruktur IT untuk transformasi digital",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
      },
    })),
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// WebSite Schema
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "id-ID",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo-name.png`,
      },
    },
  };
}

// FAQ Schema Generator
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ===========================================
// Helper function to convert schema to JSON string
// ===========================================

type SchemaObject = Record<string, unknown>;

export function getSchemaString(schema: SchemaObject | SchemaObject[]): string {
  const schemas = Array.isArray(schema) ? schema : [schema];

  if (schemas.length === 1) {
    return JSON.stringify(schemas[0]);
  }

  // Multiple schemas - combine with @graph
  const graphItems = schemas.map((s) => {
    const copy = { ...s };
    delete copy["@context"];
    return copy;
  });

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graphItems,
  });
}
