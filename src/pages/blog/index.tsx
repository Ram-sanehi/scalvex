import { Link } from 'react-router-dom';
import { blogPosts } from './blogList';
import Layout from '@/components/Layout';

const BlogIndex = () => (
  <Layout>
    <div className="container-custom py-20 font-sans" style={{ fontFamily: 'Inter, Manrope, DM Sans, sans-serif' }}>
      <h1 className="text-4xl font-bold mb-6 text-center leading-tight">Insights & Resources</h1>
      <p className="text-lg text-muted-foreground text-center mb-10 max-w-xl mx-auto leading-relaxed">
        Practical SEO, performance, and conversion insights for service businesses. <Link to="/services" className="text-accent underline">See our services</Link>.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {blogPosts.map((post) => (
          <div key={post.slug} className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between h-full transition-shadow duration-200 hover:shadow-md">
            <div>
              <h2 className="text-xl font-semibold mb-2 leading-tight">{post.title}</h2>
              <p className="text-muted-foreground text-base mb-3 leading-relaxed">{post.description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-muted-foreground">{post.readTime} read</span>
              <Link to={`/blog/${post.slug}`} className="text-accent font-medium hover:underline">Read Article →</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/contact" className="inline-block text-accent font-medium underline">Get a Free SEO & Website Audit</Link>
      </div>
    </div>
  </Layout>
);

export default BlogIndex;
