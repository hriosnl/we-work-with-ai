'use client'

import { useState, useEffect } from 'react'

interface Job {
  id: string
  title: string
  company: string
  location: string
  salary?: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  tags: string[]
  postedDate: string
  description: string
  requirements: string[]
  benefits: string[]
  url?: string
  featured?: boolean
}

interface MinimalJobListingsProps {
  isAiMode: boolean
}

const sampleJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Machine Learning Engineer',
    company: 'OpenAI',
    location: 'Remote',
    salary: '$180k - $350k',
    type: 'Full-time',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'ML'],
    postedDate: '2024-01-15',
    description: 'Join our team building the future of AI systems at scale.',
    requirements: ['5+ years ML experience', 'PhD preferred', 'Distributed systems'],
    benefits: ['Equity', 'Health insurance', 'Unlimited PTO'],
    url: 'https://openai.com/careers',
    featured: true,
  },
  {
    id: '2',
    title: 'AI Research Scientist',
    company: 'Anthropic',
    location: 'Remote',
    salary: '$200k - $400k',
    type: 'Full-time',
    tags: ['Research', 'NLP', 'Safety', 'Python'],
    postedDate: '2024-01-14',
    description: 'Research and develop safe, beneficial AI systems.',
    requirements: ['PhD in CS/ML', 'Publication record', 'Safety focus'],
    benefits: ['Research budget', 'Conference travel', 'Flexible hours'],
    featured: true,
  },
  {
    id: '3',
    title: 'Computer Vision Engineer',
    company: 'Tesla',
    location: 'Remote',
    salary: '$160k - $280k',
    type: 'Full-time',
    tags: ['Computer Vision', 'C++', 'CUDA', 'Robotics'],
    postedDate: '2024-01-13',
    description: 'Develop autonomous driving perception systems.',
    requirements: ['Computer vision expertise', 'Real-time systems', '3+ years exp'],
    benefits: ['Stock options', 'Health/dental', 'Gym membership'],
  },
  {
    id: '4',
    title: 'NLP Engineer',
    company: 'Hugging Face',
    location: 'Remote',
    salary: '$140k - $240k',
    type: 'Full-time',
    tags: ['NLP', 'Transformers', 'Python', 'Open Source'],
    postedDate: '2024-01-12',
    description: 'Build and improve state-of-the-art NLP models.',
    requirements: ['NLP experience', 'Transformer models', 'Open source'],
    benefits: ['Remote first', 'Learning budget', 'Open source time'],
  },
  {
    id: '5',
    title: 'AI Product Manager',
    company: 'Scale AI',
    location: 'Remote',
    salary: '$150k - $280k',
    type: 'Full-time',
    tags: ['Product', 'AI/ML', 'Strategy', 'Data'],
    postedDate: '2024-01-11',
    description: 'Lead product strategy for AI-powered data platforms.',
    requirements: ['Product management', 'AI/ML knowledge', 'B2B experience'],
    benefits: ['Equity package', 'Health benefits', 'Growth opportunities'],
  },
  {
    id: '6',
    title: 'MLOps Engineer',
    company: 'Cohere',
    location: 'Remote',
    salary: '$130k - $220k',
    type: 'Full-time',
    tags: ['MLOps', 'Kubernetes', 'AWS', 'CI/CD'],
    postedDate: '2024-01-10',
    description: 'Scale ML infrastructure and deployment pipelines.',
    requirements: ['DevOps experience', 'ML systems', 'Cloud platforms'],
    benefits: ['Remote work', 'Tech stipend', 'Professional development'],
  },
  {
    id: '7',
    title: 'Prompt Engineer',
    company: 'Stability AI',
    location: 'Remote',
    salary: '$120k - $200k',
    type: 'Full-time',
    tags: ['LLM', 'Prompt Engineering', 'AI Safety'],
    postedDate: '2024-01-09',
    description: 'Design and optimize prompts for large language models.',
    requirements: ['LLM experience', 'Creative writing', 'AI safety awareness'],
    benefits: ['Flexible hours', 'Learning stipend', 'Remote workspace budget'],
  },
  {
    id: '8',
    title: 'Robotics AI Engineer',
    company: 'Boston Dynamics',
    location: 'Remote',
    salary: '$170k - $300k',
    type: 'Full-time',
    tags: ['Robotics', 'AI', 'Control Systems', 'C++'],
    postedDate: '2024-01-08',
    description: 'Develop AI systems for advanced robotics applications.',
    requirements: ['Robotics background', 'Control theory', 'Real-time systems'],
    benefits: ['Hardware access', 'Research time', 'Publication support'],
  },
]

function HumanJobListing({ job }: { job: Job }) {
  return (
    <div className="group py-3 border-b border-border/30 last:border-0">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          {job.featured && (
            <span className="text-xs text-primary font-medium">Featured</span>
          )}
        </div>
        <div className="text-right text-sm text-muted-foreground">
          <div>{job.company}</div>
          <div>{job.location}</div>
          {job.salary && <div className="text-xs">{job.salary}</div>}
        </div>
      </div>
    </div>
  )
}

function AiJobData({ job }: { job: Job }) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company
    },
    "jobLocation": {
      "@type": "Place",
      "address": job.location
    },
    "baseSalary": job.salary ? {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": job.salary
    } : undefined,
    "employmentType": job.type.toUpperCase().replace('-', '_'),
    "datePosted": job.postedDate,
    "skills": job.tags,
    "qualifications": job.requirements,
    "benefits": job.benefits,
    "identifier": {
      "@type": "PropertyValue",
      "name": "AI Remote Work Job ID",
      "value": job.id
    }
  }

  return (
    <div className="py-2 border-b border-border/30 last:border-0">
      <pre className="text-xs text-muted-foreground font-mono overflow-x-auto whitespace-pre-wrap">
        {JSON.stringify(structuredData, null, 2)}
      </pre>
    </div>
  )
}

export function MinimalJobListings({ isAiMode }: MinimalJobListingsProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setJobs(sampleJobs)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground mb-6">Loading jobs...</div>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="py-3 border-b border-border/30">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="h-4 bg-muted rounded w-64 animate-pulse"></div>
              </div>
              <div className="text-right space-y-1">
                <div className="h-3 bg-muted rounded w-24 animate-pulse"></div>
                <div className="h-3 bg-muted rounded w-16 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-4xl">
      {/* Simple header */}
      <div className="mb-8">
        <h2 className="text-sm text-muted-foreground mb-6">
          {isAiMode ? 'Machine-readable job data' : `${jobs.length} remote AI jobs`}
        </h2>
      </div>
      
      {/* Job listings */}
      <div className="space-y-0">
        {jobs.map((job) => (
          isAiMode ? (
            <AiJobData key={job.id} job={job} />
          ) : (
            <HumanJobListing key={job.id} job={job} />
          )
        ))}
      </div>
      
      {/* Simple footer */}
      <div className="mt-12 text-xs text-muted-foreground">
        <p>Updated daily. All positions are 100% remote.</p>
      </div>
    </div>
  )
}