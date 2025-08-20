export interface JobInterface {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: "Full-time" | "Part-time" | "Contract";
  tags: string[];
  postedDate: string;
  description: string;
  requirements: string[];
  benefits: string[];
  url?: string;
  featured?: boolean;
}

export const jobList: JobInterface[] = [
  {
    id: "1",
    title: "Senior Machine Learning Engineer",
    company: "OpenAI",
    location: "Remote",
    salary: "$180k - $350k",
    type: "Full-time",
    tags: ["Python", "TensorFlow", "PyTorch", "ML"],
    postedDate: "2024-01-15",
    description: "Join our team building the future of AI systems at scale.",
    requirements: [
      "5+ years ML experience",
      "PhD preferred",
      "Distributed systems",
    ],
    benefits: ["Equity", "Health insurance", "Unlimited PTO"],
    url: "https://openai.com/careers",
    featured: true,
  },
  {
    id: "2",
    title: "AI Research Scientist",
    company: "Anthropic",
    location: "Remote",
    salary: "$200k - $400k",
    type: "Part-time",
    tags: ["Research", "NLP", "Safety", "Python"],
    postedDate: "2024-01-14",
    description: "Research and develop safe, beneficial AI systems.",
    requirements: ["PhD in CS/ML", "Publication record", "Safety focus"],
    benefits: ["Research budget", "Conference travel", "Flexible hours"],
    featured: false,
  },
  {
    id: "3",
    title: "Computer Vision Engineer",
    company: "Tesla",
    location: "Remote",
    salary: "$160k - $280k",
    type: "Full-time",
    tags: ["Computer Vision", "C++", "CUDA", "Robotics"],
    postedDate: "2024-01-13",
    description: "Develop autonomous driving perception systems.",
    requirements: [
      "Computer vision expertise",
      "Real-time systems",
      "3+ years exp",
    ],
    benefits: ["Stock options", "Health/dental", "Gym membership"],
  },
  {
    id: "4",
    title: "NLP Engineer",
    company: "Hugging Face",
    location: "Remote",
    salary: "$140k - $240k",
    type: "Full-time",
    tags: ["NLP", "Transformers", "Python", "Open Source"],
    postedDate: "2024-01-12",
    description: "Build and improve state-of-the-art NLP models.",
    requirements: ["NLP experience", "Transformer models", "Open source"],
    benefits: ["Remote first", "Learning budget", "Open source time"],
  },
  {
    id: "5",
    title: "AI Product Manager",
    company: "Scale AI",
    location: "Remote",
    salary: "$150k - $280k",
    type: "Full-time",
    tags: ["Product", "AI/ML", "Strategy", "Data"],
    postedDate: "2024-01-11",
    description: "Lead product strategy for AI-powered data platforms.",
    requirements: ["Product management", "AI/ML knowledge", "B2B experience"],
    benefits: ["Equity package", "Health benefits", "Growth opportunities"],
  },
  {
    id: "6",
    title: "MLOps Engineer",
    company: "Cohere",
    location: "Remote",
    salary: "$130k - $220k",
    type: "Full-time",
    tags: ["MLOps", "Kubernetes", "AWS", "CI/CD"],
    postedDate: "2024-01-10",
    description: "Scale ML infrastructure and deployment pipelines.",
    requirements: ["DevOps experience", "ML systems", "Cloud platforms"],
    benefits: ["Remote work", "Tech stipend", "Professional development"],
  },
  {
    id: "7",
    title: "Prompt Engineer",
    company: "Stability AI",
    location: "Remote",
    salary: "$120k - $200k",
    type: "Full-time",
    tags: ["LLM", "Prompt Engineering", "AI Safety"],
    postedDate: "2024-01-09",
    description: "Design and optimize prompts for large language models.",
    requirements: ["LLM experience", "Creative writing", "AI safety awareness"],
    benefits: ["Flexible hours", "Learning stipend", "Remote workspace budget"],
  },
  {
    id: "8",
    title: "Robotics AI Engineer",
    company: "Boston Dynamics",
    location: "Remote",
    salary: "$170k - $300k",
    type: "Full-time",
    tags: ["Robotics", "AI", "Control Systems", "C++"],
    postedDate: "2024-01-08",
    description: "Develop AI systems for advanced robotics applications.",
    requirements: [
      "Robotics background",
      "Control theory",
      "Real-time systems",
    ],
    benefits: ["Hardware access", "Research time", "Publication support"],
  },
];
