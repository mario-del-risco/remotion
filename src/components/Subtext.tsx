// src/components/Subtext.tsx
import React from "react";
import { AnimatedText } from "./AnimatedText";

export const Subtext: React.FC<{
  quadrant?: string;
  speed?: number;
  textAlign?: "left" | "right" | "center";
}> = ({ quadrant, speed, textAlign = "center" }) => (
  <AnimatedText
    quadrant={quadrant}
    speed={speed}
    style={{
      fontSize: 32,
      color: "#333",
      fontFamily: '"DM Sans", sans-serif',
      textAlign,
      maxWidth: 800,
      lineHeight: 1.5,
    }}
  >
    This is what we say!
  </AnimatedText>
);
