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

const NilkamalCaseStudy = () => {
  const metricsData = [
    { label: "Page Load Speed", before: "5.9 seconds", after: "1.4 seconds" },
    { label: "Lighthouse Performance", before: "39/100", after: "98/100" },
    { label: "Mobile Optimization", before: "Non-responsive", after: "Fully Responsive" },
    { label: "Lead Quality Index", before: "Low-Intent Queries", after: "Commercial & Turnkey Inbound" }
  ];

  return (
    <Layout>
      <div className="container-custom py-20 font-sans blog-fonts">
        <BackArrow />

        {/* Header */}
        <header className="mb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Case Study: Nilkamal Interiors & Furnitures
          </h1>
          <div className="flex flex-col items-center gap-2 mb-2">
            <span className="text-base font-medium text-muted-foreground">
              By Ram Sanehi, Founder, Scalvex
            </span>
            <span className="text-xs text-muted-foreground">
              5 min read · Interior Design · Manufacturing & Turnkey Projects
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
              Nilkamal Interiors & Furnitures is a full-service interior design and
              manufacturing brand delivering residential, commercial, and institutional
              projects across India.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Intro Insight */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-muted/40 p-6">
            <p className="text-lg leading-relaxed mb-2 font-semibold">
              Premium work loses value if it isn’t communicated clearly.
            </p>
            <p className="text-base leading-relaxed">
              In high-ticket interiors, perception drives trust. Nilkamal needed a digital
              presence that reflected the same precision and craftsmanship as their physical work.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Problem */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">The Problem & Constraints</h2>
          <Card className="bg-background p-4 border-l-4 border-accent">
            <p className="mb-2">
              Despite strong execution capabilities, Nilkamal’s online presence failed to
              convey scale, quality, and credibility.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-2 space-y-1">
              <li>Generic website design that diluted premium positioning</li>
              <li>Unstructured presentation of services and project portfolio</li>
              <li>Lack of strong trust indicators for enterprise clients</li>
              <li>No clear narrative around process, execution, or expertise</li>
            </ul>
            <p>
              The challenge was not visibility — it was authority.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Goals */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Project Goals</h2>
          <Card className="bg-muted/40 p-4">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Position Nilkamal as a premium, large-scale interior partner</li>
              <li>Create clarity across services, capabilities, and execution flow</li>
              <li>Build confidence for high-value residential and commercial clients</li>
              <li>Drive qualified inquiries instead of generic leads</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Solution */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">The Solution & Mobile Layouts</h2>
          <Card className="bg-background p-4 border-l-4 border-accent">
            <p className="mb-2">
              We designed Nilkamal’s digital presence as a confidence-building system —
              not just a visual showcase.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Minimal, luxury-aligned UI with disciplined spacing</li>
              <li>Clear segmentation of services, sectors, and capabilities</li>
              <li>Strong typography to convey precision and professionalism</li>
              <li>Structured storytelling for projects and execution process</li>
              <li>Fluid mobile responsive structure optimized for site navigation on iOS and Android devices</li>
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
                <strong className="text-foreground">Frontend:</strong>{' '}
                React, Tailwind CSS
              </li>
              <li>
                <strong className="text-foreground">Design System:</strong>{' '}
                Component-based UI with consistent typography scale
              </li>
              <li>
                <strong className="text-foreground">Content Strategy:</strong>{' '}
                Case-led storytelling and service segmentation
              </li>
              <li>
                <strong className="text-foreground">Performance:</strong>{' '}
                Optimized assets and clean layout hierarchy
              </li>
              <li>
                <strong className="text-foreground">Deployment:</strong>{' '}
                Cloud-hosted with scalable structure
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
              <li>Significant improvement in perceived brand authority</li>
              <li>Higher quality inbound inquiries from serious clients</li>
              <li>Clearer understanding of services during sales conversations</li>
              <li>A digital presence aligned with physical craftsmanship</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Insight */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-muted/40 p-6">
            <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
            <p>
              In premium industries, clarity builds trust faster than decoration.
              When structure, tone, and intent align, design becomes credibility.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* CTA */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-background p-6 border border-accent">
            <h3 className="text-lg font-semibold mb-2">
              Need a Brand That Reflects Your Craft?
            </h3>
            <p className="mb-4">
              We help businesses translate real-world excellence into digital authority.
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

export default NilkamalCaseStudy;
