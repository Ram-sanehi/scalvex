import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const LighthouseGauges = ({ perf, seo, best, acc }: { perf: number; seo: number; best: number; acc: number }) => {
  const gauges = [
    { label: 'Performance', score: perf, color: 'stroke-emerald-500 text-emerald-600' },
    { label: 'Accessibility', score: acc, color: 'stroke-emerald-500 text-emerald-600' },
    { label: 'Best Practices', score: best, color: 'stroke-emerald-500 text-emerald-600' },
    { label: 'SEO', score: seo, color: 'stroke-emerald-500 text-emerald-600' }
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 px-4 bg-muted/30 border border-border/80 rounded-xl mb-10 max-w-2xl mx-auto">
      {gauges.map((g, i) => {
        const offset = 175 * (1 - g.score / 100);
        return (
          <div key={i} className="flex flex-col items-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="28" className="stroke-muted/10" strokeWidth="4.5" fill="transparent" />
                <circle cx="32" cy="32" r="28" className={g.color} strokeWidth="4.5" fill="transparent" strokeDasharray="175" strokeDashoffset={offset} strokeLinecap="round" />
              </svg>
              <span className="absolute font-bold text-sm text-foreground">{g.score}</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mt-2">{g.label}</span>
          </div>
        );
      })}
    </div>
  );
};

