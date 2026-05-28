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

const AlphaInvestmentCaseStudy = () => {
  const metricsData = [
    { label: "Page Load Speed", before: "6.4 seconds", after: "1.2 seconds" },
    { label: "Lead Conversion Rate", before: "1.4%", after: "4.8%" },
    { label: "Lighthouse Performance", before: "42/100", after: "98/100" },
    { label: "Mobile Responsiveness", before: "Non-optimized", after: "99% Mobile Score" }
  ];

  return (
    <Layout>
      <div className="container-custom py-20 font-sans blog-fonts">
        <BackArrow />

        {/* Header */}
        <header className="mb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Case Study: Alpha Investment Management
          </h1>
          <div className="flex flex-col items-center gap-2 mb-2">
            <span className="text-base font-medium text-muted-foreground">
              By Ram Sanehi, Founder, Scalvex
            </span>
            <span className="text-xs text-muted-foreground">
              6 min read · Finance · Investment Platform
            </span>
          </div>
        </header>

        <Separator className="my-8" />

        {/* Dashboards */}
        <LighthouseGauges perf={98} acc={100} best={100} seo={100} />
        <MetricsDashboard metrics={metricsData} />

        <Separator className="my-8" />

        {/* Client & Context */}
        <section className="mb-8 max-w-2xl mx-auto">
          <Card className="bg-background p-4 border-l-4 border-accent">
            <h2 className="text-xl font-bold mb-2">Client & Context</h2>
            <p>
              Alpha Investment Management is a modern investment advisory firm offering
              long-term, data-driven portfolio strategies for retail and institutional clients.
              The firm operates in a trust-critical domain where credibility directly impacts conversion.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Intro Insight */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-muted/40 p-6 mb-6">
            <p className="text-lg leading-relaxed mb-2 font-semibold">
              In finance, trust is not claimed — it is demonstrated.
            </p>
            <p className="text-base leading-relaxed">
              Most financial platforms fail not because of poor design, but because they
              overwhelm users, hide intent, and lack structural transparency.
              Alpha needed a platform that communicated confidence instantly.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Problem */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">The Problem & Constraints</h2>
          <Card className="bg-background p-4 border-l-4 border-accent">
            <p className="mb-2">
              Alpha’s previous digital presence did not reflect the firm’s expertise,
              investment rigor, or long-term philosophy.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-2 space-y-1">
              <li>Lack of institutional credibility and trust signals</li>
              <li>Complex investment concepts presented without clarity</li>
              <li>Poor content hierarchy and weak storytelling</li>
              <li>No foundation for future analytics or client dashboards</li>
            </ul>
            <p>
              The challenge was to simplify complexity without diluting authority.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Goals */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Project Goals</h2>
          <Card className="bg-muted/40 p-4">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Establish instant trust and professional credibility</li>
              <li>Present investment strategies with clarity and structure</li>
              <li>Increase qualified inbound leads and engagement</li>
              <li>Build a scalable foundation for future client portals</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Solution */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">The Solution & Mobile Optimization</h2>
          <Card className="bg-background p-4 border-l-4 border-accent">
            <p className="mb-2">
              We designed Alpha’s platform as a clarity-first, authority-driven experience.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Minimal, disciplined UI aligned with financial credibility</li>
              <li>Clear narrative flow from philosophy → strategy → proof</li>
              <li>Progressive disclosure of financial information</li>
              <li>Reusable components for long-term scalability</li>
              <li>Highly-fluid mobile responsiveness with fast mobile image loads</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Tech Stack */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <Card className="bg-muted/40 p-6">
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Frontend:</strong> React, Tailwind CSS</li>
              <li><strong className="text-foreground">Routing:</strong> React Router</li>
              <li><strong className="text-foreground">Architecture:</strong> Component-driven UI system</li>
              <li><strong className="text-foreground">Performance:</strong> Code splitting, lazy loading</li>
              <li><strong className="text-foreground">Accessibility:</strong> WCAG-compliant semantic HTML</li>
              <li><strong className="text-foreground">Deployment:</strong> CDN-backed static hosting</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Results */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
          <Card className="bg-background p-4 border-l-4 border-accent">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>~30% increase in qualified lead conversion</li>
              <li>Longer session duration due to improved content flow</li>
              <li>High Lighthouse scores across performance and accessibility</li>
              <li>Platform ready for analytics dashboards and client portals</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Insight */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-muted/40 p-6">
            <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
            <p>
              Financial trust is built through structure, transparency, and restraint.
              Reducing noise increases confidence.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* CTA */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-background p-6 border border-accent">
            <h3 className="text-lg font-semibold mb-2">
              Building a Trust-Critical Product?
            </h3>
            <p className="mb-4">
              We help finance, SaaS, and enterprise teams design platforms that convert
              clarity into confidence.
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

export default AlphaInvestmentCaseStudy;
