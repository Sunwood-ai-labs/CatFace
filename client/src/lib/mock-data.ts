export interface Model {
  id: number;
  name: string;
  description: string;
  task: string;
  owner: {
    name: string;
    avatar: string;
  };
  stars: number;
  forks: number;
  updatedAt: string;
}

export const taskCategories = [
  "Text Generation",
  "Image Classification",
  "Object Detection",
  "Question Answering",
  "Translation",
  "Text-to-Image",
  "Speech Recognition",
];

export const mockModels: Model[] = [
  {
    id: 1,
    name: "gpt2",
    description: "GPT-2 is a large transformer-based language model with 1.5 billion parameters.",
    task: "Text Generation",
    owner: {
      name: "OpenAI",
      avatar: "https://avatars.githubusercontent.com/u/14957082",
    },
    stars: 12500,
    forks: 2300,
    updatedAt: "2 days ago",
  },
  {
    id: 2,
    name: "resnet50",
    description: "Deep residual learning framework for image recognition.",
    task: "Image Classification",
    owner: {
      name: "Microsoft",
      avatar: "https://avatars.githubusercontent.com/u/6154722",
    },
    stars: 8900,
    forks: 1200,
    updatedAt: "5 days ago",
  },
  // Add more mock models as needed
];
