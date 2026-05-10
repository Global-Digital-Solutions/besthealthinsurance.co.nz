import type { Metadata } from 'next'
import { PROVIDERS } from '../../data/site'
import QuoteForm from '../components/QuoteForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare NZ Health Insurance Providers 2026 | Real Prices | BestHealthInsurance',
  description: 'Compare Southern Cross, nib, AIA, Accuro (UniMed), and Partners Life side-by-side with real 2026 premium data. Find the best NZ health insurer for your situation.',
  alternates: { canonical: 'https://besthealthinsurance.co.nz/compare/' },
  openGraph: {
    title: 'Compare NZ Health Insurance Providers 2026 | Real Prices',
    description: 'Side-by-side comparison of all 5 major NZ health insurers with real 2026 pricing, features, and expert recommendations.',
    url: 'https://besthealthinsurance.co.nz/compare/',
    type: 'website',
  },
}

const comparePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://besthealthinsurance.co.nz/compare/#webpage",
  url: "https://besthealthinsurance.co.nz/compare/",
  name: "Compare NZ Health Insurance Providers 2026",
  description: "Side-by-side comparison of Southern Cross, nib, AIA, Accuro and Partners Life — real 2026 premium data, features, and expert NZ adviser recommendations.",
  inLanguage: "en-NZ",
  isPartOf: { "@id": "https://besthealthinsurance.co.nz/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://besthealthinsurance.co.nz/" },
      { "@type": "ListItem", position: 2, name: "Compare Providers", item: "https://besthealthinsurance.co.nz/compare/" },
    ],
  },
  about: [
    { "@type": "Organization", name: "Southern Cross Health Insurance", url: "https://www.southerncross.co.nz" },
    { "@type": "Organization", name: "nib New Zealand", url: "https://www.nib.co.nz" },
    { "@type": "Organization", name: "AIA New Zealand", url: "https://www.aia.co.nz" },
    { "@type": "Organization", name: "Accuro (UniMed) Health Insurance", url: "https://www.accuro.co.nz" },
    { "@type": "Organization", name: "Partners Life", url: "https://www.partnerslife.co.nz" },
  ],
};

const features = [
  { name: 'Hospital & Surgical Cover', southern: true, nib: true, aia: true, accuro: true, partners: true },
  { name: 'Specialists & Diagnostics', southern: true, nib: true, aia: true, accuro: true, partners: true },
  { name: 'Cancer Cover incl. Non-Pharmac', southern: true, nib: true, aia: true, accuro: true, partners: true },
  { name: 'Everyday Health (GP/Dental/Optical)', southern: true, nib: true, aia: true, accuro: 'add-on', partners: false },
  { name: 'Income Protection', southern: false, nib: true, aia: true, accuro: false, partners: true },
  { name: 'Mental Health as Specific Add-On', southern: false, nib: false, aia: false, accuro: true, partners: false },
  { name: 'Mental Health in Major Medical', southern: false, nib: true, aia: true, accuro: true, partners: true },
  { name: 'Wellness Programme (premium savings)', southern: false, nib: false, aia: true, accuro: false, partners: false },
  { name: 'Member-Owned / Not-for-Profit', southern: true, nib: false, aia: false, accuro: true, partners: false },
  { name: 'NZ Financial Strength Rating', southern: 'A+', nib: 'A', aia: 'AA', accuro: 'A', partners: 'A' },
  { name: 'Digital Claims App', southern: true, nib: true, aia: true, accuro: true, partners: true },
]

// Real 2026 premium data from Policywise (fortnightly, $500 excess, comprehensive hospital plan)
// Converted to monthly: fortnightly × 26 / 12
const pricingRows = [
  { label: '30-year-old (female)', southern: '$86', accuro: '$115', aia: '$149', nib: '$162', partners: '$163' },
  { label: '30-year-old (male)', southern: '$86', accuro: '$115', aia: '$119', nib: '$135', partners: '$134' },
  { label: '40-year-old (female)', southern: '$124', accuro: '$147', aia: '$174', nib: '$174', partners: '$186' },
  { label: '40-year-old (male)', southern: '$124', accuro: '$147', aia: '$145', nib: '$146', partners: '$159' },
  { label: '50-year-old (female)', southern: '$216', accuro: '$244', aia: '$251', nib: '$277', partners: '$283' },
  { label: '50-year-old (male)', southern: '$216', accuro: '$244', aia: '$238', nib: '$248', partners: '$255' },
]

function FeatureCell({ val }: { val: boolean | string }) {
  if (val === true) return <span className="text-emerald-500 font-bold text-lg">✓</span>
  if (val === false) return <span className="text-gray-500 text-lg">—</span>
  if (val === 'add-on') return <span className="text-amber-500 text-xs font-bold">Add-on</span>
  return <span className="text-gray-300 text-xs font-bold">{val}</span>
}

