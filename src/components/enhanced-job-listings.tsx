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

interface EnhancedJobListingsProps {
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

// External link icon component
function ExternalLinkIcon() {
  return (
    <svg 
      className="w-4 h-4 transition-all duration-200 group-hover:scale-110" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
      />
    </svg>
  )
}

function EnhancedJobCard({ job, index }: { job: Job; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`group relative p-6 bg-card border border-border/30 rounded-lg transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5 cursor-pointer ${
        job.featured ? 'ring-1 ring-primary/20 bg-gradient-to-br from-card to-primary/5' : ''
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'slideUp 0.6s ease-out both'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {job.featured && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
            Featured
          </div>
        </div>
      )}

      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors duration-200">
              {job.title}
            </h3>
            <div className="flex items-center space-x-3 mt-1 text-sm text-muted-foreground">
              <span className="font-medium">{job.company}</span>
              <span className="text-xs">•</span>
              <span>{job.location}</span>
              {job.salary && (
                <>
                  <span className="text-xs">•</span>
                  <span className="text-primary font-medium">{job.salary}</span>
                </>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {job.tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-secondary/50 text-secondary-foreground border border-secondary/20"
              >
                {tag}
              </span>
            ))}
            {job.tags.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{job.tags.length - 4} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Posted {new Date(job.postedDate).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Link icon that appears on hover */}
        <div className={`ml-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <ExternalLinkIcon />
          </div>
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
    <div className="p-4 bg-card border border-border/30 rounded-lg hover:border-border transition-colors duration-200">
      <pre className="text-xs text-muted-foreground font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
        {JSON.stringify(structuredData, null, 2)}
      </pre>
    </div>
  )
}

export function EnhancedJobListings({ isAiMode }: EnhancedJobListingsProps) {
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
      <div className="space-y-6">
        <div className="text-sm text-muted-foreground">Loading jobs...</div>
        <div className="grid gap-6 md:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-6 bg-card border border-border/30 rounded-lg">
              <div className="animate-pulse space-y-4">
                <div className="space-y-2">
                  <div className="h-5 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="flex space-x-2">
                  <div className="h-6 bg-muted rounded w-16"></div>
                  <div className="h-6 bg-muted rounded w-20"></div>
                  <div className="h-6 bg-muted rounded w-14"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">
          {isAiMode ? 'Machine-readable job data' : `${jobs.length} open positions`}
        </h2>
        {!isAiMode && (
          <div className="text-sm text-muted-foreground">
            Updated daily
          </div>
        )}
      </div>
      
      {/* Job listings */}
      {isAiMode ? (
        <div className="space-y-4">
          {jobs.map((job) => (
            <AiJobData key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job, index) => (
            <EnhancedJobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}