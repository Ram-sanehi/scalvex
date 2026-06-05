import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import RelatedServices from '@/components/RelatedServices';
import StickyConsultButton from '@/components/StickyConsultButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  ArrowRight, 
  Search, 
  Layers, 
  Map, 
  MousePointerClick, 
  Smartphone, 
  Code,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Gauge
} from 'lucide-react';

const WebsiteOptimization = () => {
  const [activeComparison, setActiveComparison] = useState<'speed' | 'ux'>('speed');

  // Audit categories
  const auditFramework = [
    {
      icon: Search,
      title: 'User Experience',
      desc: 'Assessing ease of use, visual hierarchy, clarity of messaging, and click layouts.'
    },
    {
      icon: Sparkles,
      title: 'Design Quality',
      desc: 'Evaluating layout polished look, typography contrast, and credibility signifiers.'
    },
    {
      icon: Map,
      title: 'Navigation',
      desc: 'Checking menu architectures, path shortcuts, and search accessibility.'
    },
    {
      icon: MousePointerClick,
      title: 'Conversion Paths',
      desc: 'Inspecting form fields, CTA visibility, scheduling integrations, and checkout funnels.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Experience',
      desc: 'Verifying touch elements, layout adjustments, and rendering layouts on smaller devices.'
    },
    {
      icon: Code,
      title: 'Technical Structure',
      desc: 'Reviewing meta tagging, DOM node sizing, code bloat, and script delays.'
    }
  ];

  // Optimization Services
  const optimizationServices = [
    {
      title: 'Landing Page Optimization',
      desc: 'Tuning single-goal target pages to align with specific ad campaigns, boosting ad spend conversion.'
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'Deploying structured experiments and analytics reviews to extract higher leads from existing traffic.'
    },
    {
      title: 'UX Improvements',
      desc: 'Cleaning up layout spacing, fixing readability, and styling buttons to guide visitor movements.'
    },
    {
      title: 'Mobile Enhancements',
      desc: 'Resolving desktop-first overflow issues, touch-target gaps, and mobile reading bugs.'
    },
    {
      title: 'Funnel Optimization',
      desc: 'Trimming form questions, simplifying checkout steps, and streamlining inquiry routes.'
    },
    {
      title: 'Customer Journey Improvements',
      desc: 'Re-ordering page sections so content flows in alignment with customer purchase decision paths.'
    }
  ];

  // Results points
  const results = [
    {
      title: 'Faster Decision-Making',
      desc: 'Clean, structured value presentations help prospects evaluate and choose your service quickly.'
    },
    {
      title: 'Better User Retention',
      desc: 'Sub-second speeds and intuitive reading flows keep users browsing longer without frustration.'
    },
    {
      title: 'Increased Inquiries',
      desc: 'Strategic CTA placements and frictionless forms yield immediate increases in contact submissions.'
    },
    {
      title: 'Improved Customer Experience',
      desc: 'A professional web experience establishes authority, building confidence before the first sales call.'
    }
  ];

  // Case study
  const caseStudy = {
    title: 'Nilkamal Interiors Rebuild',
    metric: '98 PageSpeed Score',
    desc: 'Optimized large turnkey portfolios with fast image delivery and modern typography, driving higher commercial interest.',
    link: '/nilkamalinteriorscasestudy'
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
              <span>Conversion & User Experience Optimization</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Unlock The Full Potential <br />
              Of Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Website</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Small improvements can create significant increases in conversions, engagement, and revenue.
            </p>
            
            <div className="flex justify-center w-full sm:w-auto">
              <Button size="lg" className="px-8 py-6 h-auto text-base group shadow-md shadow-accent/10 hover:translate-y-[-2px] transition-transform duration-200" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Request Optimization Audit <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Website Audit Framework */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Audit Checklist
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Our Optimization Framework
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                We analyze your website across six critical dimensions to identify conversion leaks and technical performance blocks.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditFramework.map((framework, index) => {
              const Icon = framework.icon;
              return (
                <FadeInSection key={index} delay={index * 80} className="h-full">
                  <Card className="h-full border border-border/40 hover:border-accent/40 shadow-sm hover:shadow-[0_8px_30px_rgba(59,175,218,0.05)] hover:-translate-y-1 transition-all duration-500 bg-card/60 backdrop-blur-sm overflow-hidden relative group">
                    <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <CardContent className="p-7 relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="w-11 h-11 rounded-xl bg-primary/[0.03] border border-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-105 group-hover:border-accent/20 group-hover:bg-accent/[0.02]">
                          <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-500" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                          {framework.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {framework.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optimization Services */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,175,218,0.03),transparent_40%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Targeted Optimization Services
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Actionable optimization steps to refine user layouts, clean up interfaces, and reduce checkout drop-offs.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationServices.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="p-8 rounded-2xl border border-border/40 hover:border-accent/40 bg-card hover:shadow-[0_8px_30px_rgba(59,175,218,0.04)] hover:-translate-y-1 transition-all duration-500 relative group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(59,175,218,0.05),transparent)] rounded-tr-2xl" />
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="section-padding bg-card relative overflow-hidden border-y border-border/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Before & After Optimization
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Compare typical page builder issues with custom React clean-code engineering.
              </p>
            </FadeInSection>
          </div>

          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <Tabs defaultValue="speed" className="w-full flex flex-col items-center">
                <TabsList className="grid grid-cols-2 mb-10 p-1 bg-muted/40 border border-border/30 rounded-full max-w-md w-full">
                  <TabsTrigger value="speed" className="rounded-full py-2 transition-all font-semibold">
                    Technical Performance
                  </TabsTrigger>
                  <TabsTrigger value="ux" className="rounded-full py-2 transition-all font-semibold">
                    User Interface (UI/UX)
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="speed" className="w-full">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Before */}
                    <div className="border border-red-500/20 bg-red-500/[0.02] p-8 rounded-3xl relative">
                      <div className="absolute top-4 right-4 text-xs font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase">
                        Legacy Site
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4">Page Builder Bloat</h4>
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center border-b border-border/40 pb-2">
                          <span className="text-sm text-muted-foreground">Mobile Speed Score</span>
                          <span className="text-sm font-bold text-red-500">32 / 100</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/40 pb-2">
                          <span className="text-sm text-muted-foreground">Largest Contentful Paint</span>
                          <span className="text-sm font-bold text-red-500">4.8 seconds</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/40 pb-2">
                          <span className="text-sm text-muted-foreground">Total Blocking Time</span>
                          <span className="text-sm font-bold text-red-500">820 ms</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-sm text-muted-foreground">Cumulative Layout Shift</span>
                          <span className="text-sm font-bold text-red-500">0.24 (High shift)</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Excessive plugin wrappers, unused JavaScript scripts, unoptimized project images, and layout shift bottlenecks during resource downloads.
                      </p>
                    </div>

                    {/* After */}
                    <div className="border border-emerald-500/20 bg-emerald-500/[0.02] p-8 rounded-3xl relative">
                      <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase">
                        Optimized Site
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4">React Edge System</h4>
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center border-b border-border/40 pb-2">
                          <span className="text-sm text-muted-foreground">Mobile Speed Score</span>
                          <span className="text-sm font-bold text-emerald-500">98 / 100</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/40 pb-2">
                          <span className="text-sm text-muted-foreground">Largest Contentful Paint</span>
                          <span className="text-sm font-bold text-emerald-500">0.9 seconds</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/40 pb-2">
                          <span className="text-sm text-muted-foreground">Total Blocking Time</span>
                          <span className="text-sm font-bold text-emerald-500">40 ms</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-sm text-muted-foreground">Cumulative Layout Shift</span>
                          <span className="text-sm font-bold text-emerald-500">0.01 (Zero shift)</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Clean custom-coded components, responsive image delivery, asset-splitting, and hosting on lightning-fast edge servers.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ux" className="w-full">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Before */}
                    <div className="border border-red-500/20 bg-red-500/[0.02] p-8 rounded-3xl relative">
                      <div className="absolute top-4 right-4 text-xs font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase">
                        Legacy Layout
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4">Confusing Flow</h4>
                      <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
                          <span>Weak headings and generic value statements that fail to hook interest.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
                          <span>Distracting stock photography that dilutes local firm authority.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
                          <span>Overwhelming options and buttons competing for visitor actions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
                          <span>Complex, long forms causing users to bounce.</span>
                        </li>
                      </ul>
                    </div>

                    {/* After */}
                    <div className="border border-emerald-500/20 bg-emerald-500/[0.02] p-8 rounded-3xl relative">
                      <div className="absolute top-4 right-4 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase">
                        Optimized Layout
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-4">Strategic Funnel</h4>
                      <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                          <span>Clear value statements focusing on the prospect's goals.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                          <span>Real photography and case study details that build authority.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                          <span>Single, distinct, persistent call-to-actions placed across layouts.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                          <span>Simplified forms and Calendly widgets for direct scheduling.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Optimization Business Impact
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Tuning your website structures yields immediate, compounding returns in customer trust and lead volume.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <FadeInSection key={index} delay={index * 80}>
                <div className="p-7 rounded-2xl border border-border/40 bg-card hover:border-accent/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{result.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{result.desc}</p>
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
                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full uppercase">Optimization Case Study</span>
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
              <h2 className="text-3xl font-bold mt-4">Website Optimization FAQ</h2>
            </FadeInSection>
          </div>
          
          <FadeInSection>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  What does a website optimization audit cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  Our audits cover design layout, page loading speeds across devices, conversion blocker assessments, accessibility compliance, script delays, DOM node size problems, and technical SEO structure details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  Do I need to rebuild my entire site to optimize it?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  Not always. If you have a clean legacy React platform, we can fix file-splitting configurations, optimize media assets, and adjust script orders. However, if your website is locked in page builder bloat (like Elementor or Divi), a modern migration to a static react generator is usually the most cost-efficient path.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  How long does it take to see results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  Technical speed improvements and script adjustments show up instantly in Lighthouse audits. CRO and form adjustments typically show measurable increases in contact submissions and lowered bounce rates within 2 to 4 weeks.
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
              Ready to optimize your website for maximum conversions?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Book a direct strategy call with our founder to review your analytics and receive a detailed conversion audit.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="px-8 py-6 h-auto text-base hover:bg-white hover:text-primary rounded-full transition-all duration-300 font-bold shadow-lg" asChild>
                <Link to="/contact">Request Optimization Audit</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <RelatedServices />
    </Layout>
  );
};

export default WebsiteOptimization;
