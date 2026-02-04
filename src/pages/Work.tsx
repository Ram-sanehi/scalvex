import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Work = () => {
  const projects = [
    {
      title: 'SaaS Landing Page',
      type: 'Concept Project',
      problem: 'Early-stage SaaS startups often struggle to communicate their value proposition clearly, leading to high bounce rates and low conversion.',
      goal: 'Create a conversion-focused landing page that builds trust quickly and guides visitors toward a clear call-to-action.',
      solution: 'Designed a clean, SEO-ready landing page with clear messaging hierarchy, strategic CTAs, and performance-optimized code.',
      outcome: 'Improved message clarity, faster page load times, and a structure optimized for both search engines and conversions.',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Performance Optimization'],
    },
    {
      title: 'Service Business Redesign',
      type: 'Demo Redesign',
      problem: 'An established service business had an outdated website that hurt their credibility and failed to generate quality leads.',
      goal: 'Modernize the design to position the business as a market leader while improving user experience and SEO foundations.',
      solution: 'Complete visual overhaul with improved navigation, mobile-first design, and technical SEO implementation.',
      outcome: 'Professional appearance that matches the quality of their services, better user experience, and search-ready structure.',
      tools: ['React', 'Tailwind CSS', 'Technical SEO', 'Mobile-First Design'],
    },
    {
      title: 'Portfolio Website Build',
      type: 'Internal Build',
      problem: 'Many portfolio websites are built without SEO foundations, limiting organic discoverability and long-term growth.',
      goal: 'Build an SEO-first portfolio website that ranks well and showcases work effectively.',
      solution: 'Custom-built site with semantic HTML, proper meta optimization, schema markup, and optimized Core Web Vitals.',
      outcome: 'Search-engine friendly structure ready for organic traffic growth, with fast loading and excellent user experience.',
      tools: ['React', 'TypeScript', 'Schema Markup', 'Core Web Vitals Optimization'],
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
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      {/* Image Placeholder */}
                      <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center min-h-[300px]">
                        <span className="text-muted-foreground">Project Preview</span>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                          {project.type}
                        </span>
                        <h2 className="text-2xl font-semibold mb-6">{project.title}</h2>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-1">Problem</h4>
                            <p className="text-muted-foreground text-sm">{project.problem}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-1">Goal</h4>
                            <p className="text-muted-foreground text-sm">{project.goal}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-1">Solution</h4>
                            <p className="text-muted-foreground text-sm">{project.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-1">Outcome</h4>
                            <p className="text-muted-foreground text-sm">{project.outcome}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Tools & Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((tool, toolIndex) => (
                                <span
                                  key={toolIndex}
                                  className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
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
