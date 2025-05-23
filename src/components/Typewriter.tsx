// src/components/Typewriter.tsx
import React from "react";
import { useCurrentFrame, interpolate, useVideoConfig } from "remotion";

type TypewriterProps = {
  text: string;
  durationInFrames: number;
  cursor?: boolean;
  style?: React.CSSProperties;
  textAlign?: "left" | "right" | "center";
};

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  durationInFrames,
  cursor = true,
  style = {},
  textAlign = "left",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const totalChars = text.length;

  // Determine how many characters should be visible based on time
  const charsVisible = Math.floor(
    interpolate(frame, [0, durationInFrames], [0, totalChars], {
      extrapolateRight: "clamp",
    }),
  );

  const visibleText = text.slice(0, charsVisible);
  const showCursor = cursor && frame % 30 < 15; // blinking every 0.5s

  return (
    <div
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        width: "100%",
        textAlign,
        ...style,
      }}
    >
      {visibleText}
      {showCursor && "|"}
    </div>
  );
};
