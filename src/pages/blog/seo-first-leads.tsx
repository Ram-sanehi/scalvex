import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Sparkle } from 'lucide-react';

const SeoFirstLeads = () => (
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
            <span>SEO & Conversion</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
            How SEO-First Websites Generate Consistent Leads
          </h1>
          
          <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground/85 font-medium mt-2">
            <span className="font-semibold text-foreground">Ram Vishwakarma</span>
            <span>•</span>
            <span>Founder, Scalvex</span>
            <span>•</span>
            <span>3 min read</span>
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
                Service businesses, consultants, agencies, and founders who want to generate consistent, high-quality leads from their website.
              </p>
            </div>
          </section>

          <section>
            <div className="p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)]">
              <p className="text-lg leading-relaxed mb-3 font-bold text-foreground">Traffic but no leads? You’re not alone.</p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
                Across audits of many service business websites, the same pattern emerges: sites get visits, but few convert. The issue isn’t traffic—it’s friction, confusion, and missing trust signals. Most agencies miss these, but they’re fixable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-5 tracking-tight text-foreground">Why Most SEO-First Sites Don’t Convert</h2>
            <div className="p-6 rounded-2xl border border-border/45 bg-card/45 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-border group-hover:bg-accent transition-colors duration-300" />
              <p className="mb-4 text-sm sm:text-base font-semibold text-foreground">From real audits, here’s what we see most often:</p>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>SEO and conversion are treated as separate projects</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Calls-to-action are buried or unclear (80%+ of sites)</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Mobile experience is neglected (60%+ of traffic, but poor usability)</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Trust signals are missing or generic (no proof, no authority)</span>
                </li>
              </ul>
              <p className="text-sm font-semibold text-foreground border-t border-border/40 pt-4 mt-2">Visual polish and rankings don’t fix these. Action and clarity do.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 tracking-tight text-foreground">SEO-First Website Optimization Checklist</h2>
            <ol className="space-y-6">
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <div className="w-full">
                    <h3 className="text-base font-bold text-foreground mb-1">Unify SEO and Conversion</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Build every page for both search and conversion. Don’t treat them as separate projects.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Map content to buyer journey and conversion path</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Use clear, outcome-driven CTAs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div className="w-full">
                    <h3 className="text-base font-bold text-foreground mb-1">Engineer Trust Instantly</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Show proof above the fold—client results, reviews, certifications. Use specifics and numbers.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Highlight real outcomes (“3x leads in 8 weeks”)</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Show recognizable client logos or testimonials</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Link to case studies and reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div className="w-full">
                    <h3 className="text-base font-bold text-foreground mb-1">Remove Friction</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Audit every step from landing to conversion. Cut unnecessary fields, popups, and distractions.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Shorten forms to essentials (name, email, message)</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Minimize navigation away from the CTA</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Use clear, reassuring microcopy (“No spam, no obligation”)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                  <div className="w-full">
                    <h3 className="text-base font-bold text-foreground mb-1">Speed Is Non-Negotiable</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Sites loading in under 1.5s convert up to 2x better. Compress images, optimize code, and test on real devices.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Use Lighthouse or WebPageTest for benchmarks</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Defer non-essential scripts</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Prioritize mobile speed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </section>

          <section>
            <div className="p-6 rounded-2xl border border-accent/20 bg-accent/[0.02] shadow-[0_2px_8px_-3px_rgba(59,175,218,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <h3 className="text-base font-bold mb-2 text-foreground flex items-center gap-2">
                <Sparkle className="h-4.5 w-4.5 text-accent" />
                Pro Tip
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Audit your site’s first 5 seconds with real users. Ask them what they’d do next, what’s unclear, and what builds trust. The answers will reveal friction and missed opportunities faster than any tool.
              </p>
            </div>
          </section>

          <section>
            <div className="p-8 border border-accent/20 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Ready to Turn SEO Into Leads?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                We'll review your current website experience, identify visibility and conversion issues, and provide practical recommendations tailored to your business. No sales pitch—just actionable insights from real client projects.
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

export default SeoFirstLeads;
