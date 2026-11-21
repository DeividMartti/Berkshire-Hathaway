import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import {
  BUSINESS_SEGMENTS,
  INSURANCE_DIVISIONS,
  type BusinessSegment,
} from '../data/berkshireData';
import { ResilientImage } from './ResilientImage';

export function BusinessesSection() {
  const [selectedId, setSelectedId] = useState<string>(BUSINESS_SEGMENTS[0].id);
  const activeSegment =
    BUSINESS_SEGMENTS.find((seg) => seg.id === selectedId) ?? BUSINESS_SEGMENTS[0];

  const handleSelectSegment = (segment: BusinessSegment) => {
    setSelectedId(segment.id);
    const spotlightEl = document.getElementById('segment-spotlight');
    if (spotlightEl) {
      spotlightEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

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

        {/* Interactive Sector Dossier */}
        <motion.div
          id="segment-spotlight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <div
            role="tablist"
            aria-label="Business segments"
            className="flex flex-wrap gap-2 pb-8"
          >
            {BUSINESS_SEGMENTS.map((segment) => {
              const isActive = segment.id === activeSegment.id;
              return (
                <button
                  key={segment.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedId(segment.id)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-[#0A1628] text-[#F9F7F3] border-[#0A1628]'
                      : 'bg-[#F9F7F3] text-[#2A3444] border-[#0A1628]/12 hover:border-[#0A1628]/40'
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-70 mr-2 tabular-nums">
                    {segment.index}.
                  </span>
                  {segment.name}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-[#F9F7F3] border border-[#0A1628]/10 p-6 sm:p-8 lg:p-10"
          >
            <figure className="lg:col-span-6 flex flex-col">
              <div className="overflow-hidden bg-[#EFECE5] flex-1">
                <ResilientImage
                  src={activeSegment.imageSrc}
                  alt={activeSegment.imageAlt}
                  fallbackTitle={activeSegment.name}
                  className={`w-full h-full min-h-[260px] lg:min-h-[400px] object-cover ${activeSegment.imagePosition ?? 'object-center'}`}
                />
              </div>
              <figcaption className="mt-2.5 text-[11px] font-serif italic text-[#4A5568]">
                {activeSegment.imageCaption}
              </figcaption>
            </figure>

            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#8B6B2B] font-mono mb-3">
                  <span>{activeSegment.index}</span>
                  <span aria-hidden="true">/</span>
                  <span className="uppercase tracking-[0.14em] font-sans font-semibold">
                    {activeSegment.name}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0A1628] leading-tight">
                  {activeSegment.headline}
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#2A3444]">
                  {activeSegment.summary}
                </p>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#4A5568] pt-4 border-t border-[#0A1628]/10">
                  {activeSegment.stewardshipNote}
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#5B6472] font-semibold mb-3">
                  Key Operating Subsidiaries &amp; Groups
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSegment.subsidiaries.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-3 p-3 bg-white border border-[#0A1628]/10 hover:border-[#8B6B2B] transition-colors"
                    >
                      <div className="min-w-0">
                        <span className="block text-sm font-semibold text-[#0A1628] group-hover:text-[#8B6B2B] transition-colors truncate">
                          {sub.name}
                        </span>
                        <span className="block text-xs text-[#5B6472] mt-0.5 line-clamp-1">
                          {sub.note}
                        </span>
                      </div>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 text-[#5B6472] group-hover:text-[#8B6B2B] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Visual Overview of All 6 Core Business Groups */}
        <div className="mt-20 space-y-12">
          {/* Row 1: Insurance & Reinsurance (5 cols) + BNSF Railway (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col justify-between border border-[#0A1628]/10 bg-[#F9F7F3] p-6 sm:p-8"
            >
              <div>
                <figure className="mb-6">
                  <div className="overflow-hidden">
                    <ResilientImage
                      src={BUSINESS_SEGMENTS[0].imageSrc}
                      alt={BUSINESS_SEGMENTS[0].imageAlt}
                      fallbackTitle={BUSINESS_SEGMENTS[0].name}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-[11px] font-serif italic text-[#4A5568]">
                    {BUSINESS_SEGMENTS[0].imageCaption}
                  </figcaption>
                </figure>
                <p className="text-xs font-mono text-[#8B6B2B] mb-2">
                  01 · GEICO · BH Primary Group · BH Reinsurance Group
                </p>
                <h3 className="font-serif text-2xl font-medium text-[#0A1628] mb-3">
                  {BUSINESS_SEGMENTS[0].name}
                </h3>
                <p className="text-sm leading-relaxed text-[#2A3444]">
                  {BUSINESS_SEGMENTS[0].summary}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A1628]/10 flex items-center justify-between gap-4">
                <span className="text-xs text-[#5B6472]">
                  GEICO · Primary Group · Reinsurance Group
                </span>
                <button
                  type="button"
                  onClick={() => handleSelectSegment(BUSINESS_SEGMENTS[0])}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A1628] hover:text-[#8B6B2B] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Inspect Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-7 flex flex-col justify-between bg-[#0A1628] text-[#F9F7F3] p-6 sm:p-8"
            >
              <div>
                <figure className="mb-6">
                  <div className="overflow-hidden">
                    <ResilientImage
                      src={BUSINESS_SEGMENTS[1].imageSrc}
                      alt={BUSINESS_SEGMENTS[1].imageAlt}
                      fallbackTitle={BUSINESS_SEGMENTS[1].name}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-[11px] font-serif italic text-[#F9F7F3]/60">
                    {BUSINESS_SEGMENTS[1].imageCaption}
                  </figcaption>
                </figure>
                <p className="text-xs font-mono text-[#D4AF63] mb-2">
                  02 · Freight Infrastructure
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F9F7F3] mb-3">
                  {BUSINESS_SEGMENTS[1].name}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#F9F7F3]/80 max-w-2xl">
                  {BUSINESS_SEGMENTS[1].summary}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between gap-4">
                <span className="text-xs text-[#F9F7F3]/65">
                  Burlington Northern Santa Fe, LLC (BNSF)
                </span>
                <button
                  type="button"
                  onClick={() => handleSelectSegment(BUSINESS_SEGMENTS[1])}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF63] hover:text-[#E2C27D] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Inspect Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          </div>

          {/* Row 2: Berkshire Hathaway Energy Horizontal Feature */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#0A1628]/12 bg-[#EFECE5]/65 p-6 sm:p-8"
          >
            <figure className="lg:col-span-7 flex flex-col">
              <div className="overflow-hidden flex-1">
                <ResilientImage
                  src={BUSINESS_SEGMENTS[2].imageSrc}
                  alt={BUSINESS_SEGMENTS[2].imageAlt}
                  fallbackTitle={BUSINESS_SEGMENTS[2].name}
                  className="w-full h-full aspect-[16/9] object-cover"
                />
              </div>
              <figcaption className="mt-2 text-[11px] font-serif italic text-[#4A5568]">
                {BUSINESS_SEGMENTS[2].imageCaption}
              </figcaption>
            </figure>
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-[#8B6B2B] mb-2">
                  03 · Utilities, Pipelines &amp; Power Generation
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0A1628] mb-3">
                  {BUSINESS_SEGMENTS[2].name}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#2A3444]">
                  {BUSINESS_SEGMENTS[2].summary}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-[#4A5568]">
                  {BUSINESS_SEGMENTS[2].stewardshipNote}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A1628]/10 flex items-center justify-between gap-4">
                <span className="text-xs text-[#5B6472]">
                  BHE · MidAmerican · PacifiCorp · NV Energy
                </span>
                <button
                  type="button"
                  onClick={() => handleSelectSegment(BUSINESS_SEGMENTS[2])}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A1628] hover:text-[#8B6B2B] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Inspect Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* Row 3: Manufacturing, Service & McLane, Retailing & Pilot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_SEGMENTS.slice(3).map((segment, idx) => (
              <motion.article
                key={segment.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col justify-between border-t-2 border-[#0A1628] pt-6"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-mono text-xs text-[#8B6B2B]">{segment.index}</span>
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#5B6472]">
                      Operating Segment
                    </span>
                  </div>
                  <figure className="mb-5">
                    <div className="overflow-hidden bg-[#EFECE5]">
                      <ResilientImage
                        src={segment.imageSrc}
                        alt={segment.imageAlt}
                        fallbackTitle={segment.name}
                        className={`w-full aspect-[4/3] object-cover ${segment.imagePosition ?? 'object-center'}`}
                      />
                    </div>
                    <figcaption className="mt-2 text-[11px] font-serif italic text-[#4A5568]">
                      {segment.imageCaption}
                    </figcaption>
                  </figure>
                  <h3 className="font-serif text-2xl font-medium text-[#0A1628] mb-2.5">
                    {segment.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2A3444]">{segment.summary}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0A1628]/10 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#5B6472] truncate">
                    {segment.subsidiaries
                      .slice(0, 2)
                      .map((s) => s.name)
                      .join(' · ')}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSelectSegment(segment)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A1628] hover:text-[#8B6B2B] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Inspect Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
