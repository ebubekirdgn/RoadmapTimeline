import { roadmapData } from "@/data/roadmap";
import MindMap from "@/components/MindMap";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MindMap data={roadmapData} />
    </main>
  );
}