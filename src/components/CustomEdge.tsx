import React from "react";
import { BaseEdge, EdgeLabelRenderer, getBezierPath, useNodes } from "@xyflow/react";

interface CustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition?: any;
  targetPosition?: any;
  style?: React.CSSProperties;
  markerEnd?: string;
  source?: string;
  target?: string;
}

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  source,
  target,
}: CustomEdgeProps) {
  const nodes = useNodes();
  const sourceNode = nodes.find((node) => node.id === source);
  const type = sourceNode?.data?.type;

  const colorMap: Record<string, string> = {
    "must-know": "#ef4444", // red-500
    "good-to-know": "#f59e0b", // amber-500
    optional: "#3b82f6", // blue-500
  };
  const strokeColor = colorMap[type] || "#6b7280"; // gray-500

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          stroke: strokeColor,
          strokeWidth: 2,
          strokeDasharray: 5,
          animation: 'dashdraw 0.5s linear infinite',
          filter: `drop-shadow(0 1px 2px rgba(0,0,0,0.1))`,
        }}
      />
      <style>
        {`
          @keyframes dashdraw {
            to {
              stroke-dashoffset: -10;
            }
          }
        `}
      </style>
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            pointerEvents: "none",
          }}
          className="nodrag nopan"
        />
      </EdgeLabelRenderer>
    </>
  );
}