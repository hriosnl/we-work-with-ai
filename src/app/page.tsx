"use client";

import { useState } from "react";
import { AiParserSwitch } from "@/components/ui/ai-parser-switch";
import { JobPostModal } from "@/components/job-post-modal";
import { EnhancedJobListings } from "@/components/enhanced-job-listings";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContainerTextFlip } from "@/components/container-text-flip";

export default function HomePage() {
  const [isAiMode, setIsAiMode] = useState(false);
  const [isJobPostModalOpen, setIsJobPostModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Enhanced Header */}
      <header className="border-b border-border/20 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
              <h1 className="text-base sm:text-lg font-medium tracking-tight truncate">
                <span className="sm:hidden">We Work w/ AI</span>
                <span className="hidden sm:inline">We Work With AI</span>
              </h1>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-6 flex-shrink-0">
              <button
                onClick={() => setIsJobPostModalOpen(true)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-primary-foreground text-xs sm:text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap"
              >
                {/* <span className="sm:hidden">Post</span> */}
                <span className="sm:inline">Submit Job</span>
              </button>
              <div className="hidden sm:block">
                <AiParserSwitch isAiMode={isAiMode} onToggle={setIsAiMode} />
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile AI Parser Switch - Below main nav */}
          <div className="block sm:hidden mt-3 pt-3 border-t border-border/20">
            <AiParserSwitch isAiMode={isAiMode} onToggle={setIsAiMode} />
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
                <div className="mt-2">
                  <span className="text-primary mr-2">for</span>
                  <ContainerTextFlip
                    className="md:pt-0 md:pb-5 font-medium shadow-none dark:shadow-none"
                    textClassName="md:text-[2.8rem]"
                  />
                </div>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Curated opportunities at leading AI companies.
                <br />
                100% remote. Updated regularly.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">
                  8 new jobs this week
                </span>
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
      <footer className="relative container mx-auto px-6 py-12 border-t border-border/20">
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
  );
}
