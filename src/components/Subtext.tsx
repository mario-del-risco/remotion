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
      fontSize: 28,
      color: "#333",
      fontFamily: '"DM Sans", sans-serif',
      textAlign,
      maxWidth: 800,
      lineHeight: 1.5,
    }}
  >
    Discover how structure and story shape our latest interiors. Read the new
    blog on architectural elegance → lorieinteriors.com/blog
  </AnimatedText>
);
