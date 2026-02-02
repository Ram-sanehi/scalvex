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
      description: 'We measure success by outcomes, not just deliverables. Every project is designed to achieve your business goals.',
    },
    {
      icon: Globe,
      title: 'Remote-First',
      description: "Our distributed team model allows us to work with the best talent globally while keeping costs efficient.",
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: "We believe the best work comes from true partnership. You're involved at every stage of the process.",
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
              <h1 className="mb-6">A Remote-First Digital Team Focused on Results</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Edge Services is a web development and SEO agency helping businesses build fast, 
                scalable, and conversion-focused websites.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="mb-6">Our Approach</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We operate remotely with a network of experienced professionals, allowing us 
                      to deliver flexible, high-quality solutions to clients across industries and regions.
                    </p>
                    <p>
                      Unlike traditional agencies with bloated teams and overhead, we focus on efficiency 
                      without compromising quality. Every project gets the attention it deserves, with 
                      clear communication and transparent processes.
                    </p>
                    <p>
                      Our philosophy is simple: build websites that work. That means fast loading times, 
                      clear messaging, intuitive user experiences, and SEO foundations that help you 
                      get found online.
                    </p>
                  </div>
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Team Image Placeholder</span>
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
              <h2 className="mb-4">What We Value</h2>
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
              <h2 className="text-center mb-8">Why Work With Us?</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">01</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">No Hidden Costs</h3>
                    <p>Transparent pricing with clear project scopes. You know exactly what you're paying for.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">02</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Direct Communication</h3>
                    <p>Work directly with the people building your project. No layers of account managers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">03</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Quality Without Markup</h3>
                    <p>Our remote model means lower costs passed on to you, not bigger agency profits.</p>
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
              <h2 className="mb-4 text-primary-foreground">Let's Work Together</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Ready to start a project or just want to learn more? We'd love to hear from you.
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
