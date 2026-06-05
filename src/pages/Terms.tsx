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
import { ArrowRight, HelpCircle, PhoneCall, ShieldAlert, Award, FileSpreadsheet } from 'lucide-react';

const tocItems = [
  { id: 'services', label: '1. Services Offered' },
  { id: 'scope', label: '2. Project Scope' },
  { id: 'responsibilities', label: '3. Client Partnership' },
  { id: 'payment', label: '4. Payment Milestones' },
  { id: 'ip', label: '5. Intellectual Property' },
  { id: 'revisions', label: '6. Scope Revisions' },
  { id: 'timelines', label: '7. Timelines & Delays' },
  { id: 'confidentiality', label: '8. Confidentiality' },
  { id: 'liability', label: '9. Limits of Liability' },
  { id: 'termination', label: '10. Termination' },
  { id: 'governing', label: '11. Governing Law' },
  { id: 'contact-info', label: '12. Contact Details' },
  { id: 'faq', label: 'Frequently Asked Questions' }
];

export const Terms = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('services');

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
              <span>Partnership Framework</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Clear Expectations.<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Strong Partnerships.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              These terms outline how we work together, ensuring transparency, accountability, and a smooth project experience from start to finish.
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
                  We believe that great projects run on clear agreements. Rather than burying details in legalese, we have laid out our Terms & Conditions in plain English. These guidelines shape every collaboration between Scalvex and our partners.
                </p>
              </div>

              {/* 1. Services */}
              <section id="services" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 01</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Services Offered</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    Scalvex operates as a modern digital growth studio. We provide strategic web design, high-performance web development (including custom React and Next.js portals), organic search engine optimization (SEO), conversion rate improvements, identity branding, and digital strategy consulting.
                  </p>
                  <p>
                    While we maintain rigorous design and technical parameters, every project delivery is tailored to the specific organizational challenges outlined in our custom briefs.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 2. Project Scope */}
              <section id="scope" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 02</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Project Scope</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    The specific deliverables, milestones, visual designs, target timelines, and budgets for your project are explicitly defined in our signed proposal documents and Statements of Work (SOW). 
                  </p>
                  <p>
                    Any tasks, pages, or features not explicitly listed in the project scope agreement are excluded from the initial timeline and will be treated as scope revisions.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 3. Client Partnership */}
              <section id="responsibilities" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 03</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Client Partnership & Responsibilities</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    Web growth is a collaborative effort. To meet planned timelines, we rely on your active participation. This includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Providing accurate background assets, text copy, brand materials, and images in a timely manner.</li>
                    <li>Designating a single point of contact with decision-making authority to streamline communications.</li>
                    <li>Ensuring you own the legal rights or licenses for all materials shared with our developers.</li>
                    <li>Offering prompt, constructive feedback on project milestone reviews.</li>
                  </ul>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 4. Payment Milestones */}
              <section id="payment" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 04</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Payment Milestones</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We operate on structured payment schedules designed around project milestones:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Initial Deposit:</strong> An advance retainer payment (typically 50%) is required to secure calendar dates and begin strategy.</li>
                    <li><strong>Milestone Payments:</strong> Intermediate payments are billed upon approval of specific project milestones (such as design sign-off).</li>
                    <li><strong>Final Balance:</strong> The remaining project balance must be paid in full prior to code migration, domain connection, or live deployment.</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-amber-500/[0.03] border border-amber-500/10 text-xs text-amber-600 flex items-start gap-2.5 mt-4">
                    <ShieldAlert className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                    <span><strong>Late Payment Note:</strong> If invoices remain unpaid for more than 14 days, Scalvex reserves the right to temporarily pause active development to protect team resources.</span>
                  </div>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 5. Intellectual Property */}
              <section id="ip" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 05</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Intellectual Property Rights</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    Ownership dynamics are kept straightforward:
                  </p>
                  <p>
                    <strong>Your Assets:</strong> Upon full and final receipt of payment, ownership of custom-designed pages, front-end code assets, and custom copy transfers to you completely.
                  </p>
                  <p>
                    <strong>Our Tools:</strong> Scalvex retains full rights to our pre-existing proprietary frameworks, engineering libraries, custom script utilities, and internally developed methodologies.
                  </p>
                  <p>
                    <strong>Portfolio Rights:</strong> Unless otherwise agreed in writing, we retain the right to showcase your completed website UI in our digital portfolios and case study libraries as proof of design expertise.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 6. Scope Revisions */}
              <section id="revisions" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 06</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Scope Revisions & Change Requests</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    It is common for strategies to evolve as we build. If you request features, page additions, or layouts outside the signed Statement of Work (SOW):
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>We will write a detailed Change Order outlining the timeline adjustments and incremental costs.</li>
                    <li>No out-of-scope work will begin until both parties sign off on the Change Order estimate.</li>
                    <li>Minor adjustments are typically integrated into our milestone sprints without additional billing, at our discretion.</li>
                  </ul>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 7. Timelines & Delays */}
              <section id="timelines" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 07</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Timelines & Delays</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We schedule team capacity around your target deadlines. However, because our roadmap relies on mutual approvals, client side delays (such as delayed copy submission or missing assets) will result in a day-for-day slide in the ultimate launch date.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 8. Confidentiality */}
              <section id="confidentiality" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 08</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Confidentiality</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    Trust is the foundation of our business. Both Scalvex and the client agree to protect all proprietary materials, customer lists, market positioning metrics, and private logins shared during the collaboration. 
                  </p>
                  <p>
                    We will never share or sell your company information to third-party marketing brokers.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 9. Limits of Liability */}
              <section id="liability" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 09</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Limits of Liability</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    We stand behind our code. However, Scalvex does not assume responsibility for lost profits, customer data breaches, hosting server downtime, or indirect commercial damages arising from third-party application errors.
                  </p>
                  <p>
                    Our total financial liability in any claim is limited to the exact budget sum paid by the client for the specific Statement of Work giving rise to the dispute.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 10. Termination */}
              <section id="termination" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 10</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Termination</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    Either party can terminate the project with a 14-day written notice if there is a material breach of terms.
                  </p>
                  <p>
                    Upon termination, the client is responsible for paying Scalvex for all hourly work and completed milestones delivered up to the date of cancellation. All completed assets will be handed over to you upon receipt of this final invoice payment.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 11. Governing Law */}
              <section id="governing" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 11</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Governing Law</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    These Terms & Conditions are governed by the laws of India. Any official legal claims or dispute resolutions will be managed in the courts of Coimbatore, Tamil Nadu, where our operations are registered.
                  </p>
                </div>
              </section>

              <Separator className="bg-border/30" />

              {/* 12. Contact Details */}
              <section id="contact-info" className="space-y-4 scroll-mt-28">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Section 12</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact Details</h2>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                  <p>
                    If you have questions about these guidelines, feel free to reach out to us at:
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
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Terms FAQ</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-3">
                  <AccordionItem value="faq-1" className="border border-border/40 rounded-xl bg-card px-5 py-1.5 shadow-sm">
                    <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline">
                      Why do you require upfront milestone deposits?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-2">
                      Retainers secure dedicated engineering and design slots in our production calendar. This allows us to assign full-time team resources immediately to your strategy phase.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="border border-border/40 rounded-xl bg-card px-5 py-1.5 shadow-sm">
                    <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline">
                      What happens if the project scope shifts mid-build?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-2">
                      If scope shifts occur (e.g., adding an ecommerce shop when only a business site was planned), we pause to calculate a Change Order. No surprise bills are sent; all adjustments are signed off in advance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="border border-border/40 rounded-xl bg-card px-5 py-1.5 shadow-sm">
                    <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline">
                      Do you offer website maintenance after launch?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-2">
                      Yes. We offer continuous optimization, security audits, hosting maintenance, and content SEO packages to keep your platform fast and secure as you scale.
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
            Questions About Our Terms?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We believe great partnerships are built on clarity and trust. If anything needs clarification, we're happy to help.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-5 h-auto text-sm hover:bg-white hover:text-primary rounded-full transition-all duration-300 font-bold shadow-lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <a 
              href="mailto:ram@scalvex.in" 
              className="text-xs sm:text-sm text-primary-foreground/90 hover:text-accent font-semibold flex items-center gap-1.5 underline underline-offset-4"
            >
              <PhoneCall className="h-4 w-4" /> ram@scalvex.in
            </a>
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

export default Terms;
