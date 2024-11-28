import { useState } from "react";
import Navigation from "../components/Navigation";
import TaskFilter from "../components/TaskFilter";
import ModelCard from "../components/ModelCard";
import { mockModels } from "../lib/mock-data";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const filteredModels = mockModels.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTask = !selectedTask || model.task === selectedTask;
    return matchesSearch && matchesTask;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="w-64 hidden lg:block">
            <TaskFilter
              selectedTask={selectedTask}
              onSelectTask={setSelectedTask}
            />
          </aside>
          
          <ScrollArea className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
