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
import ProjectStack from '@/components/ProjectStack';
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
    quote: 'Working with Scalvex transformed our online presence. The website is fast, intuitive, and optimized for search engines — we started seeing leads immediately.',
    name: 'Rohit Sharma',
    type: 'E-commerce Entrepreneur',
  },
  {
    quote: 'The Scalvex team is exceptional. Their process is clear, milestones are met, and the communication is direct. Our business website now performs beyond expectations.',
    name: 'Ananya Mehta',
    type: 'Digital Marketing Agency Owner',
  },
  {
    quote: 'Our service business now has a website that not only looks professional but converts visitors into clients efficiently. Scalvex delivered every promise.',
    name: 'Vikram Singh',
    type: 'Fitness Studio Founder',
  },
  {
    quote: 'Fast, efficient, and SEO-ready. Scalvex rebuilt our site with precision, and we noticed higher traffic and better engagement within weeks.',
    name: 'Sneha Reddy',
    type: 'Consulting Firm Owner',
  },
  {
    quote: 'Direct communication with the founder ensured our project stayed on track. Scalvex delivered a website that is scalable, fast, and conversion-focused.',
    name: 'Karan Joshi',
    type: 'Education Platform Founder',
  },
  {
    quote: 'From design to launch, Scalvex handled everything seamlessly. The result is a website that is visually stunning, technically solid, and leads-driven.',
    name: 'Priyanka Iyer',
    type: 'Health & Wellness Studio Owner',
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
    featured: true,
    title: 'Alpha Investment Management',
    image: '/aim.png',
    link: '/alphainvestmentcasestudy',
    type: 'Case Study',
    caseStudy: `# Case Study: Alpha Investment Management

## Project Overview
**Alpha Investment Management** is a digital platform built to help investment firms present their services, portfolio strategies, and performance insights with clarity and trust. The goal was to translate complex financial data into a professional, accessible, and conversion-focused digital experience.

---

## Challenges
- **Trust & Credibility**
  Financial services demand a strong sense of authority and reliability, which was missing in the earlier digital presence.

- **Complex Data Communication**
  Financial metrics and strategies were difficult for non-technical users to understand.

- **User Experience Issues**
  Navigation and content structure lacked clarity and flow.

- **Scalability & Security**
  The platform needed to support future dashboards while maintaining performance and security.

---

## Solution
A modern, high-performance investment platform featuring:
- A clean, professional UI to establish trust
- Structured content for simplified financial storytelling
- Secure and scalable architecture
- Data visualization for clarity

---

## Approach
1. Requirement analysis and audience understanding  
2. UX-focused information architecture  
3. Premium design system and layout consistency  
4. Modular, scalable development  
5. Performance and security optimization  

---

## Implementation
- Responsive web application for all devices
- Dynamic sections for services and performance insights
- Financial charts for data clarity
- SEO and accessibility best practices
- CI/CD-driven deployment workflow

---

## Outcome & Impact
- Improved brand trust and authority
- Increased user engagement
- Higher lead conversion rates
- Platform ready for future expansion

---

## Technology Stack
Frontend: React, Tailwind CSS, Chart.js  
Backend: Node.js, Express.js  
Database: MongoDB / PostgreSQL  
DevOps & Security: Docker, Nginx, JWT, CI/CD
`,
    context:
      'Digital platform for investment firms to present services, strategies, and performance insights.',
    problem:
      'Lacked authority, complex data presentation, poor UX, and scalability concerns.',
    goal:
      'Build a high-trust, scalable, and performance-optimized investment platform.',
    strategy:
      'Professional UI, structured content, secure architecture, data visualization, SEO.',
    execution:
      'Responsive web app, modular sections, charts, SEO optimization, CI/CD pipeline.',
    outcome:
      'Increased trust, engagement, conversion, and long-term scalability.',
    tools: [
      'React',
      'Tailwind CSS',
      'Chart.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'JWT',
      'CI/CD'
    ]
  },
  {
    featured: true,
    title: 'Nilkamal Interiors & Furnitures',
    image: '/nilkamal.png',
    link: '/nilkamalinteriorscasestudy',
    type: 'Client Project',
    caseStudy: `# Case Study: Nilkamal Interiors & Furnitures

## Project Overview
Nilkamal Interiors & Furnitures required a strong digital presence to showcase interior projects and custom furniture work while appealing to premium residential and commercial clients.

---

## Challenges
- Weak visual presentation of completed projects
- Outdated layout affecting brand perception
- Low inquiry conversion from website visitors

---

## Solution
A visual-first website designed to highlight craftsmanship, space aesthetics, and completed interior projects.

---

## Implementation
- Modern UI with image-driven layouts
- Responsive project galleries
- Optimized images for fast performance
- Clear call-to-action placement

---

## Outcome
- Improved brand perception
- Higher engagement on project pages
- Increased qualified client inquiries
`,
    context:
      'Digital presence for an interior design and furniture brand showcasing premium projects.',
    problem:
      'Outdated design, poor visual storytelling, and low lead conversion.',
    goal:
      'Showcase interior work professionally and improve inquiries.',
    strategy:
      'Visual-first UX, clean layouts, strong imagery.',
    execution:
      'UI redesign, responsive galleries, performance optimization.',
    outcome:
      'Stronger brand image and improved client engagement.',
    tools: [
      'React',
      'Tailwind CSS',
      'Responsive Design',
      'Image Optimization'
    ]
  },
  {
    featured: true,
    title: 'Archly',
    image: '/archly.png',
    link: '/archlycasestudy',
    type: 'Case Study',
    caseStudy: `# Case Study: Archly

## Project Overview
Archly is a portfolio platform designed for architects to professionally present their work, projects, and design philosophy.

---

## Challenges
- Scattered portfolio content
- No structured project presentation
- Limited online visibility

---

## Solution
A clean, portfolio-focused platform emphasizing visuals and project storytelling.

---

## Implementation
- Project-based portfolio structure
- Case-study style layouts
- Responsive, minimal UI
- SEO-ready architecture

---

## Outcome
- Strong personal brand presence
- Improved discoverability
- Better client outreach
`,
    context:
      'Portfolio platform for architects to showcase professional work.',
    problem:
      'Unstructured portfolio and weak online presence.',
    goal:
      'Create a centralized professional portfolio.',
    strategy:
      'Portfolio-first UX and minimal design.',
    execution:
      'Galleries, case-study layouts, SEO optimization.',
    outcome:
      'Improved visibility and client engagement.',
    tools: [
      'React',
      'Tailwind CSS',
      'Portfolio Design',
      'SEO Optimization'
    ]
  },
  {
    featured: true,
    title: 'FinanceHub',
    image: '/financehub.png',
    link: '/financehubcasestudy',
    type: 'Case Study',
    caseStudy: `# Case Study: FinanceHub

## Project Overview
**FinanceHub** is an AI-driven finance and loan management system designed to help users track loans, manage finances, and gain intelligent insights for better financial decisions.

---

## Challenges
- Manual tracking of loans and finances
- Lack of actionable financial insights
- Complex user workflows

---

## Solution
An intelligent dashboard-driven platform combining automation and AI-powered insights.

---

## Implementation
- Role-based dashboards
- Loan and finance tracking modules
- AI-driven insights and recommendations
- Secure authentication system

---

## Outcome
- Reduced manual effort
- Improved financial clarity
- Higher user adoption
`,
    context:
      'AI-driven finance and loan management platform.',
    problem:
      'Manual workflows and lack of financial visibility.',
    goal:
      'Simplify finance and loan management using AI.',
    strategy:
      'Automation, AI insights, secure system design.',
    execution:
      'Dashboards, loan modules, authentication.',
    outcome:
      'Smarter financial decisions and better usability.',
    tools: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'AI Integration'
    ]
  },
  {
    featured: true,
    title: 'AgriFresh',
    image: '/agrifresh.png',
    link: '/agrifreshcasestudy',
    type: 'Client Project',
    caseStudy: `# Case Study: AgriFresh

## Project Overview
AgriFresh is an e-commerce platform built to enable online sales of fresh agricultural products with secure payments and user account management.

---

## Challenges
- No online sales channel
- Limited customer reach
- Manual order handling

---

## Solution
A scalable e-commerce platform with seamless checkout and account creation.

---

## Implementation
- Product catalog and categories
- User authentication system
- Cart and checkout flow
- Payment gateway integration

---

## Outcome
- Expanded digital reach
- Streamlined order management
- Improved customer experience
`,
    context:
      'E-commerce platform for fresh agricultural products.',
    problem:
      'Lack of online sales and inefficient order management.',
    goal:
      'Enable digital sales with secure payments.',
    strategy:
      'Simple UX, mobile-first design, scalable backend.',
    execution:
      'E-commerce features, payments, authentication.',
    outcome:
      'Increased reach and operational efficiency.',
    tools: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Payment Gateway'
    ]
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

      {/* Premium Stacked Projects Section */}
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
          <ProjectStack projects={featuredProjects.slice(0, 3)} />
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
                <Card className="h-full transition-shadow duration-200 hover:shadow-md">
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
              <CarouselPrevious className="-left-6 md:-left-10 top-1/2 opacity-40" style={{ width: 28, height: 28 }} />
              <CarouselNext className="-right-6 md:-right-10 top-1/2 opacity-40" style={{ width: 28, height: 28 }} />
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
              <Card className="h-full transition-shadow duration-200 hover:shadow-md">
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
              <Card className="h-full transition-shadow duration-200 hover:shadow-md">
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
                <Card className="h-full transition-shadow duration-200 hover:shadow-md">
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
                className="transition-shadow duration-200 hover:shadow-md"
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
