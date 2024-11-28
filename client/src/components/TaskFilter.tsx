import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { taskCategories } from "../lib/mock-data";

interface TaskFilterProps {
  selectedTask: string | null;
  onSelectTask: (task: string | null) => void;
}

export default function TaskFilter({ selectedTask, onSelectTask }: TaskFilterProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold mb-2">Tasks</h2>
      <div className="space-y-1">
        <Button
          variant={selectedTask === null ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => onSelectTask(null)}
        >
          {selectedTask === null && <Check className="mr-2 h-4 w-4" />}
          All Tasks
        </Button>
        {taskCategories.map((task) => (
          <Button
            key={task}
            variant={selectedTask === task ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onSelectTask(task)}
          >
            {selectedTask === task && <Check className="mr-2 h-4 w-4" />}
            {task}
          </Button>
        ))}
      </div>
    </div>
  );
}
