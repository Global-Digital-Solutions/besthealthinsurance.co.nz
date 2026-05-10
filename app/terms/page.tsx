import Link from "next/link";

export const metadata = {
  title: "Terms of Use | BestHealthInsurance.co.nz",
  description: "Terms of use for BestHealthInsurance.co.nz. Please read these terms before using our website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-lg text-gray-400">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">By accessing and using BestHealthInsurance.co.nz, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Nature of Service</h2>
              <p className="leading-relaxed">BestHealthInsurance.co.nz is an information and referral service operated by Cover4You Group. We provide general information about health insurance options in New Zealand and connect users with licensed insurance advisers. We do not provide regulated financial advice directly through this website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. General Information Only</h2>
              <p className="leading-relaxed">The content on this website is for general information purposes only. It does not constitute financial advice and should not be relied upon as such. Health insurance products vary significantly and individual circumstances affect what cover is most appropriate. You should seek personalised advice from a licensed financial adviser before making any insurance decisions.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Accuracy of Information</h2>
              <p className="leading-relaxed">While we take reasonable care to ensure the accuracy of information on this website, insurance products, pricing, and terms change frequently. We do not warrant that information is current, complete, or accurate. Always verify details directly with insurance providers or your adviser.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Third Party Links</h2>
              <p className="leading-relaxed">Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of information on those websites. Links are provided for convenience only.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed">To the maximum extent permitted by law, Cover4You Group and BestHealthInsurance.co.nz are not liable for any loss or damage arising from your use of this website or reliance on information contained herein.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <p className="leading-relaxed">All content on this website, including text, graphics, and code, is owned by or licensed to Cover4You Group. You may not reproduce, distribute, or use this content without our written permission.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <p className="leading-relaxed">We may update these terms at any time. Continued use of the website after any changes constitutes acceptance of the new terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
              <p className="leading-relaxed">These terms are governed by the laws of New Zealand. Any disputes will be subject to the jurisdiction of the New Zealand courts.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
              <p className="leading-relaxed">For questions about these terms, contact us at{" "}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-400 hover:text-emerald-300">hello@cover4you.co.nz</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
