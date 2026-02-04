import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { 
  Search, 
  Globe, 
  MessageSquare, 
  Code, 
  BarChart3,
  Lightbulb,
  Hammer,
  Rocket,
  Zap,
  CheckCircle2,
  Users,
  TrendingUp
} from 'lucide-react';

const Index = () => {
  const trustHighlights = [
    { icon: Search, text: 'SEO-first development approach' },
    { icon: Zap, text: 'Performance-optimized builds' },
    { icon: Globe, text: 'Remote-first, global delivery' },
    { icon: MessageSquare, text: 'Clear communication & fast turnaround' },
  ];

  const whyChooseUs = [
    { icon: Search, title: 'SEO Built Into the Foundation', desc: 'Not added later as an afterthought — visibility is engineered from day one.' },
    { icon: Users, title: 'Founder-Led Execution', desc: 'No junior handoffs. Direct access to experienced strategists who own your project.' },
    { icon: Code, title: 'Clean, Scalable Code', desc: 'Future-ready architecture that grows with your business without technical debt.' },
    { icon: TrendingUp, title: 'Conversion-Focused Layouts', desc: 'Every design decision is made to turn visitors into qualified leads.' },
    { icon: Rocket, title: 'Built for Growth', desc: 'Not just aesthetics — websites engineered for measurable business results.' },
  ];

  const webDevFeatures = [
    'Business websites that establish credibility',
    'Startup & MVP builds for fast validation',
    'High-converting landing pages',
    'Performance optimization for existing sites',
  ];

  const seoFeatures = [
    'Technical SEO setup & audits',
    'On-page optimization & structure',
    'Content strategy & optimization',
    'Analytics & performance tracking',
  ];

  const processSteps = [
    { icon: Lightbulb, title: 'Discovery & Planning', desc: 'Understanding your goals, audience, and competitive landscape' },
    { icon: Hammer, title: 'Design & Build', desc: 'Clean UI with performance and SEO built-in from day one' },
    { icon: Rocket, title: 'Launch & Optimize', desc: 'Testing, refinement, and growth-ready deployment' },
  ];

  const featuredProjects = [
    { 
      title: 'SaaS Landing Page', 
      type: 'Concept Project',
      problem: 'Early-stage startups struggle to communicate value clearly',
      goal: 'Create a conversion-focused landing page that builds trust fast',
      solution: 'Clean, SEO-ready landing page with clear messaging and strong CTAs',
      outcome: 'Improved clarity, faster load times, and conversion-ready structure',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Performance Optimization']
    },
    { 
      title: 'Service Business Redesign', 
      type: 'Demo Redesign',
      problem: 'Outdated design hurting credibility and lead generation',
      goal: 'Modern redesign that positions the business as a market leader',
      solution: 'Complete visual overhaul with improved UX and SEO foundations',
      outcome: 'Professional appearance, better user experience, search-ready structure',
      tools: ['React', 'Tailwind CSS', 'Technical SEO', 'Mobile-First Design']
    },
    { 
      title: 'Portfolio Website', 
      type: 'Internal Build',
      problem: 'Websites built without SEO foundations limit organic growth',
      goal: 'Build an SEO-first website architecture from scratch',
      solution: 'Custom-built site with semantic HTML, meta optimization, and fast loading',
      outcome: 'Search-engine friendly structure ready for organic traffic growth',
      tools: ['React', 'TypeScript', 'Schema Markup', 'Core Web Vitals']
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">
                SEO-Driven Websites for Service Businesses That Want Consistent Leads
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                Websites engineered for visibility, speed, and conversions — built with SEO and performance from day one.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                Founder-led studio delivering SEO-ready, scalable websites without agency bloat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Get a Free SEO & Website Audit</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/work">View Our Work</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-custom">
          <FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustHighlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Why Choose Scalvex */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Choose Scalvex</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We build websites that work as hard as you do — optimized for search, speed, and conversions.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <FadeInSection key={index} delay={index * 80}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Web development and SEO services designed to generate leads and support long-term growth.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection delay={100}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Custom websites that establish credibility, convert visitors, and scale with your business.
                  </p>
                  <ul className="space-y-3">
                    {webDevFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={200}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">SEO Add-On Services</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Maximize visibility and drive organic traffic with strategic search optimization.
                  </p>
                  <ul className="space-y-3">
                    {seoFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">How We Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined process designed to deliver results efficiently and transparently.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-accent mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/process">See Full Process</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real projects showcasing our approach to SEO-driven web development.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      {/* Image Placeholder */}
                      <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center min-h-[280px]">
                        <span className="text-muted-foreground">Project Preview</span>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                          {project.type}
                        </span>
                        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                        <div className="space-y-3 mb-6">
                          <div>
                            <span className="text-sm font-semibold text-primary">Problem: </span>
                            <span className="text-muted-foreground text-sm">{project.problem}</span>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-primary">Goal: </span>
                            <span className="text-muted-foreground text-sm">{project.goal}</span>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-primary">Solution: </span>
                            <span className="text-muted-foreground text-sm">{project.solution}</span>
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-primary">Outcome: </span>
                            <span className="text-muted-foreground text-sm">{project.outcome}</span>
                          </div>
                        </div>

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
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/work">View Full Portfolio</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-primary-foreground">Ready to Improve Your Online Presence?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get a free SEO and website audit — no pressure, just actionable insights.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
