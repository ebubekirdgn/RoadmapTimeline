import MindMapNode from "./MindMapNode";

type Branch = {
  id: string;
  title: string;
  direction: "left" | "right";
  children: any[];
};

export default function MindMap({ data }: { data: Branch[] }) {
  // 🔁 Tüm çocuklara direction bilgisini recursive olarak ekle
  function assignDirection(node: any, direction: "left" | "right") {
    return {
      ...node,
      direction,
      children: node.children?.map((child: any) => assignDirection(child, direction)) || [],
    };
  }

  return (
    <div className="relative flex flex-col items-center py-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      {/* Omurga */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-200 via-sky-400 to-sky-200 -translate-x-1/2 z-0 rounded-full" />
      <div className="flex flex-col gap-24 w-full z-10">
        {data.map((branch) => {
          const isLeft = branch.direction === "left";
          const branchWithDirection = assignDirection(branch, branch.direction); // ✅ Direction bilgisi yayılıyor

          return (
            <div key={branch.id} className="relative flex w-full items-center">
              {/* Sol taraf */}
              <div className={`flex w-1/2 ${isLeft ? "justify-end" : "justify-end invisible"}`}>
                {isLeft && (
                  <BranchColumn align="right" branch={branchWithDirection} />
                )}
              </div>

              {/* Omurga noktası */}
              <div className="w-0 flex flex-col items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full border-4 border-white shadow-lg z-10" />
              </div>

              {/* Sağ taraf */}
              <div className={`flex w-1/2 ${!isLeft ? "justify-start" : "justify-start invisible"}`}>
                {!isLeft && <BranchColumn align="left" branch={branchWithDirection} />}
              </div>
            </div>
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
    <div className={`${isRight ? "mr-24 items-end" : "ml-24 items-start"} flex flex-col`}>
      {/* Başlık */}
      <div
        className="mb-4 px-8 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-sky-600 text-white font-extrabold shadow-lg text-2xl tracking-wide flex items-center gap-3 border-0 hover:scale-105 transition-transform duration-200"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 shadow text-sky-100 text-xl">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
            <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {branch.title}
      </div>

      {/* Alt dallar */}
      <RenderChildren children={branch.children} />
    </div>
  );
}

type RenderChildrenProps = {
  children: any[];
};

function RenderChildren({ children }: RenderChildrenProps) {
  return (
    <div className="relative flex flex-col gap-4">
      {children.map((child) => (
        <div key={child.id} className="relative">
          <MindMapNode node={child} />
        </div>
      ))}
    </div>
  );
}
