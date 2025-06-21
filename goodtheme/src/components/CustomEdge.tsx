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
  const isRight = sourceNode?.data?.direction === "right";
  const type = sourceNode?.data?.type;

  const colorMap: Record<string, string> = {
    "must-know": "#ef4444",
    "good-to-know": "#f59e0b",
    optional: "#3b82f6",
  };
  const strokeColor = colorMap[type] || (isRight ? "#10b981" : "#3b82f6");

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const isSpineConnection = source?.includes("anchor-");

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          stroke: isSpineConnection ? "transparent" : strokeColor,
          strokeWidth: isSpineConnection ? 0 : 2.5,
          strokeDasharray: isSpineConnection ? "none" : "6,6",
          filter: isSpineConnection ? "none" : "drop-shadow(0 2px 6px rgba(0,0,0,0.08))",
          opacity: isSpineConnection ? 0 : 1,
        }}
      />
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