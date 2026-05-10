import { PROVIDERS } from "../../data/site";
import QuoteForm from "../components/QuoteForm";
import Link from "next/link";

export const metadata = {
  title: "Compare Best Health Insurance Providers NZ | BestHealthInsurance.co.nz",
  description: "Compare Southern Cross, nib, AIA, Accuro, and Partners Life side-by-side. See ratings, pricing, and features to find the best NZ health insurer for you.",
};

export default function ComparePage() {
  const features = [
    { name: "Hospital & Surgical", southern: true, nib: true, aia: true, accuro: true, partners: true },
    { name: "Specialists & Diagnostics", southern: true, nib: true, aia: true, accuro: true, partners: true },
    { name: "Cancer Cover (with Non-Pharmac)", southern: true, nib: true, aia: true, accuro: true, partners: true },
    { name: "Everyday Health Cover", southern: true, nib: true, aia: true, accuro: true, partners: true },
    { name: "Income Protection", southern: false, nib: true, aia: true, accuro: false, partners: true },
    { name: "Wellness Programme", southern: false, nib: false, aia: true, accuro: false, partners: false },
    { name: "Mental Health Add-On", southern: false, nib: false, aia: false, accuro: true, partners: false },
    { name: "Member-Owned Structure", southern: true, nib: false, aia: false, accuro: true, partners: false },
    { name: "Digital App", southern: true, nib: true, aia: true, accuro: true, partners: true },
    { name: "24/7 Support", southern: true, nib: true, aia: true, accuro: true, partners: true },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Compare Health Insurance Providers</h1>
          <p className="text-lg text-gray-400">See how New Zealand&apos;s major health insurers stack up on price, features, and coverage.</p>
        </div>
      </section>

      {/* Provider Overview Cards */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {PROVIDERS.map((provider) => (
              <Link key={provider.slug} href={`/health-insurance/${provider.slug}/`} className={`bg-gray-800 border rounded-lg p-5 hover:-translate-y-0.5 transition-all ${provider.featured ? "border-emerald-500/60" : "border-gray-700"} ${provider.notRecommended ? "opacity-70" : ""}`}>
                <div className="text-3xl mb-3">{provider.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{provider.name}</h3>
                <div className="space-y-1 mb-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Rating</span>
                    <span className="text-yellow-400 font-semibold">{provider.rating}/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">From</span>
                    <span className="text-emerald-400 font-semibold">{provider.from}/mo</span>
                  </div>
                </div>
                {provider.notRecommended && <p className="text-red-400 text-xs">⚠️ Not recommended</p>}
                {provider.featured && <p className="text-emerald-400 text-xs">⭐ Highly Rated</p>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">Southern Cross</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">nib</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">AIA</th>
                  <th className="text-center py-4 px-4 font-semibold text-emerald-400">Accuro ⭐</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">Partners Life</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                    <td className="py-4 px-4 text-gray-300">{feature.name}</td>
                    <td className="text-center py-4 px-4">{feature.southern ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                    <td className="text-center py-4 px-4">{feature.nib ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                    <td className="text-center py-4 px-4">{feature.aia ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                    <td className="text-center py-4 px-4">{feature.accuro ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                    <td className="text-center py-4 px-4">{feature.partners ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-4">⭐ Accuro is our most recommended provider for most New Zealanders due to value, member-owned structure, and unique mental health add-on.</p>
        </div>
      </section>

      {/* Provider Details */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Provider Profiles</h2>
          <div className="space-y-8">
            <div className="bg-emerald-900/20 border border-emerald-700/40 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-white">Accuro</h3>
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">HIGHLY RATED</span>
              </div>
              <p className="text-gray-400 mb-4">NZ&apos;s only member-owned health insurer. Accuro offers competitive premiums, fast claims handling, and the unique distinction of offering mental health as a standalone optional add-on. Our most recommended provider for most New Zealanders.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Structure:</span> <span className="text-white font-semibold">Member-owned</span></div>
                <div><span className="text-gray-500">Best For:</span> <span className="text-white font-semibold">Most Kiwis</span></div>
                <div><span className="text-gray-500">Unique Feature:</span> <span className="text-white font-semibold">Mental health add-on</span></div>
                <div><span className="text-gray-500">Vs Southern Cross:</span> <span className="text-white font-semibold">10-15% cheaper</span></div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Southern Cross Health Society</h3>
              <p className="text-gray-400 mb-4">New Zealand&apos;s largest health insurer with over 900,000 members. Not-for-profit structure means focus on member benefits. Strong brand and established network, but premiums run 20-30% above market for equivalent cover.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Market Share:</span> <span className="text-white font-semibold">~60%</span></div>
                <div><span className="text-gray-500">Established:</span> <span className="text-white font-semibold">1964</span></div>
                <div><span className="text-gray-500">Structure:</span> <span className="text-white font-semibold">Not-for-profit</span></div>
                <div><span className="text-gray-500">Best For:</span> <span className="text-white font-semibold">Those valuing brand trust</span></div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Partners Life</h3>
              <p className="text-gray-400 mb-4">Known for the most comprehensive policy wordings in the NZ market — fewer grey areas, fewer disputes. Lowest premiums among major providers for many profiles. Note: acquired by Dai-ichi Life Insurance (Japan) in 2023.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Established:</span> <span className="text-white font-semibold">2011</span></div>
                <div><span className="text-gray-500">Ownership:</span> <span className="text-white font-semibold">Dai-ichi Life (Japan)</span></div>
                <div><span className="text-gray-500">Best For:</span> <span className="text-white font-semibold">Comprehensive wordings</span></div>
                <div><span className="text-gray-500">Premium Position:</span> <span className="text-white font-semibold">Lowest among majors</span></div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">AIA</h3>
              <p className="text-gray-400 mb-4">Part of Asia&apos;s largest life insurance group. Distinctive AIA Vitality wellness programme offers premium discounts of up to 25% for active, healthy lifestyles. Excellent for those who exercise regularly and want to be rewarded for it.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Best Feature:</span> <span className="text-white font-semibold">Vitality (up to 25% discount)</span></div>
                <div><span className="text-gray-500">Best For:</span> <span className="text-white font-semibold">Active, health-conscious</span></div>
                <div><span className="text-gray-500">Structure:</span> <span className="text-white font-semibold">Listed Company (HK)</span></div>
                <div><span className="text-gray-500">Premium Position:</span> <span className="text-white font-semibold">Mid-market</span></div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 opacity-75">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-white">nib</h3>
                <span className="bg-red-900/50 border border-red-700 text-red-300 text-xs font-bold px-3 py-1 rounded-full">Not Recommended</span>
              </div>
              <p className="text-gray-400 mb-4">nib offers a good digital experience but their premiums run 20-30% above market for equivalent cover. We typically recommend Accuro, AIA, or Partners Life before considering nib.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Structure:</span> <span className="text-white font-semibold">Listed Company (ASX)</span></div>
                <div><span className="text-gray-500">Best Feature:</span> <span className="text-white font-semibold">Digital experience</span></div>
                <div><span className="text-gray-500">Premium Position:</span> <span className="text-red-400 font-semibold">20-30% above market</span></div>
                <div><span className="text-gray-500">Rating:</span> <span className="text-white font-semibold">3.9/5</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let Us Compare For You</h2>
              <p className="text-emerald-100 mb-4">Our licensed advisers will compare all providers for your specific situation and find the best value.</p>
              <ul className="space-y-2 text-emerald-100 text-sm">
                <li>✓ Independent comparison service</li>
                <li>✓ Quotes within 24 hours</li>
                <li>✓ No obligation</li>
                <li>✓ Licensed advisers</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-emerald-400 border-opacity-30">
              <QuoteForm title="Get a Quote" subtitle="We compare all major NZ providers" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