const MetricsDashboard = ({ metrics }: { metrics: { label: string; before: string; after: string }[] }) => {
  return (
    <div className="border border-border/80 rounded-xl overflow-hidden mb-10 max-w-2xl mx-auto shadow-sm bg-card">
      <div className="bg-muted/40 px-4 py-3 border-b border-border">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Before vs After Performance Metrics</h3>
      </div>
      <div className="divide-y divide-border/60">
        {metrics.map((m, i) => (
          <div key={i} className="grid grid-cols-3 p-4 items-center text-sm">
            <span className="font-semibold text-foreground">{m.label}</span>
            <span className="text-destructive font-medium line-through">{m.before}</span>
            <span className="text-emerald-600 font-bold">{m.after}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SanjhBoutiqueCaseStudy = () => {
  const metricsData = [
    { label: "Page Load Speed", before: "4.8 seconds", after: "1.1 seconds" },
    { label: "Lighthouse Performance", before: "42/100", after: "99/100" },
    { label: "Mobile Optimization", before: "Poor/Unoptimized", after: "Fully Responsive" },
    { label: "Lead Quality Index", before: "Low-Intent Queries", after: "High-Intent Consultations" }
  ];

  return (
    <Layout>
      <div className="container-custom py-20 font-sans blog-fonts">
        <BackArrow />

        {/* Header */}
        <header className="mb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Case Study: Sanjh Boutique
          </h1>
          <div className="flex flex-col items-center gap-2 mb-2">
            <span className="text-base font-medium text-muted-foreground">
              By Ram Sanehi, Founder, Scalvex
            </span>
            <span className="text-xs text-muted-foreground">
              4 min read · Luxury E-Commerce · Creative Fashion & Couture Studio
            </span>
          </div>
        </header>

        <Separator className="my-8" />

        {/* Dashboards */}
        <LighthouseGauges perf={99} acc={100} best={100} seo={100} />
        <MetricsDashboard metrics={metricsData} />

        <Separator className="my-8" />

        {/* Client & Context */}
        <section className="mb-8 max-w-2xl mx-auto">
          <Card className="bg-background p-4 border-l-4 border-accent">
            <h2 className="text-xl font-bold mb-2">Client & Context</h2>
            <p>
              Sanjh Boutique (Atelier Sanjh Craft) is a premium designer brand delivering 
              bespoke bridal wear, heritage ethnic garments, and contemporary drapes. The 
              boutique serves high-end clientele looking for personalized consultation and 
              exquisite craftsmanship.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Intro Insight */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-muted/40 p-6">
            <p className="text-lg leading-relaxed mb-2 font-semibold">
              Bespoke luxury requires a digital experience that mirrors the precision of the needle.
            </p>
            <p className="text-base leading-relaxed">
              When selling high-value, tailored fashion online, standard e-commerce grid models fail to build the necessary connection. Sanjh Boutique needed a visual showroom that structured the bespoke design journey and simplified booking for consultations.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Problem */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">The Problem & Constraints</h2>
          <Card className="bg-background p-4 border-l-4 border-accent">
            <p className="mb-2">
              The boutique's previous digital touchpoints relied on fragmented social messaging and did not effectively represent the physical brand's authority.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-2 space-y-1">
              <li>Lack of a clear visual structure detailing the custom atelier process</li>
              <li>Unstructured, manual messaging flows that led to high drop-offs</li>
              <li>Generic, clunky authentication processes for order tracking and user accounts</li>
              <li>Poor mobile response and speed issues while navigating large image catalogs</li>
            </ul>
            <p>
              The goal was to convert casual browsers into high-intent bridal consultation bookings.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Goals */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Project Goals</h2>
          <Card className="bg-muted/40 p-4">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Deliver a luxury-aligned, visual-first online showroom interface</li>
              <li>Create clear custom-tailoring process flows to guide visitors step-by-step</li>
              <li>Integrate secure Supabase authentication with user-friendly credentials</li>
              <li>Direct high-intent leads to WhatsApp and custom inquiry forms smoothly</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Solution */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">The Solution & Luxury Rebuild</h2>
          <Card className="bg-background p-4 border-l-4 border-accent">
            <p className="mb-2">
              We rebuilt Sanjh Boutique’s website into an interactive digital atelier with clean typography and brand-focused styles.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Custom homepage process sections mapping the designer journey</li>
              <li>State-managed accordion layouts detailing the Atelier differences</li>
              <li>Interactive product Quick View modals featuring simulated back views</li>
              <li>Mobile-first floating consultation components (WhatsApp integration)</li>
              <li>Flexible credentials (Email/Phone) backed by Supabase Auth with Google OAuth setup</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Tech Stack */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <Card className="bg-muted/40 p-6">
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Frontend Framework:</strong>{' '}
                React (Vite), TanStack Router
              </li>
              <li>
                <strong className="text-foreground">Styling & UI:</strong>{' '}
                Tailwind CSS, custom sepia map filters, component-based variables
              </li>
              <li>
                <strong className="text-foreground">Backend & Database:</strong>{' '}
                Supabase, PostgreSQL
              </li>
              <li>
                <strong className="text-foreground">Authentication:</strong>{' '}
                Supabase Auth (supporting dynamic Email/Phone toggles and GCP Google OAuth)
              </li>
              <li>
                <strong className="text-foreground">Integration:</strong>{' '}
                Direct WhatsApp consultation routing and custom inquiry schemas
              </li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Results */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
          <Card className="bg-background p-4 border-l-4 border-accent">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>4.3x increase in direct WhatsApp consultation requests</li>
              <li>Reduced customer login friction through dynamic authentication toggles</li>
              <li>Perfect Lighthouse SEO and core accessibility scores</li>
              <li>Streamlined inquiry management, saving hours of manual sales sorting</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Insight */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-muted/40 p-6">
            <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
            <p>
              Luxury fashion is sold on detail. Moving the simulated back-view to a clear caption under the thumbnails, applying brand-aligned maps, and making WhatsApp sticky for immediate mobile styling tips helped elevate trust and convert visitors to bookings.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* CTA */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-background p-6 border border-accent">
            <h3 className="text-lg font-semibold mb-2">
              Ready to Showcase Your Design Work?
            </h3>
            <p className="mb-4">
              We help creative studios, builders, and high-end brands craft digital systems that convert.
            </p>
            <Link
              to="/contact"
              className="inline-block text-accent font-medium underline"
            >
              Start a Conversation
            </Link>
          </Card>
        </section>

      </div>
    </Layout>
  );
};

export default SanjhBoutiqueCaseStudy;
