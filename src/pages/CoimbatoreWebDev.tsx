import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';
import { Shield, Target, Zap, Search, Globe, ArrowRight } from 'lucide-react';

const CoimbatoreWebDev = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-primary/[0.03] border border-primary/10 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Serving Coimbatore, Tamil Nadu & Global Clients</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Premium Web Development Company in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Coimbatore</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            We build high-performance, custom-coded, and search-optimized websites designed to turn traffic into qualified local and international leads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button size="lg" asChild className="group shadow-md shadow-accent/10">
              <Link to="/contact" className="flex items-center gap-2">
                Get a Free Website Audit <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/work">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Market Context */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Local Service Businesses in Coimbatore Trust Scalvex</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Coimbatore is a booming hub for manufacturing, healthcare, education, and services. A generic, slow website makes you invisible to your target clients. We build fast, technical-first websites that establish absolute authority in your local market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={0}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Core Web Vitals Optimized</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Most agencies in Coimbatore build with bloated page builders. Our React and static website engines guarantee 95+ PageSpeed scores for top conversion rates.
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
                  <h3 className="text-lg font-bold">Local SEO Dominance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We map search intent and design semantic HTML structures to rank your service business in Coimbatore Google local queries.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={160}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Direct Founder Collaboration</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    No middlemen or junior account managers. You work directly with Ram Vishwakarma to architect your platform.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Local Case Studies & Proof */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-muted-foreground">See how we have helped other businesses scale their speed, visibility, and inbound leads.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border border-border bg-card">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded uppercase">Interiors & Turnkey</span>
                <span className="text-xs font-bold text-emerald-500">PageSpeed: 98</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Nilkamal Interiors</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Rebuilt a legacy portfolio site into a clean, modern showcase resulting in a major authority boost and qualified commercial design inquiries.
              </p>
              <Link to="/work/nilkamal-interiors" className="text-xs font-semibold text-primary underline">View Case Study</Link>
            </Card>

            <Card className="p-6 border border-border bg-card">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded uppercase">Finance & Investing</span>
                <span className="text-xs font-bold text-emerald-500">1.2s Load Time</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Alpha Investment Management</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Optimized React web application architecture that significantly lowered bounce rates and increased client conversion actions.
              </p>
              <Link to="/work/alpha-investment" className="text-xs font-semibold text-primary underline">View Case Study</Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-padding bg-card">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-base mb-2">How much does a web development project in Coimbatore cost?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We don't offer generic templates or fixed generic packages. Pricing is based entirely on your business goals, performance specifications, and custom integrations. Contact us for a precise, transparent quote.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-base mb-2">Do you build with WordPress or Elementor?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No. We specialize in custom react frameworks, static site generators (Vite, Next.js), and clean code. This guarantees your site loads instantly, complies with modern security protocols, and ranks on search engines without page-builder bloat.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-base mb-2">Do you handle SEO optimization?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Yes, SEO is not an add-on at Scalvex; it is a core design criterion. We build semantic, structured HTML and clean meta tagging directly into the codebase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Elevate Your Coimbatore Business?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base">
            Get in touch to get a free, detailed speed and SEO audit of your current website or a consultation on your new project.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:bg-primary-foreground hover:text-primary transition-colors">
            <Link to="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CoimbatoreWebDev;
