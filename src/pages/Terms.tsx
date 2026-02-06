import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Terms = () => {
  const contactEmail = "scalvex1@gmail.com";

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h1 className="mb-8 text-4xl font-bold text-foreground">Terms of Service</h1>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                
                <p>
                  <strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>

                <p>
                  Welcome to Scalvex. By accessing or using our services, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please refrain from using our services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Services</h2>
                <p>
                  Scalvex provides web development, SEO, digital strategy, and related services. Each project may have specific terms outlined in individual proposals, contracts, or agreements provided to the client.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Client Responsibilities</h2>
                <p>
                  Clients are responsible for providing accurate information, timely feedback, and necessary content or assets required for the completion of services. Failure to provide required materials may delay project timelines.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Payment Terms</h2>
                <p>
                  Project fees, payment schedules, and milestones are outlined in individual agreements. Unless otherwise stated, full payment is due upon project completion. Late payments may incur additional charges.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
                <p>
                  Upon full payment, clients receive ownership of custom work created specifically for their project. Pre-existing tools, frameworks, templates, and code libraries remain the property of Scalvex or their respective owners. Scalvex retains the right to showcase work for portfolio and marketing purposes unless otherwise agreed.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Confidentiality</h2>
                <p>
                  Both Scalvex and clients agree to maintain confidentiality regarding sensitive information shared during the project. Confidential information may not be disclosed to third parties without written consent, except as required by law.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
                <p>
                  Scalvex shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific project giving rise to the claim.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Revisions and Modifications</h2>
                <p>
                  Revision requests should be communicated clearly and in accordance with the project agreement. Scalvex reserves the right to charge for additional work outside the original scope.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Termination</h2>
                <p>
                  Either party may terminate a project agreement with written notice. Termination does not absolve the client from payment for completed work or work in progress.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction where Scalvex operates. Any disputes arising from these terms shall be resolved through negotiation or, if necessary, binding arbitration.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contact Us</h2>
                <p>
                  For questions, concerns, or clarifications regarding these Terms of Service, please contact us at{' '}
                  <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>.
                </p>

                <p className="mt-6 italic text-sm text-muted-foreground">
                  By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service.
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
