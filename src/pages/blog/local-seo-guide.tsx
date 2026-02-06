import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const LocalSeoGuide = () => (
  <Layout>
    <div className="container-custom py-20 font-sans blog-fonts">
      <BackArrow />
      <header className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Local SEO Guide for Service Providers</h1>
        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-base font-medium text-muted-foreground">By Ram Sanehi, Founder, Scalvex</span>
          <span className="text-xs text-muted-foreground">3 min read · Local SEO</span>
        </div>
      </header>
      <Separator className="my-8" />
      <section className="mb-8 max-w-2xl mx-auto">
        <Card className="bg-background p-4 border-l-4 border-accent">
          <h2 className="text-xl font-bold mb-2">Who This Guide Is For</h2>
          <p className="mb-2">Service businesses, consultants, agencies, and founders who want to win more local clients with smart SEO moves.</p>
        </Card>
      </section>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6 mb-6">
          <p className="text-lg leading-relaxed mb-2 font-semibold">Traffic but no local leads? You’re not alone.</p>
          <p className="text-base leading-relaxed mb-2">In 100+ local service business audits, the same issues appear: sites get visits, but few convert to local clients. The problem isn’t traffic—it’s friction, confusion, and missing trust signals. Most agencies miss these, but they’re fixable.</p>
        </Card>
      </section>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Most Local Sites Don’t Convert</h2>
        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="mb-2">From real audits, here’s what we see most often:</p>
          <ul className="list-disc list-inside mb-2 text-muted-foreground">
            <li>Google Business Profile is incomplete or missing</li>
            <li>Calls-to-action are buried or unclear (80%+ of sites)</li>
            <li>Mobile experience is neglected (60%+ of traffic, but poor usability)</li>
            <li>Trust signals are missing or generic (no proof, no authority)</li>
          </ul>
          <p className="mb-2">Visual polish and ads don’t fix these. Action and clarity do.</p>
        </Card>
      </section>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Local SEO Optimization Checklist</h2>
        <ol className="list-decimal list-inside space-y-8">
          <li>
            <h3 className="text-lg font-semibold mb-2">Optimize Google Business Profile</h3>
            <p className="mb-2">Claim and complete your profile for maximum visibility. Use specifics and numbers.</p>
            <Card className="bg-muted/40 p-4 mb-2">
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Fill out all fields, add photos and services</li>
                <li>Link to <Link to="/services" className="text-accent underline">Services</Link></li>
              </ul>
            </Card>
          </li>
          <li>
            <h3 className="text-lg font-semibold mb-2">Engineer Trust Instantly</h3>
            <p className="mb-2">Show proof above the fold—client results, reviews, certifications. Use specifics and numbers.</p>
            <Card className="bg-muted/40 p-4 mb-2">
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Highlight real outcomes (“3x leads in 8 weeks”)</li>
                <li>Show recognizable client logos or testimonials</li>
                <li>Link to case studies and reviews</li>
              </ul>
            </Card>
          </li>
          <li>
            <h3 className="text-lg font-semibold mb-2">Remove Friction</h3>
            <p className="mb-2">Audit every step from landing to conversion. Cut unnecessary fields, popups, and distractions.</p>
            <Card className="bg-muted/40 p-4 mb-2">
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Shorten forms to essentials (name, email, message)</li>
                <li>Minimize navigation away from the CTA</li>
                <li>Use clear, reassuring microcopy (“No spam, no obligation”)</li>
              </ul>
            </Card>
          </li>
          <li>
            <h3 className="text-lg font-semibold mb-2">Speed Is Non-Negotiable</h3>
            <p className="mb-2">Sites loading in under 1.5s convert up to 2x better. Compress images, optimize code, and test on real devices.</p>
            <Card className="bg-muted/40 p-4 mb-2">
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Use Lighthouse or WebPageTest for benchmarks</li>
                <li>Defer non-essential scripts</li>
                <li>Prioritize mobile speed</li>
              </ul>
            </Card>
          </li>
        </ol>
      </section>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6 mb-6">
          <h3 className="text-lg font-semibold mb-2">Pro Tip</h3>
          <p className="text-base leading-relaxed">Audit your site’s first 5 seconds with real users. Ask them what they’d do next, what’s unclear, and what builds trust. The answers will reveal friction and missed opportunities faster than any tool.</p>
        </Card>
      </section>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-background p-6 border border-accent">
          <h3 className="text-lg font-semibold mb-2">Ready to Win More Local Leads?</h3>
          <p className="text-base leading-relaxed mb-4">Get a free, expert-led local SEO audit. You’ll discover exactly what’s blocking conversions, what to fix, and how to turn traffic into qualified leads. No sales pitch—just actionable insights from real client projects.</p>
          <Link to="/contact" className="inline-block text-accent font-medium underline">Request Your Audit</Link>
        </Card>
      </section>
    </div>
  </Layout>
);

export default LocalSeoGuide;
