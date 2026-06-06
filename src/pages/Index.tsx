import { useState, useEffect } from 'react';
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
  TrendingUp,
  ArrowRight,
  Star,
  Check,
  Sparkles
} from 'lucide-react';

const Index = () => {
    // Refined, outcome-focused, real testimonials with measurable metrics, business info, and profile indicators
    const testimonials = [
      {
        quote: "We wanted a website that felt modern and loaded quickly on mobile. Ram rebuilt the experience completely, and the difference was noticeable almost immediately. We also started receiving more inquiries within the first few weeks.",
        name: "Rohit Sharma",
        role: "Founder",
        company: "AgriFresh E-commerce",
        industry: "E-Commerce",
        metric: "1.2s Load Speed",
        avatar: "RS",
      },
      {
        quote: "Working directly with the founder made the process smooth and transparent. Our old site had several technical issues, and after the rebuild we started seeing better rankings and more consistent traffic.",
        name: "Ananya Mehta",
        role: "Marketing Lead",
        company: "Mehta Consulting",
        industry: "Business Consulting",
        metric: "+85% Organic Reach",
        avatar: "AM",
      },
      {
        quote: "The new website feels much cleaner and easier to navigate. Visitors now move directly toward booking consultations, and managing the site has become much simpler for our team.",
        name: "Vikram Singh",
        role: "Owner",
        company: "FitLife Studios",
        industry: "Local Services",
        metric: "3.2x Booking Rate",
        avatar: "VS",
      },
    ];

  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!carouselApi) return;
    
    setScrollSnaps(carouselApi.scrollSnapList());
    setCurrentSlide(carouselApi.selectedScrollSnap());
    
    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const trustHighlights = [
    { icon: Search, text: 'SEO-Ready Website Structure' },
    { icon: Zap, text: 'Optimized for Speed & Performance' },
    { icon: Globe, text: 'Responsive Across All Devices' },
    { icon: BarChart3, text: 'Analytics & Tracking Setup Included' },
  ];

  const whyChooseUs = [
    {
      icon: Search,
      title: 'Search-First Foundation',
      desc: 'SEO is considered from the beginning — from page structure to content hierarchy — helping your website stay visible and easier for search engines to understand.'
    },
    {
      icon: Users,
      title: 'Direct Founder Collaboration',
      desc: 'You work directly with the founder throughout the project, keeping communication simple, clear, and focused from start to finish.'
    },
    {
      icon: Zap,
      title: 'High-Performance Experience',
      desc: 'Fast, lightweight websites built to feel smooth across devices while supporting long-term performance and scalability.'
    },
    {
      icon: TrendingUp,
      title: 'Designed to Convert',
      desc: 'Every section is planned with clarity in mind, helping visitors move naturally toward inquiries, consultations, or bookings.'
    },
    {
      icon: BarChart3,
      title: 'Results That Matter',
      desc: 'We focus on improvements that genuinely impact businesses — like faster websites, stronger visibility, and better-quality inbound leads.'
    },
    {
      icon: Lightbulb,
      title: 'Transparent Partnership',
      desc: 'Clear timelines, honest communication, and a collaborative process without unnecessary complexity or agency layers.'
    },
  ];

  const growthWebsiteFeatures = [
    'Bespoke layouts tailored for service businesses',
    'Clear structure designed to improve inquiry flow',
    'Modern visual design that builds trust',
    'Responsive experience across all devices',
  ];

  const optimizationFeatures = [
    'Technical SEO and metadata improvements',
    'Speed optimization for faster load times',
    'Improved layouts to increase inquiries',
    'Content updates aligned with customer intent',
  ];

  const visibilityFeatures = [
    'Local SEO optimization for regional visibility',
    'Google Business profile improvements',
    'Analytics setup and lead tracking',
    'Ongoing performance insights and recommendations',
  ];
