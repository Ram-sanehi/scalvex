import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Sparkle } from 'lucide-react';

const FixConversion = () => (
  <Layout>
    <div className="container-custom py-20 font-sans max-w-4xl mx-auto">
      <div className="mb-8">
        <BackArrow />
      </div>
      
      <article className="border border-border/50 hover:border-accent/30 rounded-3xl bg-card/85 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.02)] p-6 sm:p-10 md:p-16 relative overflow-hidden transition-colors duration-500">
        {/* Soft background blue gradient highlight */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
        
        <header className="mb-12 text-center max-w-2xl mx-auto flex flex-col items-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-full px-3.5 py-1 mb-6 text-xs text-accent font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Conversion</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
            Why Most Websites Fail to Convert (And How to Fix It)
          </h1>
          
          <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground/85 font-medium mt-2">
            <span className="font-semibold text-foreground">Ram Vishwakarma</span>
            <span>•</span>
            <span>Founder, Scalvex</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        <div className="space-y-10 relative z-10">
          <section>
            <div className="p-6 rounded-2xl border border-accent/20 bg-accent/[0.02] shadow-[0_2px_8px_-3px_rgba(59,175,218,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <h2 className="text-base font-bold mb-2 text-foreground flex items-center gap-2">
                <Target className="h-4.5 w-4.5 text-accent" />
                Who This Guide Is For
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Service-based business owners, consultants, and founders looking to turn existing website traffic into meaningful client inquiries.
              </p>
            </div>
          </section>

          <section>
            <div className="p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)]">
              <p className="text-lg leading-relaxed mb-3 font-bold text-foreground">A steady flow of traffic is only half the battle.</p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
                Across our audits of service business websites, one pattern consistently stands out: sites get visitors, but few convert them into strategic conversations. The challenge usually isn't the volume of traffic—it's how clearly the website guides those visitors to the next step. Most platforms focus heavily on aesthetics while ignoring the invisible friction points that turn potential clients away.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-5 tracking-tight text-foreground">Why Most Sites Don’t Convert</h2>
            <div className="p-6 rounded-2xl border border-border/45 bg-card/45 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-border group-hover:bg-accent transition-colors duration-300" />
              <p className="mb-4 text-sm sm:text-base font-semibold text-foreground">Through our hands-on reviews, we typically observe a few recurring friction points:</p>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Unclear or buried invitations to take action</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Neglected mobile usability, where most first impressions happen today</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Subtle latency issues that cause visitors to lose patience</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Generic trust signals that fail to demonstrate authentic capability</span>
                </li>
              </ul>
              <p className="text-sm font-semibold text-foreground border-t border-border/40 pt-4 mt-2">Visual polish and decorative layouts don’t resolve these issues. Clarity and intentional design do.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 tracking-tight text-foreground">Conversion Optimization Checklist</h2>
            <ol className="space-y-6">
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <div className="w-full">
                    <h3 className="text-base font-bold text-foreground mb-1">Make Your CTA Unmissable</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Every page should guide the user toward a single, logical next action. Place it prominently, write clear action-oriented copy, and avoid cluttering the interface.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Ensure the CTA reflects the next natural step in a professional engagement</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Create clear visual contrast with ample breathing room</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Test user navigation paths on mobile devices</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Engineer Trust Instantly</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Show real proof and client outcomes rather than vague assertions. Focus on specific business results.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Highlight specific, believable outcomes from client engagements</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Integrate authentic client testimonials and case study links</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Display clear industry associations or certifications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Remove Friction</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Audit the conversion path. Simplify forms, remove distracting popups, and keep the user's focus on the value you provide.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Keep inquiry forms short, asking only for essential contact info</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Avoid distracting sidebars and pop-ups during key reading experiences</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Provide clear reassurance about data privacy and next steps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Prioritize Performance</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">A fast website builds confidence. Compress media assets, optimize clean code structures, and ensure pages load instantly.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Benchmark performance using developer speed metrics</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Optimize image formats and defer non-essential scripts</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Ensure interactive elements respond immediately</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </section>

          <section>
            <div className="p-6 rounded-2xl border border-accent/20 bg-accent/[0.02] shadow-[0_2px_8px_-3px_rgba(59,175,218,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              <h3 className="text-base font-bold mb-2 text-foreground flex items-center gap-2">
                <Sparkle className="h-4.5 w-4.5 text-accent" />
                Pro Tip
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Most conversion guides focus purely on software metrics. Instead, try testing your site’s first 5 seconds with someone who isn't familiar with your business. Ask them what you do and what step they should take next. Their honest feedback is often more valuable than any automated tool.
              </p>
            </div>
          </section>

          <section>
            <div className="p-8 border border-accent/20 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Looking to Improve Your Website's Conversion?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                We offer a founder-led review of your current website layout to identify subtle friction points and visibility issues. We'll provide a clear, practical summary of potential adjustments—no sales pitch, just straightforward observation.
              </p>
              <div>
                <Button size="lg" asChild className="hover:bg-accent/90 hover:shadow-lg transition-all duration-300 bg-accent text-white px-8 rounded-full font-semibold">
                  <Link to="/contact">Request Your Audit</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  </Layout>
);

export default FixConversion;
