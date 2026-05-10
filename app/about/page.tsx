import Link from "next/link";
import QuoteForm from "../components/QuoteForm";

export const metadata = {
  title: "About Us | BestHealthInsurance.co.nz",
  description: "Learn about BestHealthInsurance.co.nz, operated by Cover4You Group. Licensed NZ health insurance advisers helping Kiwis find the best cover.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About BestHealthInsurance.co.nz</h1>
          <p className="text-lg text-gray-400">Helping New Zealanders find the best health insurance with independent advice and transparent comparisons.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BestHealthInsurance.co.nz is part of the Cover4You Group, a licensed health insurance advisory service dedicated to helping New Zealanders make informed decisions about private health insurance.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe every Kiwi deserves access to honest, independent advice about health insurance options — at no cost and without pressure.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Our Values</h3>
              <ul className="space-y-4">
                {[
                  { title: "Independence", desc: "We compare all major providers with no bias." },
                  { title: "Transparency", desc: "Clear information, honest recommendations." },
                  { title: "Expertise", desc: "Licensed advisers with deep industry knowledge." },
                  { title: "Your Interest First", desc: "We're paid by providers, not you." },
                ].map((v) => (
                  <li key={v.title} className="flex gap-3">
                    <span className="text-emerald-400 flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold text-white">{v.title}</p>
                      <p className="text-gray-400 text-sm">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 border-y border-gray-700 py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How the Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "You Contact Us", body: "Fill out our simple form with your details and what you're looking for." },
              { step: "2", title: "We Analyse", body: "Our advisers review your situation and compare all major providers." },
              { step: "3", title: "We Recommend", body: "Receive personalised recommendations with quotes from multiple providers." },
              { step: "4", title: "You Decide", body: "Take your time, ask questions, and decide what's best for you." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">We Compare All Major Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🏥", name: "Southern Cross Health Society", desc: "New Zealand's largest health insurer with comprehensive cover options." },
              { icon: "🛡️", name: "Accuro", desc: "NZ's only member-owned insurer. Highly rated — our top recommendation for most Kiwis." },
              { icon: "💪", name: "AIA", desc: "Global insurer with unique AIA Vitality wellness programme offering premium discounts." },
              { icon: "🤝", name: "Partners Life", desc: "Known for comprehensive policy wordings and lowest premiums among major providers." },
              { icon: "🩺", name: "nib", desc: "Digital-first insurer — though we recommend comparing others for better value first." },
            ].map((p) => (
              <div key={p.name} className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Our Transparent Model</h2>
          <div className="space-y-6">
            {[
              { title: "How We Make Money", body: "When you take out a health insurance policy through our advisers, the insurer pays a commission. You pay nothing — our commission is built into the provider's standard pricing." },
              { title: "No Pressure to Buy", body: "We provide information and recommendations, but you're free to take your time deciding, compare elsewhere, or not buy at all. We're here to help, not to pressure you." },
              { title: "Why Independent Advice Matters", body: "Insurance companies employ sales teams with targets. We're independent advisers — our only goal is helping you find the right cover at the right price." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find the Best Cover?</h2>
          <p className="text-emerald-100 mb-8">Get a free, independent comparison of health insurance options for your situation.</p>
          <Link href="/contact/" className="inline-block bg-white hover:bg-gray-100 text-emerald-900 font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
