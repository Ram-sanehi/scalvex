import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';
import { Rocket, ShieldCheck, Zap, Laptop, ArrowRight } from 'lucide-react';

const StartupWebDesign = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-primary/[0.03] border border-primary/10 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Launch Fast, Code Clean, Scale Indefinitely</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            High-Performance Web Design for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Startups</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            We build fast, polished React websites that validate your concept, attract early adopters, and build trust with institutional investors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button size="lg" asChild className="group shadow-md shadow-accent/10">
              <Link to="/contact" className="flex items-center gap-2">
                Launch Your Project <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/work">View Startup Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Startup Pillars */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Engineered for Startup Velocity</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Startups need to ship quickly without sacrificing codebase quality. We develop clean React/Vite/Next.js codebases that rank on search and scale with your funding rounds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={0}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Rapid MVP Launch</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We trim the agency bloat to deliver pixel-perfect, interactive marketing websites and landing pages in weeks, not months.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={80}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Clean Code, Zero Technical Debt</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We write clean components, clean CSS/Tailwind, and fast assets, making it easy for your internal product engineers to take over later.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={160}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Laptop className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">Conversion Funnels Built-In</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    From waitlists and email captures to product demos, we optimize the site structure to drive early customer sign-ups.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Startup Projects Built by Scalvex</h2>
            <p className="text-muted-foreground">High-performance tech case studies built for rapid growth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border border-border bg-card">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded uppercase">FinTech Platform</span>
                <span className="text-xs font-bold text-emerald-500">1.3s Speed Index</span>
              </div>
              <h3 className="text-xl font-bold mb-2">FinanceHub</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Architected an interactive portal with modern financial charts, clean marketing layouts, and technical SEO structure to drive signups.
              </p>
              <Link to="/work/financehub" className="text-xs font-semibold text-primary underline">View Case Study</Link>
            </Card>

            <Card className="p-6 border border-border bg-card">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded uppercase">SaaS Startup</span>
                <span className="text-xs font-bold text-emerald-500">PageSpeed: 99</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Archly Portal</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Created a responsive client portal design and fast static site frontend that lowered bounce rates and drove product sign-ups.
              </p>
              <Link to="/work/archly" className="text-xs font-semibold text-primary underline">View Case Study</Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Startup FAQ */}
      <section className="section-padding bg-card">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Startup Web Design FAQ</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-base mb-2">How fast can you build a startup marketing site?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Depending on complexity and content readiness, we can build and launch high-performance landing pages in 2 to 3 weeks and full multi-page marketing sites in 4 to 6 weeks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-base mb-2">What frameworks do you use?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We use modern frontend architectures like React, Vite, Next.js, and Tailwind CSS. We host on fast edge networks (Vercel, Netlify) to guarantee global sub-second loading speeds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Launch Your Startup's New Digital Asset?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base">
            Consult directly with our founder to design a high-fidelity website that matches your startup's speed and innovation.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:bg-primary-foreground hover:text-primary transition-colors">
            <Link to="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default StartupWebDesign;
