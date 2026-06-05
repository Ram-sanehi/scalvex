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
  Sparkles, 
  ArrowRight, 
  Users, 
  Target, 
  LayoutTemplate, 
  ShieldCheck, 
  Smartphone, 
  LineChart,
  Layers,
  Laptop,
  ShoppingBag,
  TrendingUp,
  Workflow
} from 'lucide-react';

const GrowthWebsites = () => {
  // Value Prop points
  const differences = [
    {
      icon: Target,
      title: 'Conversion-Focused Design',
      desc: 'Visual hierarchy engineered to guide user attention directly to value propositions and primary actions.'
    },
    {
      icon: Users,
      title: 'User Psychology',
      desc: 'Mapping cognitive load and intent patterns to structure content so that it answers questions before they are asked.'
    },
    {
      icon: Workflow,
      title: 'Lead Generation Systems',
      desc: 'Seamlessly integrated scheduling, multi-step forms, and lead captures that work as organic extensions of the code.'
    },
    {
      icon: ShieldCheck,
      title: 'Trust-Building Elements',
      desc: 'Strategic placement of proof indicators, micro-testimonials, and authority elements to assure high-ticket buyers.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Architecture',
      desc: 'Responsive layouts that prioritize touch interaction speed and reading comfort on mobile screens.'
    },
    {
      icon: LineChart,
      title: 'Analytics Integration',
      desc: 'Full configuration of event tracking, conversion loops, and user heatmaps to inform post-launch strategies.'
    }
  ];

  // Core Capabilities
  const capabilities = [
    {
      title: 'Business Websites',
      desc: 'Corporate and service hub websites that position your firm as an industry leader and capture high-value contracts.'
    },
    {
      title: 'Service-Based Websites',
      desc: 'Highly optimized scheduling engines and service listings built for consultants, agencies, and medical practices.'
    },
    {
      title: 'Landing Pages',
      desc: 'Single-goal landing pages with high conversion rates, built to support active paid search or social campaigns.'
    },
    {
      title: 'E-commerce Experiences',
      desc: 'Lightning-fast shopping portals with integrated payment gates, fast checkouts, and clean product collections.'
    },
    {
      title: 'Lead Generation Funnels',
      desc: 'Multi-stage question forms and value-offer assets designed to segment visitors and collect rich lead information.'
    },
    {
      title: 'Custom Web Applications',
      desc: 'Interactive platforms, portals, and dashboards built in React and Next.js, customized to your business logic.'
    }
  ];

  // Process Steps
  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding your audience, positioning, and commercial goals.' },
    { step: '02', title: 'Strategy', desc: 'Planning layout structures, user pathways, and copy direction.' },
    { step: '03', title: 'Design', desc: 'Iterating on bespoke visual interfaces and typography hierarchies.' },
    { step: '04', title: 'Development', desc: 'Writing clean, fast, and responsive codebases without bloat.' },
    { step: '05', title: 'Launch', desc: 'Rigorous testing, setting up tracking analytics, and going live.' },
    { step: '06', title: 'Optimization', desc: 'Analyzing interaction data and making adjustments for growth.' }
  ];

  // Impact Metrics
  const metrics = [
    { value: '3.2x', label: 'Average Lead Increase', desc: 'Compared to legacy platforms within 3 months.' },
    { value: '+45%', label: 'Higher Conversion Rates', desc: 'Optimized button pathways and value clarity.' },
    { value: '-60%', label: 'Lower Bounce Rates', desc: 'Instantly engaging heroes and rapid load times.' },
    { value: '4m 12s', label: 'Better Engagement Time', desc: 'Sustained user interactions and clean layout flows.' }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: 'Alpha Investment Management',
      metric: '1.2s Load Speed',
      desc: 'Rebuilt an outdated investor hub into a high-trust digital portal, driving qualified commercial inquiries.',
      link: '/alphainvestmentcasestudy'
    },
    {
      title: 'AgriFresh E-commerce',
      metric: '+85% Inquiries',
      desc: 'Designed a fast, responsive design showcasing products cleanly, resulting in immediate inquiry gains.',
      link: '/agrifreshcasestudy'
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
              <span>Strategic Web Design & Engineering</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Websites Built To <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Drive Growth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We create strategic digital experiences that attract attention, build trust, and convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Button size="lg" className="px-8 py-6 h-auto text-base group shadow-md shadow-accent/10 hover:translate-y-[-2px] transition-transform duration-200" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Schedule Consultation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 h-auto text-base hover:translate-y-[-2px] transition-transform duration-200" asChild>
                <Link to="/process">View Our Process</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What Makes A Growth Website Different */}
      <section className="section-padding bg-card relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Value Proposition
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                What Makes A Growth Website Different
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Standard templates share facts. Growth websites are engineered to guide visitor psychology, build value relevance, and prompt structured conversions.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((diff, index) => {
              const Icon = diff.icon;
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
                          {diff.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {diff.desc}
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

      {/* Core Capabilities */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,175,218,0.03),transparent_40%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Core Web Solutions
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Bespoke code architectures built around your business goals, offering clean layouts and sub-second rendering.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="p-8 rounded-2xl border border-border/40 hover:border-accent/40 bg-card hover:shadow-[0_8px_30px_rgba(59,175,218,0.04)] hover:-translate-y-1 transition-all duration-500 relative group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(59,175,218,0.05),transparent)] rounded-tr-2xl" />
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-card relative overflow-hidden border-y border-border/40">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Our Development Process
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                A highly collaborative, structured blueprint that takes your project from strategy draft to technical launch.
              </p>
            </FadeInSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {processSteps.map((step, index) => (
              <FadeInSection key={index} delay={index * 80} className="h-full">
                <div className="relative p-6 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm hover:border-accent/30 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between group">
                  <div>
                    <span className="text-xs font-bold text-accent bg-accent/5 border border-accent/10 px-2 py-0.5 rounded-full mb-4 inline-block">
                      {step.step}
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

      {/* Impact Metrics & Dashboard */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeInSection>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
                Metrics
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
                Real Outcomes, Measured
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Web optimization and strategic structure yield immediate, audit-backed gains in business performance.
              </p>
            </FadeInSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-center mb-16">
            {metrics.map((m, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="p-7 bg-card border border-border/40 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-accent/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold text-primary tracking-tight mb-2">
                      {m.value}
                    </div>
                    <div className="text-sm font-bold text-foreground mb-2">
                      {m.label}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2 border-t border-border/40 pt-3">
                    {m.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Selected Case Studies */}
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h3 className="text-xl font-bold mb-6 text-center">Featured Growth Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((cs, idx) => (
                  <Card key={idx} className="p-6 border border-border bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full uppercase tracking-wider">Case Study</span>
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
              <h2 className="text-3xl font-bold mt-4">Growth Websites FAQ</h2>
            </FadeInSection>
          </div>
          
          <FadeInSection>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  What makes a Growth Website different from a template?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  A typical templated website places placeholder content into preset layouts. A Growth Website starts with strategic customer journey blueprints and user psychology mapping, ensuring copy hierarchy and technical components align to turn visitors into leads.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  Do you build with bloated page builders like Elementor?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  No. We write custom-coded layouts in clean React and Tailwind, deploying files directly onto rapid edge CDNs. This guarantees page load times under 1.5 seconds, strengthens organic Google rankings, and removes database security risks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/40 rounded-2xl bg-card px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline">
                  What kind of lead capture systems do you integrate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2">
                  We integrate native forms connecting directly to CRMs (like HubSpot, Salesforce, or custom webhooks), booking schedulers (like Calendly), automated quote estimate calculators, and newsletter waitlist tools.
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
              Ready to turn your website into a growth engine?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Book a direct strategy call with our founder to review your goals and analyze conversion roadblocks.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="px-8 py-6 h-auto text-base hover:bg-white hover:text-primary rounded-full transition-all duration-300 font-bold shadow-lg" asChild>
                <Link to="/contact">Book Strategy Call</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <RelatedServices />
    </Layout>
  );
};

export default GrowthWebsites;
