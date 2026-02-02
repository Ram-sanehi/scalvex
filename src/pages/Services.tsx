import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { 
  Code, 
  BarChart3, 
  Globe, 
  Zap, 
  Layout as LayoutIcon, 
  Search,
  FileText,
  TrendingUp,
  Settings
} from 'lucide-react';

const Services = () => {
  const webDevServices = [
    { icon: Globe, title: 'Business Websites', desc: 'Professional websites that represent your brand and convert visitors into customers.' },
    { icon: Zap, title: 'Startup & MVP Builds', desc: 'Fast, lean development for startups looking to validate ideas and launch quickly.' },
    { icon: LayoutIcon, title: 'Landing Pages', desc: 'High-converting landing pages optimized for campaigns and lead generation.' },
    { icon: Settings, title: 'Performance Optimization', desc: 'Speed improvements and technical enhancements for existing websites.' },
    { icon: Code, title: 'SEO-Ready Structure', desc: 'Every build includes proper HTML structure, meta tags, and semantic markup.' },
  ];

  const seoServices = [
    { icon: Settings, title: 'Technical SEO Setup', desc: 'Site speed, mobile optimization, crawlability, and indexing improvements.' },
    { icon: Search, title: 'On-Page SEO', desc: 'Title tags, meta descriptions, header structure, and internal linking.' },
    { icon: FileText, title: 'Content Optimization', desc: 'Keyword research and content strategy aligned with search intent.' },
    { icon: TrendingUp, title: 'Analytics & Reporting', desc: 'Performance tracking, insights, and monthly progress reports.' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Web development with SEO built in. We create websites that not only look great 
                but are engineered to perform in search and convert visitors.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Web Development */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="mb-1">Web Development</h2>
                <p className="text-muted-foreground">Custom websites built for performance and growth</p>
              </div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webDevServices.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="mb-1">SEO Services</h2>
                <p className="text-muted-foreground">Add-on services to maximize your visibility</p>
              </div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {seoServices.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-primary-foreground">Ready to Get Started?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's discuss your project and find the right solution for your needs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Request a Free Consultation</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
