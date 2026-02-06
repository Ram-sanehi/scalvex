import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Why SEO-First Website Development Drives Real Business Growth',
    slug: 'seo-first-website-development',
    summary: 'Discover why integrating SEO from day one is critical to attract qualified leads and maximize long-term ROI.',
    to: '/services',
  },
  {
    title: 'Top Website Mistakes That Kill Conversions (And How to Fix Them)',
    slug: 'website-mistakes-kill-conversions',
    summary: 'Learn the most common errors in website design and UX that prevent visitors from becoming clients, and how to avoid them.',
    to: '/work',
  },
  {
    title: 'How Page Speed Impacts SEO, UX, and Revenue',
    slug: 'page-speed-seo-leads',
    summary: 'Understand how website performance affects search rankings, user engagement, and ultimately your business leads.',
    to: '/services',
  },
  {
    title: 'The Ultimate Website Redesign Checklist for Service Businesses',
    slug: 'website-redesign-checklist',
    summary: 'A step-by-step guide to ensure your website redesign improves visibility, usability, and conversions without losing SEO value.',
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
            Actionable, experience-driven insights for service businesses and entrepreneurs. Each post is crafted to educate, build authority, and help you grow your business. Explore related <Link to="/services" className="underline text-accent">services</Link> and <Link to="/work" className="underline text-accent">case studies</Link> for practical examples.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="p-6 bg-card border rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold mb-2 text-foreground">{post.title}</h2>
                <p className="text-muted-foreground mb-3">{post.summary}</p>
                <Link
                  to={post.to}
                  className="text-sm font-medium text-accent hover:underline transition-colors"
                >
                  Read full article →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
