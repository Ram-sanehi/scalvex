import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Sparkle } from 'lucide-react';

const FastSiteBenefits = () => (
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
            <span>Performance</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
            The Hidden Costs of a Slow Loading Website
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
                Service providers, consultants, agencies, and founders who want to turn site speed into a competitive advantage and convert more visitors.
              </p>
            </div>
          </section>

          <section>
            <div className="p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)]">
              <p className="text-lg leading-relaxed mb-3 font-bold text-foreground">Users make up their minds in milliseconds.</p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
                Most businesses underestimate how quickly users judge a website. A delay of even a few seconds can create hesitation, reduce trust, and push visitors toward competitors before they ever read your content. Website speed isn’t just a technical metric — it directly shapes user perception, search visibility, and conversion behavior.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-5 tracking-tight text-foreground">Why Slow Websites Hurt Business Growth</h2>
            <div className="p-6 rounded-2xl border border-border/45 bg-card/45 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-border group-hover:bg-accent transition-colors duration-300" />
              <p className="mb-4 text-sm sm:text-base font-semibold text-foreground">Through our hands-on reviews of service business websites, we typically observe a few recurring performance issues:</p>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Users associate slow-loading pages with low business credibility</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Mobile visitors abandon laggy sites rapidly under unstable connections</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Heavy animations and bloated layouts increase immediate bounce behavior</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Excessive plugins, tracking scripts, and technical bloat damage layout rendering</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Poor Core Web Vitals reduce search visibility and layout consistency</span>
                </li>
              </ul>
              <p className="text-sm font-semibold text-foreground border-t border-border/40 pt-4 mt-2">A slow layout creates immediate resistance. Clean codebases and rapid loading construct instant trust.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 tracking-tight text-foreground">Performance Optimization Checklist</h2>
            <ol className="space-y-6">
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <div className="w-full">
                    <h3 className="text-base font-bold text-foreground mb-1">Optimize Images Properly</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Use modern image formats, responsive sizing, lazy loading, and compression to reduce unnecessary payload size.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Serve modern formats like WebP or AVIF instead of outdated JPEGs</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Ensure responsive layouts load correctly scaled dimensions on all viewports</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Use lazy loading below the fold to save bandwidth and decrease startup latency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Reduce Script & Plugin Bloat</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Remove unnecessary libraries, trackers, animations, and third-party scripts that slow down rendering.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Consolidate or eliminate redundant tracking pixels and widgets</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Defer non-essential javascript execution until after first contentful paint</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Minimize CSS animation libraries that load CPU rendering threads</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Prioritize Mobile Performance</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Most users experience websites on mobile devices first. Design for unstable connections and smaller screens.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Design minimal DOM elements to reduce mobile CPU processing bottlenecks</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Ensure tap targets remain stable and don't layout shift during load</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Optimize rendering pathways for unstable 3G/4G network profiles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Improve Core Web Vitals</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Focus on loading stability, responsiveness, and layout consistency to improve both rankings and usability.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Limit Cumulative Layout Shifts (CLS) by giving images fixed aspect-ratio properties</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Optimize Largest Contentful Paint (LCP) by preloading critical hero media assets</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Keep Input Delay low to make interactive elements respond instantly</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Use Lightweight Modern Architecture</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Fast frameworks, clean codebases, and efficient rendering systems create noticeably better user experiences.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Use statically generated frameworks (like Next.js or React/Vite configurations)</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Implement modular, reusable components to keep files tiny and clean</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Rely on CSS layout styling rather than javascript-heavy layout calculation libraries</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Monitor Real User Performance</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Test websites on actual devices and networks instead of relying only on synthetic desktop benchmarks.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Audit real-user field data from real mobile browsers</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Run throttling tools in Chrome Developer tools to test cellular simulation speed</span>
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
                Open your website on mobile using normal cellular data instead of office Wi-Fi. If loading feels slow, confusing, or unstable to you, customers are experiencing the same thing — often with less patience.
              </p>
            </div>
          </section>

          <section>
            <div className="p-8 border border-accent/20 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Want to Improve Your Website Performance?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                We’ll review your current website speed, technical structure, Core Web Vitals, mobile experience, and rendering bottlenecks to identify what’s slowing down visibility and conversions. No sales pitch—just straightforward technical observation.
              </p>
              <div>
                <Button size="lg" asChild className="hover:bg-accent/90 hover:shadow-lg transition-all duration-300 bg-accent text-white px-8 rounded-full font-semibold">
                  <Link to="/contact">Request Your Speed Audit</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  </Layout>
);

export default FastSiteBenefits;
