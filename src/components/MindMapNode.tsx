"use client";

import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";

type Node = {
  id: string;
  title: string;
  type?: string;
  link?: string;
  description?: string;
  direction?: "left" | "right";
  children?: Node[];
};

const badgeColor = {
  "must-know": "bg-red-500",
  "good-to-know": "bg-yellow-400",
  optional: "bg-gray-400",
};

export default function MindMapNode({ node }: { node: Node }) {
  const [open, setOpen] = useState(false);
  const isRight = node.direction === "right";
  const isLeft = node.direction === "left";
  const hasChildren = node.children && node.children.length > 0;

  if (!isRight && !isLeft) return null;

  // SVG bağlantı çizgisi için sabit ölçüler
  const lineHeight = 60;
  const lineWidth = 24;

  return (
    <div
      className={`relative flex flex-col ${
        isRight ? "items-start" : "items-end"
      } w-full text-sm text-gray-900 dark:text-white`}
    >
      {/* Ana düğüm */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? -10 : 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`group flex items-center gap-2 ${
          isRight ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/60 shadow-sm hover:shadow-md backdrop-blur transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <span
            className={`w-2 h-2 rounded-full ${badgeColor[node.type || "optional"]}`}
          />
          <span className="font-medium">{node.title}</span>
        </div>
      </motion.div>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)} title={node.title}>
        <div className="space-y-4 text-base">
          <p><strong>ID:</strong> {node.id}</p>
          <p><strong>Type:</strong> {node.type || "Unknown"}</p>
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
                className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition"
              >
                Learn more
              </a>
            </p>
          )}
        </div>
      </Modal>

      {/* Çocuklar ve bağlantı çizgileri */}
      {hasChildren && (
        <div
          className={`mt-6 ${
            isRight ? "ml-6 pl-6 border-l border-sky-300/60" : "mr-6 pr-6 border-r border-sky-300/60"
          } relative`}
          style={{ paddingTop: 12 }}
        >
          {/** SVG Çizgiler */}
          <svg
            className="absolute top-0 left-0 w-10 h-full pointer-events-none"
            fill="none"
            stroke="#38bdf8" // tailwind sky-400
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ right: isLeft ? 0 : undefined, left: isRight ? 0 : undefined }}
          >
            {node.children!.map((_, idx) => {
              const y = idx * lineHeight + 20;
              if (isRight) {
                // Sağ taraf için step çizgisi: dikey -> yatay
                return (
                  <g key={idx}>
                    <path d={`M0 ${y} V${y + 20} H${lineWidth}`} />
                    <circle cx={lineWidth} cy={y + 20} r={4} fill="#0ea5e9" />
                  </g>
                );
              } else {
                // Sol taraf için step çizgisi: yatay -> dikey
                return (
                  <g key={idx}>
                    <path d={`M${lineWidth} ${y} H0 V${y + 20}`} />
                    <circle cx={0} cy={y + 20} r={4} fill="#0ea5e9" />
                  </g>
                );
              }
            })}
          </svg>

          <div className="flex flex-col gap-8 relative">
            {node.children!.map((child) => (
              <div key={child.id} className={`${isRight ? "ml-6" : "mr-6"}`}>
                <MindMapNode node={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
