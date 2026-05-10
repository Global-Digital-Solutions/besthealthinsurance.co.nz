import { PROVIDERS } from "../../../data/site";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";

export function generateStaticParams() {
  return PROVIDERS.map((provider) => ({
    slug: provider.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const provider = PROVIDERS.find((p) => p.slug === params.slug);
  return {
    title: `${provider?.name} Health Insurance NZ | BestHealthInsurance.co.nz`,
    description: `Compare ${provider?.name} health insurance with other major NZ providers. See ratings, pricing, features and what to watch out for.`,
  };
}

const providerDetails: Record<
  string,
  {
    tagline: string;
    description: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
    coverage: string[];
    warning?: string;
  }
> = {
  "southern-cross": {
    tagline: "New Zealand's Most Trusted Health Insurer — NZ-Owned Not-for-Profit",
    description: "Southern Cross Health Society is New Zealand's largest health insurer, with a not-for-profit structure that means member benefits come first. Covering over 900,000 New Zealanders, they offer comprehensive policies and strong brand reputation. As a not-for-profit society, surplus funds return to members.",
    pros: [
      "Largest NZ health insurer with 900,000+ members",
      "Not-for-profit structure — surplus returns to members",
      "Comprehensive policy options including premium cover",
      "Strong financial stability and claims history since 1964",
      "Established brand with deep community trust",
      "Wide network of private hospitals and specialists",
    ],
    cons: [
      "Premiums 20-30% higher than Partners Life for equivalent cover",
      "Digital experience lags slightly behind newer competitors",
      "Less flexibility in customising policy structures",
      "Premium increases can be higher than others",
    ],
    bestFor: ["Families seeking comprehensive cover", "Those who value not-for-profit structure", "Kiwis wanting the most established brand", "Comprehensive policy seekers"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Everyday Health Cover", "Mental Health Support"],
  },
  nib: {
    tagline: "Digital-First — But Premiums Run 20–30% Above Market",
    description: "nib is an ASX-listed health insurer that has grown in New Zealand with a focus on digital innovation. However, their premiums are consistently 20-30% above market for equivalent cover, and their claims satisfaction ratings trail behind competitors. While their app experience is strong, value-conscious Kiwis typically find better options elsewhere.",
    warning: "nib premiums run 20-30% above market average. We recommend comparing Partners Life, AIA or Accuro before choosing nib.",
    pros: [
      "Excellent digital app and online experience",
      "Clear, easy-to-understand policy wording",
      "Growing market presence in NZ",
      "Fast digital claims process",
    ],
    cons: [
      "Premiums 20-30% above market for equivalent cover",
      "Listed company — shareholder focus rather than member-first",
      "Customer satisfaction ratings below Southern Cross and AIA",
      "Less established NZ presence than Southern Cross",
      "We typically recommend alternatives for better value",
    ],
    bestFor: ["Tech-savvy members who prioritise app experience", "Those who've compared and found nib competitive for their age/situation"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Everyday Health Cover", "Income Protection"],
  },
  aia: {
    tagline: "AIA Vitality — Earn Up to 25% Premium Discount Through Active Living",
    description: "AIA is part of Asia Pacific's largest life insurance group. Their distinctive AIA Vitality wellness programme rewards active, healthy lifestyles with discounts of up to 25% on premiums. For health-conscious Kiwis who already exercise regularly, AIA offers genuinely competitive pricing once Vitality discounts are applied.",
    pros: [
      "Unique AIA Vitality programme (up to 25% premium discount)",
      "Competitive real cost for active members",
      "Strong global backing and financial stability",
      "Good digital tools and mobile app",
      "Rewards for healthy lifestyle choices",
    ],
    cons: [
      "Higher base premiums without Vitality engagement",
      "Vitality requires ongoing participation to maintain discount",
      "More complex product structure",
      "Privacy concerns for some with health data sharing",
    ],
    bestFor: ["Health-conscious, active individuals who exercise 3+ times weekly", "Tech-savvy members", "Discount-motivated buyers who will engage with the programme"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "AIA Vitality Wellness Programme", "Income Protection"],
  },
  accuro: {
    tagline: "Highly Rated — NZ's Only Member-Owned Health Insurer",
    description: "Accuro is New Zealand's only member-owned health insurer, making it the most aligned with policyholder interests. They offer competitive premiums (typically 10-15% below Southern Cross and nib), straightforward claims handling, and the unique distinction of offering mental health as a standalone optional add-on — the only NZ insurer to do so. Despite minimal marketing spend, Accuro consistently delivers excellent value.",
    pros: [
      "NZ's only member-owned health insurer",
      "Premiums 10-15% below Southern Cross and nib",
      "Only insurer offering mental health as standalone add-on",
      "Fast, straightforward claims handling (5-7 days)",
      "Modern online portal",
      "Transparent, no-nonsense product approach",
    ],
    cons: [
      "Limited brand recognition (smaller marketing budget)",
      "Fewer specialist network partnerships than Southern Cross",
      "Policy wordings less comprehensive than Partners Life for complex scenarios",
    ],
    bestFor: ["Value-seeking Kiwis who've done the comparison", "Those wanting mental health coverage as a standalone add-on", "Member-owned preference seekers", "Accuro is our most recommended insurer for most situations"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Mental Health (optional add-on)", "Everyday Health Cover"],
  },
  "partners-life": {
    tagline: "NZ-Owned with the Most Comprehensive Policy Wordings",
    description: "Partners Life is a New Zealand-owned insurer known for the most comprehensive and explicit policy wordings in the NZ market. They're particularly valued for how clearly they define what's covered — fewer grey areas means fewer claim disputes. Note: Partners Life was acquired by Dai-ichi Life Insurance (Japan) in 2023, though they continue to operate as a NZ-run entity.",
    pros: [
      "Most comprehensive policy wordings — fewer grey areas",
      "Strong adviser relationships and support",
      "Good claims service reputation",
      "Lowest premiums among major providers for many profiles",
      "Explicit coverage of chronic condition specialist consultations",
    ],
    cons: [
      "Acquired by Dai-ichi Life Insurance (Japan) in 2023 — no longer fully NZ-owned",
      "Less digital innovation than AIA",
      "Smaller company than global insurers",
      "Less consumer-facing brand presence",
    ],
    bestFor: ["Those wanting the most comprehensive coverage certainty", "Adviser-supported buyers", "Chronic condition management", "Budget-conscious buyers who want strong policy wordings"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Income Protection", "Business Health"],
  },
};

export default function ProviderPage({ params }: { params: { slug: string } }) {
  const provider = PROVIDERS.find((p) => p.slug === params.slug);
  const details = providerDetails[params.slug];

  if (!provider || !details) {
    return <div className="text-center py-20 text-white">Provider not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/health-insurance/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Providers</Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-400 text-sm">{provider.name}</span>
          </div>
          {provider.notRecommended && (
            <div className="bg-red-900/30 border border-red-700/50 rounded-lg px-5 py-3 mb-6 flex items-start gap-3">
              <span className="text-red-400 text-lg">⚠️</span>
              <p className="text-red-300 text-sm">{details.warning}</p>
            </div>
          )}
          {provider.featured && (
            <div className="bg-emerald-900/30 border border-emerald-600/50 rounded-lg px-5 py-3 mb-6 flex items-start gap-3">
              <span className="text-emerald-400 text-lg">⭐</span>
              <p className="text-emerald-300 text-sm font-medium">Highly Rated — Our most recommended insurer for most New Zealanders.</p>
            </div>
          )}
          <div className="flex items-center gap-6 mb-6">
            <div className="text-6xl">{provider.icon}</div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{provider.name}</h1>
              <p className="text-xl text-emerald-400">{details.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="bg-gray-800 border-b border-gray-700 py-12 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{provider.rating}/5</div>
              <p className="text-gray-400 text-sm">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{provider.from}</div>
              <p className="text-gray-400 text-sm">Starting Price</p>
            </div>
            <div className="text-center">
              <div className={`inline-block px-4 py-2 rounded-lg ${provider.badgeColor} text-white font-semibold text-sm mb-2`}>{provider.badge}</div>
              <p className="text-gray-400 text-sm">Recognition</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">NZ Wide</div>
              <p className="text-gray-400 text-sm">Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">About {provider.name}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{details.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Strengths</h3>
                <ul className="space-y-2">
                  {details.pros.map((pro, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-emerald-400 flex-shrink-0">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Considerations</h3>
                <ul className="space-y-2">
                  {details.cons.map((con, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-amber-400 flex-shrink-0">−</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-12">
              <h3 className="text-lg font-bold text-emerald-400 mb-4">Best For</h3>
              <ul className="space-y-2">
                {details.bestFor.map((item, idx) => (
                  <li key={idx} className="text-gray-300">• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Coverage Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.coverage.map((coverage, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <p className="text-white font-semibold">{coverage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div className="h-fit sticky top-4">
            <QuoteForm
              title={`Get a ${provider.name} Quote`}
              subtitle={`Compare ${provider.name} with other major NZ providers`}
            />
            <p className="text-gray-500 text-xs mt-4 text-center">No obligation • Response within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="bg-gray-800 border-t border-gray-700 py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Compare {provider.name} with Other Providers</h2>
          <p className="text-gray-400 mb-8">See how {provider.name} stacks up against Southern Cross, nib, AIA, Accuro, and Partners Life.</p>
          <Link href="/compare/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            View Full Comparison
          </Link>
        </div>
      </section>
    </>
  );
}
