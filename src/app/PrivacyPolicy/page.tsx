// pages/privacy.js

import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-blue-100 min-h-screen text-gray-800">
      <Head>
        <title>Privacy Policy - Scholars United</title>
      </Head>
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-2 border-b border-blue-300 pb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: January 25, 2025</p>

          <section>
            <p className="mb-6">At Scholars United, your privacy and trust are of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide us through our website, services, and programs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Personal Information:</strong> Name, email, contact number, and similar identifiers.</li>
              <li><strong>Children’s Information:</strong> Collected only with parental or guardian consent as per applicable laws.</li>
              <li><strong>Usage Data:</strong> Includes IP address, browser type, pages viewed, etc., collected automatically for analysis and security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>To improve educational services and content.</li>
              <li>To communicate updates and respond to inquiries.</li>
              <li>To analyze usage trends and personalize experiences.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">Information Sharing and Disclosure</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Third-Party Providers:</strong> Trusted services helping us operate are bound by confidentiality agreements.</li>
              <li><strong>Educational Research:</strong> Aggregated, anonymized data may be used for non-identifiable insights.</li>
              <li><strong>Legal Requirements:</strong> Shared only when required for safety or legal compliance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">Data Protection and Retention</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Security:</strong> We use encryption and conduct routine audits to protect your information.</li>
              <li><strong>Retention:</strong> Data is kept only as long as necessary or legally required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">Your Rights and Choices</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request data portability when applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">Children’s Privacy</h2>
            <p className="mb-4">We require parental consent to collect personal information from children under 13 and do not knowingly collect such data without authorization.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">Changes to this Privacy Policy</h2>
            <p className="mb-4">We may update this policy from time to time. Any revisions will be posted here with a new effective date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">Contact Us</h2>
            <p className="mb-2">If you have any questions, please contact us:</p>
            <ul className="list-disc list-inside pl-4">
              <li>Email: <a href="mailto:info@scolarsunited.com" className="text-blue-700 hover:underline">info@scolarsunited.com</a></li>
              <li>Website: <a href="https://scolarsunited.com/contact" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Contact Page</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pink-700 mt-10 mb-4">Disclaimer</h2>
            <p className="mb-4">Last updated: January 25, 2025</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Educational Purposes Only:</strong> Our materials do not replace professional advice.</li>
              <li><strong>No Guarantees of Academic Results:</strong> Success varies by individual effort and context.</li>
              <li><strong>External Links:</strong> We are not responsible for third-party site content or policies.</li>
              <li><strong>Parental Consent:</strong> Required for minors to access specific programs.</li>
              <li><strong>Limitation of Liability:</strong> We are not liable for indirect or consequential damages.</li>
              <li><strong>Program Changes:</strong> We may revise services and materials as needed.</li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}