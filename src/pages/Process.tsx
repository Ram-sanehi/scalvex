import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { 
  Search, 
  Palette, 
  BarChart3, 
  Rocket, 
  HeadphonesIcon 
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Planning',
      timeframe: '3-5 days',
      description: 'We start by understanding your business, goals, target audience, and competitive landscape. This phase ensures we build exactly what you need — no wasted time or budget.',
      activities: [
        'Business goals assessment',
        'Target audience research',
        'Competitive analysis',
        'Project scope & roadmap',
      ],
      clientResponsibility: 'Share your business context, goals, and any existing brand materials. Be available for a discovery call.',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Build',
      timeframe: '2-4 weeks',
      description: 'Our team creates clean, modern designs focused on user experience and conversion. We build with performance and SEO in mind from day one, ensuring your website is fast, accessible, and search-engine ready.',
      activities: [
        'UI/UX design & prototyping',
        'Responsive development',
        'Performance optimization',
        'SEO-ready architecture',
      ],
      clientResponsibility: 'Provide feedback on designs and content. Review progress during scheduled check-ins.',
    },
    {
      number: '03',
      icon: BarChart3,
      title: 'SEO Integration',
      timeframe: '1-2 weeks',
      description: 'Every website we build includes fundamental SEO best practices. For enhanced visibility, we implement comprehensive technical SEO, on-page optimization, and content strategy.',
      activities: [
        'Technical SEO setup',
        'Meta tags & structured data',
        'Speed optimization',
        'Schema markup implementation',
      ],
      clientResponsibility: 'Provide keyword targets or approve our recommendations. Share any existing SEO data or analytics.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Testing & Launch',
      timeframe: '3-5 days',
      description: 'Before launch, we rigorously test across devices and browsers. We ensure everything works perfectly, from contact forms to page speed. Once approved, we handle deployment and go-live.',
      activities: [
        'Cross-browser testing',
        'Mobile responsiveness checks',
        'Performance audits',
        'Smooth deployment',
      ],
      clientResponsibility: 'Final review and approval. Ensure domain access is ready for launch.',
    },
    {
      number: '05',
      icon: HeadphonesIcon,
      title: 'Optional Ongoing Support',
      timeframe: 'Ongoing',
      description: "After launch, we offer optional maintenance and support packages. Whether you need regular updates, new features, or ongoing SEO work, we're here to help your website grow.",
      activities: [
        'Regular maintenance & updates',
        'Content additions & edits',
        'Performance monitoring',
        'SEO optimization & growth',
      ],
      clientResponsibility: 'Communicate ongoing needs. Provide content updates or approve our recommendations.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Process</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                A clear, collaborative approach designed to deliver results efficiently. 
                From discovery to launch, we keep you informed every step of the way.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-12 md:space-y-16">
                {steps.map((step, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <div className="relative flex gap-6 md:gap-12">
                      {/* Icon */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                          <step.icon className="h-7 w-7" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow pb-8">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-accent">
                            Step {step.number}
                          </span>
                          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                            {step.timeframe}
                          </span>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
                        <p className="text-muted-foreground mb-6">{step.description}</p>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-3">What We Do</h4>
                            <div className="space-y-2">
                              {step.activities.map((activity, actIndex) => (
                                <div key={actIndex} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-3">What You Provide</h4>
                            <p className="text-sm text-muted-foreground">{step.clientResponsibility}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-primary-foreground">Ready to Start Your Project?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's work together to bring your vision to life with a website built for growth.
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

export default Process;
