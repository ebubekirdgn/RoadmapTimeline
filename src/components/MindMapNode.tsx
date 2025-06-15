"use client";

import { useState } from "react";
import Modal from "./Modal";

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
    <div className="flex flex-col items-start relative">
      {/* Ana düğüm */}
      <div className="flex items-center relative mb-4 self-start">
        {hasChildren && (
          <div className="absolute left-1/2 top-full h-4 w-px bg-gray-400 -translate-x-1/2"></div>
        )}
        <button
          className={`text-sm px-4 py-2 rounded-lg shadow-md flex items-center gap-2 border ${badgeColor} text-white hover:scale-105 transition-all duration-200 hover:shadow-lg min-h-[40px]`}
          onClick={() => setOpen(true)}
        >
          <span className="w-2 h-2 rounded-full bg-white" />
          {node.title}
        </button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title={node.title}>
          <div className="space-y-4">
            <p className="text-base">
              <strong>ID:</strong> {node.id}
            </p>
            <p className="text-base">
              <strong>Tür:</strong> {node.type}
            </p>
            <div
              className="prose max-w-none text-base text-gray-800"
              dangerouslySetInnerHTML={{ __html: node.description || "" }}
            />
            {node.link && (
              <p className="text-base">
                <a
                  href={node.link}
                  className="text-sky-600 hover:text-sky-800 underline transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Detaylı bilgi
                </a>
              </p>
            )}
          </div>
        </Modal>
      </div>

      {/* Çocuklar kutusu */}
      {hasChildren && (
        <div className="relative ml-8 pl-6 border-l-2 border-gray-300">
          <div className="relative mt-2 bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col gap-6">
            {node.children!.map((child) => (
              <div className="relative pl-6" key={child.id}>
                <div className="absolute left-0 top-1/2 w-6 h-px bg-gray-400 -translate-y-1/2" />
                <MindMapNode node={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
