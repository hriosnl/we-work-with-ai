"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";

interface JobPostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function JobPostModal({
  open,
  onOpenChange,
  onSuccess,
}: JobPostModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobPostUrl: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/submit-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form immediately
        setFormData({ name: "", email: "", jobPostUrl: "" });
        setSubmitMessage("");
        // Call success callback to show notification and close modal
        onSuccess?.();
      } else {
        setSubmitMessage(
          `Error: ${result.error || "Failed to submit job posting"}`
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage("Error: Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const featuredCompanies = [
    { name: "OpenAI", color: "#10b981" },
    { name: "Anthropic", color: "#f59e0b" },
    { name: "DeepMind", color: "#3b82f6" },
    { name: "Hugging Face", color: "#f97316" },
    { name: "Scale AI", color: "#8b5cf6" },
    { name: "Cohere", color: "#06b6d4" },
    { name: "Stability AI", color: "#ec4899" },
  ];

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="max-w-md">
        <ModalHeader>
          <ModalTitle className="text-center">Submit an AI job post</ModalTitle>
          <ModalDescription className="text-center">
            Add your information below, and we&apos;ll email you for details and
            $175 Stripe invoice
          </ModalDescription>
        </ModalHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            {/* Benefits List */}
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Job post is featured for 30 days</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Receive personalized note in weekly newsletter</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>
                  Metrics: 10k monthly pageviews, 100+ clicks per post, 75% open
                  rate newsletter
                </span>
              </li>
            </ul>

            {/* Form Fields */}
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="url"
                  placeholder="Link to job post"
                  value={formData.jobPostUrl}
                  onChange={(e) =>
                    handleInputChange("jobPostUrl", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`p-3 rounded-md text-sm ${
                  submitMessage.startsWith("✓")
                    ? "bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                    : "bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </div>

          <ModalFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader /> : "Submit"}
            </Button>
          </ModalFooter>
        </form>

        {/* Previously Featured Companies */}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center mb-3">
            Previously featured
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {featuredCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: company.color }}
              >
                {company.name.slice(0, 2).toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
