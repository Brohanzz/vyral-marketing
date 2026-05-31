"use client";
import { useState } from "react";

export default function ApiTooltip({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 6 }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 15,
          height: 15,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.25)",
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          color: "rgba(255,255,255,0.4)",
          cursor: "default",
          flexShrink: 0,
        }}
      >
        i
      </span>
      {visible && (
        <span
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: 0,
            width: 280,
            background: "#1a1128",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: 10,
            padding: "12px 14px",
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6,
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          VYRAL connects to LinkedIn exclusively through the official API — the same authorised channel LinkedIn approves for verified partners. This means your data is accessed securely, with no browser extension required and no risk to your account.
        </span>
      )}
    </span>
  );
}
