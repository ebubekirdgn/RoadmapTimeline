import { roadmapData } from "@/data/roadmap";
import MindMap from "@/components/MindMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 flex flex-col items-center justify-center p-8">
      <header className="text-center mb-12 max-w-4xl px-4">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 select-none">
          ASP.NET Core MindMap
        </h1>
        <p className="mt-4 text-lg text-gray-200/90">
          Discover your path to mastering ASP.NET Core with an interactive roadmap.
        </p>
      </header>

      <section className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-xl max-w-7xl w-full p-8 sm:p-12">
        <MindMap data={roadmapData.mainBranches} />
      </section>

      <footer className="mt-16 text-gray-300 text-sm select-none">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </main>
  );
}
