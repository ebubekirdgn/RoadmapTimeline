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
  "must-know": "bg-red-600",
  "good-to-know": "bg-yellow-500",
  "optional": "bg-gray-400",
};

export default function MindMapNode({ node }: { node: Node }) {
  const [open, setOpen] = useState(false);
  const isRight = node.direction === "right";
  const isLeft = node.direction === "left";
  const hasChildren = node.children && node.children.length > 0;

  // Sadece sağ veya sol düğümleri işliyoruz (diğerlerini görmezden gel)
  if (!isRight && !isLeft) return null;

  return (
    <div
      className={`relative flex flex-col ${
        isRight ? "items-start" : "items-end"
      } w-full text-sm text-gray-900 dark:text-white`}
    >
      {/* Ana Düğüm */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? -10 : 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`group flex items-center gap-3 ${
          isRight ? "" : "flex-row-reverse"
        }`}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800">
          <span
            className={`w-2.5 h-2.5 rounded-full ${badgeColor[node.type || "optional"]}`}
          />
          <button onClick={() => setOpen(true)}>{node.title}</button>
        </div>
      </motion.div>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)} title={node.title}>
        <div className="space-y-4 text-base">
          <p><strong>ID:</strong> {node.id}</p>
          <p><strong>Tür:</strong> {node.type || "Bilinmiyor"}</p>
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
                Detaylı bilgi
              </a>
            </p>
          )}
        </div>
      </Modal>

      {/* Children */}
      {hasChildren && (
        <div
          className={`mt-6 ${
            isRight ? "ml-6 pl-6 border-l-2" : "mr-6 pr-6 border-r-2"
          } border-sky-400 relative`}
        >
          <svg
            className={`absolute top-0 ${
              isRight ? "left-0" : "right-0"
            } w-6 h-full stroke-sky-400`}
            fill="none"
          >
            {node.children!.map((_, idx) => (
              <path
                key={idx}
                d={
                  isRight
                    ? `M0 ${idx * 60 + 20} C12 ${idx * 60 + 20}, 12 ${idx * 60 + 40}, 24 ${idx * 60 + 40}`
                    : `M24 ${idx * 60 + 20} C12 ${idx * 60 + 20}, 12 ${idx * 60 + 40}, 0 ${idx * 60 + 40}`
                }
                strokeWidth="2"
              />
            ))}
          </svg>

          <div className="flex flex-col gap-8">
            {node.children!.map((child) => (
              <div key={child.id} className={isRight ? "ml-6" : "mr-6"}>
                <MindMapNode node={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
