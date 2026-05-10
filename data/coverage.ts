export interface CoverageType {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  keyBenefits: string[];
  from: string;
}

export const COVERAGE_TYPES: CoverageType[] = [
  {
    slug: "major-medical",
    title: "Major Medical Cover",
    icon: "🏥",
    shortDesc: "Comprehensive cover for hospital stays, surgery, and specialist consultations.",
    description: "Major medical cover is the most comprehensive type of health insurance in New Zealand. It covers hospital admissions, surgical procedures, specialist consultations, diagnostic tests, and more — giving you full private healthcare access without the public waiting lists.",
    keyBenefits: ["Private hospital admission", "Surgeon and anaesthetist fees", "Specialist consultations", "Diagnostic tests (MRI, CT, X-ray)", "Skip public waiting lists"],
    from: "$80",
  },
  {
    slug: "surgical-cover",
    title: "Surgical Cover",
    icon: "🔬",
    shortDesc: "Covers the cost of planned surgery and private hospital stays.",
    description: "Surgical cover pays for private surgery, hospital stays, and operating theatre costs. It is the most cost-effective entry point into private health insurance, giving you access to elective surgery on your schedule rather than waiting on public lists.",
    keyBenefits: ["Planned surgery cover", "Private hospital room", "Surgeon and anaesthetist fees", "Operating theatre costs", "Recovery nursing care"],
    from: "$60",
  },
  {
    slug: "everyday-health",
    title: "Everyday Health Cover",
    icon: "💊",
    shortDesc: "Claim back everyday health costs like GP visits, prescriptions, and optical.",
    description: "Everyday health cover (also called day-to-day cover) reimburses routine medical expenses — GP visits, prescriptions, dental check-ups, optical, and physiotherapy. It reduces the financial burden of regular healthcare throughout the year.",
    keyBenefits: ["GP consultation rebates", "Prescription subsidies", "Dental check-ups", "Optical allowance", "Physio and osteopath"],
    from: "$30",
  },
  {
    slug: "trauma-insurance",
    title: "Trauma Insurance",
    icon: "❤️",
    shortDesc: "A lump sum payment if you're diagnosed with a serious condition like cancer or heart attack.",
    description: "Trauma insurance pays a lump sum if you are diagnosed with a specified serious condition such as cancer, heart attack, or stroke. The payment helps cover lost income, treatment costs, and life adjustments during recovery.",
    keyBenefits: ["Lump sum on diagnosis", "Covers cancer, heart attack, stroke", "Use payment however you need", "Complements health insurance", "Financial cushion during recovery"],
    from: "$45",
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    icon: "🛡️",
    shortDesc: "Protect your family's financial future if the worst happens.",
    description: "Life insurance provides a lump sum payment to your family if you pass away. Combined with health insurance, it gives your loved ones financial security when they need it most.",
    keyBenefits: ["Lump sum on death", "Terminal illness benefit", "Trauma cover add-on option", "Fixed or level premiums", "Family financial protection"],
    from: "$25",
  },
  {
    slug: "income-protection",
    title: "Income Protection",
    icon: "💰",
    shortDesc: "Replace your income if illness or injury stops you from working.",
    description: "Income protection insurance pays a monthly benefit — typically 75% of your salary — if you are unable to work due to illness or injury. It is essential for self-employed Kiwis and anyone without adequate sick leave.",
    keyBenefits: ["Up to 75% of income replaced", "Monthly benefit payments", "Illness and injury cover", "Waiting period options", "Long-term cover available"],
    from: "$35",
  },
  {
    slug: "business-health",
    title: "Business Health Insurance",
    icon: "🏢",
    shortDesc: "Group health insurance for your team — a tax-effective employee benefit.",
    description: "Group business health insurance covers your employees and their families. It is a valuable staff benefit that improves retention and productivity — and premiums are often tax-deductible.",
    keyBenefits: ["Group discounts available", "Employee wellness benefit", "Tax-deductible premiums", "Customisable cover levels", "Quick claims process"],
    from: "$120",
  },
  {
    slug: "mental-health",
    title: "Mental Health Cover",
    icon: "🧠",
    shortDesc: "Access private psychology and psychiatric care without the public waiting lists.",
    description: "Mental health cover provides access to private psychology and psychiatric services. Only Accuro offers mental health as a standalone optional add-on. Other providers may bundle it into major medical cover. Given long public waiting lists for mental health services, private cover can mean getting help within days.",
    keyBenefits: ["Private psychology sessions", "Psychiatric consultations", "Mental health hospital admission", "Fast access without public wait", "Accuro exclusive add-on option"],
    from: "$55",
  },
];

export const FOR_YOU_SEGMENTS = [
  { slug: "individuals", title: "Individuals", icon: "👤", desc: "Tailored cover for your personal health needs and budget." },
  { slug: "families", title: "Families", icon: "👨‍👩‍👧‍👦", desc: "Protect your whole family with a single comprehensive policy." },
  { slug: "seniors", title: "Seniors", icon: "🧓", desc: "Specialist cover for over-65s — no age-out surprises." },
  { slug: "self-employed", title: "Self-Employed", icon: "💼", desc: "Income protection and health cover when sick leave isn't an option." },
  { slug: "business-owners", title: "Business Owners", icon: "🏢", desc: "Group health plans that attract and retain great staff." },
  { slug: "new-to-nz", title: "New to NZ", icon: "🇳🇿", desc: "Understand the NZ health system and get covered fast." },
];
