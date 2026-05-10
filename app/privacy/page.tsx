import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | BestHealthInsurance.co.nz",
  description: "Privacy policy for BestHealthInsurance.co.nz. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-400">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <div className="space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">BestHealthInsurance.co.nz is operated by Cover4You Group. We are committed to protecting your privacy and handling your personal information responsibly in accordance with the New Zealand Privacy Act 2020.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">When you use our website or submit an enquiry, we may collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your name and contact details (email address, phone number)</li>
                <li>Information about the type of insurance cover you are seeking</li>
                <li>General health information relevant to obtaining insurance quotes</li>
                <li>Usage data about how you interact with our website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use your personal information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Connect you with licensed insurance advisers who can provide personalised quotes</li>
                <li>Respond to your enquiries and provide customer service</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
              <p className="leading-relaxed">We may share your information with licensed insurance advisers and insurance providers for the purpose of obtaining quotes. We do not sell your personal information to third parties. Any sharing is done on the basis that these parties will handle your information in accordance with applicable privacy laws.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
              <p className="leading-relaxed">Our website may use cookies and similar technologies to improve your experience, analyse website traffic, and understand how visitors use our site. You can control cookie settings through your browser settings.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p className="leading-relaxed">We take reasonable steps to protect your personal information from unauthorised access, use, or disclosure. However, no internet transmission is completely secure and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">Under the Privacy Act 2020, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Complain about a breach of the Privacy Act</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="leading-relaxed">If you have any questions about this privacy policy or how we handle your personal information, please contact us at{" "}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-400 hover:text-emerald-300">hello@cover4you.co.nz</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
