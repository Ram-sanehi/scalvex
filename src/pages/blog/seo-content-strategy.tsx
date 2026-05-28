import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Sparkle } from 'lucide-react';

const SeoContentStrategy = () => (
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
            <span>SEO & Content</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
            SEO Content Strategy for Service Businesses
          </h1>
          
          <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground/85 font-medium mt-2">
            <span className="font-semibold text-foreground">Ram Vishwakarma</span>
            <span>•</span>
            <span>Founder, Scalvex</span>
            <span>•</span>
            <span>4 min read</span>
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
                Service providers, consultants, agencies, and B2B founders looking to transform content effort into high-quality client inquiries.
              </p>
            </div>
          </section>

          <section>
            <div className="p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)]">
              <p className="text-lg leading-relaxed mb-3 font-bold text-foreground">Effort without strategy leads to quiet dashboards.</p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
                Many service businesses publish blog content consistently but still struggle to generate meaningful inquiries. In most cases, the issue isn’t effort — it’s strategy. The content often targets broad informational traffic instead of the specific problems, questions, and buying intent of potential clients. As a result, websites attract visitors but fail to build trust, authority, or conversion momentum.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-5 tracking-tight text-foreground">Why Most Content Doesn’t Convert</h2>
            <div className="p-6 rounded-2xl border border-border/45 bg-card/45 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-border group-hover:bg-accent transition-colors duration-300" />
              <p className="mb-4 text-sm sm:text-base font-semibold text-foreground">Through our hands-on reviews of service business content, we typically observe a few recurring strategic mistakes:</p>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Publishing for search traffic volume rather than client intent</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Weak topic positioning that fails to differentiate your expertise</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Content journeys that don't align with buyer decision stages</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Generic, surface-level articles that lack original authority signals</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>No clear conversion pathways linking insights to core services</span>
                </li>
              </ul>
              <p className="text-sm font-semibold text-foreground border-t border-border/40 pt-4 mt-2">More pageviews won't close clients. Strategic depth and clear conversion pathways will.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 tracking-tight text-foreground">Content Strategy Optimization Checklist</h2>
            <ol className="space-y-6">
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <div className="w-full">
                    <h3 className="text-base font-bold text-foreground mb-1">Write for Buyer Intent, Not Just Traffic</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Target topics connected to real customer problems, decision-making, and purchasing intent.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Focus on bottom-of-funnel questions prospects ask during sales calls</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Avoid broad, high-volume keywords that attract non-buying visitors</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Address specific objections, cost questions, and execution challenges</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Build Topical Authority</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Create clusters of related insights that reinforce expertise in your service category.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Develop comprehensive guides on core service pillars</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Link related articles strategically to show depth of knowledge</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Keep insights updated with real industry changes and case studies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Connect Content to Services</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Every article should naturally guide readers toward a relevant service, solution, or next step.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Integrate contextually relevant internal links to service pages</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Include a clear, low-friction call-to-action at the end of each piece</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Align the article's topic directly with a solution you provide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Use Content to Build Trust</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Case studies, breakdowns, practical observations, and clear explanations convert better than generic listicles.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Share original data, project insights, and real-world results</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Write with a clear, founder-led voice based on practical experience</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Avoid marketing jargon and generic summaries</span>
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
                Before publishing content, ask: “Would this article genuinely help a potential client trust our expertise?” If the answer is no, the content probably exists for search engines — not people.
              </p>
            </div>
          </section>

          <section>
            <div className="p-8 border border-accent/20 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Want to Improve Your Content Strategy?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                We’ll review your current content structure, search positioning, topic targeting, and conversion pathways to identify what’s limiting visibility and lead generation. No sales pitch—just straightforward, actionable feedback.
              </p>
              <div>
                <Button size="lg" asChild className="hover:bg-accent/90 hover:shadow-lg transition-all duration-300 bg-accent text-white px-8 rounded-full font-semibold">
                  <Link to="/contact">Request Your Review</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  </Layout>
);

export default SeoContentStrategy;
