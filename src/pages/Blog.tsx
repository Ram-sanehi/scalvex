import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Why SEO-First Website Development Matters',
    slug: 'seo-first-website-development',
    summary: 'Learn why building SEO into your website from day one is critical for long-term growth and visibility.',
    to: '/services',
  },
  {
    title: 'Common Website Mistakes That Kill Conversions',
    slug: 'website-mistakes-kill-conversions',
    summary: 'Avoid the most frequent pitfalls that cost businesses leads and revenue.',
    to: '/work',
  },
  {
    title: 'How Page Speed Impacts SEO & Leads',
    slug: 'page-speed-seo-leads',
    summary: 'See how site performance directly affects your search rankings and conversion rates.',
    to: '/services',
  },
  {
    title: 'Website Redesign Checklist for Service Businesses',
    slug: 'website-redesign-checklist',
    summary: 'A practical guide to ensure your next redesign drives results and avoids common traps.',
    to: '/work',
  },
];

export default function Blog() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h1 className="mb-8 text-3xl font-bold text-center">Insights & Resources</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Practical, experience-driven articles for business owners. Every post is written to educate, build authority, and support your growth. Internal links connect you to relevant <Link to="/services" className="underline text-accent">services</Link> and <Link to="/work" className="underline text-accent">case studies</Link>.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="p-6 bg-card border rounded-lg flex flex-col gap-3">
                <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                <p className="text-muted-foreground mb-2">{post.summary}</p>
                <Link to={post.to} className="text-sm text-accent underline">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
