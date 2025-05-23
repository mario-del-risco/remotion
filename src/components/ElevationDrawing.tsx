import React, { CSSProperties } from "react";
import { useVideoConfig } from "remotion";
import { AnimatedPath } from "./AnimatedPath";

type ElevationDrawingProps = {
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  style?: CSSProperties;
  durationInSeconds?: number;
};

export const ElevationDrawing: React.FC<ElevationDrawingProps> = ({
  stroke = "black",
  strokeWidth = 2,
  strokeDasharray,
  width = "100%",
  height = "100%",
  viewBox = "0 0 500 300",
  style = {},
  durationInSeconds = 5,
}) => {
  const { fps } = useVideoConfig();
  const totalFrames = Math.round(durationInSeconds * fps);

  const sharedProps = {
    stroke,
    strokeWidth,
    ...(strokeDasharray ? { strokeDasharray } : {}),
  };

  const pathCount = 12;
  const baseDuration = Math.round(totalFrames / pathCount);
  const step = baseDuration;

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
      style={{
        position: "absolute",
        ...style,
      }}
    >
      {/* Ground and base */}
      <AnimatedPath
        d="M40 260 H460"
        durationFrames={baseDuration}
        {...sharedProps}
      />
      <AnimatedPath
        d="M60 260 V160"
        durationFrames={baseDuration}
        delayFrames={step * 1}
        {...sharedProps}
      />
      <AnimatedPath
        d="M440 260 V160"
        durationFrames={baseDuration}
        delayFrames={step * 2}
        {...sharedProps}
      />

      {/* Roof (multi-tiered) */}
      <AnimatedPath
        d="M60 160 L150 100 L250 140 L350 100 L440 160"
        durationFrames={baseDuration}
        delayFrames={step * 3}
        {...sharedProps}
      />

      {/* Door */}
      <AnimatedPath
        d="M220 260 V200 H280 V260"
        durationFrames={baseDuration}
        delayFrames={step * 4}
        {...sharedProps}
      />

      {/* Windows left */}
      <AnimatedPath
        d="M80 240 V200 H120 V240 Z"
        durationFrames={baseDuration}
        delayFrames={step * 5}
        {...sharedProps}
      />
      <AnimatedPath
        d="M90 220 H110 M100 200 V240"
        durationFrames={baseDuration}
        delayFrames={step * 6}
        {...sharedProps}
      />

      {/* Windows right */}
      <AnimatedPath
        d="M380 240 V200 H420 V240 Z"
        durationFrames={baseDuration}
        delayFrames={step * 7}
        {...sharedProps}
      />
      <AnimatedPath
        d="M390 220 H410 M400 200 V240"
        durationFrames={baseDuration}
        delayFrames={step * 8}
        {...sharedProps}
      />

      {/* Upper gable line */}
      <AnimatedPath
        d="M150 100 L250 60 L350 100"
        durationFrames={baseDuration}
        delayFrames={step * 9}
        {...sharedProps}
      />

      {/* Trim/decoration */}
      <AnimatedPath
        d="M60 160 H440"
        durationFrames={baseDuration}
        delayFrames={step * 10}
        {...sharedProps}
      />
      <AnimatedPath
        d="M220 200 H280"
        durationFrames={baseDuration}
        delayFrames={step * 11}
        {...sharedProps}
      />
    </svg>
  );
};
