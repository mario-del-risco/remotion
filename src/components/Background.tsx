// src/components/Background.tsx
import React from "react";

export const Background: React.FC<{ zIndex?: number }> = ({ zIndex = -1 }) => {
  return (
    <div
      style={{
        backgroundColor: "#f4f0ec",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex, // now works!
      }}
    />
  );
};