export default function ComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparePageSchema) }} />

      {/* ── Hero ── */}
      <div
        className="relative border-b border-gray-700"
        style={{
          backgroundImage: 'url(/hero-city.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          minHeight: '340px',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col justify-end" style={{ minHeight: '340px' }}>
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Compare Providers</span>
          </nav>
          <span className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
            2026 Market Data
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Compare NZ Health Insurance Providers
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
            Real 2026 premium data, feature-by-feature comparison, and honest provider profiles — so you can make an informed decision.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* ── Provider cards ── */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">NZ&apos;s 5 Health Insurance Providers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {PROVIDERS.map((provider) => (
                <Link
                  key={provider.slug}
                  href={`/health-insurance/${provider.slug}/`}
                  className={`bg-white rounded-2xl border p-5 hover:-translate-y-0.5 transition-all shadow-sm ${
                    provider.featured ? 'border-emerald-300 ring-1 ring-emerald-300' : 'border-gray-200'
                  } ${provider.notRecommended ? 'opacity-70' : ''}`}
                >
                  <div className="text-3xl mb-3">{provider.icon}</div>
                  <h3 className="text-sm font-extrabold text-gray-900 mb-2 leading-tight">{provider.name}</h3>
                  <div className="space-y-1 mb-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Rating</span>
                      <span className="text-amber-500 font-bold">{provider.rating}/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">From</span>
                      <span className="text-emerald-600 font-bold">{provider.from}/mo</span>
                    </div>
                  </div>
                  <span className={`inline-block text-white text-xs font-bold px-2 py-0.5 rounded-full ${provider.badgeColor}`}>
                    {provider.badge}
                  </span>
                  {provider.notRecommended && <p className="text-red-500 text-xs mt-2">⚠️ Higher premiums</p>}
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-3">Monthly premiums shown are for comprehensive hospital cover with $500 excess, 30-year-old non-smoker. Source: Policywise, January 2026.</p>
          </section>

          {/* ── Real 2026 pricing table ── */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900">Real 2026 Monthly Premiums</h2>
              <p className="text-gray-500 text-sm mt-1">
                Comprehensive hospital cover · $500 excess · Non-smoker · Converted from fortnightly rates. Source: Policywise, January 2026.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-5 font-bold text-gray-700">Profile</th>
                    <th className="text-center py-4 px-4 font-bold text-emerald-700">Southern Cross</th>
                    <th className="text-center py-4 px-4 font-bold text-emerald-700">Accuro (UniMed)</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-700">AIA</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-700">nib</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-700">Partners Life</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">{row.label}</td>
                      <td className="text-center py-3.5 px-4">
                        <span className="text-emerald-700 font-extrabold">{row.southern}</span>
                        <span className="text-gray-400 text-xs">/mo</span>
                      </td>
                      <td className="text-center py-3.5 px-4">
                        <span className="text-emerald-700 font-bold">{row.accuro}</span>
                        <span className="text-gray-400 text-xs">/mo</span>
                      </td>
                      <td className="text-center py-3.5 px-4">
                        <span className="text-gray-700 font-medium">{row.aia}</span>
                        <span className="text-gray-400 text-xs">/mo</span>
                      </td>
                      <td className="text-center py-3.5 px-4">
                        <span className="text-red-500 font-medium">{row.nib}</span>
                        <span className="text-gray-400 text-xs">/mo</span>
                      </td>
                      <td className="text-center py-3.5 px-4">
                        <span className="text-gray-700 font-medium">{row.partners}</span>
                        <span className="text-gray-400 text-xs">/mo</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-4 bg-emerald-50 border-t border-emerald-100">
              <p className="text-emerald-800 text-sm font-medium">
                💡 <strong>Southern Cross</strong> is consistently the most affordable provider across all age groups. <strong>Accuro (UniMed)</strong> is second-cheapest and the only member-owned option. nib and Partners Life are significantly more expensive at most age/gender profiles.
              </p>
            </div>
          </section>

          {/* ── Feature comparison ── */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900">Feature Comparison</h2>
              <p className="text-gray-500 text-sm mt-1">Based on comprehensive plans. Add-ons and limits vary — an adviser will check the details for your situation.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left py-4 px-5 font-bold text-gray-700">Feature</th>
                    <th className="text-center py-4 px-3 font-bold text-gray-700 text-xs">Southern Cross</th>
                    <th className="text-center py-4 px-3 font-bold text-emerald-700 text-xs">Accuro (UniMed) ⭐</th>
                    <th className="text-center py-4 px-3 font-bold text-gray-700 text-xs">AIA</th>
                    <th className="text-center py-4 px-3 font-bold text-gray-700 text-xs">nib</th>
                    <th className="text-center py-4 px-3 font-bold text-gray-700 text-xs">Partners Life</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                      <td className="py-3.5 px-5 text-gray-700">{feature.name}</td>
                      <td className="text-center py-3.5 px-3"><FeatureCell val={feature.southern} /></td>
                      <td className="text-center py-3.5 px-3 bg-emerald-50/50"><FeatureCell val={feature.accuro} /></td>
                      <td className="text-center py-3.5 px-3"><FeatureCell val={feature.aia} /></td>
                      <td className="text-center py-3.5 px-3"><FeatureCell val={feature.nib} /></td>
                      <td className="text-center py-3.5 px-3"><FeatureCell val={feature.partners} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="px-5 py-4 text-gray-400 text-xs border-t border-gray-100">
              ⭐ Accuro (now underwritten by UniMed) is our most recommended provider for value-conscious New Zealanders — second-cheapest premiums, member-owned structure, and the only insurer offering mental health as a specific optional add-on.
            </p>
          </section>

          {/* ── Provider profiles ── */}
          <section>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Provider Profiles</h2>
            <div className="space-y-5">

              {/* Southern Cross */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900">Southern Cross Health Society</h3>
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">BEST VALUE PREMIUMS</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  New Zealand&apos;s largest health insurer with over 900,000 members — and the most affordable comprehensive cover in the market. Southern Cross is a not-for-profit society (established 1964), which means profits stay within the business to benefit members. Its 2026 premiums are consistently 20–35% below nib and Partners Life for equivalent cover. The Wellbeing plan range suits most New Zealanders, from entry-level surgical cover through to UltraCare comprehensive.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Market Share</p><p className="font-bold text-gray-900 mt-1">~62%</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Structure</p><p className="font-bold text-gray-900 mt-1">Not-for-profit</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Rating (S&P)</p><p className="font-bold text-gray-900 mt-1">A+ Strong</p></div>
                  <div className="bg-emerald-50 rounded-xl p-3"><p className="text-gray-400 text-xs">30yo premium (mo)</p><p className="font-bold text-emerald-700 mt-1">from $86/mo</p></div>
                </div>
              </div>

              {/* Accuro / UniMed */}
              <div className="bg-white rounded-2xl border border-emerald-200 ring-1 ring-emerald-200 shadow-sm p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900">Accuro — now underwritten by UniMed</h3>
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">HIGHLY RATED ⭐</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Accuro merged into UniMed (completed May 2024), forming New Zealand&apos;s third-largest health insurer with 140,000 members. Both brands continue operating — Accuro policyholders deal with the Accuro team; UniMed policyholders with UniMed. Both are now underwritten by the same not-for-profit mutual society.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Accuro&apos;s SmartCare plans offer the second-lowest premiums in the market, and crucially, it remains the <strong>only NZ insurer offering mental health cover as a specific optional add-on</strong> — making it the best choice for anyone prioritising mental health access. All other providers bundle limited mental health benefits within their major medical plans.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Structure</p><p className="font-bold text-gray-900 mt-1">Member-owned</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Members</p><p className="font-bold text-gray-900 mt-1">140,000+</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Unique feature</p><p className="font-bold text-gray-900 mt-1">Mental health add-on</p></div>
                  <div className="bg-emerald-50 rounded-xl p-3"><p className="text-gray-400 text-xs">30yo premium (mo)</p><p className="font-bold text-emerald-700 mt-1">from $115/mo</p></div>
                </div>
              </div>

              {/* AIA */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900">AIA New Zealand</h3>
                  <span className="bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">VITALITY REWARDS</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Part of Asia&apos;s largest life insurance group, AIA holds the highest financial strength rating in the NZ market (AA, Fitch). Its standout feature is <strong>AIA Vitality</strong> — a wellness programme that rewards healthy behaviour with premium discounts of up to 25% and perks like discounted gym memberships and Apple Watch upgrades. AIA is ideal for health-conscious individuals who will actively engage with the programme. Premiums are mid-market for males, higher for females.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Rating (Fitch)</p><p className="font-bold text-gray-900 mt-1">AA Very Strong</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Vitality savings</p><p className="font-bold text-gray-900 mt-1">Up to 25%</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Best for</p><p className="font-bold text-gray-900 mt-1">Active lifestyles</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">30yo male (mo)</p><p className="font-bold text-gray-900 mt-1">from $119/mo</p></div>
                </div>
              </div>

              {/* Partners Life */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900">Partners Life</h3>
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">BROADEST WORDINGS</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Partners Life is known across the NZ insurance industry for having the most comprehensive and clearly defined policy wordings — fewer grey areas means fewer disputes at claim time. Acquired by Dai-ichi Life Insurance (Japan) in 2023. Premiums are among the highest in the market, particularly for female policyholders, but the policy definitions and comprehensive trauma/income protection range make them a strong choice for those prioritising breadth of cover over cost.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Ownership</p><p className="font-bold text-gray-900 mt-1">Dai-ichi Life (Japan)</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Rating (A.M. Best)</p><p className="font-bold text-gray-900 mt-1">A Excellent</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Best for</p><p className="font-bold text-gray-900 mt-1">Comprehensive wordings</p></div>
                  <div className="bg-amber-50 rounded-xl p-3"><p className="text-gray-400 text-xs">30yo male (mo)</p><p className="font-bold text-amber-700 mt-1">from $134/mo</p></div>
                </div>
              </div>

              {/* nib */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 opacity-80">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900">nib New Zealand</h3>
                  <span className="bg-red-100 border border-red-300 text-red-700 text-xs font-bold px-3 py-1 rounded-full">⚠ Higher Premiums</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  nib New Zealand is part of ASX-listed nib Group (Australia). It offers a polished digital experience and strong online claims capability. However, nib&apos;s 2026 premiums are consistently among the highest in the NZ market — 20–35% above Southern Cross for equivalent cover at most age profiles. nib NZ has historically operated at a loss in New Zealand. We typically recommend comparing Southern Cross and Accuro (UniMed) first — an adviser will show you the numbers side by side.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Ownership</p><p className="font-bold text-gray-900 mt-1">ASX-listed (Australia)</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Rating (S&P)</p><p className="font-bold text-gray-900 mt-1">A Strong</p></div>
                  <div className="bg-gray-50 rounded-xl p-3"><p className="text-gray-400 text-xs">Best feature</p><p className="font-bold text-gray-900 mt-1">Digital experience</p></div>
                  <div className="bg-red-50 rounded-xl p-3"><p className="text-gray-400 text-xs">30yo male (mo)</p><p className="font-bold text-red-600 mt-1">from $135/mo</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Private healthcare cost reference ── */}
          <section className="bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-extrabold text-white mb-2">What Does Private Treatment Actually Cost?</h2>
            <p className="text-gray-400 text-sm mb-6">Understanding these costs shows why health insurance is worth having — a single event can cost more than a decade of premiums.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { procedure: 'Spinal surgery', cost: 'Up to $250,000' },
                { procedure: 'Cancer chemotherapy', cost: '$15,000 – $170,000' },
                { procedure: 'Mastectomy with reconstruction', cost: 'Up to $100,000' },
                { procedure: 'Hip replacement', cost: 'Up to $40,000' },
                { procedure: 'Knee replacement', cost: 'Up to $33,300' },
                { procedure: 'MRI scan', cost: 'Up to $3,000' },
                { procedure: 'Specialist consultation', cost: 'Up to $280' },
                { procedure: 'Physiotherapy session', cost: 'Up to $90' },
                { procedure: 'GP consultation', cost: '$60 – $90' },
              ].map((item) => (
                <div key={item.procedure} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 border border-gray-700">
                  <span className="text-gray-300 text-sm">{item.procedure}</span>
                  <span className="text-emerald-400 font-bold text-sm whitespace-nowrap ml-3">{item.cost}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">Source: nib NZ claims data and public market data, 2024–2026.</p>
          </section>

          {/* ── CTA ── */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Let a Licensed Adviser Compare For You</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Tables only tell part of the story. The right provider depends on your age, health history, budget, and what you need cover for. A licensed NZ adviser will compare all five providers for your specific profile and present you with the best options — at no charge.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Quotes from all 5 providers in one call',
                    'Pre-existing condition guidance',
                    'Premium reduction strategies',
                    'Licensed FMA advisers — no sales pressure',
                    'Response within 24 hours',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-extrabold text-gray-900 mb-1">Get Personalised Quotes</h3>
                <p className="text-gray-500 text-xs mb-4">Takes 2 minutes. A licensed adviser responds within 24 hours.</p>
                <QuoteForm compact />
              </div>
            </div>
          </section>

          <p className="text-xs text-gray-400 leading-relaxed">
            BestHealthInsurance.co.nz is an independent referral service. We connect you with licensed insurance advisers regulated under the Financial Markets Conduct Act 2013. We do not provide financial advice. Premium data sourced from Policywise (January 2026) and converted from fortnightly to monthly rates. Actual premiums depend on individual circumstances and are subject to change.{' '}
            <Link href="/disclaimer/" className="text-emerald-500 underline hover:text-emerald-400">See full disclaimer</Link>.
          </p>
        </div>
      </div>
    </>
  )
}
