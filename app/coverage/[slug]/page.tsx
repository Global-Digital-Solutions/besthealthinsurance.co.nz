import { COVERAGE_TYPES } from "../../../data/coverage";
import QuoteForm from "../../components/QuoteForm";
import Link from "next/link";

export function generateStaticParams() {
  return COVERAGE_TYPES.map((coverage) => ({
    slug: coverage.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const coverage = COVERAGE_TYPES.find((c) => c.slug === params.slug);
  return {
    title: `${coverage?.title} | Best Health Insurance NZ`,
    description: coverage?.shortDesc,
  };
}

export default function CoveragePage({ params }: { params: { slug: string } }) {
  const coverage = COVERAGE_TYPES.find((c) => c.slug === params.slug);

  if (!coverage) {
    return <div className="text-center py-20 text-white">Coverage not found</div>;
  }

  const faqData = [
    {
      q: `What does ${coverage.title} cover?`,
      a: coverage.description,
    },
    {
      q: `Is ${coverage.title} essential?`,
      a: "Coverage essentiality depends on your age, health status, and personal circumstances. Hospital and surgical cover is generally considered essential for most New Zealanders. A licensed adviser can help determine what's right for you.",
    },
    {
      q: `How much does ${coverage.title} cost?`,
      a: `${coverage.title} costs from ${coverage.from} per month depending on your age, health status, and the excess you choose. Younger, healthier individuals typically pay less. You can get a personalised quote from our advisers.`,
    },
    {
      q: "Are there waiting periods?",
      a: "Most health insurance policies have a 2-3 month general waiting period for new conditions. Some specific conditions like mental health may have longer waiting periods. Accidents are usually covered from day one.",
    },
  ];

  return (
    <>
      {/* Hero Section with Form */}
      <section className="bg-gray-900 border-b border-gray-800 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/coverage/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Coverage</Link>
            <span className="text-gray-600">›</span>
            <span className="text-gray-400 text-sm">{coverage.title}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="text-5xl mb-4">{coverage.icon}</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{coverage.title}</h1>
              <p className="text-lg text-gray-400 mb-6">{coverage.shortDesc}</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-emerald-400">{coverage.from}/month</span>
                <span className="text-sm text-gray-500">Indicative starting price</span>
              </div>
            </div>
            <div>
              <QuoteForm title={`Get a ${coverage.title} Quote`} subtitle="Compare all major NZ providers in 24 hours" />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">What&apos;s Included</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">{coverage.description}</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverage.keyBenefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Compare Quotes Today</h2>
          <p className="text-emerald-100 mb-8">Talk to a licensed adviser about {coverage.title}. No obligation.</p>
          <Link href="/contact/" className="inline-block bg-white hover:bg-gray-100 text-emerald-900 font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
