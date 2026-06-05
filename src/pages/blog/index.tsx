import { Link } from 'react-router-dom';
import { blogPosts } from './blogList';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogIndex = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative py-20 bg-background overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,175,218,0.06),rgba(255,255,255,0))]" />
      
      <div className="container-custom relative z-10 text-center">
        <FadeInSection>
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-accent font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Studio Insights & Resources</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
              Strategic Thinking on Web Visibility & Performance
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Practical, experience-driven insights for service businesses looking to strengthen credibility, increase search visibility, and capture qualified inquiries.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>

    {/* Articles Grid */}
    <section className="section-padding bg-background/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, idx) => (
            <FadeInSection key={post.slug} delay={100 * (idx % 3)} className="h-full">
              <div className="h-full border border-border/40 hover:border-accent/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-500 bg-card hover:-translate-y-1 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(59,175,218,0.06)] relative group overflow-hidden">
                {/* Hover gradient highlight */}
                <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Category/Tag and read time */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Insight
                    </span>
                    <span className="text-[11px] text-muted-foreground/80 font-medium">{post.readTime} read</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground/90 text-sm leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 relative z-10">
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-sm font-semibold text-accent hover:text-accent/80 flex items-center gap-1.5 group/link"
                  >
                    Read Article 
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section-padding bg-background relative overflow-hidden border-t border-border/50">
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
                Ready to Build a Website That Works?
              </h2>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
                Get a free website and visibility audit with practical insights tailored to your business goals. No sales pitch, just real recommendations.
              </p>
              
              {/* Button */}
              <div className="flex justify-center w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-sm px-8 py-5 h-auto bg-white text-primary hover:bg-white/90 font-bold rounded-full transition-all duration-300 hover:shadow-lg shadow-black/10 hover:translate-y-[-1px]"
                  asChild
                >
                  <Link to="/contact">Get a Free Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  </Layout>
);

export default BlogIndex;
