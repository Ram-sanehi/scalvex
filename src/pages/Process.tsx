import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { 
  Search, 
  Layers, 
  Code, 
  Settings, 
  Rocket, 
  Activity 
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Growth Strategy',
      timeframe: '3–5 Days',
      description: 'Before building anything, we deeply understand your business, audience, positioning, and growth goals. This helps us create a website system tailored for visibility, trust, and lead generation.',
      activities: [
        'Business and growth analysis',
        'Target audience research',
        'Competitor and market research',
        'Website audit and opportunity analysis',
        'SEO and visibility assessment',
        'Growth-focused project roadmap'
      ],
      clientResponsibility: [
        'Business goals and challenges',
        'Existing branding or website assets',
        'Information about your audience and services',
        'Availability for strategy discussions'
      ],
    },
    {
      number: '02',
      icon: Layers,
      title: 'Structure, Messaging & Experience',
      timeframe: '4–7 Days',
      description: 'We plan the website experience strategically — focusing on clarity, trust, conversions, and search visibility before design begins.',
      activities: [
        'Website structure planning',
        'Conversion-focused content strategy',
        'SEO-friendly page architecture',
        'User journey optimization',
        'CTA and lead flow planning',
        'Wireframes and experience mapping'
      ],
      clientResponsibility: [
        'Service details',
        'Existing content or references',
        'Feedback on direction and messaging'
      ],
    },
    {
      number: '03',
      icon: Code,
      title: 'Design & Development',
      timeframe: '2–4 Weeks',
      description: 'We design and build modern, high-performance websites engineered for responsiveness, speed, credibility, and long-term scalability.',
      activities: [
        'Premium UI/UX design',
        'Responsive development',
        'SEO-first implementation',
        'Performance optimization',
        'Mobile experience optimization',
        'Technical foundation setup',
        'Modern animations and interactions'
      ],
      clientResponsibility: [
        'Design feedback',
        'Branding assets',
        'Content approvals during progress reviews'
      ],
    },
    {
      number: '04',
      icon: Settings,
      title: 'Optimization & Visibility Setup',
      timeframe: '1–2 Weeks',
      description: 'Once the website is built, we optimize every layer for discoverability, performance, and conversion — ensuring your business is ready to grow online.',
      activities: [
        'Technical SEO implementation',
        'Meta data optimization',
        'Structured data & schema setup',
        'Speed and Core Web Vitals optimization',
        'Google Business integration',
        'Analytics and tracking setup',
        'Conversion and UX refinement'
      ],
      clientResponsibility: [
        'Keyword preferences or approvals',
        'Business information',
        'Access to analytics or existing platforms if available'
      ],
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Testing & Launch',
      timeframe: '3–5 Days',
      description: 'Before launch, we carefully test and refine the entire experience to ensure everything performs smoothly across devices, browsers, and user journeys.',
      activities: [
        'Cross-browser testing',
        'Mobile responsiveness checks',
        'Performance audits',
        'SEO validation',
        'Final optimization passes',
        'Secure deployment and launch'
      ],
      clientResponsibility: [
        'Final review and approval',
        'Domain or hosting access if required'
      ],
    },
    {
      number: '06',
      icon: Activity,
      title: 'Ongoing Growth & Support',
      timeframe: 'Optional',
      description: 'After launch, we continue helping businesses improve visibility, performance, and conversions through ongoing optimization and strategic support.',
      activities: [
        'Website maintenance',
        'Performance monitoring',
        'SEO growth improvements',
        'Content updates',
        'Conversion optimization',
        'Technical improvements',
        'Ongoing support and recommendations'
      ],
      clientResponsibility: [
        'Business updates',
        'New content or service information',
        'Feedback and collaboration for future improvements'
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-accent font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>How We Deliver Growth</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Our Process
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A strategic, collaborative process focused on building digital systems that help businesses grow online. From discovery to launch, every step is designed around visibility, credibility, performance, and conversion.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px border-l border-dashed border-border/80 hidden md:block" />

            <div className="space-y-20">
              {steps.map((step, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                    
                    {/* Icon */}
                    <div className="flex-shrink-0 relative z-10 md:w-16 md:h-16 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center text-accent shadow-[0_4px_20px_rgba(59,175,218,0.15)] group-hover:scale-105 transition-transform duration-300">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow pb-12 border-b border-border/30 last:border-b-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-flex items-center justify-center text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
                          Step {step.number}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground/80 bg-muted/65 border border-border/30 px-2.5 py-1 rounded-md">
                          {step.timeframe}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">{step.title}</h2>
                      <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">{step.description}</p>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-background/40 hover:bg-background/60 p-6 rounded-2xl border border-border/40 hover:border-accent/30 transition-all duration-300 relative group/card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)]">
                          <div className="absolute -inset-px bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            What We Do
                          </h4>
                          <ul className="space-y-2.5 list-none relative z-10">
                            {step.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-1.5" />
                                <span className="text-xs md:text-sm text-muted-foreground/95 leading-relaxed">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-background/40 hover:bg-background/60 p-6 rounded-2xl border border-border/40 hover:border-accent/30 transition-all duration-300 relative group/card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)]">
                          <div className="absolute -inset-px bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                            What You Provide
                          </h4>
                          <ul className="space-y-2.5 list-none relative z-10">
                            {step.clientResponsibility.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0 mt-1.5" />
                                <span className="text-xs md:text-sm text-muted-foreground/95 leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
                  Ready to Build a Website That Actually Helps Your Business Grow?
                </h2>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-white/80 mb-6 max-w-xl mx-auto leading-relaxed">
                  Let's create a digital presence built for visibility, trust, performance, and long-term growth.
                </p>
                
                {/* Buttons with visual hierarchy */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-sm px-8 py-5 h-auto bg-white text-primary hover:bg-white/90 font-bold rounded-full transition-all duration-300 hover:shadow-lg shadow-black/10 hover:translate-y-[-1px]"
                    asChild
                  >
                    <Link to="/contact">Book a Free Strategy Call</Link>
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

export default Process;
