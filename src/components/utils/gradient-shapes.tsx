import React from "react";

type ShapeType = "circle" | "square";

type Props = {
  shape: ShapeType;
  shapeCount: number;

  firstOpacity: number;
  lastOpacity: number;

  firstShapeSize: number;
  lastShapeSize: number;

  borderWidth: number;
  rotate?: number;

  size?: number;
  color?: string;
};

const lerp = (a: number, b: number, t: number) => {
  return a + (b - a) * t;
};

export const GradientShapes: React.FC<Props> = ({
  shape,
  shapeCount,

  firstOpacity,
  lastOpacity,

  firstShapeSize,
  lastShapeSize,

  borderWidth,
  rotate = 0,
  color = "currentColor",
}) => {
  const shapes = Array.from({ length: shapeCount });
  const size = lastShapeSize + borderWidth * 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "center",
      }}
    >
      {shapes.map((_, i) => {
        const t = shapeCount === 1 ? 0 : i / (shapeCount - 1);

        const opacity = lerp(firstOpacity, lastOpacity, t);
        const shapeSize = lerp(firstShapeSize, lastShapeSize, t);

        const center = size / 2;
        const half = shapeSize / 2;

        if (shape === "circle") return <circle key={i} cx={center} cy={center} r={half} fill="none" stroke={color} strokeWidth={borderWidth} opacity={opacity} />;
        return <rect key={i} x={center - half} y={center - half} width={shapeSize} height={shapeSize} fill="none" stroke={color} strokeWidth={borderWidth} opacity={opacity} />;
      })}
    </svg>
  );
};
