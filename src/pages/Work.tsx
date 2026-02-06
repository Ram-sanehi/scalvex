import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProjectStack from '@/components/ProjectStack';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Work = () => {
  const projects = [
    {
      featured: true,
      title: 'Alpha Investment Management',
      image: '/aim.png',
      type: 'Case Study',
      context:
        'Digital platform for an investment advisory firm focused on trust, clarity, and performance.',
      problem:
        'Lack of credibility, complex financial data presentation, poor UX, and scalability concerns.',
      goal:
        'Create a high-trust, scalable, and performance-optimized platform for investment services.',
      strategy:
        'Professional UI, structured financial content, secure architecture, SEO, and accessibility.',
      execution:
        'Responsive web application, modular sections, financial charts, SEO optimization, CI/CD pipeline.',
      outcome:
        'Improved credibility, higher engagement, better conversions, and a future-ready platform.',
      tools: [
        'React',
        'Tailwind CSS',
        'Chart.js',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'JWT',
        'Docker',
        'CI/CD'
      ],
      link: '/alphainvestmentcasestudy'
    },
    {
      featured: true,
      title: 'Nilkamal Interiors & Furnitures',
      image: '/nilkamal.png',
      type: 'Client Project',
      context:
        'A digital presence for an interior design and furniture business showcasing premium projects.',
      problem:
        'Outdated website, weak visual storytelling, low lead conversion, and poor mobile experience.',
      goal:
        'Present interior projects professionally and increase qualified client inquiries.',
      strategy:
        'Visual-first layouts, clean typography, strong imagery, and conversion-focused CTAs.',
      execution:
        'Modern UI redesign, responsive galleries, optimized images, fast-loading pages.',
      outcome:
        'Stronger brand perception, improved engagement, and higher-quality leads.',
      tools: [
        'React',
        'Tailwind CSS',
        'Responsive Design',
        'Image Optimization'
      ],
      link: '/nilkamalinteriorscasestudy'
    },
    {
      featured: true,
      title: 'Archly',
      image: '/archly.png',
      type: 'Case Study',
      context:
        'A complete digital platform for architects to showcase projects and professional work.',
      problem:
        'Scattered portfolio, lack of structured presentation, and weak online presence.',
      goal:
        'Create a centralized platform to present architectural work professionally.',
      strategy:
        'Portfolio-first UX, minimal design, strong visual hierarchy, SEO optimization.',
      execution:
        'Project galleries, case-study layouts, responsive design, SEO-ready pages.',
      outcome:
        'Stronger personal brand, improved visibility, and increased client outreach.',
      tools: [
        'React',
        'Tailwind CSS',
        'Portfolio Design',
        'SEO Optimization'
      ],
      link: '/archlycasestudy'
    },
    {
      featured: true,
      title: 'AgriFresh',
      image: '/agrifresh.png',
      type: 'Client Project',
      context:
        'E-commerce platform for fresh agricultural products with user accounts and payments.',
      problem:
        'No digital sales channel, limited reach, and inefficient order management.',
      goal:
        'Enable online sales with secure payments and user account management.',
      strategy:
        'Simple shopping flow, mobile-first UX, secure checkout, scalable backend.',
      execution:
        'Product catalog, user authentication, cart & checkout, payment gateway integration.',
      outcome:
        'Expanded market reach, streamlined orders, and better customer experience.',
      tools: [
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'Payment Gateway',
        'Authentication'
      ],
      link: '/agrifreshcasestudy'
    },
    {
      featured: true,
      title: 'FinanceHub',
      image: '/financehub.png',
      type: 'Case Study',
      context:
        'AI-driven finance and loan management system for individuals and small businesses.',
      problem:
        'Manual loan tracking, lack of insights, poor financial visibility, and complex workflows.',
      goal:
        'Simplify finance and loan management using AI-driven insights and automation.',
      strategy:
        'Dashboard-driven UX, AI recommendations, automation, and secure system design.',
      execution:
        'Role-based dashboards, loan tracking modules, AI insights, secure authentication.',
      outcome:
        'Smarter financial decisions, reduced manual effort, and improved user adoption.',
      tools: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'AI Integration',
        'JWT'
      ],
      link: '/financehubcasestudy'
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Our Work</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Real projects showcasing our approach to SEO-driven, performance-focused web development.
                Each project demonstrates measurable business impact.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <ProjectStack projects={projects} />

          {/* Experience & Trust Block */}
          <div
            className="mt-16 text-center text-muted-foreground"
            style={{ fontWeight: 400, letterSpacing: '0.01em' }}
          >
            <div className="mb-2" style={{ fontWeight: 300, fontSize: '1rem' }}>
              Trusted by businesses across finance, interiors, agriculture, and professional services.
            </div>
            <div className="mb-2" style={{ fontWeight: 300, fontSize: '1rem' }}>
              Experience delivering SEO-ready, scalable websites for growing brands.
            </div>
            <div className="mb-2" style={{ fontWeight: 300, fontSize: '1rem' }}>
              Additional project details are shared during discovery calls.
            </div>
            <Link to="/contact" className="text-sm text-accent underline">
              Request additional client work →
            </Link>
            <div className="mt-2" style={{ fontWeight: 300, fontSize: '0.85rem' }}>
              We intentionally showcase a limited number of projects to maintain clarity and relevance.
            </div>
            <div className="mt-1" style={{ fontWeight: 200, fontSize: '0.75rem' }}>
              Some client work may include restricted features or data not shown publicly.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-primary-foreground">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's discuss how we can help bring your vision to life with a website built for growth.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
