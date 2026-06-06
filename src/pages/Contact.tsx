import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { Mail, Clock, Shield, Calendar, Send } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background py-20">
        <div className="container-custom max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-full px-3.5 py-1 mb-6 text-xs text-accent font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>Start a Conversation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
                Let's Talk About Your Project
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Tell us about your business, goals, and current challenges. We’ll review your website, visibility, and growth opportunities before recommending anything.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full text-left">
                <div className="p-5 rounded-2xl border border-border/50 hover:border-accent/30 bg-card/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,175,218,0.04)] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground block mb-0.5 font-bold">Thoughtful Collaboration</strong>
                    Strategic engagement directly with the founder at every milestone.
                  </span>
                </div>
                <div className="p-5 rounded-2xl border border-border/50 hover:border-accent/30 bg-card/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,175,218,0.04)] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground block mb-0.5 font-bold">Quality Over Volume</strong>
                    We take on a limited number of projects to maintain focus and attention to detail.
                  </span>
                </div>
                <div className="p-5 rounded-2xl border border-border/50 hover:border-accent/30 bg-card/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,175,218,0.04)] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground block mb-0.5 font-bold">Strategic Execution</strong>
                    Tailored strategy and clean code systems designed for long-term growth.
                  </span>
                </div>
                <div className="p-5 rounded-2xl border border-border/50 hover:border-accent/30 bg-card/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(59,175,218,0.04)] flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground block mb-0.5 font-bold">Direct Communication</strong>
                    No middle layers or automation between your goals and our execution.
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background/50 border-t border-border/45 py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Contact Info */}
              <FadeInSection className="lg:col-span-1">
                <div className="border border-border/50 hover:border-accent/30 rounded-3xl bg-card/85 backdrop-blur-sm p-6 sm:p-8 space-y-8 relative overflow-hidden transition-colors duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                  {/* Soft background blue gradient highlight */}
                  <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-3 text-foreground">Contact Information</h2>
                    <p className="text-muted-foreground/90 text-sm leading-relaxed mb-6">
                      Ready to discuss your project? Select a time for a growth call or send a written inquiry using the tabs.
                    </p>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-foreground mb-1">Email Directly</h3>
                        <a
                          href="mailto:ram@scalvex.in"
                          className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                        >
                          ram@scalvex.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-foreground mb-1">Response Time</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          We personally review all submissions and respond within 24 hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/20 flex items-center justify-center flex-shrink-0 text-accent">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-foreground mb-1">Actionable Review</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Every inquiry includes a practical review of your current website visibility, structure, and user experience — even if we don’t end up working together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={100} className="lg:col-span-2">
                <Tabs defaultValue="booking" className="w-full">
                  <TabsList className="grid grid-cols-2 mb-6 p-1 bg-muted/40 border border-border/30 rounded-full">
                    <TabsTrigger value="booking" className="flex items-center justify-center gap-2 rounded-full py-2.5 transition-all text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-accent">
                      <Calendar className="h-4 w-4" /> Book Strategy Call
                    </TabsTrigger>
                    <TabsTrigger value="message" className="flex items-center justify-center gap-2 rounded-full py-2.5 transition-all text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-accent">
                      <Send className="h-4 w-4" /> Send Written Inquiry
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="booking">
                    <Card className="border border-border/50 hover:border-accent/30 rounded-3xl bg-card/85 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden transition-colors duration-500">
                      <CardContent className="p-6 sm:p-8">
                        <div className="mb-6">
                          <h2 className="text-lg font-bold text-foreground mb-1">Schedule a Strategy Call</h2>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Book a focused growth consultation directly with the founder to discuss visibility, website performance, positioning, and lead generation opportunities.
                          </p>
                        </div>
                        <div className="w-full rounded-2xl overflow-hidden border border-border/40 bg-card shadow-inner animate-fade-in" style={{ height: '580px' }}>
                          <iframe
                            src="https://calendly.com/scalvex-ram/30min?embed_domain=scalvex.in&embed_type=Inline&hide_landing_page_details=1&background_color=ffffff&text_color=0f2a44&primary_color=3bafda"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Schedule Call"
                            loading="lazy"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="message">
                    <Card className="border border-border/50 hover:border-accent/30 rounded-3xl bg-card/85 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden transition-colors duration-500">
                      <CardContent className="p-6 sm:p-8">
                        <div className="mb-6">
                          <h2 className="text-lg font-bold text-foreground mb-1">Send a Written Inquiry</h2>
                          <p className="text-sm text-muted-foreground leading-relaxed text-left mb-6">
                            Prefer to share details in writing? Complete the form below, and we'll analyze your current layout before getting back to you.
                          </p>
                          <ContactForm />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
