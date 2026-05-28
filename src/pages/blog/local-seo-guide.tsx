import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Target, Sparkle } from 'lucide-react';

const LocalSeoGuide = () => (
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
            <span>Local SEO</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
            Local SEO Guide for Service Providers
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
                Service-based businesses and regional providers aiming to attract qualified local customers from their immediate market area.
              </p>
            </div>
          </section>

          <section>
            <div className="p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)]">
              <p className="text-lg leading-relaxed mb-3 font-bold text-foreground">Proximity is the primary ranking factor for local intent.</p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
                Many service businesses assume simply having a website is enough to attract local clients. But in reality, most local customers discover businesses through map results, localized searches, reviews, and proximity-based trust signals. Without strong local visibility, even well-designed websites often struggle to generate consistent inquiries.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-5 tracking-tight text-foreground">Why Most Local Sites Fail to Attract Customers</h2>
            <div className="p-6 rounded-2xl border border-border/45 bg-card/45 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-border group-hover:bg-accent transition-colors duration-300" />
              <p className="mb-4 text-sm sm:text-base font-semibold text-foreground">Through our hands-on reviews of localized service websites, we typically observe a few recurring visibility challenges:</p>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Incomplete or unverified Google Business Profiles</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Inconsistent business name, address, and phone number (NAP) data across directories</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Weak geographic relevance and lack of dedicated service-area pages</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Missing local trust signals, customer reviews, and project location proof</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Generic metadata and page content devoid of geographic context</span>
                </li>
              </ul>
              <p className="text-sm font-semibold text-foreground border-t border-border/40 pt-4 mt-2">Map pack presence and local authority rankings aren't accidental. They require geographic accuracy and local trust.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 tracking-tight text-foreground">Local SEO Optimization Checklist</h2>
            <ol className="space-y-6">
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                  <div className="w-full">
                    <h3 className="text-base font-bold text-foreground mb-1">Optimize Your Google Business Profile</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Complete every field accurately, upload high-quality photos, and keep business information updated consistently.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Verify your address and select highly relevant primary and secondary categories</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Publish updates and upload recent project images regularly</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Encourage and respond to client reviews promptly</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Create Localized Service Pages</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Build dedicated pages targeting specific services and geographic areas instead of relying on one generic homepage.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Tailor each page's content to the unique local demand of that region</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Include local landmarks, maps, and specific regional service details</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Avoid duplicate content across service areas—make every page unique</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Strengthen Local Trust Signals</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Use testimonials, reviews, project examples, certifications, and recognizable local references to improve credibility.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Feature reviews from clients in specific neighboring suburbs or cities</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Link directly to localized case studies or project summaries</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Highlight local awards, certifications, or community involvements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Maintain Consistent Business Information</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Ensure your business name, phone number, address, and service information remain consistent across all directories and platforms.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Standardize formatting for addresses (e.g. 'Street' vs 'St.')</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Claim and clean up outdated directory citations regularly</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Match website footer details exactly with your Google Business Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Use Local Intent Content</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Publish articles and resources connected to regional customer problems, search intent, and local demand.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Address local regulations, weather conditions, or local design styles</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Target questions asked specifically by regional customers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6 rounded-2xl border border-border/30 bg-card shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] relative group">
                <div className="flex gap-4">
                  <span className="text-sm font-extrabold text-accent bg-accent/5 border border-accent/25 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</span>
                  <div className="w-full text-left">
                    <h3 className="text-base font-bold text-foreground mb-1">Improve Mobile Experience for Local Searches</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Most local searches happen on mobile devices. Prioritize speed, clarity, tap targets, and quick contact pathways.</p>
                    <div className="p-4 rounded-xl border border-border/20 bg-muted/20 space-y-2.5">
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Ensure phone numbers and maps are clickable tap targets</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Optimize load times for users on cellular connections</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-muted-foreground/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                        <span>Keep key contact forms simple and visible on mobile viewport entries</span>
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
                Search your own services using location-based keywords from a customer perspective. If your business doesn’t immediately appear trustworthy, relevant, or easy to contact within seconds, local competitors will likely win the inquiry first.
              </p>
            </div>
          </section>

          <section>
            <div className="p-8 border border-accent/20 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Want to Improve Your Local Search Visibility?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                We’ll review your website structure, Google Business presence, location targeting, and trust signals to identify what’s limiting local inquiries and rankings. No sales pitch—just clear, actionable visibility recommendations.
              </p>
              <div>
                <Button size="lg" asChild className="hover:bg-accent/90 hover:shadow-lg transition-all duration-300 bg-accent text-white px-8 rounded-full font-semibold">
                  <Link to="/contact">Request Your Local Audit</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  </Layout>
);

export default LocalSeoGuide;
