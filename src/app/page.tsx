import { roadmapData } from "@/data/roadmap";
import MindMap from "@/components/MindMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-start py-20 px-6 sm:px-12">
      <header className="max-w-4xl w-full text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent
          bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300
          select-none tracking-tight">
          ASP.NET Core MindMap
        </h1>
        <p className="mt-4 text-gray-200 text-lg max-w-xl mx-auto leading-relaxed">
          Follow a clean and structured roadmap to master ASP.NET Core development step by step.
        </p>
      </header>

      <section className="mx-auto w-full max-w-none bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-8 sm:p-12">
  <MindMap data={roadmapData.mainBranches} />
</section>

      <footer className="mt-20 text-gray-400 text-sm select-none">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </main>
  );
}
