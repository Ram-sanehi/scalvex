import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Work = () => {
  const projects = [
    {
      title: 'Law Firm Website',
      type: 'Client Project',
      context: 'For a regional law firm needing credibility and local search visibility',
      problem: 'Low online trust and poor search rankings for legal services',
      goal: 'Establish authority and drive qualified leads through organic search',
      strategy: 'Technical SEO, fast-loading pages, clear service navigation, schema markup',
      execution: 'Custom design, semantic HTML, performance optimization, on-page SEO',
      outcome: 'Top 3 local rankings, increased consultation requests, improved trust signals',
      tools: ['React', 'Tailwind CSS', 'Next.js', 'Schema Markup', 'SEO Audits'],
      liveUrl: 'https://clientlawfirm.com'
    },
    {
      title: 'Home Services Business',
      type: 'Client Project',
      context: 'For a growing home services company expanding into new markets',
      problem: 'Outdated site, slow load times, and low conversion rates',
      goal: 'Modernize the site and improve lead generation',
      strategy: 'Mobile-first UX, conversion-focused CTAs, technical SEO, analytics',
      execution: 'Redesign, performance tuning, SEO structure, analytics integration',
      outcome: 'Faster site, higher conversion rate, better search visibility',
      tools: ['React', 'Tailwind CSS', 'Google Analytics', 'SEO Tools'],
      liveUrl: 'https://clienthomeservices.com'
    },
    {
      title: 'B2B SaaS Platform',
      type: 'Client Project',
      context: 'For a SaaS startup targeting enterprise clients',
      problem: 'Lack of clarity and poor organic reach for product features',
      goal: 'Drive demo requests and improve organic traffic',
      strategy: 'Content optimization, technical SEO, fast UI, conversion tracking',
      execution: 'Custom landing pages, schema, performance audits, SEO copywriting',
      outcome: 'Increased demo signups, improved keyword rankings, faster onboarding',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'SEO Copywriting'],
      liveUrl: 'https://clientsaasplatform.com'
    },
    {
      title: 'Health & Wellness Studio',
      type: 'Client Project',
      context: 'For a boutique wellness studio needing local visibility and bookings',
      problem: 'Low online bookings and poor local search results',
      goal: 'Increase bookings and improve local SEO',
      strategy: 'Local SEO, fast mobile experience, clear service pages',
      execution: 'Mobile-first design, local schema, booking integration',
      outcome: 'Higher booking rates, top 5 local search rankings',
      tools: ['React', 'Tailwind CSS', 'Local SEO', 'Booking API'],
      liveUrl: 'https://clientwellnessstudio.com'
    },
    {
      title: 'Consulting Agency',
      type: 'Client Project',
      context: 'For a business consulting firm targeting growth-stage companies',
      problem: 'Generic site, low engagement, and poor conversion tracking',
      goal: 'Position as a premium provider and capture qualified leads',
      strategy: 'Conversion-focused UX, technical SEO, analytics, premium design',
      execution: 'Custom layouts, SEO audits, analytics setup, performance optimization',
      outcome: 'Improved engagement, more qualified leads, premium brand perception',
      tools: ['React', 'Tailwind CSS', 'SEO Audits', 'Google Analytics'],
      liveUrl: 'https://clientconsultingagency.com'
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Work</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Real projects showcasing our approach to SEO-driven, performance-focused web development. 
                Each project demonstrates measurable business impact.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="overflow-hidden group">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid lg:grid-cols-2 no-underline hover:bg-muted/40 transition-colors duration-200 cursor-pointer"
                    aria-label={`Open live preview of ${project.title}`}
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center min-h-[220px] group-hover:bg-muted/60 transition-colors duration-200">
                      <span className="text-muted-foreground">Project Preview</span>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col gap-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {project.type}
                        </span>
                        <span className="text-sm text-accent underline ml-auto">Live Preview ↗</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <div className="mb-2">
                        <div className="text-sm font-semibold text-primary mb-1">Outcome</div>
                        <div className="text-muted-foreground text-base mb-1">{project.outcome}</div>
                      </div>
                      <div className="mb-2">
                        <div className="text-sm font-semibold text-primary mb-1">Approach</div>
                        <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1">
                          <li><span className="font-medium">Context:</span> {project.context}</li>
                          <li><span className="font-medium">Problem:</span> {project.problem}</li>
                          <li><span className="font-medium">Goal:</span> {project.goal}</li>
                          <li><span className="font-medium">Strategy:</span> {project.strategy}</li>
                          <li><span className="font-medium">Execution:</span> {project.execution}</li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded opacity-80"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
          {/* Experience & Trust Block */}
          <div className="mt-16 text-center text-muted-foreground" style={{ fontWeight: 400, letterSpacing: '0.01em' }}>
            <div className="mb-2" style={{ fontWeight: 300, fontSize: '1rem' }}>Trusted by multiple service businesses across different industries.</div>
            <div className="mb-2" style={{ fontWeight: 300, fontSize: '1rem' }}>Experience delivering SEO-ready websites for growing businesses.</div>
            <div className="mb-2" style={{ fontWeight: 300, fontSize: '1rem' }}>Additional examples are shared during discovery calls.</div>
            <Link to="/contact" className="text-sm text-accent underline">Request additional client work →</Link>
            <div className="mt-2" style={{ fontWeight: 300, fontSize: '0.85rem' }}>We intentionally showcase a limited number of projects to maintain clarity and relevance.</div>
            <div className="mt-1" style={{ fontWeight: 200, fontSize: '0.75rem' }}>Some client work may include restricted features or data not shown publicly.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-primary-foreground">Have a Project in Mind?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's discuss how we can help bring your vision to life with a website built for growth.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
