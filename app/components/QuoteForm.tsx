"use client";
import { SITE } from "../../data/site";

interface QuoteFormProps {
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export default function QuoteForm({ compact = false, title = "Get Your Health Insurance Quotes", subtitle = "Compare all major NZ providers in 24 hours" }: QuoteFormProps) {
  return (
    <div className={`bg-gray-800 rounded-xl border border-gray-700 shadow-2xl ${compact ? "p-5" : "p-6 sm:p-7"}`}>
      <div className="mb-5">
        <h3 className={`font-bold text-white mb-1 ${compact ? "text-lg" : "text-xl"}`}>{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      <form className="flex flex-col gap-3" action="https://shiny-bush-41cd.darinbutler.workers.dev" method="POST">
        <input type="hidden" name="_cc" value={SITE.formCC} />
        <input type="hidden" name="_subject" value={SITE.formSubject} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={SITE.formNext} />

        <input type="text" name="name" placeholder="Your full name" required
          className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />

        <input type="email" name="email" placeholder="Email address" required
          className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />

        <input type="tel" name="phone" placeholder="Phone number"
          className="w-full bg-gray-900 border border-gray-600 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />

        <select name="cover_type"
          className="w-full bg-gray-900 border border-gray-600 text-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors">
          <option value="">Cover type (optional)</option>
          <option value="major-medical">Major Medical Cover</option>
          <option value="surgical">Surgical Cover</option>
          <option value="everyday-health">Everyday Health Cover</option>
          <option value="income-protection">Income Protection</option>
          <option value="business-health">Business / Group Cover</option>
          <option value="mental-health">Mental Health Cover</option>
        </select>

        <select name="who_to_cover"
          className="w-full bg-gray-900 border border-gray-600 text-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors">
          <option value="">Who to cover</option>
          <option value="just-me">Just me</option>
          <option value="me-partner">Me + partner</option>
          <option value="family">Family with children</option>
          <option value="business">Business / employees</option>
        </select>

        <button type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 rounded-lg transition-colors text-sm shadow-lg shadow-emerald-500/20">
          Get My Quote →
        </button>
        <p className="text-center text-gray-500 text-xs">🔒 256-bit SSL &nbsp;·&nbsp; No spam, ever &nbsp;·&nbsp; Response within 24hrs</p>
      </form>
    </div>
  );
}
