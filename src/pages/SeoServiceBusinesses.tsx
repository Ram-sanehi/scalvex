import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';
import { Search, TrendingUp, Users, Target, ArrowRight } from 'lucide-react';

const SeoServiceBusinesses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-primary/[0.03] border border-primary/10 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>SEO Strategies that Turn Searches into Sales</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Search Engine Optimization (SEO) for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service Businesses</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            We don't focus on vanity keywords. We build search campaigns designed to bring high-intent buyers straight to your service booking pages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button size="lg" asChild className="group shadow-md shadow-accent/10">
              <Link to="/contact" className="flex items-center gap-2">
                Request a Free SEO Audit <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore SEO Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Strategy Pillars */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our High-Intent SEO Strategy</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              A general informational blog post won't get you new clients. We build a localized and transactional search program targeting users ready to purchase your services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={0}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Commercial Intent Keywords</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We target transactional phrases rather than high-volume informational terms, guaranteeing search visitors are actively shopping for a provider.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={80}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Search className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Technical On-Page Setup</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We fine-tune internal linking structures, clean URL designs, meta headers, and JSON-LD schema tags so Google indexes your site correctly.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={160}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Conversion-First Layouts</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Search traffic is useless if it bounces. We optimize copy hierarchy and CTAs to guide visitors directly to booking calls or submitting quotes.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Outcomes Metrics */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Measurable Outcomes</h2>
            <p className="text-muted-foreground">We focus on metrics that impact your bottom line — traffic, rankings, and lead conversions.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-primary">3.2x</div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wide font-semibold">Average Lead Increase</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wide font-semibold">Technical SEO Compliance</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-primary">+140%</div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wide font-semibold">Organic Growth Index</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="text-3xl sm:text-4xl font-bold text-primary">24hr</div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wide font-semibold">Consultation Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct FAQ */}
      <section className="section-padding bg-card">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">FAQ: SEO for Service Providers</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-base mb-2">How long does it take to see results from SEO?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  SEO is a compounding channel. While minor technical fixes can yield ranking shifts in weeks, a comprehensive SEO campaign generally takes 3 to 6 months to start driving meaningful, consistent inbound leads.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-base mb-2">Why can't I just run Google Search ads?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Search ads are a great short-term tactic but are costly and stop working the moment you stop paying. SEO builds a permanent digital asset that drives qualified traffic month after month at zero incremental ad cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Stop Losing Clients to Competitors on Google</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base">
            Request a free, comprehensive technical SEO audit of your current site. No obligation, no pressure.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:bg-primary-foreground hover:text-primary transition-colors">
            <Link to="/contact">Request Your Free Audit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SeoServiceBusinesses;
