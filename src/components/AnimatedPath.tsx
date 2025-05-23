import { interpolate, useCurrentFrame } from "remotion";
import React, { useRef, useEffect, useState } from "react";

type AnimatedPathProps = {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  durationFrames: number;
  delayFrames?: number;
};

export const AnimatedPath: React.FC<AnimatedPathProps> = ({
  d,
  stroke = "black",
  strokeWidth = 2,
  durationFrames,
  delayFrames = 0,
}) => {
  const frame = useCurrentFrame();
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);

  const progress = interpolate(
    frame,
    [delayFrames, delayFrames + durationFrames],
    [length, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <path
      ref={pathRef}
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
      strokeDasharray={length}
      strokeDashoffset={progress}
    />
  );
};
