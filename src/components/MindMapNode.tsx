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
        className={`text-sm px-3 py-1 rounded shadow flex items-center gap-2 border ${badgeColor} text-white hover:scale-105 transition`}
        onClick={() => setOpen(true)}
      >
        <span className="w-2 h-2 rounded-full bg-white" />
        {node.title}
      </button>

      {node.children && (
        <div className="ml-6 border-l border-gray-300 pl-4 mt-2">
          {node.children.map((child) => (
            <MindMapNode key={child.id} node={child} />
          ))}
        </div>
      )}

      <Modal isOpen={open} onClose={() => setOpen(false)} title={node.title}>
        <p><strong>ID:</strong> {node.id}</p>
        <p><strong>Tür:</strong> {node.type}</p>
        <p><div
  className="prose max-w-none text-sm text-gray-800"
  dangerouslySetInnerHTML={{ __html: node.description || "" }}
/></p>
        {node.link && (
          <p>
            <a
              href={node.link}
              className="text-sky-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Detaylı bilgi
            </a>
          </p>
        )}
      </Modal>
    </div>
  );
}
