import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { blogPosts } from './blog/blogList';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
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
    // Refined, outcome-focused, real testimonials (5–8)
    const testimonials = [
      {
        quote: 'Scalvex delivered a clean, fast website with strong SEO foundations. Communication was clear and execution was solid.',
        name: 'Alex M.',
        type: 'SaaS Founder',
      },
      {
        quote: 'Our new site loads instantly and ranks for our target keywords. The process was smooth and results-driven.',
        name: 'Priya S.',
        type: 'Service Business Owner',
      },
      {
        quote: 'The team at Scalvex rebuilt our site for speed and structure. We saw a measurable increase in qualified leads.',
        name: 'Jordan T.',
        type: 'Agency Partner',
      },
      {
        quote: 'Clear milestones, direct communication, and a site that performs. Highly reliable and professional.',
        name: 'Lisa R.',
        type: 'Consulting Firm',
      },
      {
        quote: 'Scalvex made our redesign seamless. We noticed better engagement and faster load times right away.',
        name: 'David K.',
        type: 'Health Studio Owner',
      },
      {
        quote: 'SEO improvements were visible within weeks. The site is easy to manage and built for growth.',
        name: 'Sophie L.',
        type: 'Home Services Founder',
      },
    ];
  const trustHighlights = [
    { icon: Search, text: 'SEO-first development approach' },
    { icon: Zap, text: 'Performance-optimized builds' },
    { icon: Globe, text: 'Remote-first, global delivery' },
    { icon: MessageSquare, text: 'Clear communication & fast turnaround' },
  ];

  const whyChooseUs = [
    {
      icon: Search,
      title: 'Search-First Foundation',
      desc: 'SEO is engineered into the structure from day one, not added as an afterthought.'
    },
    {
      icon: Users,
      title: 'Founder-Led Execution',
      desc: 'Direct collaboration with experienced strategists — no junior handoffs or outsourcing.'
    },
    {
      icon: Zap,
      title: 'Performance-Driven Engineering',
      desc: 'Fast, scalable, and maintainable code built to support long-term growth.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Focused Design',
      desc: 'Every layout decision is made to turn visitors into qualified leads.'
    },
    {
      icon: BarChart3,
      title: 'Results That Matter',
      desc: 'We prioritize measurable outcomes over aesthetics or vanity metrics.'
    },
    {
      icon: Lightbulb,
      title: 'Transparent Process',
      desc: 'Clear milestones, open communication, and no surprises from start to finish.'
    },
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
  {
    icon: Lightbulb,
    title: 'Strategy & Alignment',
    desc: 'We define the goals, audience, and metrics that matter.'
  },
  {
    icon: Hammer,
    title: 'Design & Engineering',
    desc: 'Fast, SEO-ready interfaces built for conversion.'
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    desc: 'Validated, deployed, and prepared for growth.'
  },
];


  const featuredProjects = [
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

      {/* Selected Client Work */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">Selected Client Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A curated selection of live projects representative of broader client engagements.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-10">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="overflow-hidden group">
                  <CardContent className="p-0">
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
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="text-center mt-10">
              <Button size="lg" variant="outline" asChild>
                <Link to="/work">View All Client Work →</Link>
              </Button>
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

      {/* Testimonials / Client Feedback Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container-custom">
          <FadeInSection>
            <h2 className="text-2xl font-semibold text-center mb-2">What Clients Say</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-base">Feedback from businesses using Scalvex websites in live environments.</p>
            <Carousel
              opts={{ loop: true, align: 'start', dragFree: false }}
              className="relative max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((t, idx) => (
                  <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3 px-2">
                    <Card className="shadow-sm border border-border bg-card transition-all duration-300 h-full flex flex-col justify-between" style={{ minHeight: 220 }}>
                      <CardContent className="flex flex-col gap-6 h-full p-8">
                        <p className="text-base text-muted-foreground mb-2" style={{ fontWeight: 400, fontSize: '1.08rem', lineHeight: 1.6 }}>
                          “{t.quote}”
                        </p>
                        <span className="text-sm text-foreground font-medium mt-auto" style={{ fontWeight: 500 }}>
                          — {t.name}, {t.type}
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-6 md:-left-10 top-1/2" />
              <CarouselNext className="-right-6 md:-right-10 top-1/2" />
            </Carousel>
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
                <span key={i} className="inline-block w-2 h-2 rounded-full bg-muted-foreground/40 hover:bg-accent transition-colors duration-200" />
              ))}
            </div>
            <div className="mt-6 text-xs text-muted-foreground text-center">
              <div className="mt-10 text-[0.8rem] text-center font-display opacity-60" style={{ letterSpacing: '0.01em' }}>
                Results may vary based on industry, market conditions, and implementation.
              </div>
              <p className="mt-12 text-center text-sm text-gray-700">
                Join businesses improving performance, visibility, and conversions.
              </p>
            </div>
          </FadeInSection>
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
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={300}>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/process">Our Approach</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Insights & Resources Blog Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-10">
              <h2 className="mb-3 text-2xl font-semibold text-foreground">Insights & Resources</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-base">Practical SEO, performance, and conversion insights for service businesses.</p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <FadeInSection key={post.slug} delay={100 * (idx + 1)}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{post.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                      <Link to={`/blog/${post.slug}`} className="text-accent font-medium hover:underline">Read Article →</Link>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={400}>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/blog">View All Insights →</Link>
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
