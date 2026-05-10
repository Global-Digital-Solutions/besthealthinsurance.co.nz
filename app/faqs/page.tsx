import Link from "next/link";

export const metadata = {
  title: "FAQs | BestHealthInsurance.co.nz",
  description: "Frequently asked questions about health insurance in New Zealand. Get answers to your health insurance questions.",
};

const faqs = [
  {
    category: "General",
    items: [
      { q: "Why should I get private health insurance in New Zealand?", a: "Private health insurance helps you skip public waiting lists, which can stretch to 6-24 months for elective surgery. It gives you choice of specialist, access to non-Pharmac drugs, faster diagnosis, and peace of mind. Particularly valuable if you need planned surgery, are diagnosed with cancer, or want choice of provider." },
      { q: "Do I need private health insurance if I have ACC cover?", a: "ACC covers accidental injuries only. It doesn't cover illnesses like cancer, heart disease, diabetes, or other medical conditions. Private health insurance covers these illness-related conditions that ACC excludes. Ideally, you want both layers of protection." },
      { q: "What's the difference between public and private healthcare in New Zealand?", a: "Public healthcare is free (tax-funded) but has long waiting lists. You get treated when the system has capacity. Private healthcare means you choose when and where to be treated, which specialist treats you, and you don't wait on public lists. Private health insurance helps you access private treatment." },
      { q: "Which health insurer do you recommend?", a: "For most New Zealanders, we recommend Accuro first — they're NZ's only member-owned insurer, offer competitive premiums, and are the only provider with a mental health standalone add-on. Partners Life is our second recommendation for those wanting the most comprehensive policy wordings. We do not recommend nib as their premiums run 20-30% above market for equivalent cover." },
    ],
  },
  {
    category: "Costs & Premiums",
    items: [
      { q: "How much does private health insurance cost in New Zealand?", a: "Hospital-only cover costs from $55-$100/month for someone in their 20s, up to $200-$400/month for someone over 65. Major medical cover (including specialists) typically costs $80-$180/month for younger people. Premiums depend on your age, health, excess chosen, and provider." },
      { q: "What's an excess and how does it affect my premiums?", a: "An excess is the amount you pay out-of-pocket before insurance kicks in. Higher excess = lower premiums. For example, a $1,000 excess typically costs 30-40% less than a $250 excess. Choose an excess you could comfortably pay from savings." },
      { q: "Do premiums increase every year?", a: "Yes. All NZ health insurers increase premiums annually by around 5-10%, driven by healthcare inflation, claims frequency, and ageing membership. Southern Cross typically increases on 1 April each year." },
    ],
  },
  {
    category: "Coverage & Claims",
    items: [
      { q: "What does private health insurance actually cover?", a: "Major medical cover pays for planned surgery, hospital stays, specialist consultations, and diagnostic tests (MRI, CT scans). Comprehensive policies add cancer treatment and everyday benefits (GP visits, prescriptions, dental, optical). Non-Pharmac drugs are covered by premium policies." },
      { q: "Does health insurance cover pre-existing conditions?", a: "Pre-existing conditions are usually excluded from cover, but you can still get insurance. The insurer will either exclude the specific condition, apply a premium loading, or accept you with standard cover depending on your health history. A licensed adviser can help find the best terms for your situation." },
      { q: "What is a non-Pharmac drug and why does it matter?", a: "Pharmac is the NZ government agency that funds certain medicines. Non-Pharmac drugs are medicines not on Pharmac's funded list — often newer cancer drugs or specialist treatments. These can cost $2,000-8,000 per month. Comprehensive health insurance policies cover these up to annual limits." },
      { q: "What's the difference between major medical and surgical cover?", a: "Surgical cover pays only for the surgery itself — hospital admission, operating theatre, surgeon fees. Major medical cover adds specialist consultations, diagnostic tests (MRI, CT scans), and outpatient procedures. If you have any ongoing health condition, major medical is almost always worth the additional cost." },
    ],
  },
  {
    category: "Providers",
    items: [
      { q: "Why is Accuro recommended?", a: "Accuro is NZ's only member-owned health insurer, meaning they're aligned with policyholders rather than shareholders. Their premiums are 10-15% below Southern Cross and nib for equivalent cover, they have fast claims processing (5-7 days), and they're the only insurer offering mental health as a standalone optional add-on." },
      { q: "Is Southern Cross worth the higher premium?", a: "For most people, no. Southern Cross premiums are 20-30% above Partners Life for equivalent cover. Their main advantage is brand trust and a wide network of affiliated providers. Value-conscious Kiwis typically find better value with Accuro or Partners Life." },
      { q: "Why is nib not recommended?", a: "nib's premiums consistently run 20-30% above market for equivalent cover. While their digital experience is strong, value-conscious Kiwis get better coverage at lower cost with Accuro, Partners Life, or AIA." },
      { q: "Is Partners Life still NZ-owned?", a: "Partners Life was acquired by Dai-ichi Life Insurance of Japan in 2023. They continue to operate as a NZ-run entity with the same team, but are no longer fully NZ-owned. They still offer the most comprehensive policy wordings and competitive premiums in the market." },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400">Everything you need to know about health insurance in New Zealand.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-gray-800">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((faq, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 py-14">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-emerald-100 mb-8">Our licensed advisers are happy to help. Get in touch for personalised advice.</p>
          <Link href="/contact/" className="inline-block bg-white hover:bg-gray-100 text-emerald-700 font-bold px-10 py-4 rounded-lg transition-colors shadow-lg">
            Get a Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
