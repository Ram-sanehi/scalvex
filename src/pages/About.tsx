import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { Globe, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality Over Volume',
      description: 'We intentionally take on a limited number of projects so every client receives focused attention, thoughtful execution, and direct collaboration throughout the process.',
    },
    {
      icon: Users,
      title: 'Transparent Collaboration',
      description: 'Clear communication, realistic timelines, and consistent founder involvement from strategy through launch.',
    },
    {
      icon: Zap,
      title: 'Performance-Focused',
      description: 'Every decision — from structure and speed to usability and responsiveness — is made with long-term performance in mind.',
    },
    {
      icon: Globe,
      title: 'Built for Longevity',
      description: 'We build scalable websites designed to remain fast, maintainable, and effective as businesses continue to grow.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-background overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-accent font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Our Story & Philosophy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                A More Thoughtful Approach to Modern Website Systems
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Scalvex is a founder-led digital studio focused on building modern websites that improve visibility, strengthen credibility, and help service businesses grow online.
              </p>

              <div className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto border-t border-border/40 pt-6 space-y-2">
                <span className="block">We take on a limited number of projects to maintain quality and direct collaboration throughout the process.</span>
                <span className="block">Every website is built with long-term performance, usability, and search visibility in mind from the start.</span>
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
                  <h2 className="text-3xl font-bold tracking-tight mb-6">The Philosophy Behind Scalvex</h2>
                  <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                    <p>
                      I started Scalvex after noticing the same problem repeatedly — businesses investing in websites that looked modern but struggled to generate visibility, trust, or meaningful inquiries.
                    </p>
                    <p>
                      Many agencies treat design, development, and SEO as separate services, which often leads to disconnected experiences and inconsistent results.
                    </p>
                    <p>
                      I believe a website should work as a complete business asset — fast, clear, easy to navigate, and built to support long-term growth from the beginning.
                    </p>
                    <p className="font-semibold text-foreground">
                      That’s why every project at Scalvex is approached collaboratively, with careful attention to performance, structure, usability, and visibility.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border/40">
                    <p className="font-semibold text-foreground">Ram Vishwakarma</p>
                    <p className="text-xs text-muted-foreground">Founder & Growth Strategist</p>
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <div className="relative group max-w-[380px] w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(59,175,218,0.06)] bg-card flex items-center justify-center transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    <img
                      src="/founder.jpg"
                      alt="Ram Vishwakarma, Founder"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gradient-to-br from-primary/95 to-accent/95 flex flex-col items-center justify-center p-8 text-center text-white';
                          fallback.innerHTML = '<span class="text-6xl font-bold mb-2">RV</span><span class="text-sm font-semibold tracking-wide">Ram Vishwakarma</span><span class="text-xs opacity-95 mt-1">Founder & Lead Web Engineer</span>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">What We Stand For</h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                The values behind how we build, collaborate, and deliver for the businesses we work with.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={index * 100} className="h-full">
                <div className="h-full p-6 border border-border/40 hover:border-accent/40 rounded-xl bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.05)] hover:-translate-y-0.5 transition-all duration-300 text-center relative group overflow-hidden">
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-105 group-hover:bg-accent/20 transition-all duration-300">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-foreground relative z-10 group-hover:text-accent transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground/90 text-xs leading-relaxed relative z-10">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-card border-t border-border/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-center text-3xl font-bold tracking-tight mb-12">Why Work With Scalvex</h2>
              <div className="grid sm:grid-cols-2 gap-6 text-muted-foreground">
                <div className="flex gap-4 p-5 rounded-xl border border-border/30 bg-background/50 hover:border-accent/30 transition-all duration-300 relative group">
                  <span className="text-xl font-bold text-accent">01</span>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">SEO From Day One</h3>
                    <p className="text-sm leading-relaxed">Your website is built with search visibility in mind from the first line of code — not bolted on as an afterthought.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-xl border border-border/30 bg-background/50 hover:border-accent/30 transition-all duration-300 relative group">
                  <span className="text-xl font-bold text-accent">02</span>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">Direct Communication</h3>
                    <p className="text-sm leading-relaxed">Work directly with the people building your project. No layers of account managers or junior handoffs.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-xl border border-border/30 bg-background/50 hover:border-accent/30 transition-all duration-300 relative group">
                  <span className="text-xl font-bold text-accent">03</span>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">Transparent Pricing</h3>
                    <p className="text-sm leading-relaxed">Clear project scopes and honest estimates. You know exactly what you're paying for and what you'll receive.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-xl border border-border/30 bg-background/50 hover:border-accent/30 transition-all duration-300 relative group">
                  <span className="text-xl font-bold text-accent">04</span>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">Built for Growth</h3>
                    <p className="text-sm leading-relaxed">Scalable architecture that grows with your business. No technical debt holding you back as you scale.</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,175,218,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-[2rem] bg-primary border border-white/10 px-6 py-16 md:px-16 md:py-24 shadow-[0_20px_50px_rgba(15,42,68,0.15)] max-w-[46rem] mx-auto">
              {/* Radial card lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
                {/* Visual badge indicator */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4.5 py-1.5 mb-8 text-xs text-accent font-semibold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>Start Growing</span>
                </div>
                
                {/* Headline */}
                <h2 className="mb-6 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Looking for a Website Built Around Long-Term Growth?
                </h2>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
                  Book a strategy call to discuss how we can help your business improve visibility, trust, and customer inquiries.
                </p>
                
                {/* Button */}
                <div className="flex justify-center w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-sm px-8 py-5 h-auto bg-white text-primary hover:bg-white/90 font-bold rounded-full transition-all duration-300 hover:shadow-lg shadow-black/10 hover:translate-y-[-1px]"
                    asChild
                  >
                    <Link to="/contact">Book a Strategy Call</Link>
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

export default About;
