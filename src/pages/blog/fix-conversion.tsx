import Layout from '@/components/Layout';
import { BackArrow } from '@/components/BackArrow';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';


const FixConversion = () => (
  <Layout>
    <div className="container-custom py-20 font-sans blog-fonts">
      <BackArrow />
      <header className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Why Most Websites Fail to Convert (And How to Fix It)</h1>
        <div className="flex flex-col items-center gap-2 mb-2">
          <span className="text-base font-medium text-muted-foreground">By Ram Sanehi, Founder, Scalvex</span>
          <span className="text-xs text-muted-foreground">5 min read · Conversion</span>
        </div>
      </header>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6 mb-6">
          <p className="text-lg leading-relaxed mb-2 font-semibold">Traffic but no leads? You’re not alone.</p>
          <p className="text-base leading-relaxed mb-2">
            In the last 100+ service business audits, one pattern stands out: sites get visits, but few convert. The culprit isn’t lack of traffic—it’s friction, confusion, and missed trust signals. Most agencies overlook these, but they’re fixable.
          </p>
        </Card>
      </section>
      <section className="mb-8 max-w-2xl mx-auto">
        <Card className="bg-background p-4 border-l-4 border-accent">
          <h2 className="text-xl font-bold mb-2">Who This Guide Is For</h2>
          <p className="mb-2">Service businesses, consultants, agencies, and founders who want more qualified leads from their website.</p>
        </Card>
      </section>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Most Sites Don’t Convert</h2>
        <Card className="bg-background p-4 border-l-4 border-accent">
          <p className="mb-2">From real audits, here’s what we see most often:</p>
          <ul className="list-disc list-inside mb-2 text-muted-foreground">
            <li>Calls-to-action buried or unclear (seen in 80%+ of sites)</li>
            <li>Mobile experience neglected (60%+ of traffic, but poor usability)</li>
            <li>Slow load times (sites above 2s lose up to 40% of leads)</li>
            <li>Trust signals missing or generic (no proof, no authority)</li>
          </ul>
          <p className="mb-2">Visual polish and animations don’t fix these. Action and clarity do.</p>
        </Card>
      </section>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Conversion Optimization Checklist</h2>
        <ol className="list-decimal list-inside space-y-8">
          <li>
            <h3 className="text-lg font-semibold mb-2">Make Your CTA Unmissable</h3>
            <p className="mb-2">Every page should have a single, clear action. Place it above the fold, use direct language, and repeat only where context demands.</p>
            <Card className="bg-muted/40 p-4 mb-2">
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Use verbs and outcomes (“Request a Consultation” beats “Submit”)</li>
                <li>Contrast color and whitespace for visibility</li>
                <li>Test placement on mobile and desktop</li>
              </ul>
            </Card>
          </li>
          <li>
            <h3 className="text-lg font-semibold mb-2">Engineer Trust Instantly</h3>
            <p className="mb-2">Show proof above the fold—client results, reviews, certifications. Avoid vague claims; use specifics and numbers.</p>
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
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-muted/40 p-6 mb-6">
          <h3 className="text-lg font-semibold mb-2">Pro Tip</h3>
          <p className="text-base leading-relaxed">
            Most conversion guides miss this: Audit your site’s first 5 seconds with real users. Ask them what they’d do next, what’s unclear, and what builds trust. The answers will reveal friction and missed opportunities faster than any tool.
          </p>
        </Card>
      </section>
      <Separator className="my-8" />
      <section className="mb-10 max-w-2xl mx-auto">
        <Card className="bg-background p-6 border border-accent">
          <h3 className="text-lg font-semibold mb-2">Ready to Fix Your Site’s Conversion?</h3>
          <p className="text-base leading-relaxed mb-4">
            Get a free, expert-led audit. You’ll discover exactly what’s blocking conversions, what to fix, and how to turn traffic into qualified leads. No sales pitch—just actionable insights from real client projects.
          </p>
          <Link to="/contact" className="inline-block text-accent font-medium underline">Request Your Audit</Link>
        </Card>
      </section>
    </div>
  </Layout>
);

export default FixConversion;
