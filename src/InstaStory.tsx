// src/InstaStory.tsx
import React from "react";
import { Background } from "./components/Background";
import { GraphicElements } from "./components/GraphicElements";
import { LorieTitle } from "./components/LorieTitle";
import { Subtext } from "./components/Subtext";
import { GoldenPositionWrapper } from "./components/GoldenPositionWrapper";

export const InstaStory: React.FC = () => {
  return (
    <div style={{ flex: 1, position: "relative" }}>
      <Background />
      <GraphicElements />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 60,
        }}
      >
        <GoldenPositionWrapper position="goldenBottom">
          {(align) => (
            <>
              <LorieTitle quadrant="topRight" speed={1.2} textAlign={"right"} />
              <Subtext quadrant="bottomRight" speed={1.5} textAlign={"right"} />
            </>
          )}
        </GoldenPositionWrapper>
      </div>
    </div>
  );
};
