import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { JobSubmissionEmail } from "@/components/emails/job-submission-email";
import React from "react";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, jobPostUrl } = body;

    // Validate required fields
    if (!name || !email || !jobPostUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString();

    // Log the submission for debugging
    console.log("New job submission:", {
      name,
      email,
      jobPostUrl,
      timestamp: submittedAt,
    });

    // Create the email template component
    const emailTemplate = React.createElement(JobSubmissionEmail, {
      name,
      email,
      jobPostUrl,
      submittedAt,
    });

    // Send email using Resend
    try {
      if (process.env.RESEND_API_KEY) {
        const { data, error } = await resend.emails.send({
          from: "We Work With AI <onboarding@resend.dev>", // Using Resend's default domain for now
          to: ["mvtaguilaso@gmail.com"], // Your Resend account email - change this to mvtaguilaso@gmail.com after domain verification
          subject: `🤖 New AI Job Submission from ${name}`,
          react: emailTemplate,
          replyTo: email, // Allow you to reply directly to the submitter
        });

        if (error) {
          console.error("Resend error:", error);
          // Continue processing even if email fails
        } else {
          console.log("Email sent successfully:", data);
        }
      } else {
        console.log(
          "RESEND_API_KEY not found. Email would be sent to: mvtaguilaso@gmail.com"
        );
        console.log("Email content rendered successfully");
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Continue processing even if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Job submission received successfully",
    });
  } catch (error) {
    console.error("Error processing job submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
