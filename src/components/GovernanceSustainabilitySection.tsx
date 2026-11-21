import { ArrowRight, ArrowUpRight, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { GOVERNANCE_RESOURCES, SUSTAINABILITY_RESOURCES } from '../data/berkshireData';

interface GovernanceSustainabilitySectionProps {
  onOpenPublication: (slug: string) => void;
}

export function GovernanceSustainabilitySection({
  onOpenPublication,
}: GovernanceSustainabilitySectionProps) {
  return (
    <section className="bg-[#FFFFFF] text-[#0A1628] py-20 sm:py-24 lg:py-32">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.16em] text-[#8B6B2B] font-semibold mb-4">
            Institutional Oversight &amp; Responsibility
          </p>
          <h2
            className="font-serif font-medium tracking-[-0.02em] leading-[1.08] text-[#0A1628] text-balance"
            style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)' }}
          >
            Governance &amp; sustainability.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Governance Pillar */}
          <motion.div
            id="governance"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#0A1628] text-[#F9F7F3] p-8 sm:p-10 lg:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-[#D4AF63] mb-6">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.14em] font-semibold">
                  Corporate Governance
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F9F7F3] leading-tight">
                Fiduciary accountability &amp; ethical conduct.
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#F9F7F3]/78">
                Berkshire Hathaway’s Board of Directors oversees corporate governance guidelines,
                executive succession, audit integrity, and enterprise-wide adherence to our Code
                of Business Conduct and Ethics.
              </p>

              <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
                {GOVERNANCE_RESOURCES.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => onOpenPublication('corporate-governance')}
                    className="group w-full text-left py-4 flex items-start justify-between gap-4 hover:bg-white/[0.03] transition-colors"
                  >
                    <div>
                      <span className="block text-sm font-medium text-[#F9F7F3] group-hover:text-[#D4AF63] transition-colors">
                        {item.title}
                      </span>
                      <span className="block text-xs text-[#F9F7F3]/65 mt-1 leading-relaxed">
                        {item.detail}
                      </span>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 text-[#D4AF63] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenPublication('corporate-governance')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-wide bg-[#D4AF63] text-[#0A1628] hover:bg-[#E2C27D] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Open Governance Publication</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href="https://www.berkshirehathaway.com/govern/govern.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium border border-white/20 text-[#F9F7F3]/85 hover:border-[#D4AF63] hover:text-[#D4AF63] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Official Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Sustainability Pillar */}
          <motion.div
            id="sustainability"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#EFECE5] text-[#0A1628] p-8 sm:p-10 lg:p-12 border border-[#0A1628]/12 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-[#8B6B2B] mb-6">
                <Leaf className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.14em] font-semibold">
                  Sustainability &amp; Workforce Disclosures
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0A1628] leading-tight">
                Decentralized environmental &amp; people stewardship.
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#2A3444]">
                Consistent with our operating model, sustainability initiatives are managed directly
                by each operating subsidiary alongside the Berkshire Hathaway Sustainability
                Leadership Council and consolidated EEO-1 workforce transparency.
              </p>

              <div className="mt-8 divide-y divide-[#0A1628]/12 border-y border-[#0A1628]/12">
                {SUSTAINABILITY_RESOURCES.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => onOpenPublication('sustainability-disclosures')}
                    className="group w-full text-left py-4 flex items-start justify-between gap-4 hover:bg-black/[0.02] transition-colors"
                  >
                    <div>
                      <span className="block text-sm font-medium text-[#0A1628] group-hover:text-[#8B6B2B] transition-colors">
                        {item.title}
                      </span>
                      <span className="block text-xs text-[#4A5568] mt-1 leading-relaxed">
                        {item.detail}
                      </span>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 text-[#8B6B2B] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenPublication('sustainability-disclosures')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-wide bg-[#0A1628] text-[#F9F7F3] hover:bg-[#172844] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Open Sustainability Publication</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href="https://www.berkshirehathaway.com/sustainability/sustainabilityintro.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium border border-[#0A1628]/25 text-[#0A1628] hover:border-[#0A1628] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Official Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
