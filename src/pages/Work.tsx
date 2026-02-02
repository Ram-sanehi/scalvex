import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Work = () => {
  const projects = [
    {
      title: 'Startup Landing Page',
      type: 'Concept Project',
      problem: 'Startups struggle to clearly communicate value and convert visitors.',
      solution: 'Designed a clean, conversion-focused landing page with SEO-ready structure.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Lovable.dev'],
      outcome: 'Improved clarity, engagement, and conversion readiness.',
    },
    {
      title: 'Business Website Redesign',
      type: 'Demo / Redesign',
      problem: 'Outdated design, slow load time, poor UX.',
      solution: 'Modern redesign with better navigation and on-page SEO.',
      tools: ['React', 'Tailwind CSS', 'Performance Optimization'],
      outcome: 'Faster performance, improved user experience.',
    },
    {
      title: 'SEO-Optimized Website Build',
      type: 'Internal Project',
      problem: 'Websites built without SEO foundations limit growth.',
      solution: 'Built an SEO-first website architecture from scratch.',
      tools: ['React', 'TypeScript', 'Technical SEO'],
      outcome: 'Search-engine friendly structure, ready for growth.',
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
                A transparent look at our projects. Each piece demonstrates our approach 
                to building high-performance, SEO-ready websites.
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
                Let's discuss how we can help bring your vision to life.
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
