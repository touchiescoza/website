import { PageHeader } from '@/app/components/ui';

export default function Privacy() {
  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <PageHeader 
          title="Privacy Policy"
          subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
        />

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
            <p className="text-gray mb-4">
              We collect information you provide directly to us, such as when you create an account, register for events, 
              join leagues, or contact us for support.
            </p>
            <ul className="list-disc pl-6 text-gray space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>League and event registration details</li>
              <li>Communication preferences</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
            <p className="text-gray mb-4">
              We use the information we collect to provide, maintain, and improve our services:
            </p>
            <ul className="list-disc pl-6 text-gray space-y-2">
              <li>Process event and league registrations</li>
              <li>Send important updates about events, leagues, and news</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Information Sharing</h2>
            <p className="text-gray mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray space-y-2">
              <li>With league organizers for event coordination (name and contact details only)</li>
              <li>With payment processors for secure transaction processing</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
            <p className="text-gray mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
            <p className="text-gray mb-4">
              Under South African data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Cookies and Tracking</h2>
            <p className="text-gray mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
              and understand user preferences. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
            <p className="text-gray mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the 
              new policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-light rounded-lg p-6">
              <p className="text-black font-semibold mb-2">Touchies Privacy Team</p>
              <p className="text-gray mb-1">Email: privacy@touchies.co.za</p>
              <p className="text-gray mb-1">Phone: +27 11 123 4567</p>
              <p className="text-gray">Address: Johannesburg, South Africa</p>
            </div>
          </section>

          <div className="text-center text-sm text-gray mt-12 pt-8 border-t border-gray-200">
            Last Updated: January 5, 2026
          </div>
        </div>
      </div>
    </div>
  );
}