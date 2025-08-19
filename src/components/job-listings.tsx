'use client'

import { useState, useEffect } from 'react'

interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  tags: string[]
  postedDate: string
  description: string
  requirements: string[]
  benefits: string[]
  companyLogo?: string
  featured?: boolean
}

interface JobListingsProps {
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
]

function HumanJobCard({ job }: { job: Job }) {
  return (
    <div className={`job-card group p-6 bg-card border border-border rounded-lg shadow-sm ${
      job.featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-card to-primary/5' : ''
    }`}>
      {job.featured && (
        <div className="flex items-center mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
            Featured
          </span>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">{job.salary}</p>
          <p className="text-xs text-muted-foreground">{job.type}</p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {job.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Posted {new Date(job.postedDate).toLocaleDateString()}
        </span>
        <button className="text-sm font-medium text-primary hover:underline">
          View Details →
        </button>
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
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": job.salary
    },
    "employmentType": job.type.toUpperCase().replace('-', '_'),
    "datePosted": job.postedDate,
    "validThrough": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    "skills": job.tags,
    "qualifications": job.requirements,
    "benefits": job.benefits,
    "jobBenefits": job.benefits,
    "identifier": {
      "@type": "PropertyValue",
      "name": "AI Remote Work Job ID",
      "value": job.id
    }
  }

  return (
    <div className="p-4 bg-card border border-border rounded-lg font-mono text-xs">
      <pre className="whitespace-pre-wrap text-muted-foreground overflow-x-auto">
        {JSON.stringify(structuredData, null, 2)}
      </pre>
    </div>
  )
}

export function JobListings({ isAiMode }: JobListingsProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setJobs(sampleJobs)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <section className="container max-w-screen-xl px-4 py-16">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">Loading AI Jobs...</h3>
            <div className="w-16 h-1 bg-primary/20 rounded-full mx-auto overflow-hidden">
              <div className="w-full h-full bg-primary rounded-full animate-pulse-slow"></div>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-lg">
                <div className="animate-pulse space-y-4">
                  <div className="space-y-2">
                    <div className="h-5 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 bg-muted rounded-full w-16"></div>
                    <div className="h-6 bg-muted rounded-full w-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container max-w-screen-xl px-4 py-16">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">
            {isAiMode ? 'Machine-Readable Job Data' : 'Latest AI Opportunities'}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isAiMode 
              ? 'Structured job data in JSON-LD format for AI systems and automated processing'
              : 'Discover your next career opportunity in artificial intelligence and machine learning'
            }
          </p>
        </div>
        
        {isAiMode ? (
          <div className="space-y-4">
            {jobs.map((job) => (
              <AiJobData key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <HumanJobCard key={job.id} job={job} />
            ))}
          </div>
        )}
        
        <div className="text-center pt-8">
          <button className="text-sm font-medium text-primary hover:underline">
            Load More Jobs →
          </button>
        </div>
      </div>
    </section>
  )
}