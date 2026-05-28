import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';
import { Home, Heart, Search, ShieldCheck, ArrowRight } from 'lucide-react';

const SeoArchitectsClinics = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-primary/[0.03] border border-primary/10 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>High-Authority Websites for Premium Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            SEO Websites for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Architects & Clinics</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            For high-ticket service industries, trust is everything. We design websites that showcase your expertise, rank on Google, and convert prospects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button size="lg" asChild className="group shadow-md shadow-accent/10">
              <Link to="/contact" className="flex items-center gap-2">
                Book a Strategy Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Building Authority in High-Ticket Niches</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Architects need stunning portfolios that load instantly, while clinics require absolute credibility, clear booking funnels, and data compliance. We build tailored structures for both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="h-full">
              <CardContent className="p-8 space-y-4 text-left">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Home className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">For Architecture Studios</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We showcase your design work in clean, minimal portfolio decks. We optimize large project images so they load instantly on mobile, and apply local keywords to attract premium residential and commercial contracts.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground pt-2">
                  <li>✓ Sub-second image loading</li>
                  <li>✓ High-fidelity typography layout</li>
                  <li>✓ Location-based project portfolios</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-8 space-y-4 text-left">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">For Healthcare & Medical Clinics</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We design patient-friendly scheduling routes, structured medical treatment service pages, and HIPAA-friendly contact integrations. We optimize local SEO directories so patients can find your clinic in emergency queries.
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground pt-2">
                  <li>✓ Clear patient booking funnels</li>
                  <li>✓ Structured service schema markup</li>
                  <li>✓ Strong mobile and map pack rankings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof Case Study */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Case Study Highlight</h2>
            <p className="text-muted-foreground">See how we translate design excellence into high-performing websites.</p>
          </div>

          <Card className="max-w-3xl mx-auto p-6 md:p-8 border border-border bg-card">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <div>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded uppercase">Interior Design & Turnkey</span>
                <h3 className="text-2xl font-bold mt-2">Nilkamal Interiors & Furnitures</h3>
              </div>
              <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded">PageSpeed: 98</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              We rebuilt Nilkamal's online presence to establish premium authority. The new site presents their large residential and turnkey commercial projects with high-end typography and structured narratives that align with their physical craftsmanship.
            </p>
            <div className="flex gap-4">
              <Link to="/work/nilkamal-interiors" className="text-sm font-semibold text-primary underline">Read Case Study</Link>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Build Your Online Authority?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base">
            Book a direct strategy call with our founder to review your current site layout or architect a new high-authority platform.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:bg-primary-foreground hover:text-primary transition-colors">
            <Link to="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SeoArchitectsClinics;
