// src/components/LorieTitle.tsx
import React from "react";
import { AnimatedText } from "./AnimatedText";

export const LorieTitle: React.FC<{
  quadrant?: string;
  speed?: number;
  textAlign?: "left" | "right" | "center";
}> = ({ quadrant, speed, textAlign = "center" }) => (
  <AnimatedText
    quadrant={quadrant}
    speed={speed}
    style={{
      fontSize: 68,
      color: "#1c1c1c",
      fontFamily: '"Questrial", sans-serif',
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      textAlign,
    }}
  >
    Lorie Interiors
  </AnimatedText>
);
