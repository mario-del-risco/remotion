// src/components/AnimatedText.tsx
import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

type Direction =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center";

type AnimatedTextProps = {
  children: React.ReactNode;
  quadrant?: Direction;
  speed?: number;
  distance?: number; // how far it moves in pixels
  damping?: number;
  stiffness?: number;
  style?: React.CSSProperties;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  quadrant = "bottom-left",
  speed = 1,
  distance = 100,
  damping = 20,
  stiffness = 100,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: {
      damping,
      stiffness,
      mass: 1 / speed,
    },
  });

  const getTranslation = (direction: Direction) => {
    switch (direction) {
      case "top":
        return { x: 0, y: -distance };
      case "bottom":
        return { x: 0, y: distance };
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "top-left":
        return { x: -distance, y: -distance };
      case "top-right":
        return { x: distance, y: -distance };
      case "bottom-left":
        return { x: -distance, y: distance };
      case "bottom-right":
        return { x: distance, y: distance };
      case "center":
      default:
        return { x: 0, y: 0 };
    }
  };

  const { x, y } = getTranslation(quadrant);

  const translateX = interpolate(progress, [0, 1], [x, 0]);
  const translateY = interpolate(progress, [0, 1], [y, 0]);

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
