import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Terms = () => {
  const contactEmail = 'scalvex1@gmail.com';

  return (
    <Layout>
      <div className="container-custom py-20 font-sans blog-fonts">

        {/* Header */}
        <header className="mb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Terms & Conditions
          </h1>

          <div className="flex flex-col items-center gap-2 mb-2">
            <span className="text-base font-medium text-muted-foreground">
              Scalvex Digital Services
            </span>
            <span className="text-xs text-muted-foreground">
              Last updated · {new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </header>

        <Separator className="my-8" />

        {/* Intro */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-muted/40 p-6">
            <p className="text-lg leading-relaxed mb-2 font-semibold">
              Clear terms build clear relationships.
            </p>
            <p className="text-base leading-relaxed">
              These Terms & Conditions define the working relationship between
              Scalvex and its clients. By accessing our website or engaging our
              services, you agree to be bound by the terms outlined below.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Services */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">1. Services</h2>

          <Card className="bg-background p-4 border-l-4 border-accent">
            <p>
              Scalvex provides professional services including but not limited to
              web design, web development, SEO, branding, UI/UX design, digital
              strategy, and related consulting services.
            </p>
            <p className="mt-2 text-muted-foreground">
              The scope, timelines, deliverables, and pricing for each project
              are defined in individual proposals, agreements, or written
              communications approved by the client.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Client Responsibilities */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">2. Client Responsibilities</h2>

          <Card className="bg-muted/40 p-4">
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate, complete, and timely information</li>
              <li>Supply required content, assets, approvals, and feedback</li>
              <li>Ensure ownership or rights to all materials shared</li>
              <li>Respond within agreed timelines to avoid project delays</li>
            </ul>
            <p className="mt-3">
              Delays caused by missing inputs or approvals may result in revised
              timelines and additional costs.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Payments */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>

          <Card className="bg-background p-4 border-l-4 border-accent">
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Payment schedules are defined in the project agreement</li>
              <li>Advance or milestone payments may be required</li>
              <li>Final deliverables are released after full payment</li>
              <li>Late payments may incur additional charges or service suspension</li>
            </ul>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* IP */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>

          <Card className="bg-muted/40 p-4">
            <p>
              Upon full payment, clients receive ownership of custom deliverables
              created specifically for their project.
            </p>
            <p className="mt-2 text-muted-foreground">
              Scalvex retains ownership of pre-existing frameworks, templates,
              libraries, internal tools, and methodologies. We reserve the right
              to showcase completed work for portfolio and marketing purposes
              unless otherwise agreed in writing.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Confidentiality */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>

          <Card className="bg-background p-4 border-l-4 border-accent">
            <p>
              Both parties agree to maintain confidentiality of all sensitive or
              proprietary information shared during the course of a project.
            </p>
            <p className="mt-2 text-muted-foreground">
              Confidential information will not be disclosed to third parties
              without written consent, except where required by law.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Liability */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>

          <Card className="bg-muted/40 p-4">
            <p>
              Scalvex shall not be liable for indirect, incidental, special, or
              consequential damages arising from the use of our services.
            </p>
            <p className="mt-2 text-muted-foreground">
              Our total liability shall not exceed the total amount paid by the
              client for the specific project giving rise to the claim.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Revisions */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">7. Revisions & Scope Changes</h2>

          <Card className="bg-background p-4 border-l-4 border-accent">
            <p>
              Revisions are handled according to the scope defined in the project
              agreement.
            </p>
            <p className="mt-2 text-muted-foreground">
              Any work requested outside the agreed scope may be treated as a
              separate engagement and billed accordingly.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Termination */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">8. Termination</h2>

          <Card className="bg-muted/40 p-4">
            <p>
              Either party may terminate a project with written notice.
            </p>
            <p className="mt-2 text-muted-foreground">
              Termination does not waive payment obligations for completed work
              or work in progress.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Governing Law */}
        <section className="mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>

          <Card className="bg-background p-4 border-l-4 border-accent">
            <p>
              These Terms & Conditions are governed by the laws of the jurisdiction
              in which Scalvex operates.
            </p>
            <p className="mt-2 text-muted-foreground">
              Disputes will be resolved through mutual discussion or binding
              arbitration where applicable.
            </p>
          </Card>
        </section>

        <Separator className="my-8" />

        {/* Contact */}
        <section className="mb-10 max-w-2xl mx-auto">
          <Card className="bg-background p-6 border border-accent">
            <h3 className="text-lg font-semibold mb-2">Questions or Clarifications?</h3>
            <p className="mb-4">
              If you have any questions about these Terms & Conditions, feel free
              to reach out.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-block text-accent font-medium underline"
            >
              {contactEmail}
            </a>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Terms;
