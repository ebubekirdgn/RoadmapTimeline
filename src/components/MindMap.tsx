"use client";

import MindMapNode from "./MindMapNode";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import React from "react";

type Branch = {
  id: string;
  title: string;
  direction: "left" | "right";
  children: any[];
};

function BranchColumn({ align, branch, isMobile = false }: BranchColumnProps) {
  const isRight = align === "right";
  return (
    <div
      className={`${isMobile ? "mx-2" : isRight ? "mr-6 md:mr-12" : "ml-6 md:ml-12"} ${
        isMobile ? "items-center" : isRight ? "items-end" : "items-start"
      } flex flex-col`}
    >
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 0 : isRight ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="mb-4 md:mb-8 px-4 py-3 md:px-6 md:py-4 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-bold shadow-lg text-lg md:text-xl tracking-wide flex items-center gap-3 border-0 cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-600 hover:border-sky-200 dark:hover:border-sky-500 group"
        style={{ willChange: "transform, opacity" }}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-sky-500 text-white shadow group-hover:bg-sky-600 transition-colors duration-300">
          {isRight ? (
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          )}
        </span>
        {branch.title}
      </motion.div>

      <div className={`relative ${isMobile ? "" : isRight ? "pr-6 md:pr-10" : "pl-6 md:pl-10"}`}>
        {!isMobile && (
          <svg
            className={`absolute top-0 ${isRight ? "right-0" : "left-0"} h-full w-1 text-sky-400`}
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
          >
            <path
              d="M5,0 C5,50 5,50 5,100"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,3"
            />
          </svg>
        )}
        <RenderChildren children={branch.children} isMobile={isMobile} />
      </div>
    </div>
  );
}

const RenderChildren = React.memo(function RenderChildren({ children, isMobile = false }: RenderChildrenProps) {
  return (
    <div className="relative flex flex-col gap-4 md:gap-6">
      {children.map((child) => (
        <div key={child.id} className="relative">
          <MindMapNode node={child} isMobile={isMobile} />
        </div>
      ))}
    </div>
  );
});

export default function MindMap({ data }: { data: Branch[] }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const assignDirection = React.useCallback((node: any, direction: "left" | "right") => {
    return {
      ...node,
      direction,
      children: node.children?.map((child: any) => assignDirection(child, direction)) || [],
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center py-8 md:py-16 bg-gradient-to-b from-sky-50/50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen overflow-x-hidden">
      {!isMobile && (
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-400 via-sky-600 to-sky-400 -translate-x-1/2 z-0 shadow-lg" />
      )}
      
      <div className="flex flex-col gap-10 md:gap-20 w-full z-10 px-2 md:px-4">
        <AnimatePresence initial={false}>
          {data.map((branch, index) => {
            const isLeft = branch.direction === "left";
            const branchWithDirection = assignDirection(branch, branch.direction);

            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className="relative flex flex-col md:flex-row w-full items-start"
                style={{ willChange: "transform, opacity" }}
              >
                {isMobile ? (
                  <div className="w-full">
                    <div className="w-full flex justify-center my-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full border-4 border-white dark:border-gray-800 shadow-xl z-10" />
                    </div>
                    <BranchColumn 
                      align={isLeft ? "right" : "left"} 
                      branch={branchWithDirection} 
                      isMobile={isMobile}
                    />
                  </div>
                ) : (
                  <>
                    <div className={`flex w-1/2 ${isLeft ? "justify-end" : "justify-end invisible"}`}>
                      {isLeft && (
                        <BranchColumn align="right" branch={branchWithDirection} isMobile={isMobile} />
                      )}
                    </div>

                    <div className="w-0 flex flex-col items-center mt-10">
                      <div className="w-7 h-7 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full border-4 border-white dark:border-gray-800 shadow-xl z-10" />
                      <svg
                        className={`absolute top-5 ${isLeft ? "right-0" : "left-0"} w-24 h-2 text-sky-400`}
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                      >
                        <path
                          d={isLeft ? "M0,5 C50,5 50,5 100,5" : "M100,5 C50,5 50,5 0,5"}
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className={`flex w-1/2 ${!isLeft ? "justify-start" : "justify-start invisible"}`}>
                      {!isLeft && <BranchColumn align="left" branch={branchWithDirection} isMobile={isMobile} />}
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

type BranchColumnProps = {
  align: "left" | "right";
  branch: Branch;
  isMobile?: boolean;
};

type RenderChildrenProps = {
  children: any[];
  isMobile?: boolean;
};