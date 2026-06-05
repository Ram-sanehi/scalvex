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
  Zap, 
  ShieldCheck, 
  Cpu, 
  Image as ImageIcon, 
  Smartphone, 
  Server, 
  Clock, 
  CheckCircle2,
  Activity,
  Gauge
} from 'lucide-react';

const PerformanceImprovements = () => {
  // Why Performance Matters stats
  const performanceStats = [
    {
      stat: '100ms',
      label: 'Delay = 7% Conversion Drop',
      desc: 'Even microsecond delays in load speed cause immediate drops in checkout and signup completions.'
    },
    {
      stat: '32%',
      label: 'Bounce Rate Increase',
      desc: 'The probability of a bounce increases dramatically as page load time goes from 1s to 3s.'
    },
    {
      stat: '93%',
      label: 'Mobile User Expectation',
      desc: 'An overwhelming majority of mobile visitors will abandon a page if it fails to render in 2 seconds.'
    }
  ];

  // Performance Services
  const services = [
    { icon: Gauge, title: 'Core Web Vitals Optimization', desc: 'Tuning LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift) parameters.' },
    { icon: Zap, title: 'Speed Optimization', desc: 'Eliminating blocking stylesheets, deferring non-essential scripts, and splitting bulky bundles.' },
    { icon: Cpu, title: 'Code Refinement', desc: 'Writing clean, semantic React components, removing redundant libraries, and styling with optimized CSS.' },
    { icon: ImageIcon, title: 'Image Optimization', desc: 'Converting media to next-gen formats (WebP, AVIF), applying responsive source tags, and lazy loading.' },
    { icon: Smartphone, title: 'Mobile Performance', desc: 'Adjusting rendering speeds on 4G networks and resolving touch delay viewport issues.' },
    { icon: Server, title: 'Hosting Optimization', desc: 'Configuring edge CDN routes, HTTP caching parameters, and static asset pre-fetching.' },
    { icon: ShieldCheck, title: 'Security Enhancements', desc: 'Setting up security headers, content policies, and protecting against common code exploits.' }
  ];

  // Simulated Dashboard Data
  const dashboardMetrics = [
    { name: 'Lighthouse Performance', value: '99', max: '100', color: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' },
    { name: 'Largest Contentful Paint', value: '0.8s', max: 'Good (< 2.5s)', color: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' },
    { name: 'Cumulative Layout Shift', value: '0.01', max: 'Good (< 0.10)', color: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' },
    { name: 'Total Blocking Time', value: '30ms', max: 'Good (< 200ms)', color: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' }
  ];

  // Benefits
  const benefits = [
    { title: 'Better SEO Rankings', desc: 'Core Web Vitals are a direct Google ranking factor; faster sites receive organic preference.' },
    { title: 'Better User Experience', desc: 'Zero page-flickering and instant responses create a premium, smooth browsing feel.' },
    { title: 'Higher Conversions', desc: 'Frictionless, rapid checkout and form submissions keep buyers from bouncing.' },
    { title: 'Reduced Bounce Rates', desc: 'Attracting and retaining visitors immediately rather than losing them to slow load times.' }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: 'Alpha Investment Management',
      metric: '1.2s Load Time',
      desc: 'Optimized react state mechanisms and simplified assets to ensure instant client portfolio reads.',
      link: '/alphainvestmentcasestudy'
    },
    {
      title: 'Nilkamal Interiors Showcase',
      metric: '98 PageSpeed Score',
      desc: 'Configured responsive image tags and next-gen media formats to showcase high-res designs without weight.',
      link: '/nilkamalinteriorscasestudy'
    }
  ];

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
              <span>Speed & Asset Optimization Systems</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Speed, Stability, And <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Performance Matter</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              A faster website creates better user experiences, stronger rankings, and higher conversions.
            </p>
            
            <div className="flex justify-center w-full sm:w-auto">
              <Button size="lg" className="px-8 py-6 h-auto text-base group shadow-md shadow-accent/10 hover:translate-y-[-2px] transition-transform duration-200" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get A Performance Audit <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Why Performance Matters */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Statistics
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Why Performance Matters
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Slow websites act as silent leaks. Speed issues frustrate users, reduce Google ranking authority, and increase bounce metrics.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {performanceStats.map((item, index) => (
              <FadeInSection key={index} delay={index * 80} className="h-full">
                <Card className="h-full border border-border/40 hover:border-accent/40 shadow-sm hover:shadow-[0_8px_30px_rgba(59,175,218,0.05)] hover:-translate-y-1 transition-all duration-500 bg-card/60 backdrop-blur-sm overflow-hidden relative group">
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <CardContent className="p-8 relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-4xl sm:text-5xl font-extrabold text-accent mb-4 tracking-tight">
                        {item.stat}
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
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
                Core Speed Services
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Targeted technical enhancements designed to strip bloated scripts and speed up page rendering.
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

      {/* Performance Dashboard Mockup */}
      <section className="section-padding bg-card relative overflow-hidden border-y border-border/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Vitals Dashboard
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Core Web Vitals Dashboard
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                A simulated preview of our optimized target performance metrics.
              </p>
            </FadeInSection>
          </div>

          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="border border-border/40 bg-card/60 backdrop-blur-md p-8 rounded-3xl relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent)] rounded-tr-3xl" />
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-border/40 pb-6">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Performance Showcase</span>
                    <h4 className="text-2xl font-bold text-foreground mt-1">Lighthouse Report Summary</h4>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Activity className="h-4 w-4 animate-pulse" /> Live Stats
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dashboardMetrics.map((dm, idx) => (
                    <div key={idx} className={`border p-6 rounded-2xl flex flex-col justify-between ${dm.color}`}>
                      <div>
                        <span className="text-xs text-muted-foreground font-medium block mb-2">{dm.name}</span>
                        <span className="text-3xl font-extrabold tracking-tight text-foreground">{dm.value}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground/80 mt-4 block border-t border-border/30 pt-2">{dm.max}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-medium">
                  <span>Tested with simulated 4G mobile profiles (Lighthouse v10)</span>
                  <span className="text-emerald-500 font-bold">100% Mobile Compliance</span>
                </div>
              </div>
            </FadeInSection>
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
                Performance Business Value
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Removing page latency compounds user retention, search visibility, and conversion parameters.
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

          {/* Featured Case Studies */}
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h3 className="text-xl font-bold mb-6 text-center">Featured Speed Rebuilds</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((cs, idx) => (
                  <Card key={idx} className="p-6 border border-border bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase">Case Study</span>
                        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">{cs.metric}</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">{cs.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-6">{cs.desc}</p>
                    </div>
                    <Link to={cs.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                      Read Study Details <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Card>
                ))}
              </div>
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
              <h2 className="text-3xl font-bold mt-4">Performance Improvements FAQ</h2>
            </FadeInSection>
          </div>
          
          <FadeInSection>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  What are Core Web Vitals and why do they affect rankings?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  Core Web Vitals are three speed and visual stability metrics used by Google as ranking signals: LCP (how fast elements load), FID (how fast pages respond to user clicks), and CLS (how stable elements remain during render).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  How do you optimize image delivery?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  We compress image assets to next-gen formats like WebP or AVIF, write responsive source structures matching visitor screen dimensions, and defer image downloads (lazy loading) until they enter the viewport.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  Does server hosting location affect load speeds?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  Absolutely. Standard hosts serve files from one central data building, delaying downloads for distant users. We host pages on edge CDNs (Vercel, Netlify, Cloudflare), caching copies across global servers so users load pages from their closest node in milliseconds.
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
              Ready to eliminate website speed leaks?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Book a direct strategy call with our founder to review your Lighthouse metrics and map a technical speed plan.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="px-8 py-6 h-auto text-base hover:bg-white hover:text-primary rounded-full transition-all duration-300 font-bold shadow-lg" asChild>
                <Link to="/contact">Get A Performance Audit</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <RelatedServices />
    </Layout>
  );
};

export default PerformanceImprovements;
