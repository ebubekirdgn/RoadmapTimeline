// MindMapNode.tsx (modernleştirilmiş hali)
"use client";

import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";
import Modal from "./Modal";

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

const badgeColor: Record<string, string> = {
  "must-know": "bg-red-500",
  "good-to-know": "bg-yellow-500",
  "optional": "bg-blue-500",
  "spine": "bg-transparent",
};

const MindMapNode = ({ data }: MindMapNodeProps) => {
  const { title, type, children, direction, description, link } = data;
  const [modalOpen, setModalOpen] = useState(false);
  
  const childCount = children?.length || 0;
  const isSpine = type === 'spine';
  const isLeft = direction === 'left';
  const isClickable = !isSpine;

  const handleNodeClick = () => {
    if (isClickable) {
      setModalOpen(true);
    }
  };

  if (isSpine) {
    return (
      <div className="animate-fade-in-scale">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 dark:from-sky-300 dark:via-blue-400 dark:to-purple-400 tracking-tighter text-center drop-shadow-lg animate-gradient-text">
          {title}
        </h1>
        <style>
          {`
            .animate-gradient-text {
              background-size: 200% 200%;
              animation: gradient-animation 4s ease infinite;
            }

            @keyframes gradient-animation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </div>
    )
  }

  return (
    <>
      <div
        className={`mindmap-node group rounded-xl shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 transition-all duration-300 ease-in-out animate-fade-in-scale
        ${isClickable 
          ? 'cursor-pointer hover:shadow-2xl hover:scale-105 hover:border-sky-400/50 dark:hover:border-sky-500/50 hover:shadow-sky-500/10' 
          : 'shadow-md'
        }
        `}
        onClick={handleNodeClick}
        style={{ padding: '12px 20px', minWidth: '240px', maxWidth: '320px' }}
      >
        <div className="flex items-center justify-center gap-3">
          <div className={`status-dot w-3 h-3 rounded-full ${badgeColor[type as keyof typeof badgeColor] || badgeColor.optional} transition-colors duration-300`}></div>
          <div className="font-semibold text-lg text-gray-800 dark:text-gray-100 text-left flex-1">
            {title}
          </div>
           {childCount > 0 && 
            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-200/30 dark:bg-gray-700/50 rounded-full px-2 py-0.5">
              {childCount}
            </div>
           }
        </div>
        {!isSpine && (
          <Handle
            type="target"
            position={isLeft ? Position.Right : Position.Left}
            id="target"
            className="!w-2 !h-2 !bg-gray-400 dark:!bg-gray-600 !border-0 group-hover:!bg-sky-500 transition-colors duration-300"
          />
        )}
        {childCount > 0 && (
          <Handle
            type="source"
            position={isLeft ? Position.Left : Position.Right}
            id="source"
            className="!w-2 !h-2 !bg-gray-400 dark:!bg-gray-600 !border-0 group-hover:!bg-sky-500 transition-colors duration-300"
          />
        )}
      </div>

      {isClickable && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={title}>
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: description || "" }} />
          {link && (
              <p className="mt-6">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 font-bold underline underline-offset-4 transition-colors duration-200 inline-flex items-center gap-1`}
                >
                  Learn more <span>→</span>
                </a>
              </p>
            )}
        </Modal>
      )}
    </>
  );
};

export default MindMapNode;
