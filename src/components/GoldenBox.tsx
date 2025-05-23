// src/components/GoldenBox.tsx
import React from "react";
import { useGoldenGrid } from "../lib/useGoldenGrid";

export const GoldenBox: React.FC<{
  paddingIndex?: number;
  marginBottomIndex?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ paddingIndex = 1, marginBottomIndex = 0, children, style }) => {
  const { get } = useGoldenGrid();

  return (
    <div
      style={{
        padding: get(paddingIndex),
        marginBottom: get(marginBottomIndex),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
