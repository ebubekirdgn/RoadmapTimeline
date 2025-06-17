import { roadmapData } from "@/data/roadmap";
import MindMap from "@/components/MindMap";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex flex-col items-center justify-start py-20 px-6 sm:px-12">
      {/* Başlık */}
      <header className="max-w-5xl w-full text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300 select-none tracking-tight">
          ASP.NET Core Developer Roadmap {currentYear}
        </h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Follow a clean, visual and structured mind map to master ASP.NET Core development step by step.
        </p>
      </header>

      {/* MindMap Alanı */}
      <section className="w-full max-w-none bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/10">
        <MindMap data={roadmapData.mainBranches} />
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-400 text-xs select-none">
        © {currentYear} Ebubekir Dogan. All rights reserved.
      </footer>
    </main>
  );
}
