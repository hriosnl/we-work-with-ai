import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface JobSubmissionEmailProps {
  name: string;
  email: string;
  jobPostUrl: string;
  submittedAt: string;
}

export const JobSubmissionEmail = ({
  name = 'Test Company',
  email = 'test@company.com',
  jobPostUrl = 'https://company.com/jobs/ai-engineer',
  submittedAt = new Date().toLocaleString(),
}: JobSubmissionEmailProps) => {
  const previewText = `New AI job submission from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column>
                <Heading style={h1}>🤖 We Work With AI</Heading>
                <Text style={subtitle}>New Job Submission</Text>
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h2}>📋 Submission Details</Heading>
            <Section style={detailsBox}>
              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Company/Name:</Text>
                </Column>
                <Column>
                  <Text style={value}>{name}</Text>
                </Column>
              </Row>
              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Email:</Text>
                </Column>
                <Column>
                  <Link href={`mailto:${email}`} style={emailLink}>
                    {email}
                  </Link>
                </Column>
              </Row>
              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Job Post URL:</Text>
                </Column>
                <Column>
                  <Link href={jobPostUrl} style={urlLink} target="_blank">
                    {jobPostUrl}
                  </Link>
                </Column>
              </Row>
              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Submitted:</Text>
                </Column>
                <Column>
                  <Text style={value}>{submittedAt}</Text>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Next Steps */}
          <Section style={content}>
            <Heading style={h2}>💰 Next Steps</Heading>
            <Section style={stepsBox}>
              <Text style={step}>
                <strong>1.</strong> Review the job posting at the provided URL
              </Text>
              <Text style={step}>
                <strong>2.</strong> Send $175 Stripe invoice to {email}
              </Text>
              <Text style={step}>
                <strong>3.</strong> Once paid, feature the job for 30 days
              </Text>
              <Text style={step}>
                <strong>4.</strong> Include in weekly newsletter
              </Text>
            </Section>
          </Section>

          {/* Metrics */}
          <Section style={content}>
            <Heading style={h2}>📊 Expected Metrics</Heading>
            <Section style={metricsBox}>
              <Row>
                <Column style={metricColumn}>
                  <Text style={metricValue}>10k</Text>
                  <Text style={metricLabel}>Monthly Pageviews</Text>
                </Column>
                <Column style={metricColumn}>
                  <Text style={metricValue}>100+</Text>
                  <Text style={metricLabel}>Clicks per Post</Text>
                </Column>
                <Column style={metricColumn}>
                  <Text style={metricValue}>75%</Text>
                  <Text style={metricLabel}>Newsletter Open Rate</Text>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was generated automatically from the We Work With AI job submission form.
            </Text>
            <Text style={footerText}>
              Visit{' '}
              <Link href="http://localhost:3001" style={footerLink}>
                We Work With AI
              </Link>{' '}
              to manage job listings.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 24px',
  backgroundColor: '#1e293b',
  borderRadius: '8px 8px 0 0',
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '600',
  lineHeight: '36px',
  margin: '0 0 8px',
};

const subtitle = {
  color: '#cbd5e1',
  fontSize: '16px',
  margin: '0',
};

const content = {
  padding: '24px',
};

const h2 = {
  color: '#1e293b',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const detailsBox = {
  backgroundColor: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '24px',
};

const detailRow = {
  marginBottom: '12px',
};

const labelColumn = {
  width: '120px',
  verticalAlign: 'top',
};

const label = {
  color: '#64748b',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const value = {
  color: '#1e293b',
  fontSize: '14px',
  margin: '0',
};

const emailLink = {
  color: '#3b82f6',
  textDecoration: 'none',
  fontSize: '14px',
};

const urlLink = {
  color: '#3b82f6',
  textDecoration: 'none',
  fontSize: '14px',
  wordBreak: 'break-all' as const,
};

const stepsBox = {
  backgroundColor: '#ecfdf5',
  border: '1px solid #bbf7d0',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '24px',
};

const step = {
  color: '#166534',
  fontSize: '14px',
  margin: '0 0 8px',
  lineHeight: '20px',
};

const metricsBox = {
  backgroundColor: '#f0f9ff',
  border: '1px solid #bae6fd',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '24px',
};

const metricColumn = {
  textAlign: 'center' as const,
  padding: '0 16px',
};

const metricValue = {
  color: '#0c4a6e',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 4px',
};

const metricLabel = {
  color: '#0369a1',
  fontSize: '12px',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const footer = {
  padding: '24px',
  borderTop: '1px solid #e2e8f0',
  backgroundColor: '#f8fafc',
};

const footerText = {
  color: '#64748b',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '0 0 8px',
};

const footerLink = {
  color: '#3b82f6',
  textDecoration: 'none',
};

export default JobSubmissionEmail;