// src/components/GoldenPositionWrapper.tsx
import React from "react";

type GoldenPosition =
  | "topLeft"
  | "topRight"
  | "centerLeft"
  | "centerRight"
  | "goldenTop"
  | "goldenBottom";

const POSITIONS: Record<
  GoldenPosition,
  {
    top: string;
    left: string;
    alignItems: "flex-start" | "flex-end" | "center";
    textAlign: "left" | "right" | "center";
  }
> = {
  topLeft: {
    top: "20%",
    left: "15%",
    alignItems: "flex-start",
    textAlign: "left",
  },
  topRight: {
    top: "20%",
    left: "85%",
    alignItems: "flex-end",
    textAlign: "right",
  },
  centerLeft: {
    top: "50%",
    left: "15%",
    alignItems: "flex-start",
    textAlign: "left",
  },
  centerRight: {
    top: "50%",
    left: "85%",
    alignItems: "flex-end",
    textAlign: "right",
  },
  goldenTop: {
    top: "38.2%",
    left: "50%",
    alignItems: "center",
    textAlign: "center",
  },
  goldenBottom: {
    top: "61.8%",
    left: "50%",
    alignItems: "center",
    textAlign: "center",
  },
};

export const GoldenPositionWrapper: React.FC<{
  position: GoldenPosition;
  children: (textAlign: "left" | "right" | "center") => React.ReactNode;
}> = ({ position, children }) => {
  const config = POSITIONS[position];

  return (
    <div
      style={{
        position: "absolute",
        top: config.top,
        left: config.left,
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: config.alignItems,
        gap: 20,
        width: "80%",
      }}
    >
      {children(config.textAlign)}
    </div>
  );
};
