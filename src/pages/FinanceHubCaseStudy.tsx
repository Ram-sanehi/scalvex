import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FinanceHubCaseStudy = () => (
  <Layout>
    <div className="container-custom py-20 font-sans blog-fonts">
      <BackArrow />

      {/* Header */}
      <header className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Case Study: FinanceHub
        </h1>

        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-base font-medium text-muted-foreground">
            By Ram Sanehi, Founder, Scalvex
          </span>
          <span className="text-xs text-muted-foreground">
            5 min read · FinTech · AI-Powered Lending Platform
          </span>
        </div>
      </header>

      <Separator className="my-8" />

      {/* Client & Context */}
      <section className="mb-8 max-w-2xl mx-auto">
        <Card className="bg-background p-4 border-l-4 border-accent">
          <h2 className="text-xl font-bold mb-2">Client & Context</h2>
          <p>
            FinanceHub is a financial technology platform built for lenders, NBFCs,
            and financial institutions to automate loan processing, assess risk,
            and make faster, data-backed credit decisions.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Intro Insight */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6">
          <p className="text-lg leading-relaxed mb-2 font-semibold">
            Financial platforms fail when users don’t trust the decisions they see.
          </p>
          <p className="text-base leading-relaxed">
            In lending, speed means nothing without transparency. FinanceHub needed
            to combine AI-driven intelligence with human-readable clarity — without
            overwhelming users or violating compliance norms.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Problem */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="mb-2">
            Traditional loan management systems were slow, opaque, and difficult
            to scale.
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-2">
            <li>Manual approvals causing long turnaround times</li>
            <li>Black-box AI decisions with no explanation</li>
            <li>Low user trust in automated risk scoring</li>
            <li>Strict regulatory and compliance constraints</li>
          </ul>

          <p>
            The real challenge wasn’t automation — it was building confidence in
            automated decisions.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Goals */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Project Goals</h2>

        <Card className="bg-muted/40 p-4">
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Accelerate loan approvals without sacrificing accuracy</li>
            <li>Make AI decisions explainable and auditable</li>
            <li>Ensure compliance-ready workflows</li>
            <li>Design a scalable platform for enterprise adoption</li>
          </ul>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Solution */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="mb-2">
            FinanceHub was built as a clarity-first, AI-assisted decision platform.
          </p>

          <ul className="list-disc list-inside text-muted-foreground">
            <li>Explainable AI-powered loan scoring models</li>
            <li>Clean dashboards highlighting risk indicators</li>
            <li>Human-in-the-loop approval workflows</li>
            <li>Secure, modular architecture for compliance</li>
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
              <strong className="text-foreground">Backend:</strong>{' '}
              Node.js, Express.js
            </li>
            <li>
              <strong className="text-foreground">AI & Logic:</strong>{' '}
              Rule-based systems, ML risk models
            </li>
            <li>
              <strong className="text-foreground">Database:</strong>{' '}
              PostgreSQL
            </li>
            <li>
              <strong className="text-foreground">Security:</strong>{' '}
              Role-based access, encrypted data flows
            </li>
            <li>
              <strong className="text-foreground">Deployment:</strong>{' '}
              Docker, cloud infrastructure
            </li>
          </ul>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Results */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Up to 40% faster loan approval cycles</li>
            <li>Improved lender confidence in AI-driven decisions</li>
            <li>Reduced default risk through better scoring</li>
            <li>Enterprise-ready platform for large-scale adoption</li>
          </ul>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Insight */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6">
          <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
          <p>
            AI builds trust only when it explains itself. Transparent intelligence
            outperforms opaque automation in high-stakes financial systems.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* CTA */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-background p-6 border border-accent">
          <h3 className="text-lg font-semibold mb-2">
            Building a Trusted FinTech Product?
          </h3>
          <p className="mb-4">
            We design financial platforms that balance speed, intelligence,
            compliance, and user trust.
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

export default FinanceHubCaseStudy;
