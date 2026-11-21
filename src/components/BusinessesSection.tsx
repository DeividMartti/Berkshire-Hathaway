import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_SEGMENTS, INSURANCE_DIVISIONS } from '../data/berkshireData';
import { ResilientImage } from './ResilientImage';

export function BusinessesSection() {

  return (
    <section id="businesses" className="bg-[#FFFFFF] text-[#0A1628] py-20 sm:py-24 lg:py-32">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#0A1628]/12"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8B6B2B] font-semibold mb-4">
              Operating Structure
            </p>
            <h2
              className="font-serif font-medium tracking-[-0.02em] leading-[1.08] text-[#0A1628] text-balance"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)' }}
            >
              A diverse collection of exceptional businesses.
            </h2>
          </div>

          <a
            href="https://www.berkshirehathaway.com/subs/sublinks.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0A1628] hover:text-[#8B6B2B] transition-colors whitespace-nowrap shrink-0 border-b border-[#0A1628]/30 hover:border-[#8B6B2B] pb-1 self-start lg:self-end"
          >
            <span>Official Operating Companies Directory</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Core Insurance & Reinsurance Architecture Band */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 bg-[#0A1628] text-[#F9F7F3] p-7 sm:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b border-white/15">
            <div>
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.14em] text-[#D4AF63] font-semibold mb-2">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Foundational Operating Core · Insurance &amp; Reinsurance</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F9F7F3]">
                Three Insurance Underwriting Divisions
              </h3>
            </div>
            <p className="text-sm text-[#F9F7F3]/75 max-w-xl">
              Property-casualty insurance and global reinsurance form the core capital foundation of
              Berkshire Hathaway, structured across three major underwriting operations.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INSURANCE_DIVISIONS.map((division) => (
              <div
                key={division.name}
                className="flex flex-col justify-between pt-4 border-t border-white/15"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#D4AF63] font-medium mb-1.5">
                    {division.headquartersOrScope}
                  </p>
                  <h4 className="font-serif text-2xl font-medium text-[#F9F7F3] mb-3">
                    {division.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#F9F7F3]/78 mb-4">
                    {division.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-xs text-[#F9F7F3]/60 leading-relaxed">
                    {division.entities.join(' · ')}
                  </p>
                  <a
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4AF63] hover:text-[#E2C27D] transition-colors"
                  >
                    <span>Official Division Portal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Operating Business Segments Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 pt-12 border-t border-[#0A1628]/12 flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8B6B2B] font-semibold mb-3">
              Operating Sectors · Consolidated Businesses
            </p>
            <h3
              className="font-serif font-medium tracking-[-0.02em] leading-[1.1] text-[#0A1628] text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Six core pillars across insurance, rail, energy, industry, and retail.
            </h3>
          </div>
          <p className="text-sm text-[#4A5568] max-w-md lg:text-right">
            Each sector maintains autonomous subsidiary management with direct access to principal
            operating companies below.
          </p>
        </motion.div>

        {/* Operating Business Segments — Stacked Two-Column Overview */}
        <div className="space-y-8">
            {BUSINESS_SEGMENTS.map((segment, idx) => {
              const variant = idx % 3; // 0: Warm Alabaster, 1: Deep Navy, 2: Warm Limestone
              const isDark = variant === 1;

              const containerTheme =
                variant === 0
                  ? 'bg-[#F9F7F3] border border-[#0A1628]/10 text-[#0A1628]'
                  : variant === 1
                    ? 'bg-[#0A1628] border border-[#0A1628] text-[#F9F7F3]'
                    : 'bg-[#EFECE5]/75 border border-[#0A1628]/12 text-[#0A1628]';

              const kickerBySegment: Record<string, string> = {
                insurance: '01 · GEICO · BH Primary Group · BH Reinsurance Group',
                railroad: '02 · Freight Infrastructure & Intermodal Rail',
                energy: '03 · Utilities, Pipelines & Power Generation',
                manufacturing: '04 · Industrial Products & Building Materials',
                services: '05 · Wholesale Distribution, Aviation & B2B Services',
                retailing: '06 · Highway Travel Centers & Consumer Brands',
              };

              const linksLabelBySegment: Record<string, string> = {
                insurance: 'Operating Divisions & Group Links',
                railroad: 'Operating Company & Official Links',
                energy: 'Operating Utilities & Group Links',
                manufacturing: 'Operating Subsidiaries & Group Links',
                services: 'Operating Companies & Group Links',
                retailing: 'Operating Brands & Travel Center Links',
              };

              const cardLinks =
                segment.id === 'railroad'
                  ? [
                      ...segment.subsidiaries,
                      {
                        name: 'Berkshire Subsidiaries Directory',
                        url: 'https://www.berkshirehathaway.com/subs/sublinks.html',
                        note: 'Official corporate subsidiary listing',
                      },
                    ]
                  : segment.subsidiaries;

              return (
                <motion.article
                  key={`unified-stacked-${segment.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start p-6 sm:p-8 ${containerTheme}`}
                >
                  <figure className="lg:col-span-6 flex flex-col">
                    <div
                      className={`overflow-hidden w-full aspect-[4/3] ${
                        isDark ? 'bg-white/5' : 'bg-[#EFECE5]'
                      }`}
                    >
                      <ResilientImage
                        src={segment.imageSrc}
                        alt={segment.imageAlt}
                        fallbackTitle={segment.name}
                        className={`w-full h-full object-cover ${segment.imagePosition ?? 'object-center'}`}
                      />
                    </div>
                    <figcaption
                      className={`mt-2.5 text-[11px] font-serif italic ${
                        isDark ? 'text-[#F9F7F3]/65' : 'text-[#4A5568]'
                      }`}
                    >
                      {segment.imageCaption}
                    </figcaption>
                  </figure>

                  <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                    <div>
                      <p
                        className={`text-xs font-mono mb-2 tabular-nums ${
                          isDark ? 'text-[#D4AF63]' : 'text-[#8B6B2B]'
                        }`}
                      >
                        {kickerBySegment[segment.id] ?? `${segment.index} · ${segment.name}`}
                      </p>
                      <h4
                        className={`font-serif text-2xl sm:text-3xl font-medium mb-3 ${
                          isDark ? 'text-[#F9F7F3]' : 'text-[#0A1628]'
                        }`}
                      >
                        {segment.name}
                      </h4>
                      <p
                        className={`text-sm sm:text-base leading-relaxed ${
                          isDark ? 'text-[#F9F7F3]/85' : 'text-[#2A3444]'
                        }`}
                      >
                        {segment.summary}
                      </p>
                      <p
                        className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                          isDark ? 'text-[#F9F7F3]/68' : 'text-[#4A5568]'
                        }`}
                      >
                        {segment.stewardshipNote}
                      </p>
                    </div>

                    <div
                      className={`pt-5 border-t ${
                        isDark ? 'border-white/15' : 'border-[#0A1628]/10'
                      }`}
                    >
                      <p
                        className={`text-[11px] uppercase tracking-[0.14em] font-semibold mb-3 ${
                          isDark ? 'text-[#D4AF63]' : 'text-[#5B6472]'
                        }`}
                      >
                        {linksLabelBySegment[segment.id] ?? 'Operating Companies & Groups'}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cardLinks.map((sub) => (
                          <a
                            key={`segment-link-${segment.id}-${sub.name}`}
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-start justify-between gap-2.5 p-3 border transition-colors ${
                              isDark
                                ? 'bg-white/5 border-white/15 hover:border-[#D4AF63]'
                                : 'bg-white border-[#0A1628]/10 hover:border-[#8B6B2B]'
                            }`}
                          >
                            <div className="min-w-0">
                              <span
                                className={`block text-xs sm:text-sm font-semibold transition-colors truncate ${
                                  isDark
                                    ? 'text-[#F9F7F3] group-hover:text-[#D4AF63]'
                                    : 'text-[#0A1628] group-hover:text-[#8B6B2B]'
                                }`}
                              >
                                {sub.name}
                              </span>
                              <span
                                className={`block text-[11px] mt-0.5 line-clamp-1 ${
                                  isDark ? 'text-[#F9F7F3]/65' : 'text-[#5B6472]'
                                }`}
                              >
                                {sub.note}
                              </span>
                            </div>
                            <ArrowUpRight
                              className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors ${
                                isDark
                                  ? 'text-[#F9F7F3]/65 group-hover:text-[#D4AF63]'
                                  : 'text-[#5B6472] group-hover:text-[#8B6B2B]'
                              }`}
                              aria-hidden="true"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
