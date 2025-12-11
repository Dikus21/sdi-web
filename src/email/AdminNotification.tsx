import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Img,
  Button,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { brand } from "./components/Brand";

type Payload = {
  name: string;
  email: string;
  phone: string;
  message?: string;
  subject?: string;
  submittedAt?: string;
  company?: string;
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `${process.env.NEXT_PUBLIC_SITE_URL}`
  : "https://rimbun.co.id";

export default function AdminNotification({
  name,
  phone,
  email,
  subject,
  message,
  submittedAt,
  company,
}: Payload) {
  const displayName = name ? name.toUpperCase() : "UNKNOWN";
  const submissionDate = submittedAt
    ? new Date(submittedAt).toLocaleString("id-ID", {
        dateStyle: "full",
        timeStyle: "short",
      })
    : new Date().toLocaleString("id-ID", {
        dateStyle: "full",
        timeStyle: "short",
      });

  const previewText = `[INQUIRY] Permintaan baru dari ${displayName}${company ? ` - ${company}` : ""}. Segera tindak lanjuti.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Tailwind config={{ theme: { extend: { colors: { ...brand.colors } } } }}>
        <Body className="bg-bg text-text">
          {/* Hidden preheader */}
          <div
            style={{
              display: "none",
              fontSize: "1px",
              color: "#ffffff",
              lineHeight: "1px",
              maxHeight: "0px",
              maxWidth: "0px",
              opacity: 0,
              overflow: "hidden",
            }}
          >
            {previewText}
            {"\u00A0\u200C\u200B".repeat(80)}
          </div>

          <Container className="mx-auto my-6 w-[600px] ">
            {/* Header - background putih dengan border hijau */}
            <Section
              style={{
                backgroundColor: "#ffffff",
                borderBottom: `3px solid ${brand.colors.primary}`,
              }}
              className="rounded-t-2xl px-8 py-6 text-center"
            >
              <Img
                src={`${baseUrl}/logo-rda.png`}
                alt="Logo"
                width="50"
                height="50"
                className="mx-auto"
              />
              <Text
                style={{
                  margin: "12px 0 0 0",
                  fontSize: 18,
                  fontWeight: 700,
                  color: brand.colors.text,
                }}
              >
                PERMINTAAN BARU MASUK
              </Text>
              <Text
                style={{
                  margin: "4px 0 0 0",
                  fontSize: 14,
                  color: brand.colors.muted,
                }}
              >
                {submissionDate}
              </Text>
            </Section>

            {/* Content */}
            <Section className="rounded-b-2xl bg-card px-8 py-6">
              {/* Alert */}
              <Section
                style={{
                  backgroundColor: "#FEF3C7",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  marginBottom: "24px",
                }}
              >
                <Text style={{ margin: 0, fontSize: 14, color: "#92400E" }}>
                  ⚡ <b>Action Required:</b> Segera hubungi customer ini dalam
                  waktu 1x24 jam.
                </Text>
              </Section>

              {/* Customer Info */}
              <Text
                style={{
                  margin: "0 0 12px 0",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: brand.colors.muted,
                }}
              >
                Informasi Customer
              </Text>

              <table
                style={{
                  width: "100%",
                  fontSize: 14,
                  borderCollapse: "collapse",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        color: brand.colors.muted,
                        width: 130,
                        padding: "8px 0",
                        verticalAlign: "top",
                      }}
                    >
                      Nama
                    </td>
                    <td style={{ padding: "8px 0", fontWeight: 600 }}>
                      {displayName}
                    </td>
                  </tr>
                  {company && (
                    <tr>
                      <td
                        style={{
                          color: brand.colors.muted,
                          padding: "8px 0",
                          verticalAlign: "top",
                        }}
                      >
                        Perusahaan
                      </td>
                      <td style={{ padding: "8px 0" }}>{company}</td>
                    </tr>
                  )}
                  <tr>
                    <td
                      style={{
                        color: brand.colors.muted,
                        padding: "8px 0",
                        verticalAlign: "top",
                      }}
                    >
                      Email
                    </td>
                    <td style={{ padding: "8px 0" }}>
                      <Link
                        href={`mailto:${email}`}
                        style={{ color: brand.colors.primary }}
                      >
                        {email}
                      </Link>
                    </td>
                  </tr>
                  {phone && (
                    <tr>
                      <td
                        style={{
                          color: brand.colors.muted,
                          padding: "8px 0",
                          verticalAlign: "top",
                        }}
                      >
                        Telepon
                      </td>
                      <td style={{ padding: "8px 0" }}>
                        <Link
                          href={`tel:${phone}`}
                          style={{ color: brand.colors.primary }}
                        >
                          {phone}
                        </Link>
                      </td>
                    </tr>
                  )}
                  {subject && (
                    <tr>
                      <td
                        style={{
                          color: brand.colors.muted,
                          padding: "8px 0",
                          verticalAlign: "top",
                        }}
                      >
                        Topik
                      </td>
                      <td style={{ padding: "8px 0" }}>{subject}</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Message */}
              {message && (
                <>
                  <Hr className="my-5 border-border" />
                  <Text
                    style={{
                      margin: "0 0 12px 0",
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: brand.colors.muted,
                    }}
                  >
                    Pesan
                  </Text>
                  <Section
                    style={{
                      backgroundColor: "#f9fafb",
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                  >
                    <Text
                      style={{
                        margin: 0,
                        whiteSpace: "pre-wrap",
                        fontSize: 14,
                        lineHeight: "1.6",
                      }}
                    >
                      {message}
                    </Text>
                  </Section>
                </>
              )}

              {/* CTA Buttons */}
              <Hr className="my-5 border-border" />
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td align="center">
                      {phone && (
                        <Button
                          href={`https://wa.me/${phone.replace(/\D/g, "")}?text=Halo%20${encodeURIComponent(name)},%20saya%20dari%20PT%20Rimbun%20Daur%20Alam.%20Terima%20kasih%20telah%20menghubungi%20kami.`}
                          style={{
                            backgroundColor: "#16A34A",
                            borderRadius: "8px",
                            padding: "12px 20px",
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#ffffff",
                            marginRight: "8px",
                          }}
                        >
                          WhatsApp
                        </Button>
                      )}
                      <Button
                        href={`mailto:${email}?subject=Re: Permintaan Informasi - PT Rimbun Daur Alam&body=Halo%20${encodeURIComponent(name)},%0A%0ATerima%20kasih%20telah%20menghubungi%20PT%20Rimbun%20Daur%20Alam.%0A%0A`}
                        style={{
                          backgroundColor: brand.colors.primary,
                          borderRadius: "8px",
                          padding: "12px 20px",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#ffffff",
                        }}
                      >
                        Balas Email
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Footer */}
            <Section className="mt-4 text-center">
              <Text
                style={{ margin: 0, fontSize: 12, color: brand.colors.muted }}
              >
                Email ini dikirim otomatis dari website {brand.org}
              </Text>
              <Text
                style={{
                  margin: "4px 0 0 0",
                  fontSize: 12,
                  color: brand.colors.muted,
                }}
              >
                Jangan balas email ini secara langsung.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
