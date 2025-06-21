"use client";

import React, { useCallback, useMemo } from "react";
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

const convertToReactFlowData = (data: {
  title: string;
  mainBranches: RoadmapNode[];
}) => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const nodeVerticalGap = 110;
  const nodeHorizontalGap = 500;
  const canvasWidth = 3000;
  const initialX = canvasWidth / 2;

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
    let yCursorForChildren = parentY - totalHeight / 2 + nodeVerticalGap / 2;

    children.forEach((child) => {
      const childId = child.id || `node-${nodes.length}`;
      const childX =
        parentX +
        (direction === "right" ? nodeHorizontalGap : -nodeHorizontalGap);
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
    data: { title: data.title, type: "spine" },
    zIndex: 100,
    draggable: false,
  });

  let yCursor = rootNodeY + gapBelowRoot;
  let lastSpineNodeId = rootId;

  data.mainBranches.forEach((branch, index) => {
    const direction = index % 2 === 0 ? "right" : "left";
    const branchId = branch.id || `node-${nodes.length}`;
    const subtreeNodeCount = getNodeCount(branch);
    const subtreeHeight = subtreeNodeCount * nodeVerticalGap;
    const branchY = yCursor + subtreeHeight / 2;
    const branchX =
      initialX +
      (direction === "right" ? nodeHorizontalGap : -nodeHorizontalGap);
    const spineNodeId = `spine-waypoint-${branchId}`;

    nodes.push({
      id: spineNodeId,
      position: { x: initialX, y: branchY },
      data: {},
      type: "default",
      style: { width: 1, height: 1, background: '#94a3b8' }, // Added background back for visibility
      draggable: false,
      selectable: false,
      zIndex: -1,
    });

    edges.push({
      id: `${lastSpineNodeId}-${spineNodeId}`,
      source: lastSpineNodeId,
      target: spineNodeId,
      type: "straight", // Reverted from spineEdge
      style: { stroke: "#94a3b8", strokeWidth: 2 },
    });

    lastSpineNodeId = spineNodeId;

    nodes.push({
      id: branchId,
      type: "mindMapNode",
      position: { x: branchX, y: branchY },
      data: { ...branch, direction },
    });

    edges.push({
      id: `${spineNodeId}-${branchId}`,
      source: spineNodeId,
      target: branchId,
      type: "smoothstep",
      style: { stroke: "#94a3b8", strokeWidth: 2 },
    });

    if (branch.children?.length) {
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
  const { nodes, edges, totalHeight, canvasWidth } = useMemo(
    () => convertToReactFlowData(data),
    [data]
  );
  const [rfNodes, setRfNodes, onNodesChange] = useNodesState(nodes);
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState(edges);

  const onConnect = useCallback(
    (params: Connection) => setRfEdges((eds) => addEdge(params, eds)),
    [setRfEdges]
  );

  // Focus the view on the root node specifically, positioning it at the top-center.
  const onInit = useCallback((reactFlowInstance: any) => {
    const initialX = canvasWidth / 2;
    // Set a specific center and zoom level to match the desired initial view.
    reactFlowInstance.setCenter(initialX, 700, { zoom: 0.6, duration: 0 });
  }, [canvasWidth]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 flex justify-start overflow-auto">
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