const processSteps = [
  {
    icon: Search,
    title: 'Strategy & Discovery',
    desc: 'We learn about your business, audience, competitors, and growth goals to build a clear roadmap focused on visibility, trust, and long-term results.'
  },
  {
    icon: Lightbulb,
    title: 'Structure & Experience',
    desc: 'Before design or development begins, we plan the website structure, messaging, and user experience to support both search visibility and conversions.'
  },
  {
    icon: Hammer,
    title: 'Build & Optimization',
    desc: 'We design and build fast, modern websites optimized for performance, responsiveness, Core Web Vitals, and a smooth user experience across devices.'
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'After testing and deployment, we configure analytics, monitor performance, and help your website continue improving over time.'
  },
];
  const featuredProjects = [
    {
      featured: true,
      title: 'Alpha Investment Management',
      image: '/aim.webp',
      link: '/alphainvestmentcasestudy',
      type: 'Growth System',
      outcome: 'Built a modern investor-focused platform designed to improve trust, simplify information access, and generate higher-quality inbound inquiries.',
      context: 'Client portal and performance reporting system for a private investment group.',
      problem: 'The previous platform relied on outdated spreadsheets and fragmented information that made the business feel less credible online.',
      goal: 'Create a fast, professional website experience that communicates trust and makes investor information easier to understand.',
      strategy: 'Focused on clean layouts, performance optimization, structured financial content, and a smoother user experience.',
      execution: 'Developed responsive dashboards, interactive charts, and streamlined service pages optimized for speed and clarity.',
      tools: ['React', 'Chart.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL']
    },
    {
      featured: true,
      title: 'Sanjh Boutique',
      image: '/sanjhboutique.webp',
      link: '/sanjhboutiquecasestudy',
      type: 'Brand Showroom',
      outcome: 'Rebuilt a high-end designer boutique experience, introducing interactive product quick views, custom styling accordion systems, and integrated Supabase-backed user authentication.',
      context: 'Luxury digital showroom and customer portal for a bespoke designer boutique.',
      problem: 'The previous online presence lacked structural organization for custom design processes and failed to offer secure, personalized client credentials or dynamic booking flows.',
      goal: 'Create a luxury digital showroom with seamless booking pipelines, a clean and modern design system, and custom contact forms to improve client inquiry quality.',
      strategy: 'Focused on responsive visual hierarchies, desaturated maps for branding cohesion, clean state-managed accordions, and flexible authentication models.',
      execution: 'Developed a bespoke homepage process grid, interactive product quick-views with simulated back views, custom sepia Google maps integration, and a mobile-optimized floating WhatsApp consultation bar.',
      tools: ['React', 'Tailwind CSS', 'Supabase', 'PostgreSQL']
    },
    {
      featured: true,
      title: 'Nilkamal Interiors & Furnitures',
      image: '/nilkamal.webp',
      link: '/nilkamalinteriorscasestudy',
      type: 'Brand Showroom',
      outcome: 'Improved consultation inquiries by creating a premium visual experience that better showcased completed interior projects.',
      context: 'Interactive digital showroom for residential and commercial interior spaces.',
      problem: 'The previous website lacked visual consistency and didn’t properly reflect the quality of the company’s work.',
      goal: 'Build a modern portfolio experience that highlights craftsmanship and encourages visitors to book consultations.',
      strategy: 'Focused on visual storytelling, responsive galleries, faster image loading, and clear inquiry pathways.',
      execution: 'Created lightweight image systems, optimized mobile layouts, and integrated streamlined contact flows.',
      tools: ['React', 'Tailwind CSS', 'Image Optimization', 'Framer Motion']
    },
    {
      featured: true,
      title: 'Archly Studios',
      image: '/archly.webp',
      link: '/archlycasestudy',
      type: 'Local Visibility System',
      outcome: 'Improved local visibility and helped generate more direct inquiries through a structured, search-friendly portfolio website.',
      context: 'Portfolio archive and search optimization program for a niche architecture studio.',
      problem: 'The business had little online visibility and no organized way to showcase previous projects professionally.',
      goal: 'Create a clean portfolio platform optimized for search visibility and local client inquiries.',
      strategy: 'Focused on local SEO structure, fast-loading pages, project organization, and simple lead pathways.',
      execution: 'Implemented location-focused content structure, responsive layouts, and direct inquiry integrations.',
      tools: ['React', 'Tailwind CSS', 'Local SEO Schema', 'Form Integration']
    }
  ];


  return (

    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-background overflow-hidden border-b border-border/50">
        {/* Subtle Decorative Ambient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.07),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              
              {/* Trust Badge / Proof Line */}
              <div className="inline-flex items-center gap-2 bg-primary/[0.03] border border-primary/10 rounded-full px-4 py-1.5 mb-8 text-xs sm:text-sm text-primary font-medium hover:bg-primary/[0.06] transition-colors shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>Trusted by high-growth service businesses and startups</span>
              </div>

              {/* H1 Title */}
              <h1 className="mb-6 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Websites Engineered for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Visibility, Trust & Leads</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                We build fast, SEO-powered websites designed to help service businesses improve visibility, build trust, and generate consistent leads. Direct, founder-led execution focused on your business growth.
              </p>

              {/* CTA Hierarchy */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-12">
                <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 h-auto shadow-lg shadow-accent/15 group hover:translate-y-[-2px] transition-transform duration-200" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Book a Free Strategy Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-6 h-auto hover:translate-y-[-2px] transition-transform duration-200" asChild>
                  <Link to="/work">View Case Studies</Link>
                </Button>
              </div>

              {/* Speed & SEO Trust Signifiers */}
              <div className="w-full max-w-2xl pt-8 border-t border-border/80">
                <div className="grid grid-cols-3 gap-6 sm:gap-12 mb-3">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">98%</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider mt-1">Avg. PageSpeed Score</div>
                  </div>
                  <div className="text-center border-x border-border/85 px-2 sm:px-8">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">3.2x</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider mt-1">Lead Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-semibold tracking-wider mt-1">Founder-Led Audits</div>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground/80 text-center font-medium">
                  Verified via Google PageSpeed Insights & search analytics from client launches.
                </p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <FadeInSection key={index} delay={index * 80} className="h-full">
                <Card className="h-full border border-border/40 hover:border-accent/40 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.06)] hover:-translate-y-1 transition-all duration-500 bg-card overflow-hidden relative group">
                  {/* Soft background blue gradient highlight on hover */}
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  
                  <CardContent className="p-7 relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-primary/[0.03] border border-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-105 group-hover:border-accent/20 group-hover:bg-accent/[0.02]">
                      <item.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder Block */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
                    <span>Expertise & Leadership</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Meet the Founder Behind Scalvex
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                    <p>
                      “I started Scalvex after noticing the same problem again and again — businesses investing in websites that looked impressive but failed to generate real results. Some struggled with visibility, while others attracted traffic but failed to convert visitors into inquiries.
                    </p>
                    <p>
                      A website shouldn’t just exist online. It should build trust, communicate clearly, and consistently help your business grow.
                    </p>
                    <p>
                      That’s why we approach design, development, performance, and search visibility as one connected system instead of separate services. Every decision is made with long-term growth and user experience in mind.
                    </p>
                    <p className="font-medium text-foreground">
                      No bloated agency structure. No junior developer handoffs. Just direct collaboration, clear communication, and focused execution from start to finish.”
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/80 flex items-center gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-base">Ram Vishwakarma</h3>
                      <p className="text-xs text-muted-foreground">Founder & Growth Strategist</p>
                    </div>
                    <Button variant="outline" size="sm" asChild className="ml-auto">
                      <Link to="/about">Read My Story</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="relative flex justify-center">
                  <div className="relative group max-w-[400px] w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border/80 shadow-md hover:shadow-lg transition-all duration-300 bg-card flex items-center justify-center">
                    <img
                      src="/founder.webp"
                      alt="Ram Vishwakarma, Founder of Scalvex"
                      width="400"
                      height="500"
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gradient-to-br from-primary/95 to-accent/95 flex flex-col items-center justify-center p-8 text-center text-white';
                          fallback.innerHTML = '<span class="text-6xl font-bold mb-2">RV</span><span class="text-sm font-semibold tracking-wide">Ram Vishwakarma</span><span class="text-xs opacity-95 mt-1">Founder & Growth Strategist</span>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonials / Client Feedback Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container-custom">
          <FadeInSection>
            <h2 className="text-2xl font-bold text-center mb-3 text-foreground">What Clients Say</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Real feedback from businesses using Scalvex websites to improve visibility, performance, and customer inquiries.
            </p>
            <Carousel
              setApi={setCarouselApi}
              opts={{ loop: true, align: 'start', dragFree: false }}
              className="relative max-w-4xl mx-auto px-10 md:px-0"
            >
              <CarouselContent>
                {testimonials.map((t, idx) => (
                  <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/2 px-3 py-4">
                    <Card className="shadow-sm border border-border/80 bg-card hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between" style={{ minHeight: 280 }}>
                      <CardContent className="flex flex-col gap-5 h-full p-6 relative">
                        {/* Rating stars & metric pill */}
                        <div className="flex justify-between items-center w-full">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {t.metric}
                          </span>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="text-sm text-muted-foreground leading-relaxed italic" style={{ fontSize: '0.92rem' }}>
                          “{t.quote}”
                        </p>

                        {/* Client details with Avatar initials */}
                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary/90 to-accent flex items-center justify-center text-xs font-semibold text-white shadow-inner">
                            {t.avatar}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-sm font-semibold text-foreground leading-none mb-1">
                              {t.name}
                            </span>
                            <span className="text-[11px] text-muted-foreground leading-none">
                              {t.role}, {t.company}
                            </span>
                            <span className="text-[9px] text-muted-foreground/80 mt-0.5">
                              {t.industry}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 h-10 w-10 border-border/80 hover:border-accent/40 bg-background hover:bg-accent/5 shadow-sm text-muted-foreground hover:text-foreground transition-all z-20" />
              <CarouselNext className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 h-10 w-10 border-border/80 hover:border-accent/40 bg-background hover:bg-accent/5 shadow-sm text-muted-foreground hover:text-foreground transition-all z-20" />
            </Carousel>
            <div className="flex justify-center mt-6 gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => carouselApi?.scrollTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === i ? "bg-accent scale-110" : "bg-muted-foreground/35 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
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
              <h2 className="mb-4">Integrated Web Growth Systems</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We build and optimize websites designed to improve visibility, build trust, and help service businesses generate consistent inbound leads.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <Card className="h-full border border-border/60 hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-11 h-11 rounded-xl bg-primary/[0.03] border border-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">1. Growth Website Systems</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Custom websites designed to strengthen your online presence, improve credibility, and turn visitors into qualified inquiries.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {growthWebsiteFeatures.map((feature, index) => (
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
              <Card className="h-full border border-border/60 hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-11 h-11 rounded-xl bg-accent/[0.03] border border-accent/10 flex items-center justify-center mb-6">
                    <Search className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">2. Website Optimization</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Improving existing websites by fixing performance issues, simplifying user experience, and strengthening search visibility.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {optimizationFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={300}>
              <Card className="h-full border border-border/60 hover:border-accent/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 bg-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/10 flex items-center justify-center mb-6">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">3. Visibility & Performance</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Helping businesses improve local visibility, track performance, and build a stronger digital presence over time.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {visibilityFeatures.map((feature, index) => (
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

          <FadeInSection delay={400}>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/services">Explore Our Integrated Systems</Link>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="relative h-full text-center">
                  {/* Subtle dashed connector line visible only on desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-[2.4rem] left-[calc(50%+1rem)] right-[calc(-50%+1rem)] border-t border-dashed border-accent/25 z-0" />
                  )}
                  
                  <div className="relative z-10 p-6 rounded-2xl bg-card border border-border/40 hover:border-accent/40 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.08)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col items-center overflow-hidden group">
                    {/* Soft background blue gradient highlight on hover */}
                    <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    
                    {/* Circle step marker */}
                    <div className="relative z-10 w-8 h-8 rounded-full border border-accent/20 bg-accent/5 text-[11px] font-bold text-accent flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 shadow-sm">
                      0{index + 1}
                    </div>
                    
                    {/* Icon container */}
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/[0.03] border border-primary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-105 group-hover:border-accent/20 group-hover:bg-accent/[0.02]">
                      <step.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="relative z-10 text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="relative z-10 text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-[240px]">
                      {step.desc}
                    </p>
                  </div>
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
              <FadeInSection key={post.slug} delay={100 * (idx + 1)} className="h-full">
                <Card className="h-full border border-border/40 hover:border-accent/40 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.06)] hover:-translate-y-1 transition-all duration-500 bg-card overflow-hidden relative group">
                  {/* Soft background blue gradient highlight on hover */}
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  
                  <CardContent className="p-7 flex flex-col justify-between h-full relative z-10">
                    <div>
                      {/* Premium strategic indicator / tag */}
                      <div className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase tracking-wider mb-4 inline-block">
                        Insight
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {post.description}
                      </p>
                    </div>
                    
                    {/* Footer metadata & Link */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground/80 font-medium">{post.readTime} Read</span>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-1 group/link"
                      >
                        Read Article 
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
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
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,175,218,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-[2rem] bg-primary border border-white/10 px-6 py-12 md:px-12 md:py-16 shadow-[0_20px_50px_rgba(15,42,68,0.15)] max-w-[42rem] mx-auto">
              {/* Radial card lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
                {/* Visual badge indicator */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4.5 py-1.5 mb-5 text-xs text-accent font-semibold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>Start Growing</span>
                </div>
                
                {/* Headline */}
                <h2 className="mb-4 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Your Next Customer Is Already Searching.
                </h2>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-white/80 mb-6 max-w-xl mx-auto leading-relaxed">
                  Build a stronger digital presence with a website designed to improve visibility, strengthen credibility, and generate qualified inquiries.
                </p>
                
                {/* Buttons with visual hierarchy */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-sm px-8 py-5 h-auto bg-white text-primary hover:bg-white/90 font-bold rounded-full transition-all duration-300 hover:shadow-lg shadow-black/10 hover:translate-y-[-1px]"
                    asChild
                  >
                    <Link to="/contact">Book a Strategy Call</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto text-sm px-8 py-5 h-auto bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 font-bold rounded-full transition-all duration-300 hover:translate-y-[-1px]"
                    asChild
                  >
                    <Link to="/work">See Our Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
