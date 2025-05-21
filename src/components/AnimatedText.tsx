// src/components/AnimatedText.tsx
import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

type Quadrant = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export const AnimatedText: React.FC<{
  children: React.ReactNode;
  quadrant?: Quadrant;
  speed?: number;
  style?: React.CSSProperties;
}> = ({ children, quadrant = "bottom-left", speed = 1.0, style = {} }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: {
      damping: 20,
      stiffness: 100,
      mass: 1 / speed,
    },
  });

  const translateX = quadrant.includes("left")
    ? interpolate(progress, [0, 1], [-100, 0])
    : interpolate(progress, [0, 1], [100, 0]);

  const translateY = quadrant.includes("top")
    ? interpolate(progress, [0, 1], [-100, 0])
    : interpolate(progress, [0, 1], [100, 0]);

  return (
    <div
      style={{
        transform: `translate(${translateX}px, ${translateY}px)`,
        opacity: progress,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
