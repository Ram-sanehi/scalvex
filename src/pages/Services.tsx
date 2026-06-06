import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { Check, Shield, Search, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicePillars = [
    {
      title: 'Growth Website Systems',
      subtitle: 'Complete digital platforms engineered for conversion & visibility',
      icon: Sparkles,
      desc: 'We build custom, high-performance websites where SEO design and conversion psychology are integrated from the very first line of code.',
      features: [
        { title: 'SEO-First Websites', desc: 'Built with clean semantic markup and structured microdata schemas for seamless search crawling.' },
        { title: 'Conversion-Focused Layouts', desc: 'Sleek, high-converting interfaces optimized to turn passive readers into qualified client inquiries.' },
        { title: 'Business Credibility', desc: 'Premium custom design and typography that immediately establishes industry leadership.' },
        { title: 'Responsive Design', desc: 'Fast, fluid layouts optimized for flawless mobile, tablet, and desktop viewing.' },
        { title: 'Scalable Architecture', desc: 'Clean, modular React-based frameworks ready for integrations, databases, and customer dashboards.' }
      ]
    },
    {
      title: 'Website Optimization & Growth',
      subtitle: 'Audit, tune, and expand your existing platform performance',
      icon: Search,
      desc: 'We audit and re-engineer existing web assets to plug conversion leaks, optimize user experiences, and maximize search rankings.',
      features: [
        { title: 'SEO Improvements', desc: 'Rigorous keyword intent mapping, metadata tuning, and deep technical site crawling.' },
        { title: 'Content Structure Optimization', desc: 'Structuring your services and pages so Google understands your relevance and authority.' },
        { title: 'Speed Optimization', desc: 'Comprehensive assets optimization to meet Google’s strict Core Web Vitals standard.' },
        { title: 'Conversion Optimization', desc: 'A/B testing, CTA optimization, and form design refinement to increase conversion rates.' },
        { title: 'UX Improvements', desc: 'Reducing interface friction to make navigation simple and intuitive on all devices.' },
        { title: 'Technical Performance', desc: 'Resolving indexation issues, resolving broken routes, and deploying CDN caching.' }
      ]
    },
    {
      title: 'Visibility & Performance',
      subtitle: 'Drive consistent high-intent traffic to your booking pages',
      icon: TrendingUp,
      desc: 'We deploy search programs that align your brand with buyer intent, putting your service catalog in front of ready-to-buy local and global clients.',
      features: [
        { title: 'Local SEO Foundation', desc: 'Targeting geo-specific keywords to dominate search results in your local target regions.' },
        { title: 'Google Business Optimization', desc: 'Enhancing Map Pack visibility and reputation signals to stand out from local competitors.' },
        { title: 'Analytics Integration', desc: 'Custom GA4 dashboards, tracking pixels, and form conversion attribution.' },
        { title: 'Search Visibility Improvements', desc: 'Tracking core search rankings, click-through-rates, and search snippets.' },
        { title: 'Performance Tracking', desc: 'Transparent, monthly progress metrics reporting on real business outcomes like inquiries.' }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-accent font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Integrated Web Growth Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Integrated Website Systems Built for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Growth</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            We don't sell websites and SEO as separate, disjointed services. We design and build integrated growth systems where speed, structure, visibility, and conversion work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button size="lg" asChild className="group shadow-lg shadow-accent/15 bg-accent text-accent-foreground hover:bg-accent/90 px-8 rounded-full font-semibold transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2">
                Book a Free Strategy Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 transition-all duration-300">
              <Link to="/work">View Our Growth Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Pillars */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Three-Pillar Growth System</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Every package is custom tailored around these core execution frameworks to guarantee business results.
            </p>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {servicePillars.map((pillar, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <Card className="border border-border/40 hover:border-accent/40 bg-background shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(59,175,218,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative group">
                  {/* Soft background blue gradient highlight on hover */}
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                  
                  <div className="p-8 md:p-10 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:bg-accent/20 group-hover:border-accent/35">
                        <pillar.icon className="h-6 w-6 text-accent transition-transform duration-500 group-hover:rotate-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">{pillar.title}</h3>
                        <p className="text-xs font-semibold text-accent uppercase tracking-wider">{pillar.subtitle}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2">{pillar.desc}</p>
                      </div>
                    </div>

                    <div className="border-t border-border/40 pt-8 mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        System Specifications
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {pillar.features.map((feature, fIdx) => (
                          <div 
                            key={fIdx} 
                            className="flex items-start gap-3 p-4 rounded-xl border border-border/30 bg-muted/20 hover:border-accent/30 hover:bg-accent/[0.01] transition-all duration-300 group/item"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-all duration-300">
                              <Check className="h-3.5 w-3.5 text-accent" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-sm text-foreground mb-1 group-hover/item:text-accent transition-colors duration-300">{feature.title}</h5>
                              <p className="text-xs text-muted-foreground/90 leading-relaxed">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="section-padding bg-background border-t border-border/50 relative overflow-hidden">
        {/* Subtle decorative background gradient highlight */}
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(59,175,218,0.04),transparent)] pointer-events-none" />
        
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">A Zero-Compromise Approach to Performance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
            We limit our capacity to a select number of clients at any given time. We do not use generic WordPress page builders, bloated themes, or cheap offshore white-label services. You collaborate directly with our founder to design a high-performance digital system that delivers real growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-5 border border-border/40 hover:border-accent/40 rounded-xl bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.05)] hover:-translate-y-0.5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-2">Direct Line</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">Founder-Led Collaboration</span>
            </div>
            
            <div className="p-5 border border-border/40 hover:border-accent/40 rounded-xl bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.05)] hover:-translate-y-0.5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-2">Zero Bloat</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">React/Next.js Architecture</span>
            </div>
            
            <div className="p-5 border border-border/40 hover:border-accent/40 rounded-xl bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.05)] hover:-translate-y-0.5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-2">Visibility</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">SEO Built In from Day One</span>
            </div>
            
            <div className="p-5 border border-border/40 hover:border-accent/40 rounded-xl bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.05)] hover:-translate-y-0.5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-2">Integrity</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">Measurable Growth Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                <h2 className="mb-4 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight animate-fade-in-up">
                  Looking to Improve Visibility, Performance & Leads?
                </h2>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-white/80 mb-6 max-w-xl mx-auto leading-relaxed">
                  Book a strategy call to discuss how your website can improve visibility, trust, and customer inquiries.
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
                    <Link to="/contact?tab=message">Get a Free Website Audit</Link>
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

export default Services;
