'use client'

import { useState } from 'react'
import { AiParserSwitch } from '@/components/ui/ai-parser-switch'
import { JobPostModal } from '@/components/job-post-modal'
import { EnhancedJobListings } from '@/components/enhanced-job-listings'
import { ThemeToggle } from '@/components/theme-toggle'

export default function HomePage() {
  const [isAiMode, setIsAiMode] = useState(false)
  const [isJobPostModalOpen, setIsJobPostModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Enhanced Header */}
      <header className="border-b border-border/20 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <h1 className="text-lg font-medium tracking-tight">AI Remote Jobs</h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setIsJobPostModalOpen(true)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4"
              >
                Submit Job
              </button>
              <AiParserSwitch 
                isAiMode={isAiMode}
                onToggle={setIsAiMode}
              />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 border-b border-border/20">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                Remote AI Jobs
                <br />
                <span className="text-primary">for Developers</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Curated opportunities at leading AI companies. 
                <br />
                100% remote. Updated daily.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">8 new jobs this week</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">50+ companies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <EnhancedJobListings isAiMode={isAiMode} />
      </main>

      {/* Minimal Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border/20">
        <div className="text-sm text-muted-foreground">
          <p>Built for the AI community. Open to feedback and contributions.</p>
        </div>
      </footer>

      {/* Job Post Modal */}
      <JobPostModal
        open={isJobPostModalOpen}
        onOpenChange={setIsJobPostModalOpen}
      />
    </div>
  )
}