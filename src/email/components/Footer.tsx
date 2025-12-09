import * as React from "react";
import { Text } from "@react-email/components";
import { brand } from "./Brand";

export function Footer() {
  return (
    <>
      <Text
        style={{
          color: brand.colors.muted,
          fontSize: 12,
          marginTop: 8,
          marginBottom: 0,
        }}
      >
        {brand.org} • {brand.address}
      </Text>
      <Text style={{ color: brand.colors.muted, fontSize: 12, marginTop: 4 }}>
        Jam operasional: {brand.hours}
      </Text>
    </>
  );
}
