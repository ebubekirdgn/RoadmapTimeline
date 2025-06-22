"use client";

import React, { useCallback, useMemo, useState, useEffect } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  EdgeTypes,
  NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import MindMapNode from "./MindMapNode";
import CustomEdge from "./CustomEdge";

type RoadmapNode = {
  id: string;
  title: string;
  children?: RoadmapNode[];
  [key: string]: any;
};

const convertToReactFlowData = (
  data: { title: string; mainBranches: RoadmapNode[] },
  isMobile: boolean
) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const nodeVerticalGap = 110;
  const nodeHorizontalGapRight = 380; // Shorter gap for the right side
  const nodeHorizontalGapLeft = 450;  // Longer gap for the left side
  const canvasWidth = isMobile ? 1500 : 3000;
  const initialX = isMobile ? 200 : canvasWidth / 2;

  const getNodeCount = (node: RoadmapNode): number => {
    if (!node.children || node.children.length === 0) return 1;
    return node.children.reduce((acc, child) => acc + getNodeCount(child), 0);
  };

  const processChildren = (
    children: RoadmapNode[],
    parentId: string,
    parentX: number,
    parentY: number,
    direction: "left" | "right"
  ) => {
    const totalChildNodes = children.reduce(
      (acc, c) => acc + getNodeCount(c),
      0
    );
    const totalHeight = totalChildNodes * nodeVerticalGap;
    let yCursorForChildren = parentY - (totalHeight / 2) + (nodeVerticalGap / 2);

    children.forEach((child) => {
      const childId = child.id || `node-${nodes.length}`;
      const childX =
        parentX +
        (direction === "right" ? nodeHorizontalGapRight : -nodeHorizontalGapLeft);
      const subtreeNodeCount = getNodeCount(child);
      const subtreeHeight = subtreeNodeCount * nodeVerticalGap;
      const childY =
        yCursorForChildren + subtreeHeight / 2 - nodeVerticalGap / 2;

      nodes.push({
        id: childId,
        type: "mindMapNode",
        position: { x: childX, y: childY },
        data: { ...child, direction },
      });

      edges.push({
        id: `${parentId}-${childId}`,
        source: parentId,
        target: childId,
        type: "customEdge",
        sourceHandle: "source",
        targetHandle: "target",
      });

      if (child.children?.length) {
        processChildren(child.children, childId, childX, childY, direction);
      }

      yCursorForChildren += subtreeHeight;
    });
  };

  const rootId = "root";
  const rootNodeY = 0;
  const gapBelowRoot = 150; // Reverted from 15800

  nodes.push({
    id: rootId,
    type: "mindMapNode",
    position: { x: initialX, y: rootNodeY },
    data: {
      title: data.title,
      type: 'spine',
    },
    zIndex: 100,
    draggable: false,
    style: {
      transform: 'translateX(65%)', // This ensures perfect centering
    }
  });

  let yCursor = rootNodeY + gapBelowRoot;
  let lastSpineNodeId = rootId;

  data.mainBranches.forEach((branch, index) => {
    const direction = isMobile ? 'right' : (index % 2 === 0 ? 'right' : 'left');
    const branchId = branch.id || `node-${nodes.length}`;
    const branchX = initialX + (direction === 'right' ? nodeHorizontalGapRight : -nodeHorizontalGapLeft);
    
    const subtreeNodeCount = getNodeCount(branch);
    const subtreeHeight = subtreeNodeCount * nodeVerticalGap;
    const branchY = yCursor + subtreeHeight / 2;

    const spineNodeId = `spine-waypoint-${branchId}`;

    nodes.push({
      id: spineNodeId,
      position: { x: initialX, y: branchY },
      data: {},
      type: "default",
      className: 'animate-fade-in-scale',
      style: { 
        width: 8, 
        height: 8, 
        background: '#94a3b8', // slate-400
        borderRadius: '50%',
        border: '2px solid #e2e8f0' // slate-200
      },
      draggable: false,
      selectable: false,
      zIndex: -1,
    });

    edges.push({
      id: `${lastSpineNodeId}-${spineNodeId}`,
      source: lastSpineNodeId,
      target: spineNodeId,
      type: "straight", // Reverted from spineEdge
      className: 'animate-fade-in',
      style: { 
        stroke: '#94a3b8', // slate-400
        strokeWidth: 2,
        strokeDasharray: '3 5', // Dashed line for a blueprint feel
      },
    });

    lastSpineNodeId = spineNodeId;

    nodes.push({
      id: branchId,
      type: "mindMapNode",
      position: { x: branchX, y: branchY },
      data: { ...branch, direction, isMainBranch: true },
    });

    edges.push({
      id: `${spineNodeId}-${branchId}`,
      source: spineNodeId,
      target: branchId,
      type: "smoothstep",
      className: 'animate-fade-in',
      style: { stroke: "#94a3b8", strokeWidth: 2 },
    });

    if (branch.children && branch.children.length > 0) {
      processChildren(branch.children, branchId, branchX, branchY, direction);
    }

    yCursor += subtreeHeight;
  });

  const totalHeight = yCursor + 100;
  return { nodes, edges, totalHeight, canvasWidth };
};

const nodeTypes: NodeTypes = { mindMapNode: MindMapNode as any };
const edgeTypes: EdgeTypes = { customEdge: CustomEdge };

export default function MindMap({
  data,
}: {
  data: { title: string; mainBranches: RoadmapNode[] };
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { nodes, edges, totalHeight, canvasWidth } = useMemo(
    () => convertToReactFlowData(data, isMobile),
    [data, isMobile]
  );
  const [rfNodes, setRfNodes, onNodesChange] = useNodesState(nodes);
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState(edges);

  const onConnect = useCallback(
    (params: Connection) => setRfEdges((eds) => addEdge(params, eds)),
    [setRfEdges]
  );

  // Focus the view on the root node specifically, positioning it at the top-center.
  const onInit = useCallback((reactFlowInstance: any) => {
    const initialXMobile = 200; // From convertToReactFlowData
    const initialXDesktop = canvasWidth / 2;

    if (isMobile) {
      // On mobile, focus on the top of the roadmap with a readable zoom, allowing vertical scroll.
      reactFlowInstance.setCenter(initialXMobile, 150, { zoom: 0.9, duration: 0 });
    } else {
      // On desktop, show a wider, zoomed-out view.
      reactFlowInstance.setCenter(initialXDesktop, 450, { zoom: 0.7, duration: 0 });
    }
  }, [isMobile, canvasWidth]);

  return (
    <div className="w-full min-h-screen flex justify-start overflow-auto modern-grid-background">
      <div
        style={{
          minHeight: "100%",
          width: `${canvasWidth}px`,
          position: "relative",
        }}
      >
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onInit={onInit}
          attributionPosition="bottom-left"
          zoomOnScroll
          panOnDrag
          preventScrolling={false}
          nodesDraggable
          nodesConnectable={false}
          className="bg-transparent"
        >
          <Background color="#94a3b8" gap={16} />
          <Controls showZoom showFitView />
        </ReactFlow>
      </div>
    </div>
  );
}
