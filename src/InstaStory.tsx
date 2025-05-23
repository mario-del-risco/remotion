// src/InstaStory.tsx
import React from "react";
import { Background } from "./components/Background";
import { GraphicElements } from "./components/GraphicElements";
import { LorieTitle } from "./components/LorieTitle";
import { Subtext } from "./components/Subtext";
import { GoldenPositionWrapper } from "./components/GoldenPositionWrapper";
import { Typewriter } from "./components/Typewriter";
import { ElevationDrawing } from "./components/ElevationDrawing";

export const InstaStory: React.FC = () => {
  const graphicConfig = {
    circleColor: "#bcb8b1",
    circleRadius: 30,
    baseSpacing: 40,
    columns: 6,
    rows: 10,
    motionDistanceFactor: 2,
    animationSpeed: 0.025,
    opacity: 0.3,
    zIndex: -1,
  };

  return (
    <div style={{ flex: 1, position: "relative" }}>
      <Background zIndex={-2} />
      <GraphicElements {...graphicConfig} />

      {/* Layout: Title + Subtext aligned at golden ratio bottom */}
      <GoldenPositionWrapper position="goldenTop">
        {(align) => (
          <>
            <LorieTitle
              quadrant="top"
              speed={0.3}
              textAlign="center"
              distance={200}
              damping={100}
              stiffness={90}
            />

            <Typewriter
              text="I love you."
              durationInFrames={90}
              textAlign="center"
              style={{
                fontSize: 32,
                fontFamily: '"DM Sans", sans-serif',
                color: "#333",
                lineHeight: 10,
              }}
            />
          </>
        )}
      </GoldenPositionWrapper>

      <ElevationDrawing
        stroke="darkslategray"
        strokeWidth={2}
        strokeDasharray="6,4"
        durationInSeconds={3}
        style={{
          top: 100,
          left: 0,
          transform: "scale(1.1)",
        }}
      />
    </div>
  );
};
