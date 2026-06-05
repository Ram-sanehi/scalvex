import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, HelpCircle, ShieldCheck, Mail, Users, Lock } from 'lucide-react';

const tocItems = [
  { id: 'collect', label: '1. Information We Collect' },
  { id: 'use', label: '2. How We Use Data' },
  { id: 'cookies', label: '3. Analytics & Cookies' },
  { id: 'sharing', label: '4. Data Sharing Policy' },
  { id: 'security', label: '5. Data Safeguards' },
  { id: 'retention', label: '6. Data Retention' },
  { id: 'rights', label: '7. Your Data Rights' },
  { id: 'third-party', label: '8. Third-Party Integrations' },
  { id: 'children', label: '9. Children’s Privacy' },
  { id: 'updates', label: '10. Policy Updates' },
  { id: 'contact-info', label: '11. Contact Details' },
  { id: 'faq', label: 'Frequently Asked Questions' }
];

export const Privacy = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('collect');

  // Track page scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-15% 0px -70% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for sticky headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-accent z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollPercent}%` }} 
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-background overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 bg-primary/[0.03] border border-primary/10 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-primary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Data Protection</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Your Privacy <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Matters.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We respect the trust you place in us and are committed to protecting your information with transparency and care.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Main Editorial Container */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Left Sidebar Table of Contents (Desktop Only) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 space-y-4 max-h-[80vh] overflow-y-auto pr-4 border-r border-border/40 scrollbar-thin">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">On This Page</p>
                <nav className="space-y-1.5">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleScrollToSection(item.id)}
                      className={`block w-full text-left text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-200 border border-transparent ${
                        activeSection === item.id
                          ? 'text-accent bg-accent/5 border-accent/10 font-bold translate-x-1'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Column Content Area */}
            <main className="col-span-1 lg:col-span-9 space-y-16 max-w-3xl lg:max-w-none">
              
              {/* Introduction Callout */}
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-[4px] bg-accent" />
                <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
                  Privacy is a core tenet of digital trust. This policy explains what information we collect when you interact with Scalvex, how we protect it, and your rights concerning your personal information.
                </p>
              </div>

              {/* 1. Information We Collect */}
              <section id="collect" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 01</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Information We Collect</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We collect minimal personal data to deliver professional design, SEO, and consulting services. This data falls into the following categories:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Contact Information:</strong> Your name, business email address, phone number, and physical office location.</li>
                    <li><strong>Business Information:</strong> Company name, website URL, target market parameters, and competitor data.</li>
                    <li><strong>Project Inquiries:</strong> Details shared in contact forms, booking slots (such as Calendly details), and email threads.</li>
                    <li><strong>Website Usage Information:</strong> Anonymized usage statistics, page scroll maps, click behaviors, browser versions, and device viewports.</li>
                  </ul>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 2. How We Use Data */}
              <section id="use" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 02</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How We Use Information</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    Your personal information is used strictly to establish partnership parameters and deliver quality web services. Specifically, we use it for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Communication:</strong> Responding to client briefs, sending proposal documents, and scheduling calls.</li>
                    <li><strong>Project Delivery:</strong> Coding and optimizing your custom web structures and building your brand assets.</li>
                    <li><strong>Website Improvements:</strong> Analyzing visitor traffic behavior to optimize page speed layout and navigation patterns.</li>
                    <li><strong>Security:</strong> Monitoring site traffic to detect malware uploads and blocking unauthorized login scripts.</li>
                    <li><strong>Legal Compliance:</strong> Meeting local taxation requirements and accounting invoices.</li>
                  </ul>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 3. Analytics & Cookies */}
              <section id="cookies" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 03</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Analytics & Cookies</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    Cookies are tiny files stored on your browser to help us understand site interactions. Scalvex uses:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Essential Cookies:</strong> Cookies required to load simple layout styles and remember basic site selections.</li>
                    <li><strong>Performance & Analytics Cookies:</strong> Cookies (like Google Analytics) that let us count anonymous visitor movements and measure page load speed metrics.</li>
                  </ul>
                  <p>
                    You can easily configure your browser to block cookies or notify you before they are saved.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 4. Data Sharing Policy */}
              <section id="sharing" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 04</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Data Sharing Policy</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We value your trust. We do not sell, rent, or trade client directories to database brokers or external advertising firms.
                  </p>
                  <p>
                    Data is only shared with trusted service providers (such as secure email platforms, database hosts, and scheduling APIs) when absolutely necessary for project execution. These third parties are legally bound to confidentiality.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 5. Data Safeguards */}
              <section id="security" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 05</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Data Security Safeguards</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We protect customer records using modern web practices:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Encrypting data in transit using SSL/TLS protocols.</li>
                    <li>Restricting login credentials strictly to team members assigned to project tasks.</li>
                    <li>Deploying code files on secure CDN edge servers with automated threat protection.</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-accent/[0.03] border border-accent/10 text-xs text-primary flex items-start gap-2.5 mt-4">
                    <ShieldCheck className="h-4.5 w-4.5 shrink-0 mt-0.5 text-accent" />
                    <span><strong>Security Note:</strong> While we enforce robust security practices, no method of transfer over the internet is completely bulletproof. We recommend using unique project passwords at all times.</span>
                  </div>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 6. Data Retention */}
              <section id="retention" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 06</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Data Retention</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We retain personal details only for as long as needed to support your active project contract, maintain records for accounting compliance, or satisfy legal audits. Once records are no longer required, they are securely purged or completely anonymized.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 7. Your Data Rights */}
              <section id="rights" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 07</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Your Data Rights</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    You remain in full control of your personal details. You have the right to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Request a copy of the specific personal data we hold about your business.</li>
                    <li>Request adjustments to correct incorrect contact details.</li>
                    <li>Request the deletion of your personal contact records from our active database tools.</li>
                    <li>Withdraw your consent to receive marketing communication at any time.</li>
                  </ul>
                  <p>
                    To execute these choices, simply email us at <a href="mailto:ram@scalvex.in" className="text-accent underline">ram@scalvex.in</a>.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 8. Third-Party Integrations */}
              <section id="third-party" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 08</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Third-Party Integrations</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We integrate third-party tools to handle operations smoothly (such as Google Analytics for tracking speed, Calendly for booking discovery calls, CRM platforms for contact forms, and Cloudflare for hosting security). 
                  </p>
                  <p>
                    These integrations maintain separate privacy policies; we recommend reviewing their guidelines to understand how they use your data.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 9. Children’s Privacy */}
              <section id="children" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 09</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Children’s Privacy</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    Our services are designed for corporate business owners and adult professionals. We do not knowingly collect personal details from users under 13. If we discover records matching a child under 13, we immediately delete them from our servers.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 10. Policy Updates */}
              <section id="updates" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 10</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Policy Updates</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We update this privacy policy periodically to reflect adjustments in local data regulation laws and new service deployments. Any changes will be published directly on this page with an updated review date.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 11. Contact Details */}
              <section id="contact-info" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 11</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact Details</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    If you have questions about our data safety practices or want to request data deletion, contact us at:
                  </p>
                  <p className="font-semibold text-foreground">
                    Scalvex Digital Studio <br />
                    Coimbatore, Tamil Nadu, India <br />
                    Email: <a href="mailto:ram@scalvex.in" className="text-accent underline">ram@scalvex.in</a>
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* FAQ Section */}
              <section id="faq" className="space-y-6 scroll-mt-28">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Privacy FAQ</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-3">
                  <AccordionItem value="faq-1" className="border border-border/40 rounded-xl bg-card px-5 py-1.5 shadow-sm">
                    <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline">
                      Do you sell or share my data for advertising?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-2">
                      No. We never sell, lease, or rent customer lists, emails, or company metrics to third parties for commercial ad campaigns.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="border border-border/40 rounded-xl bg-card px-5 py-1.5 shadow-sm">
                    <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline">
                      How can I request that my personal details be deleted?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-2">
                      Simply email us at ram@scalvex.in with the subject "Data Deletion Request." We will delete your details from our active contact lists and CRM database tools within 5 business days.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="border border-border/40 rounded-xl bg-card px-5 py-1.5 shadow-sm">
                    <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline">
                      What tracking cookies do you run on my browser?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-2">
                      We run simple, anonymized tracking cookies (like Google Analytics) to count monthly traffic totals and identify script load bottlenecks. No credit card or location data is ever tracked.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

            </main>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,175,218,0.12),transparent_60%)]" />
        <div className="container-custom max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Questions About Your Data?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We believe privacy should be transparent and easy to understand. Reach out anytime if you have questions about how your information is handled.
          </p>
          <div className="pt-4 flex justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-5 h-auto text-sm hover:bg-white hover:text-primary rounded-full transition-all duration-300 font-bold shadow-lg gap-2" asChild>
              <a href="mailto:ram@scalvex.in"><Mail className="h-4 w-4" /> Reach Out Anytime</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Last Reviewed Label */}
      <div className="py-6 border-t border-border/40 text-center bg-card text-xs text-muted-foreground">
        Last reviewed: June 2026 • Updated periodically to reflect changes in our services and legal obligations.
      </div>
    </Layout>
  );
};

export default Privacy;
