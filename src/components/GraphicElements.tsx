// src/components/GraphicElements.tsx
import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { useGoldenGrid } from "../lib/useGoldenGrid";

type GraphicElementsProps = {
  circleColor?: string;
  circleRadius?: number;
  baseSpacing?: number;
  columns?: number;
  rows?: number;
  motionDistanceFactor?: number;
  animationSpeed?: number;
  opacity?: number;
  zIndex?: number;
};

export const GraphicElements: React.FC<GraphicElementsProps> = ({
  circleColor = "#d0c7be",
  circleRadius = 6,
  baseSpacing = 48,
  columns = 5,
  rows = 8,
  motionDistanceFactor = 1.5,
  animationSpeed = 0.03,
  opacity = 0.5,
  zIndex = -1,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const { get } = useGoldenGrid(baseSpacing);

  const circles: React.ReactNode[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const isEvenRow = row % 2 === 0;

      const xOffset = interpolate(
        Math.sin((frame + row * 5 + col * 3) * animationSpeed),
        [-1, 1],
        isEvenRow
          ? [-motionDistanceFactor * get(0), motionDistanceFactor * get(0)]
          : [motionDistanceFactor * get(0), -motionDistanceFactor * get(0)],
      );

      const x = (width / (columns + 1)) * (col + 1) + xOffset;
      const y = (height / (rows + 1)) * (row + 1);

      circles.push(
        <circle
          key={`${row}-${col}`}
          cx={x}
          cy={y}
          r={circleRadius}
          fill={circleColor}
          opacity={opacity}
        />,
      );
    }
  }

  return (
    <svg
      width={width}
      height={height}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex,
      }}
    >
      {circles}
    </svg>
  );
};
