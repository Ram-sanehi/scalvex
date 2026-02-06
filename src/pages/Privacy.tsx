import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Privacy = () => (
  <Layout>
    <div className="container-custom py-20 font-sans blog-fonts">

      {/* Header */}
      <header className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Privacy Policy
        </h1>

        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-base font-medium text-muted-foreground">
            Scalvex Digital Studio
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
            Privacy is not optional. It is foundational.
          </p>
          <p className="text-base leading-relaxed">
            This Privacy Policy explains how Scalvex (“we”, “us”, “our”) collects,
            uses, stores, and protects personal information when you visit our
            website, contact us, or engage with our services.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Scope */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Scope of This Policy</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="text-muted-foreground">
            This policy applies to all visitors, users, and clients interacting
            with the Scalvex website, communication channels, and digital services.
            It does not apply to third-party websites linked from our platform.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Data Collected */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

        <Card className="bg-muted/40 p-4 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">1. Information You Provide</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Name, email address, phone number</li>
              <li>Company or organization details</li>
              <li>Project briefs, inquiries, and messages</li>
              <li>Any information shared during communication</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">2. Automatically Collected Data</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>IP address and approximate location</li>
              <li>Browser type, device, and operating system</li>
              <li>Pages visited and interaction behavior</li>
            </ul>
          </div>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Usage */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <ul className="list-disc list-inside text-muted-foreground mb-2">
            <li>Respond to inquiries and communication</li>
            <li>Evaluate and execute project requests</li>
            <li>Improve website performance and content</li>
            <li>Maintain security and prevent misuse</li>
            <li>Comply with legal or regulatory obligations</li>
          </ul>

          <p>
            We <strong>never sell or commercially exploit</strong> your personal data.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Legal Basis */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Legal Basis for Processing</h2>

        <Card className="bg-muted/40 p-4">
          <p className="text-muted-foreground">
            Personal data is processed based on user consent, legitimate business
            interest, contractual necessity, or legal compliance, depending on
            the nature of the interaction.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Cookies */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Cookies & Tracking Technologies</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="text-muted-foreground">
            We may use cookies or similar technologies for analytics, performance
            monitoring, and basic functionality. These cookies do not collect
            sensitive personal information.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Sharing */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Data Sharing & Third Parties</h2>

        <Card className="bg-muted/40 p-4">
          <p className="text-muted-foreground">
            Data may be shared with trusted service providers (such as email or
            analytics tools) strictly for operational purposes. These providers
            are bound by confidentiality and data protection obligations.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Security */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Data Security</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="text-muted-foreground">
            We implement reasonable administrative, technical, and organizational
            safeguards to protect personal data. However, no method of transmission
            over the internet is completely secure.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Retention */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Data Retention</h2>

        <Card className="bg-muted/40 p-4">
          <p className="text-muted-foreground">
            Personal information is retained only for as long as necessary to
            fulfill its purpose or comply with legal requirements, after which
            it is securely deleted or anonymized.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Rights */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Your Rights</h2>

        <Card className="bg-background p-4 border-l-4 border-accent">
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent at any time</li>
            <li>Request restriction of processing</li>
          </ul>

          <p className="mt-2">
            Requests can be sent to{' '}
            <a
              href="mailto:scalvex1@gmail.com"
              className="text-accent underline"
            >
              scalvex1@gmail.com
            </a>
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Children */}
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Children’s Privacy</h2>

        <Card className="bg-muted/40 p-4">
          <p className="text-muted-foreground">
            Scalvex does not knowingly collect personal data from individuals
            under the age of 13. If such data is identified, it is removed promptly.
          </p>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* Legal */}
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-background p-6 border border-accent">
          <h3 className="text-lg font-semibold mb-2">
            Legal Relationship
          </h3>
          <p className="mb-2">
            This Privacy Policy should be read together with our Terms & Conditions.
          </p>
          <Link to="/terms" className="text-accent font-medium underline">
            View Terms & Conditions
          </Link>
        </Card>
      </section>

    </div>
  </Layout>
);

export default Privacy;
