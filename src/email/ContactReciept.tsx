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
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { brand } from "./components/Brand";

type Props = {
  /** Customer name to personalize greeting */
  name: string;
  /** Topic of the request, e.g. "Waste Sorting Line" */
  topic?: string;
  /** Requested info: accept string or array of bullet points */
  requestedInfo?: string | string[];
  /** Phone number to display; falls back to brand.phone */
  phone?: string;
  /** Organization name; falls back to brand.org */
  orgName?: string;
  /** Override logo URL if needed */
  logoUrl?: string;
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `${process.env.NEXT_PUBLIC_SITE_URL}`
  : "https://rimbun.co.id";

export default function ContactReceipt({
  name,
  topic,
  orgName = "PT Rimbun Daur Alam",
}: Props) {
  const org = orgName ?? brand.org;
  const displayName = name ? name.toUpperCase() : "CUSTOMER";

  const previewText = `Halo ${displayName}, terima kasih telah menghubungi ${org}. Kami telah menerima permintaan Anda${topic ? ` untuk ${topic}` : ""} dan akan segera menghubungi Anda kembali.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Tailwind config={{ theme: { extend: { colors: { ...brand.colors } } } }}>
        <Body className="bg-bg text-text">
          {/* Hidden preheader untuk Gmail - mencegah collapse */}
          <div
            style={
              {
                display: "none",
                fontSize: "1px",
                color: "#ffffff",
                lineHeight: "1px",
                maxHeight: "0px",
                maxWidth: "0px",
                opacity: 0,
                overflow: "hidden",
                msoHide: "all",
              } as React.CSSProperties
            }
          >
            {previewText}
            {"\u00A0\u200C\u200B".repeat(80)}
          </div>

          <Container className="mx-auto my-6 w-[600px] rounded-2xl bg-card p-8">
            {/* Logo header */}
            <Section className="text-center">
              <Img
                src={`${baseUrl}/logo.png`}
                alt={`${org} logo`}
                width="50"
                height="50"
                className="mx-auto"
              />
            </Section>

            {/* Main message */}
            <Section className="leading-7">
              <Text className="text-base">
                Hello <b>{displayName}</b>,
              </Text>

              <Text className="text-base">
                Terima kasih telah menghubungi kami. Kami menghargai
                ketertarikan Anda pada bisnis kami. Dengan ini kami
                mengonfirmasi bahwa kami telah menerima permintaan Anda
                {topic ? (
                  <>
                    {" "}
                    for <b>{topic}</b>.
                  </>
                ) : (
                  "."
                )}
              </Text>

              <Text className="mt-4 text-base">
                Kami akan menghubungi Anda segera mungkin, Terimakasih.
              </Text>

              <Text className="mt-4 text-base">
                Hormat kami,
                <br />
                {org ?? "PT Rimbun Daur Alam"}
              </Text>
            </Section>

            <Hr className="my-6 border-border" />

            {/* Footer */}
            <Section>
              <Text className="m-0 text-xs text-muted">
                {org} • {brand.address}
              </Text>
              <Text className="m-0 mt-1 text-xs text-muted">
                Business Hours: {brand.hours}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
