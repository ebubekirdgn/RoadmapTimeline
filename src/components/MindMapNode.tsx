"use client";

import { useState } from "react";
import Modal from "./Modal";

type Node = {
  id: string;
  title: string;
  type?: string;
  link?: string;
  description?: string;
  children?: Node[];
};

export default function MindMapNode({ node }: { node: Node }) {
  const [open, setOpen] = useState(false);

  const badgeColor = {
    "must-know": "bg-green-600",
    "good-to-know": "bg-yellow-500",
    "optional": "bg-gray-400",
  }[node.type || "optional"];

  return (
    <div className="ml-4 mt-4">
      <button
        className={`text-base px-4 py-2 rounded-lg shadow-md flex items-center gap-2 border ${badgeColor} text-white hover:scale-105 transition-all duration-200 hover:shadow-lg`}
        onClick={() => setOpen(true)}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white" />
        {node.title}
      </button>

      {node.children && (
        <div className="ml-8 border-l-2 border-gray-200 pl-6 mt-4 space-y-4">
          {node.children.map((child) => (
            <MindMapNode key={child.id} node={child} />
          ))}
        </div>
      )}

      <Modal isOpen={open} onClose={() => setOpen(false)} title={node.title}>
        <div className="space-y-4">
          <p className="text-base"><strong>ID:</strong> {node.id}</p>
          <p className="text-base"><strong>Tür:</strong> {node.type}</p>
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
  );
}
