import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import RelatedServices from '@/components/RelatedServices';
import StickyConsultButton from '@/components/StickyConsultButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  ArrowRight, 
  Search, 
  MapPin, 
  Compass, 
  TrendingUp, 
  LineChart, 
  ShieldAlert,
  FolderKey,
  Globe,
  Milestone,
  CheckCircle2
} from 'lucide-react';

const VisibilitySeo = () => {
  // SEO Foundations
  const seoFoundation = [
    {
      title: 'Search Intent Mapping',
      desc: 'Targeting transactional queries that buyers type when they are ready to purchase, instead of bloated informational traffic.'
    },
    {
      title: 'Technical SEO Audit',
      desc: 'Cleaning up internal link paths, styling canonicals, and mapping structured JSON-LD schemas so bots parse files cleanly.'
    },
    {
      title: 'On-Page Optimization',
      desc: 'Fine-tuning page headers, title tags, body keywords, and image alt text around core commercial topics.'
    },
    {
      title: 'Content Relevance',
      desc: 'Publishing depth-focused, authoritative articles and service pages that satisfy Google’s E-E-A-T criteria.'
    },
    {
      title: 'User Experience (UX)',
      desc: 'Ensuring your site loads instantly, responds well to clicks, and reads easily on mobile devices.'
    }
  ];

  // SEO Services
  const services = [
    { icon: Globe, title: 'Technical SEO', desc: 'Fixing crawl budget errors, setting up site redirects, and resolving core indexing problems.' },
    { icon: MapPin, title: 'Local SEO', desc: 'Optimizing location pages, citation building, and region-targeted service listings.' },
    { icon: FolderKey, title: 'Keyword Research', desc: 'Mapping search keywords based on commercial intent, difficulty ratios, and volume.' },
    { icon: Compass, title: 'Competitor Analysis', desc: 'Deciphering competitor backlink structures, content catalogs, and keyword gaps.' },
    { icon: MapPin, title: 'Google Business Profile', desc: 'Managing profiles, setting up local category targets, and building review templates.' },
    { icon: LineChart, title: 'Content Strategy', desc: 'Formulating long-term content plans to establish authority across your industry.' },
    { icon: Search, title: 'SEO Audits', desc: 'Detailed codebase and search analysis identifying crawl blocks and positioning gaps.' }
  ];

  // Roadmap steps
  const roadmap = [
    {
      period: 'Month 1',
      title: 'Audit & Strategy',
      desc: 'Complete crawl inspections, resolve critical indexing bugs, map commercial keywords, and profile key search competitors.'
    },
    {
      period: 'Month 2',
      title: 'Optimization',
      desc: 'Rewrite meta titles, fine-tune internal links, adjust on-page layouts, and optimize Google Business profiles.'
    },
    {
      period: 'Month 3',
      title: 'Content & Authority Building',
      desc: 'Publish target service pages, begin regional citation building, and launch authoritative blog resource assets.'
    },
    {
      period: 'Month 4+',
      title: 'Growth & Monitoring',
      desc: 'Track keyword position shifts, optimize page structures based on click data, and expand to secondary queries.'
    }
  ];

  // Benefits
  const benefits = [
    { title: 'Increased Organic Traffic', desc: 'Sustainable, high-intent search clicks that bypass high paid advertising costs.' },
    { title: 'Better Rankings', desc: 'Placement on page one of Google for high-value transactional queries.' },
    { title: 'More Qualified Leads', desc: 'Attracting visitors who are actively searching for your services.' },
    { title: 'Stronger Online Presence', desc: 'Establishing industry authority and trust before the first phone call.' }
  ];

  // Case Study
  const caseStudy = {
    title: 'Archly Studios Portfolio Rebuild',
    metric: 'Page 1 Local Rankings',
    desc: 'Structured local target keywords and portfolio schemas to place this niche architecture studio on page one for target regional projects.',
    link: '/archlycasestudy'
  };

  return (
    <Layout>
      <StickyConsultButton />
      
      {/* Hero Section */}
      <section className="relative section-padding bg-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.08),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 bg-primary/[0.03] border border-primary/10 rounded-full px-4.5 py-1.5 mb-6 text-xs sm:text-sm text-primary font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Search Engine Optimization & Authority Systems</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Get Found By The <br />
              People <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Searching For You</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Strategic SEO and visibility solutions designed for sustainable long-term growth.
            </p>
            
            <div className="flex justify-center w-full sm:w-auto">
              <Button size="lg" className="px-8 py-6 h-auto text-base group shadow-md shadow-accent/10 hover:translate-y-[-2px] transition-transform duration-200" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Book An SEO Strategy Session <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SEO Foundation */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Foundations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Our SEO Foundation Framework
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                SEO is built directly into our codebase. We align meta tag layouts, page structuring, and customer journeys before deployment.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoFoundation.map((foundation, index) => (
              <FadeInSection key={index} delay={index * 80} className="h-full">
                <Card className="h-full border border-border/40 hover:border-accent/40 shadow-sm hover:shadow-[0_8px_30px_rgba(59,175,218,0.05)] hover:-translate-y-1 transition-all duration-500 bg-card/60 backdrop-blur-sm overflow-hidden relative group">
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <CardContent className="p-7 relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-sm font-bold text-accent mb-3 uppercase tracking-wider">0{index + 1}</div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                        {foundation.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {foundation.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services breakdown */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,175,218,0.03),transparent_40%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Core SEO Focus Areas
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                From high-intent competitor audits to regional map rankings, we handle all technical search parameters.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="p-8 rounded-2xl border border-border/40 hover:border-accent/40 bg-card hover:shadow-[0_8px_30px_rgba(59,175,218,0.04)] hover:-translate-y-1 transition-all duration-500 relative group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(59,175,218,0.05),transparent)] rounded-tr-2xl" />
                    <div className="w-10 h-10 rounded-xl bg-accent/[0.03] border border-accent/10 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Growth Roadmap */}
      <section className="section-padding bg-card relative overflow-hidden border-y border-border/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Strategy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                SEO Growth Roadmap
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                A structured, four-month progression timeline designed to improve indexing parameters and ranking authority.
              </p>
            </FadeInSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {roadmap.map((step, index) => (
              <FadeInSection key={index} delay={index * 80} className="h-full">
                <div className="relative p-6 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm hover:border-accent/30 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between group">
                  <div>
                    <span className="text-xs font-bold text-accent bg-accent/5 border border-accent/10 px-2 py-0.5 rounded-full mb-4 inline-block">
                      {step.period}
                    </span>
                    <h3 className="text-base font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Sustainable Search Value
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Organic search compounds over time, building lasting visibility assets at zero incremental ad spend.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <FadeInSection key={index} delay={index * 80}>
                <div className="p-7 rounded-2xl border border-border/40 bg-card hover:border-accent/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Featured Case Study */}
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <Card className="p-6 md:p-8 border border-border bg-card hover:border-primary/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full uppercase">Visibility Case Study</span>
                    <h4 className="text-xl font-bold mt-2 text-foreground">{caseStudy.title}</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">{caseStudy.metric}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  {caseStudy.desc}
                </p>
                <Link to={caseStudy.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  Read Case Study details <ArrowRight className="h-3 w-3" />
                </Link>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="section-padding bg-card border-t border-border/40 relative overflow-hidden">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                FAQ
              </span>
              <h2 className="text-3xl font-bold mt-4">Visibility & SEO FAQ</h2>
            </FadeInSection>
          </div>
          
          <FadeInSection>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  What is search intent and why does it matter?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  Search intent is the primary motive a user has when searching. Instead of targeting informational queries (e.g., "what is responsive design"), we focus search strategies on commercial queries (e.g., "hire web design agency in Coimbatore") to ensure you receive actual purchase inquiries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  How do you handle local SEO for service practices?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  We write optimized location target pages, build consistent NAP citations, construct schema map targets, and build template structures to naturally grow Google Business profile reviews.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  When will my business start seeing page one rankings?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  SEO is a cumulative index channel. While resolving technical search bugs yields rank shifts in weeks, targeted content authority campaigns generally require 3 to 6 months of steady execution to claim page-one positions for difficult commercial keywords.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeInSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,175,218,0.15),transparent_60%)]" />
        <div className="container-custom max-w-3xl mx-auto space-y-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to claim page-one visibility?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Book a direct strategy call with our founder to review your market positioning and keyword opportunities.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="px-8 py-6 h-auto text-base hover:bg-white hover:text-primary rounded-full transition-all duration-300 font-bold shadow-lg" asChild>
                <Link to="/contact">Book SEO Strategy Session</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <RelatedServices />
    </Layout>
  );
};

export default VisibilitySeo;
