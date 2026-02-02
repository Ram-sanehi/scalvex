import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h1 className="mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  <strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
                <p>
                  When you contact us through our website, we collect the information you provide, 
                  including your name, email address, company name, and message content. We use this 
                  information solely to respond to your inquiry and discuss potential projects.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
                <p>
                  We use the information you provide to respond to your inquiries, provide services 
                  you request, and improve our website experience. We do not sell, rent, or share 
                  your personal information with third parties for marketing purposes.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information 
                  from unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at 
                  hello@edgeservices.in.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
