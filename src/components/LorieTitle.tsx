// src/components/LorieTitle.tsx
import React from "react";
import { AnimatedText } from "./AnimatedText";

export const LorieTitle: React.FC<{
  quadrant?: string;
  speed?: number;
  textAlign?: "left" | "right" | "center";
  distance?: number;
  damping?: number;
  stiffness?: number;
}> = ({
  quadrant,
  speed,
  textAlign = "center",
  distance,
  damping,
  stiffness,
}) => (
  <AnimatedText
    quadrant={quadrant}
    speed={speed}
    distance={distance}
    damping={damping}
    stiffness={stiffness}
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
