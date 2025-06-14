import MindMapNode from "./MindMapNode";

type Branch = {
  id: string;
  title: string;
  direction: "left" | "right";
  children: any[];
};

export default function MindMap({ data }: { data: Branch[] }) {
  return (
    <div className="relative flex flex-col items-center py-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      {/* Omurga */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-200 via-sky-400 to-sky-200 -translate-x-1/2 z-0 rounded-full" />
      <div className="flex flex-col gap-24 w-full z-10">
        {data.map((branch, idx) => {
          const isLeft = idx % 2 === 1;
          return (
            <div key={branch.id} className="relative flex w-full items-center">
              {/* Sol taraf */}
              <div className={`flex w-1/2 ${isLeft ? "justify-end" : "justify-end invisible"}`}>
                {isLeft && (
                  <div className="mr-24 flex flex-col items-end">
                    {/* Başlık badge */}
                    <div
                      className="
                        mb-4
                        px-8
                        py-3
                        rounded-xl
                        bg-gradient-to-r
                        from-sky-400
                        to-sky-600
                        text-white
                        font-extrabold
                        shadow-lg
                        text-2xl
                        tracking-wide
                        flex
                        items-center
                        gap-3
                        border-0
                        hover:scale-105
                        transition-transform
                        duration-200
                      "
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 shadow text-sky-100 text-xl">
                        {/* İkon eklemek istersen buraya koyabilirsin */}
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                          <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {branch.title}
                    </div>
                    {/* Alt dallar */}
                    <div className="flex flex-col items-end gap-4">
                      {branch.children.map((child, cidx) => (
                        <div key={child.id} className="flex items-center gap-2">
                          <span className="text-sky-700 font-medium text-base">
                            <MindMapNode node={child} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Omurga noktası */}
              <div className="w-0 flex flex-col items-center">
                <div className="w-6 h-6 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full border-4 border-white shadow-lg z-10" />
              </div>
              {/* Sağ taraf */}
              <div className={`flex w-1/2 ${!isLeft ? "justify-start" : "justify-start invisible"}`}>
                {!isLeft && (
                  <div className="ml-24 flex flex-col items-start">
                    {/* Başlık badge */}
                    <div
                      className="
                        mb-4
                        px-8
                        py-3
                        rounded-xl
                        bg-gradient-to-r
                        from-sky-400
                        to-sky-600
                        text-white
                        font-extrabold
                        shadow-lg
                        text-2xl
                        tracking-wide
                        flex
                        items-center
                        gap-3
                        border-0
                        hover:scale-105
                        transition-transform
                        duration-200
                      "
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 shadow text-sky-100 text-xl">
                        {/* İkon eklemek istersen buraya koyabilirsin */}
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                          <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {branch.title}
                    </div>
                    {/* Alt dallar */}
                    <div className="flex flex-col items-start gap-4">
                      {branch.children.map((child, cidx) => (
                        <div key={child.id} className="flex items-center gap-2">
                          <span className="text-sky-700 font-medium text-base">
                            <MindMapNode node={child} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RenderChildren({ children, align }: { children: any[]; align: "left" | "right" }) {
  return (
    <div className="relative flex flex-col items-start gap-4">
      {children.map((child, idx) => (
        <div key={child.id} className="relative flex items-center group">
          {/* Bağlantı çizgisi */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2"
            style={{
              width: "24px",
              height: "2px",
              background: "linear-gradient(to right, #38bdf8, #0ea5e9)",
              zIndex: 0,
            }}
          />
          {/* Alt başlık kutusu */}
          <div
            className="
              ml-6
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r from-sky-100 to-white
              shadow
              border border-sky-200
              text-sky-700
              font-semibold
              text-base
              transition
              hover:bg-sky-200
              hover:scale-105
              cursor-pointer
              relative
              z-10
            "
          >
            <span className="mr-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-400 text-white shadow">
              {/* Emoji veya ikon */}
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <MindMapNode node={child} />
          </div>
          {/* Alt children'lar varsa recursive göster */}
          {child.children && child.children.length > 0 && (
            <div className="ml-12 mt-2">
              {/* Bağlantı çizgisi için dikey çizgi */}
              <div className="absolute left-3 top-full w-0.5 h-6 bg-sky-300" />
              <RenderChildren children={child.children} align={align} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
