import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { NEWS_ITEMS } from '../data/berkshireData';

const YEAR_FILTERS: Array<'All' | '2026' | '2025'> = ['All', '2026', '2025'];

interface NewsSectionProps {
  onOpenPublication: (slug: string) => void;
}

export function NewsSection({ onOpenPublication }: NewsSectionProps) {
  const [selectedYear, setSelectedYear] = useState<'All' | '2026' | '2025'>('All');

  const filteredItems = useMemo(() => {
    if (selectedYear === 'All') return NEWS_ITEMS;
    return NEWS_ITEMS.filter((item) => item.year === selectedYear);
  }, [selectedYear]);

  const leadStory = filteredItems[0];
  const secondaryStories = filteredItems.slice(1, 4);
  const archiveDispatches = filteredItems.slice(4);

  return (
    <section
      id="news"
      className="bg-[#F9F7F3] text-[#0A1628] py-20 sm:py-24 lg:py-32 border-b border-[#0A1628]/10"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#0A1628]/12"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#8B6B2B] font-semibold mb-4">
              Corporate Announcements
            </p>
            <h2
              className="font-serif font-medium tracking-[-0.02em] leading-[1.08] text-[#0A1628] text-balance"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)' }}
            >
              News &amp; official updates.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div
              role="tablist"
              aria-label="Filter announcements by year"
              className="flex items-center gap-1.5"
            >
              {YEAR_FILTERS.map((year) => {
                const active = selectedYear === year;
                return (
                  <button
                    key={year}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3.5 py-2 text-xs font-mono transition-colors border whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[#0A1628] text-[#F9F7F3] border-[#0A1628]'
                        : 'bg-transparent text-[#2A3444] border-[#0A1628]/15 hover:border-[#0A1628]/45'
                    }`}
                  >
                    {year === 'All' ? 'All Releases' : year}
                  </button>
                );
              })}
            </div>

            <a
              href="https://www.berkshirehathaway.com/news/2026news.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0A1628] hover:text-[#8B6B2B] border-b border-[#0A1628]/30 hover:border-[#8B6B2B] pb-0.5 whitespace-nowrap shrink-0"
            >
              <span>Official News Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Tier 1: Lead Story + Tier 2: Secondary Features */}
        {leadStory && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            <article className="lg:col-span-6 p-7 sm:p-10 bg-[#0A1628] text-[#F9F7F3] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#D4AF63] font-mono mb-5">
                  <span className="tabular-nums">{leadStory.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-sans uppercase tracking-[0.12em]">
                    {leadStory.category}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.15] text-[#F9F7F3]">
                  <button
                    type="button"
                    onClick={() => onOpenPublication(leadStory.publicationSlug)}
                    className="text-left hover:text-[#D4AF63] transition-colors"
                  >
                    {leadStory.title}
                  </button>
                </h3>

                <p className="mt-5 text-base leading-relaxed text-[#F9F7F3]/80 max-w-xl">
                  {leadStory.summary}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onOpenPublication(leadStory.publicationSlug)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF63] hover:text-[#E2C27D] transition-colors"
                >
                  <span>Open Announcement Record</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={leadStory.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F9F7F3]/70 hover:text-[#F9F7F3] transition-colors"
                >
                  <span>Official Source</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>

            <div className="lg:col-span-6 flex flex-col justify-between divide-y divide-[#0A1628]/12 border-y border-[#0A1628]/12">
              {secondaryStories.map((item) => (
                <article key={item.id} className="py-6 first:pt-2 last:pb-2 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#5B6472] font-mono">
                    <span className="tabular-nums text-[#8B6B2B]">{item.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-sans uppercase tracking-[0.1em]">{item.category}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0A1628]">
                    <button
                      type="button"
                      onClick={() => onOpenPublication(item.publicationSlug)}
                      className="text-left hover:text-[#8B6B2B] transition-colors inline-flex items-baseline gap-2"
                    >
                      <span>{item.title}</span>
                      <ArrowRight
                        className="w-4 h-4 shrink-0 translate-y-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2A3444]">{item.summary}</p>
                </article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tier 3: Additional Chronological Dispatches */}
        {archiveDispatches.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 pt-8 border-t border-[#0A1628]/12"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[#5B6472] font-semibold mb-6">
              Earlier Corporate Dispatches
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {archiveDispatches.map((item) => (
                <article key={item.id} className="flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#5B6472] mb-2">
                      <span className="tabular-nums text-[#8B6B2B]">{item.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans">{item.category}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#0A1628] leading-snug">
                      <button
                        type="button"
                        onClick={() => onOpenPublication(item.publicationSlug)}
                        className="text-left hover:text-[#8B6B2B] transition-colors"
                      >
                        {item.title}
                      </button>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#2A3444]">{item.summary}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onOpenPublication(item.publicationSlug)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1628] hover:text-[#8B6B2B] transition-colors"
                    >
                      <span>Open Record</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                    <a
                      href={item.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#5B6472] hover:text-[#0A1628] transition-colors"
                    >
                      <span>Official Source</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
