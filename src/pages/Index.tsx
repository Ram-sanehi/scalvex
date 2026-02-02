import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { 
  Users, 
  Search, 
  Globe, 
  MessageSquare, 
  Code, 
  BarChart3,
  Lightbulb,
  Hammer,
  Rocket
} from 'lucide-react';

const Index = () => {
  const trustIndicators = [
    { icon: Users, text: 'Trusted by startups & growing businesses' },
    { icon: Search, text: 'SEO-first development approach' },
    { icon: Globe, text: 'Remote-first, global delivery' },
    { icon: MessageSquare, text: 'Clear communication & fast turnaround' },
  ];

  const webDevFeatures = [
    'Custom business & startup websites',
    'Conversion-focused layouts',
    'SEO-ready architecture',
    'Fast, secure, scalable builds',
  ];

  const seoFeatures = [
    'Technical SEO foundation',
    'On-page optimization',
    'Keyword & content strategy',
    'Performance tracking',
  ];

  const processSteps = [
    { icon: Lightbulb, title: 'Understand & Plan', desc: 'Business goals, audience, strategy' },
    { icon: Hammer, title: 'Design & Build', desc: 'Clean UI, performance, SEO built-in' },
    { icon: Rocket, title: 'Launch & Optimize', desc: 'Testing, refinement, growth-ready' },
  ];

  const featuredProjects = [
    { title: 'Startup Landing Page', type: 'Concept Project', desc: 'Clean, conversion-focused design' },
    { title: 'Business Website Redesign', type: 'Demo Build', desc: 'Modern redesign with better UX' },
    { title: 'SEO-Optimized Website', type: 'Internal Project', desc: 'Search-engine friendly structure' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">
                We Build High-Performance Websites That Rank & Convert
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Web development with SEO built in — helping startups and growing businesses 
                create scalable, conversion-focused digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Get a Free Website Review</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/work">View Our Work</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-custom">
          <FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((item, index) => (
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

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine expert web development with strategic SEO to deliver websites that perform.
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
                  <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                  <ul className="space-y-3">
                    {webDevFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
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
                  <h3 className="text-xl font-semibold mb-4">SEO (Add-On)</h3>
                  <ul className="space-y-3">
                    {seoFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
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
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">How We Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined process designed to deliver results efficiently.
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
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of projects showcasing our approach and capabilities.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Project Preview</span>
                    </div>
                    <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded mb-3">
                      {project.type}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.desc}</p>
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

      {/* Remote Team Statement */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <Globe className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="mb-6">Remote-First, Results-Focused</h2>
              <p className="text-lg text-muted-foreground">
                We work remotely with a trusted network of designers, developers, and SEO specialists. 
                This flexible, remote-first model allows us to deliver high-quality, scalable solutions 
                tailored to your expectations — without the overhead of traditional agencies.
              </p>
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
                Let's build something that works for your business.
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
