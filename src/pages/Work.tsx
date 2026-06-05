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
      title: 'Sanjh Boutique',
      image: '/sanjhboutique.png',
      type: 'Case Study',
      context:
        'Luxury digital showroom and customer portal for a bespoke designer boutique.',
      problem:
        'The previous online presence lacked structural organization for custom design processes and failed to offer secure, personalized client credentials or dynamic booking flows.',
      goal:
        'Create a luxury digital showroom with seamless booking pipelines, a clean and modern design system, and custom contact forms to improve client inquiry quality.',
      strategy:
        'Focused on responsive visual hierarchies, desaturated maps for branding cohesion, clean state-managed accordions, and flexible authentication models.',
      execution:
        'Developed a bespoke homepage process grid, interactive product quick-views with simulated back views, custom sepia Google maps integration, and a mobile-optimized floating WhatsApp consultation bar.',
      outcome:
        'Rebuilt a high-end designer boutique experience, introducing interactive product quick views, custom styling accordion systems, and integrated Supabase-backed user authentication.',
      tools: [
        'React',
        'Tailwind CSS',
        'Supabase',
        'PostgreSQL'
      ],
      link: '/sanjhboutiquecasestudy'
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
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,175,218,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <FadeInSection>
            <div className="relative overflow-hidden rounded-[2rem] bg-primary border border-white/10 px-6 py-16 md:px-16 md:py-24 shadow-[0_20px_50px_rgba(15,42,68,0.15)] max-w-[46rem] mx-auto">
              {/* Radial card lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
                {/* Visual badge indicator */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4.5 py-1.5 mb-8 text-xs text-accent font-semibold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>Start Growing</span>
                </div>
                
                {/* Headline */}
                <h2 className="mb-6 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  Have a Project in Mind?
                </h2>
                
                {/* Subheadline */}
                <p className="text-base sm:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
                  Let's discuss how we can help bring your vision to life with a website built for growth.
                </p>
                
                {/* Button */}
                <div className="flex justify-center w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-sm px-8 py-5 h-auto bg-white text-primary hover:bg-white/90 font-bold rounded-full transition-all duration-300 hover:shadow-lg shadow-black/10 hover:translate-y-[-1px]"
                    asChild
                  >
                    <Link to="/contact">Start a Conversation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
