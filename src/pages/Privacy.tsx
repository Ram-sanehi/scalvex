import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h1 className="mb-8 text-4xl font-bold text-foreground">Privacy Policy</h1>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">

                <p>
                  <strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>

                <p>
                  Your privacy is important to us. At Scalvex, we are committed to protecting your personal information and being transparent about how we collect, use, and share your data. This Privacy Policy explains our practices and your rights regarding your information.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
                <p>
                  When you interact with our website, contact us, or request services, we may collect information that you provide voluntarily, including:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Name and contact details (email address, phone number if provided)</li>
                  <li>Company or organization name (if applicable)</li>
                  <li>Message content or project details submitted through contact forms</li>
                  <li>Technical data, such as IP address and browser type, for site analytics and performance monitoring</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
                <p>
                  We use the information you provide to:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Respond to inquiries, questions, or project requests</li>
                  <li>Deliver the services or information you request</li>
                  <li>Improve our website, services, and user experience</li>
                  <li>Comply with legal obligations and prevent fraudulent activity</li>
                </ul>
                <p>
                  We <strong>do not sell, rent, or trade your personal information</strong> to third parties for marketing purposes.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cookies and Analytics</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience, understand user behavior, and improve performance. You can manage your cookie preferences through your browser settings. We do not use cookies to collect personally identifiable information without your consent.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your information from unauthorized access, use, alteration, or disclosure. While we strive to protect your personal data, no system is completely secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Retention</h2>
                <p>
                  We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements. Once no longer needed, your data is securely deleted or anonymized.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Third-Party Services</h2>
                <p>
                  We may use trusted third-party services (e.g., email providers, analytics tools) to operate our website or deliver services. These providers are bound by strict confidentiality agreements and are only permitted to process your data as necessary to provide their services.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Rights</h2>
                <p>
                  Depending on your location, you may have rights regarding your personal information, including:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Accessing the data we hold about you</li>
                  <li>Requesting corrections or updates to your information</li>
                  <li>Requesting deletion of your personal data</li>
                  <li>Opting out of marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at <a href="mailto:hello@scalvex.com" className="text-primary hover:underline">hello@scalvex.com</a>.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Children's Privacy</h2>
                <p>
                  Our services are not directed at children under 13, and we do not knowingly collect personal information from children. If we become aware of such data, we take steps to delete it promptly.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at{' '}
                  <a href="mailto:hello@scalvex.com" className="text-primary hover:underline">scalvex1@gmail.com</a>.
                </p>

                <p className="mt-6 italic text-sm text-muted-foreground">
                  By using our website, you acknowledge that you have read and understood this Privacy Policy.
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
