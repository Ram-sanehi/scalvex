import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h1 className="mb-8">Terms of Service</h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  <strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Agreement to Terms</h2>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Services</h2>
                <p>
                  Scalvex provides web development and SEO services. Specific terms for each 
                  project are outlined in individual project agreements or proposals.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Intellectual Property</h2>
                <p>
                  Upon full payment, clients receive ownership of custom work created specifically 
                  for their project. Pre-existing tools, frameworks, and templates remain the 
                  property of Scalvex or their respective owners.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Limitation of Liability</h2>
                <p>
                  Scalvex shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages resulting from your use of our services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
                <p>
                  For any questions regarding these Terms of Service, please contact us at{' '}
                  <a href="mailto:hello@scalvex.com" className="text-primary hover:underline">hello@scalvex.com</a>.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
