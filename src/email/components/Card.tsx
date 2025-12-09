import * as React from "react";
import { Section } from "@react-email/components";
import { brand } from "./Brand";

export function Card(props: React.PropsWithChildren<{ padded?: boolean }>) {
  return (
    <Section
      style={{
        border: `1px solid ${brand.colors.border}`,
        background: brand.colors.card,
        borderRadius: 16,
        padding: props.padded === false ? 0 : 24,
      }}
    >
      {props.children}
    </Section>
  );
}
