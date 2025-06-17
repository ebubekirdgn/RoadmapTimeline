"use client";

import MindMapNode from "./MindMapNode";
import { motion } from "framer-motion";

type Branch = {
  id: string;
  title: string;
  direction: "left" | "right";
  children: any[];
};

export default function MindMap({ data }: { data: Branch[] }) {
  function assignDirection(node: any, direction: "left" | "right") {
    return {
      ...node,
      direction,
      children: node.children?.map((child: any) => assignDirection(child, direction)) || [],
    };
  }

  return (
    <div className="relative flex flex-col items-center py-16 bg-gradient-to-b from-sky-50/50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen overflow-x-hidden">
      {/* Omurga - Daha modern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-400 via-sky-600 to-sky-400 -translate-x-1/2 z-0 shadow-lg"
      />
      
      <div className="flex flex-col gap-20 w-full z-10 px-4">
        {data.map((branch, index) => {
          const isLeft = branch.direction === "left";
          const branchWithDirection = assignDirection(branch, branch.direction);

          return (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex w-full items-start"
            >
              {/* Sol taraf */}
              <div className={`flex w-1/2 ${isLeft ? "justify-end" : "justify-end invisible"}`}>
                {isLeft && (
                  <BranchColumn align="right" branch={branchWithDirection} />
                )}
              </div>

              {/* Omurga noktası - Daha modern */}
              <div className="w-0 flex flex-col items-center mt-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.15, type: "spring" }}
                  className="w-7 h-7 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full border-4 border-white dark:border-gray-800 shadow-xl z-10"
                />
                {/* Omurgadan dala bağlantı çizgisi - Eğrisel */}
                <svg
                  className={`absolute top-5 ${
                    isLeft ? "right-0" : "left-0"
                  } w-24 h-2 text-sky-400`}
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

              {/* Sağ taraf */}
              <div className={`flex w-1/2 ${!isLeft ? "justify-start" : "justify-start invisible"}`}>
                {!isLeft && <BranchColumn align="left" branch={branchWithDirection} />}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

type BranchColumnProps = {
  align: "left" | "right";
  branch: Branch;
};

function BranchColumn({ align, branch }: BranchColumnProps) {
  const isRight = align === "right";
  return (
    <div className={`${isRight ? "mr-12 items-end" : "ml-12 items-start"} flex flex-col`}>
      {/* Başlık - Daha modern kart tasarımı */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 60 : -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="mb-8 px-6 py-4 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-bold shadow-lg text-xl tracking-wide flex items-center gap-3 border-0 cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-600 hover:border-sky-200 dark:hover:border-sky-500 group"
      >
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-500 text-white shadow group-hover:bg-sky-600 transition-colors duration-300">
          {isRight ? (
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          ) : (
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          )}
        </span>
        {branch.title}
      </motion.div>

      {/* Alt dallar */}
      <div className={`relative ${isRight ? "pr-10" : "pl-10"}`}>
        {/* Dikey bağlantı çizgisi - Daha modern */}
        <svg
          className={`absolute top-0 ${
            isRight ? "right-0" : "left-0"
          } h-full w-1 text-sky-400`}
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
        <RenderChildren children={branch.children} />
      </div>
    </div>
  );
}

type RenderChildrenProps = {
  children: any[];
};

function RenderChildren({ children }: RenderChildrenProps) {
  return (
    <div className="relative flex flex-col gap-6">
      {children.map((child) => (
        <div key={child.id} className="relative">
          <MindMapNode node={child} />
        </div>
      ))}
    </div>
  );
}