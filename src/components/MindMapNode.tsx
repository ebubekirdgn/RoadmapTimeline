"use client";

import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import React from "react";

type Node = {
  id: string;
  title: string;
  type?: "must-know" | "good-to-know" | "optional";
  link?: string;
  description?: string;
  direction?: "left" | "right";
  children?: Node[];
};

const badgeColor = {
  "must-know": "bg-red-500",
  "good-to-know": "bg-yellow-500",
  optional: "bg-gray-500",
};

const badgeHoverColor = {
  "must-know": "hover:bg-red-600",
  "good-to-know": "hover:bg-yellow-600",
  optional: "hover:bg-gray-600",
};

function MindMapNode({ node, isMobile = false }: { node: Node; isMobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const isRight = node.direction === "right";
  const isLeft = node.direction === "left";
  const hasChildren = node.children && node.children.length > 0;

  if (!isRight && !isLeft) return null;

  return (
    <div
      className={`relative flex flex-col ${
        isMobile ? "items-center" : isRight ? "items-start" : "items-end"
      } w-full text-sm text-gray-900 dark:text-white`}
    >
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 0 : isRight ? -5 : 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.15 }}
        className={`group flex items-center gap-2 ${
          isMobile ? "" : isRight ? "" : "flex-row-reverse"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <div
          className={`flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-slate-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/60 shadow-sm hover:shadow-md backdrop-blur transition-all duration-200 hover:scale-[1.02] cursor-pointer ${
            badgeHoverColor[node.type || "optional"]
          }`}
          onClick={() => setOpen(true)}
        >
          <span
            className={`w-2 h-2 rounded-full ${badgeColor[node.type || "optional"]} transition-colors duration-200`}
          />
          <span className="font-medium">{node.title}</span>
        </div>
      </motion.div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title={node.title}>
        <div className="space-y-4 text-base">
          {node.type && (
            <p>
              <strong>Type:</strong> 
              <span className={`ml-2 px-2 py-1 rounded-md text-xs font-semibold uppercase ${
                badgeColor[node.type]
              } text-white`}>
                {node.type}
              </span>
            </p>
          )}
          <div
            className="prose max-w-none text-gray-800 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: node.description || "" }}
          />
          {node.link && (
            <p>
              <a
                href={node.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-800 dark:hover:text-sky-400 underline underline-offset-4 transition"
              >
                Learn more
              </a>
            </p>
          )}
        </div>
      </Modal>

      {hasChildren && (
        <div
          className={`mt-4 md:mt-6 ${isMobile ? "" : isRight ? "ml-4 md:ml-6" : "mr-4 md:mr-6"} relative`}
        >
          {!isMobile && (
            <div
              className={`absolute top-0 ${isRight ? "-left-3" : "-right-3"} h-full border-l-2 border-sky-300`}
            />
          )}
          <div className="flex flex-col gap-4 md:gap-6">
            {node.children!.map((child) => (
              <div key={child.id} className={`${isMobile ? "" : isRight ? "ml-4 md:ml-6" : "mr-4 md:mr-6"}`}>
                <MindMapNode node={child} isMobile={isMobile} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(MindMapNode);