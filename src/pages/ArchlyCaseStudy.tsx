import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ArchlyCaseStudy = () => (
  <Layout>
    <div className="container-custom py-20 font-sans blog-fonts">
      <BackArrow />

      {/* Header */}
      <header className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Case Study: Archly
        </h1>

        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-base font-medium text-muted-foreground">
            By Ram Sanehi, Founder, Scalvex
          </span>
          <span className="text-xs text-muted-foreground">
            4 min read · Architecture · Portfolio Website
          </span>
        </div>
      </header>

      <Separator className="my-8" />

      {/* Client & Context */}
      <section className="mb-8 max-w-2xl mx-auto">
        <Card className="bg-background p-4 border-l-4 border-accent">
          <h2 className="text-xl font-bold mb-2">Client & Context</h2>
          <p>
            Archly is a modern architectural practice focused on functional,
            context-driven design. The studio needed a digital presence that
            reflected architectural thinking — not just visual aesthetics.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Intro Insight */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6">
          <p className="text-lg leading-relaxed mb-2 font-semibold">
            Architecture is experienced before it is explained.
          </p>
          <p className="text-base leading-relaxed">
            Most architecture websites overwhelm visitors with images while
            saying very little. Archly needed a platform that communicated intent,
            logic, and design philosophy — not just finished forms.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Problem */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="mb-2">
            Traditional portfolio websites failed to represent the studio’s
            depth of thinking and process.
          </p>

          <ul className="list-disc list-inside text-muted-foreground mb-2">
            <li>Projects presented as image galleries with no narrative</li>
            <li>Overdesigned layouts that distracted from the work</li>
            <li>No explanation of constraints, context, or decisions</li>
            <li>Lack of differentiation from generic architecture portfolios</li>
          </ul>

          <p>
            The real issue wasn’t visual quality — it was clarity and meaning.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Goals */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Project Goals</h2>

        <Card className="bg-muted/40 p-4">
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Present architecture as a structured narrative</li>
            <li>Highlight design intent, constraints, and outcomes</li>
            <li>Maintain visual restraint and spatial balance</li>
            <li>Appeal to serious clients, collaborators, and institutions</li>
          </ul>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Solution */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Solution</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="mb-2">
            Archly was designed as a calm, structured digital space —
            mirroring architectural discipline.
          </p>

          <ul className="list-disc list-inside text-muted-foreground">
            <li>Minimal layouts with strong grid systems</li>
            <li>Project pages structured as case studies</li>
            <li>Typography-led hierarchy over decorative elements</li>
            <li>Intentional use of white space and rhythm</li>
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
              <strong className="text-foreground">UI System:</strong>{' '}
              Custom component-based layout system
            </li>
            <li>
              <strong className="text-foreground">Content Structure:</strong>{' '}
              Modular case study templates
            </li>
            <li>
              <strong className="text-foreground">Performance:</strong>{' '}
              Optimized images, clean DOM structure
            </li>
            <li>
              <strong className="text-foreground">Deployment:</strong>{' '}
              Static-first hosting with scalable routing
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
            <li>Clear professional positioning for the studio</li>
            <li>Higher-quality project inquiries</li>
            <li>Improved client understanding before first contact</li>
            <li>A portfolio that reflects architectural thinking</li>
          </ul>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Insight */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6">
          <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
          <p>
            When architecture is communicated with restraint and structure,
            credibility follows naturally. Silence, space, and clarity are
            powerful tools — online as much as in the built environment.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* CTA */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-background p-6 border border-accent">
          <h3 className="text-lg font-semibold mb-2">
            Designing With Intent?
          </h3>
          <p className="mb-4">
            We help studios and founders translate their thinking into clear,
            credible digital experiences.
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

export default ArchlyCaseStudy;
