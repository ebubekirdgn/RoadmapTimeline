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

export default function MindMapNode({ node }: { node: Node }) {
  const [open, setOpen] = useState(false);

  const badgeColor = {
    "must-know": "bg-red-600",
    "good-to-know": "bg-yellow-500",
    "optional": "bg-gray-400",
  }[node.type || "optional"];

  const hasChildren = node.children && node.children.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col items-start text-sm text-gray-900 dark:text-white"
    >
      {/* Ana düğüm */}
      <div className="relative group">
        <button
          onClick={() => setOpen(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${badgeColor} text-white hover:scale-105 transition-all duration-300 shadow`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white" />
          {node.title}
        </button>

        {/* Tooltip */}
        {node.description && (
          <div className="absolute hidden group-hover:block left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 max-w-xs z-10">
            {node.description.slice(0, 60)}...
          </div>
        )}

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
                  className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 underline underline-offset-4 transition"
                >
                  Detaylı bilgi
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 7l-10 10m0 0h6m-6 0V7"
                    />
                  </svg>
                </a>
              </p>
            )}
          </div>
        </Modal>
      </div>

      {/* Çocuk düğümler */}
      {hasChildren && (
        <div className="mt-4 pl-6 border-l-2 border-sky-400 relative">
          {node.children!.map((child, index) => (
            <div key={child.id} className="relative ml-4 py-2 before:absolute before:top-1/2 before:left-[-1.5rem] before:w-6 before:h-px before:bg-sky-400 before:-translate-y-1/2">
              <MindMapNode node={child} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
