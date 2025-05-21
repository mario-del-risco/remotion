// src/components/GraphicElements.tsx
import React from "react";

export const GraphicElements: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 80,
          width: 100,
          height: 4,
          backgroundColor: "#1c1c1c",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 150,
          right: 80,
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "2px solid #1c1c1c",
        }}
      />
    </>
  );
};
