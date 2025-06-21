// MindMapNode.tsx (modernleştirilmiş hali)
"use client";

import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";
import Modal from "./Modal";
import { Lightbulb, CheckCircle2, Info } from "lucide-react";

interface MindMapNodeProps {
  data: {
    title: string;
    type: string;
    children?: any[];
    direction?: string;
    description?: string;
    link?: string;
  };
}

const badgeConfig: Record<string, { color: string; icon: JSX.Element }> = {
  "must-know": { color: "bg-red-500", icon: <CheckCircle2 size={16} className="text-red-500" /> },
  "good-to-know": { color: "bg-yellow-500", icon: <Lightbulb size={16} className="text-yellow-500" /> },
  optional: { color: "bg-blue-500", icon: <Info size={16} className="text-blue-500" /> },
  spine: { color: "bg-transparent", icon: <></> },
};

const MindMapNode = ({ data }: MindMapNodeProps) => {
  const { title, type, children, direction, description, link } = data;
  const [modalOpen, setModalOpen] = useState(false);
  const childCount = children?.length || 0;
  const isSpine = type === "spine";
  const isLeft = direction === "left";
  const isClickable = !isSpine;
  const badge = badgeConfig[type] || badgeConfig.optional;

  if (isSpine) {
    return (
      <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg px-8 py-4 rounded-2xl shadow-xl border border-gray-300/30 dark:border-gray-700/30">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">{title}</h1>
      </div>
    );
  }

  return (
    <>
      <div
        className={`rounded-2xl shadow-md bg-gradient-to-br from-white/90 to-sky-100 dark:from-gray-800/80 dark:to-gray-700/80
        backdrop-blur-lg border border-gray-200/30 dark:border-gray-700/30 transition-all duration-300 ease-in-out
        ${isClickable ? "cursor-pointer hover:scale-[1.03] hover:shadow-xl hover:border-sky-400 dark:hover:border-sky-500" : ""}
        `}
        onClick={() => isClickable && setModalOpen(true)}
        style={{ padding: "18px 24px", minWidth: "240px", maxWidth: "340px" }}
      >
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${badge.color}`}></div>
          <div className="font-semibold text-base text-gray-800 dark:text-gray-100 flex-1">{title}</div>
          {badge.icon}
          {childCount > 0 && (
            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-200/50 dark:bg-gray-700/50 rounded-full px-2 py-0.5">
              {childCount}
            </div>
          )}
        </div>
        <Handle
          type="target"
          position={isLeft ? Position.Right : Position.Left}
          id="target"
          className="!w-2 !h-2 !bg-gray-400"
        />
        {childCount > 0 && (
          <Handle
            type="source"
            position={isLeft ? Position.Left : Position.Right}
            id="source"
            className="!w-2 !h-2 !bg-gray-400"
          />
        )}
      </div>

      {isClickable && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={title}>
          <div
            className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
          {link && (
            <p className="mt-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 font-bold underline underline-offset-4 transition-colors duration-200"
              >
                Learn more →
              </a>
            </p>
          )}
        </Modal>
      )}
    </>
  );
};

export default MindMapNode;
