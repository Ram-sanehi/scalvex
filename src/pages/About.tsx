import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { Globe, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'We measure success by outcomes, not just deliverables. Every project is designed to achieve measurable business growth.',
    },
    {
      icon: Globe,
      title: 'Remote-First',
      description: 'Our distributed model allows us to work with the best talent globally while keeping costs efficient for our clients.',
    },
    {
      icon: Users,
      title: 'Founder-Led',
      description: 'Direct access to experienced strategists. No junior handoffs or layers of account managers slowing things down.',
    },
    {
      icon: Zap,
      title: 'Efficient',
      description: 'No bloated teams or unnecessary overhead. We move fast and deliver quality without the agency markup.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">A Founder-Led Studio Focused on Results</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Scalvex is a web development studio helping service businesses build fast, 
                SEO-ready websites that generate consistent leads.
              </p>
              <div className="mt-6 text-base text-muted-foreground">
                <span className="block mb-1">We take on a limited number of projects to maintain quality.</span>
                <span className="block mb-1">We don’t offer templates, rushed builds, or SEO as an afterthought.</span>
                <span className="block mb-1">Projects are handled directly by the founder with clear milestones.</span>
                <span className="block mb-1">Pricing reflects scope, complexity, and long-term value.</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="mb-6">Why Scalvex Exists</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Scalvex was created after seeing too many websites fail due to poor SEO foundations 
                      and performance neglect. Beautiful designs that nobody could find. Fast launches 
                      that slowed to a crawl. Agencies that promised growth but delivered confusion.
                    </p>
                    <p>
                      Every project we take on is built with clarity, efficiency, and measurable growth 
                      in mind. We don't just build websites — we build digital assets that work as 
                      hard as you do.
                    </p>
                    <p>
                      As a founder-led studio, you work directly with experienced strategists who 
                      understand both the technical and business sides of web development.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="font-semibold text-foreground">Ram Vishwakarma</p>
                    <p className="text-sm text-muted-foreground">Founder & Lead Web Strategist</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl overflow-hidden flex items-center justify-center transition-shadow duration-200 hover:shadow-md" style={{ aspectRatio: '3/4', maxWidth: 320, margin: '0 auto' }}>
                  <img
                    src="/founder.png"
                    alt="Ram Sanehi, Founder"
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="mb-4">What We Stand For</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide how we work and deliver for our clients.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <h2 className="text-center mb-8">Why Work With Scalvex</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">01</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">SEO From Day One</h3>
                    <p>Your website is built with search visibility in mind from the first line of code — not bolted on as an afterthought.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">02</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Direct Communication</h3>
                    <p>Work directly with the people building your project. No layers of account managers or junior handoffs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">03</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Transparent Pricing</h3>
                    <p>Clear project scopes and honest estimates. You know exactly what you're paying for and what you'll receive.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">04</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Built for Growth</h3>
                    <p>Scalable architecture that grows with your business. No technical debt holding you back as you scale.</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-primary-foreground">Ready to Work Together?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get a free consultation — no pressure, just actionable insights for your business.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
