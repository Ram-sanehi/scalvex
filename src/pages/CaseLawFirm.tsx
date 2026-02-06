import Layout from '../components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

// Example data for a real, high-ticket client project
const caseStudy = {
  // --- Law Firm Website Case Study ---
  name: 'Law Firm Website',
  industry: 'Legal Services',
  outcomeHeadline: '↑ 3x qualified leads, top 3 local search ranking, 1.2s load time',
  meta: {
    service: 'SEO-First Website Redesign',
    tech: 'React, Next.js, Tailwind CSS, Schema Markup',
    timeline: '8 weeks',
  },
  // --- Client Context ---
  clientContext: 'Regional law firm serving SMBs and individuals in a competitive metro market. Needed to establish trust and drive inbound consultations.',
  // --- Problem ---
  problem: 'Low online trust, poor search visibility, and a dated site were limiting new client acquisition and hurting credibility.',
  // --- Goals ---
  goals: [
    'Triple qualified consultation requests',
    'Achieve top 3 ranking for target local keywords',
    'Reduce homepage load time below 1.5s',
    'Increase tracked conversion rate by 50%',
  ],
  // --- Strategy ---
  strategy: 'Prioritized technical SEO, clear service navigation, and conversion-focused UX. Built for speed, mobile, and search from day one. Messaging and structure engineered to build trust instantly.',
  // --- Execution ---
  execution: 'Custom React/Next.js build with semantic HTML, schema, and performance optimization. Direct founder-led communication, clear milestones, and no agency bloat.',
  // --- Results ---
  results: [
    '+3x qualified leads (tracked form submissions)',
    'Top 3 Google ranking for 5+ local keywords',
    '1.2s homepage load time (Lighthouse)',
    '+62% conversion rate (pre/post launch)',
    '↑ Engagement: +40% avg. session duration',
    // Add more result items as needed
  ],
  // --- Visuals ---
  visuals: [
    { src: '/public/case-law-desktop.png', alt: 'Law Firm Website Desktop', type: 'desktop' },
    { src: '/public/case-law-mobile.png', alt: 'Law Firm Website Mobile', type: 'mobile' },
    // Add more visuals as needed
  ],
  // --- Takeaways ---
  takeaways: [
    'Trust and clarity drive conversions in high-consideration services.',
    'SEO-first structure delivers compounding results.',
    'Direct, founder-led execution ensures quality and speed.',
    // Add more takeaways as needed
  ],
};

export default function LawFirmCaseStudy() {
  const navigate = useNavigate();
  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Layout>
      <BackArrow />
      {/* Hero Section */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">{caseStudy.name} <span className="text-accent">/</span> <span className="font-normal text-lg">{caseStudy.industry}</span></h1>
          <div className="text-xl font-semibold text-primary mb-4">{caseStudy.outcomeHeadline}</div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
            <span>Service: {caseStudy.meta.service}</span>
            <span>Tech: {caseStudy.meta.tech}</span>
            <span>Timeline: {caseStudy.meta.timeline}</span>
          </div>
        </div>
      </section>

      {/* Client Context */}
      <section className="section-padding bg-card border-b border-border">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-primary">Client Context</h2>
          <p className="text-base text-muted-foreground mb-0">{caseStudy.clientContext}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-primary">The Problem</h2>
          <p className="text-base text-muted-foreground mb-0">{caseStudy.problem}</p>
        </div>
      </section>

      {/* Goals & Success Metrics */}
      <section className="section-padding bg-card border-b border-border">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-primary">Goals & Success Metrics</h2>
          <ul className="list-disc list-inside text-base text-muted-foreground space-y-1">
            {caseStudy.goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Strategy */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-primary">Strategy</h2>
          <p className="text-base text-muted-foreground mb-0">{caseStudy.strategy}</p>
        </div>
      </section>

      {/* Execution */}
      <section className="section-padding bg-card border-b border-border">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-primary">Execution</h2>
          <p className="text-base text-muted-foreground mb-0">{caseStudy.execution}</p>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-primary">Results</h2>
          <ul className="list-disc list-inside text-base text-muted-foreground space-y-1">
            {caseStudy.results.map((result, i) => (
              <li key={i}>{result}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visual Proof */}
      <section className="section-padding bg-card border-b border-border">
        <div className="container-custom max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
          {caseStudy.visuals.map((img, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <img src={img.src} alt={img.alt} className="rounded-lg border border-border shadow-sm max-w-xs md:max-w-sm" />
              <span className="text-xs text-muted-foreground mt-2 capitalize">{img.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-primary">Key Takeaways</h2>
          <ul className="list-disc list-inside text-base text-muted-foreground space-y-1">
            {caseStudy.takeaways.map((take, i) => (
              <li key={i}>{take}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-primary-foreground text-2xl font-semibold">Looking for similar results?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            We take on a limited number of high-impact projects for service businesses and founder-led firms.
          </p>
          <button className="btn btn-lg btn-secondary" onClick={handleCtaClick}>
            Request a Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
}
