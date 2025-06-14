import { roadmapData } from "@/data/roadmap";
import MindMap from "@/components/MindMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">ASP.NET Core MindMap</h1>
      <MindMap data={roadmapData.mainBranches} />
    </main>
  );
}