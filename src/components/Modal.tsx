"use client";

import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    isOpen ? (
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-2xl mx-auto relative max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
          <div className="text-lg pr-8 text-gray-600 dark:text-gray-300">{children}</div>
        </div>
      </div>
    ) : null,
    document.body
  );
}

export default React.memo(Modal);