import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AgrifreshCaseStudy = () => (
  <Layout>
    <div className="container-custom py-20 font-sans blog-fonts">
      <BackArrow />

      {/* Header */}
      <header className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Case Study: Agrifresh
        </h1>

        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-base font-medium text-muted-foreground">
            By Ram Sanehi, Founder, Scalvex
          </span>
          <span className="text-xs text-muted-foreground">
            6 min read · AgriTech · E-Commerce Platform
          </span>
        </div>
      </header>

      <Separator className="my-8" />

      {/* Client & Context */}
      <section className="mb-8 max-w-2xl mx-auto">
        <Card className="bg-background p-4 border-l-4 border-accent">
          <h2 className="text-xl font-bold mb-2">Client & Context</h2>
          <p>
            Agrifresh is an agriculture-focused e-commerce and logistics platform designed
            to connect farmers directly with consumers and retailers across rural and
            urban India.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Intro Insight */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6">
          <p className="text-lg leading-relaxed mb-2 font-semibold">
            Technology adoption fails when it asks people to change too much.
          </p>
          <p className="text-base leading-relaxed">
            In agriculture, trust, simplicity, and reliability matter more than features.
            Agrifresh needed a platform that worked in real-world conditions — not ideal ones.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Problem */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="mb-2">
            Existing agri-commerce solutions were failing farmers due to complexity and
            unreliable performance.
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-2">
            <li>Low digital literacy among primary users</li>
            <li>Unstable internet connectivity in rural regions</li>
            <li>Opaque pricing and unclear order status</li>
            <li>Inefficient logistics and delayed fulfillment</li>
          </ul>

          <p>
            The challenge wasn’t just building software — it was designing confidence into
            every step.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Goals */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Project Goals</h2>

        <Card className="bg-muted/40 p-4">
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Enable frictionless ordering for first-time digital users</li>
            <li>Ensure fast performance on low-bandwidth networks</li>
            <li>Provide transparent pricing and order tracking</li>
            <li>Build a scalable system for multi-region expansion</li>
          </ul>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Solution */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="mb-2">
            We designed Agrifresh as a performance-first, trust-centric platform.
          </p>

          <ul className="list-disc list-inside text-muted-foreground">
            <li>Minimal, icon-driven UI with guided flows</li>
            <li>Offline-tolerant architecture with graceful fallbacks</li>
            <li>Clear pricing, delivery timelines, and order visibility</li>
            <li>Admin dashboards for supply and logistics management</li>
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
              React, Tailwind CSS, Progressive Web App (PWA)
            </li>
            <li>
              <strong className="text-foreground">Backend:</strong>{' '}
              Node.js, Express.js
            </li>
            <li>
              <strong className="text-foreground">Database:</strong>{' '}
              SQLite / PostgreSQL (region-scalable)
            </li>
            <li>
              <strong className="text-foreground">State & Data:</strong>{' '}
              REST APIs, Optimistic UI updates
            </li>
            <li>
              <strong className="text-foreground">Performance:</strong>{' '}
              Code splitting, lazy loading, image optimization
            </li>
            <li>
              <strong className="text-foreground">Deployment:</strong>{' '}
              Docker, Cloud-based hosting
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
            <li>Significantly higher farmer onboarding and retention</li>
            <li>Improved order completion rates</li>
            <li>Reduced support dependency due to clarity and UX</li>
            <li>Scalable foundation for new regions and partners</li>
          </ul>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Insight */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6">
          <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
          <p>
            Adoption increases when systems respect users’ reality. Performance, clarity,
            and trust outperform feature-heavy designs every time.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* CTA */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-background p-6 border border-accent">
          <h3 className="text-lg font-semibold mb-2">
            Building a High-Impact Product?
          </h3>
          <p className="mb-4">
            We design and engineer platforms that perform under real-world constraints —
            from low bandwidth to high scale.
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

export default AgrifreshCaseStudy;
