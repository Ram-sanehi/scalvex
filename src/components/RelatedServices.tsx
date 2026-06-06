import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Search, TrendingUp, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Growth Websites',
    path: '/growth-websites',
    desc: 'High-converting custom digital hubs designed to turn traffic into qualified inquiries.',
    icon: Sparkles,
    color: 'text-primary bg-primary/5 border-primary/10',
  },
  {
    title: 'Website Optimization',
    path: '/website-optimization',
    desc: 'Unlock hidden potential by identifying bottlenecks and optimizing user journeys.',
    icon: Search,
    color: 'text-accent bg-accent/5 border-accent/10',
  },
  {
    title: 'Visibility & SEO',
    path: '/visibility-seo',
    desc: 'Sustainable, high-intent ranking strategies to place your business where searchers look.',
    icon: TrendingUp,
    color: 'text-emerald-500 bg-emerald-500/5 border-emerald-500/10',
  },
  {
    title: 'Performance Improvements',
    path: '/performance-improvements',
    desc: 'Core Web Vitals, speed adjustments, and hosting updates for instantaneous loading.',
    icon: Zap,
    color: 'text-amber-500 bg-amber-500/5 border-amber-500/10',
  },
];

export const RelatedServices = () => {
  const location = useLocation();

  // Filter out the current page based on pathname
  // Also handle the legacy aliases to ensure we filter them out
  const currentPath = location.pathname;
  const isGrowthWebsites = currentPath === '/growth-websites' || currentPath === '/coimbatore-web-development';
  const isOptimization = currentPath === '/website-optimization' || currentPath === '/seo-service-businesses';
  const isVisibilitySeo = currentPath === '/visibility-seo' || currentPath === '/startup-website-design';
  const isPerformance = currentPath === '/performance-improvements' || currentPath === '/seo-architects-clinics';

  const filteredServices = services.filter(s => {
    if (isGrowthWebsites && s.path === '/growth-websites') return false;
    if (isOptimization && s.path === '/website-optimization') return false;
    if (isVisibilitySeo && s.path === '/visibility-seo') return false;
    if (isPerformance && s.path === '/performance-improvements') return false;
    return true;
  });

  return (
    <section className="section-padding bg-background border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(59,175,218,0.02),rgba(255,255,255,0))]" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent bg-accent/5 border border-accent/15 px-3 py-1 rounded-full">
            Ecosystem
          </span>
          <h2 className="text-3xl font-bold tracking-tight mt-4 mb-4">Integrated Web Growth Suite</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Every digital channel is connected. Pair our design capabilities with targeted SEO and rapid execution for compound growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link to={service.path} key={service.path} className="group">
                <Card className="h-full border border-border/40 hover:border-accent/40 shadow-sm hover:shadow-[0_8px_30px_rgba(59,175,218,0.04)] hover:-translate-y-1 transition-all duration-500 bg-card overflow-hidden relative">
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <CardContent className="p-5 flex flex-col justify-between h-full relative z-10">
                    <div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${service.color} transition-transform duration-500 group-hover:scale-105`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent mt-5 group-hover:underline">
                      Explore Service <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
