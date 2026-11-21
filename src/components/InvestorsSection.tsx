import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { INVESTOR_RESOURCES, type InvestorResource } from '../data/berkshireData';

const CATEGORIES: Array<'All' | InvestorResource['category']> = [
  'All',
  'Shareholder Letters',
  'Reports & Filings',
  'Governance & Sustainability',
  'Meeting & Stock',
];

const SHARE_CLASS_SPECS = [
  {
    attribute: 'NYSE Ticker Symbol',
    classA: 'BRK.A',
    classB: 'BRK.B',
  },
  {
    attribute: 'Economic Interest Ratio',
    classA: '1.0000 Base Unit',
    classB: '1 / 1,500th of Class A',
  },
  {
    attribute: 'Voting Power Ratio',
    classA: 'Full voting rights',
    classB: '1 / 10,000th of Class A',
  },
  {
    attribute: 'Conversion Rights',
    classA: 'Convertible into 1,500 Class B shares at any time',
    classB: 'Not convertible into Class A shares',
  },
  {
    attribute: 'Annual Meeting Access',
    classA: 'Eligible for shareholder credentials',
    classB: 'Eligible for shareholder credentials',
  },
];

interface InvestorsSectionProps {
  onOpenPublication: (slug: string) => void;
}

export function InvestorsSection({ onOpenPublication }: InvestorsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | InvestorResource['category']>(
    'All'
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return INVESTOR_RESOURCES.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="investors"
      className="bg-[#0A1628] text-[#F9F7F3] py-20 sm:py-24 lg:py-32 border-t border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15"
        >
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.16em] text-[#D4AF63] font-semibold mb-4">
              Investor Relations
            </p>
            <h2
              className="font-serif font-medium tracking-[-0.02em] leading-[1.08] text-[#F9F7F3] text-balance"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)' }}
            >
              Information for our shareholders.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-sm sm:text-base leading-relaxed text-[#F9F7F3]/78">
              Complete directory of Berkshire Hathaway’s investor disclosures, leadership letters,
              regulatory SEC filings, governance charters, and sustainability resources. Open each
              editorial publication page or visit the primary official URL directly.
            </p>
          </div>
        </motion.div>

        {/* Filter & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Filter shareholder resources"
              className="flex flex-wrap gap-2"
            >
              {CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-2 text-xs font-medium tracking-wide transition-colors duration-200 whitespace-nowrap shrink-0 border ${
                      active
                        ? 'bg-[#D4AF63] text-[#0A1628] border-[#D4AF63]'
                        : 'bg-transparent text-[#F9F7F3]/80 border-white/15 hover:border-white/40 hover:text-[#F9F7F3]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-72">
              <Search
                className="w-4 h-4 text-[#F9F7F3]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <label htmlFor="investor-search" className="sr-only">
                Search shareholder documents
              </label>
              <input
                id="investor-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter letters, filings, Wesco, governance..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#12223B] border border-white/15 text-[#F9F7F3] placeholder:text-[#F9F7F3]/45 focus:outline-none focus:border-[#D4AF63] transition-colors"
              />
            </div>
          </div>

          {/* Document Ledger */}
          <div className="mt-8 border-t border-white/15">
            {filteredResources.length === 0 ? (
              <div className="py-12 text-center border-b border-white/15">
                <p className="text-sm text-[#F9F7F3]/75 mb-3">
                  No investor resources match "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 text-xs font-medium text-[#0A1628] bg-[#D4AF63] hover:bg-[#E2C27D] transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredResources.map((item) => (
                <div
                  key={item.id}
                  className="group py-6 sm:py-7 border-b border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start lg:items-center hover:bg-white/[0.025] transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4"
                >
                  <div className="lg:col-span-3 flex items-start gap-3">
                    <FileText className="w-4 h-4 text-[#D4AF63] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="block text-xs uppercase tracking-[0.1em] text-[#D4AF63] font-medium">
                        {item.category}
                      </span>
                      <span className="block text-xs text-[#F9F7F3]/60 mt-0.5">
                        {item.archivePeriod}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F9F7F3]">
                      <button
                        type="button"
                        onClick={() => onOpenPublication(item.publicationSlug)}
                        className="text-left hover:text-[#D4AF63] transition-colors"
                      >
                        {item.title}
                      </button>
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#F9F7F3]/72">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => onOpenPublication(item.publicationSlug)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wide bg-[#D4AF63] text-[#0A1628] hover:bg-[#E2C27D] transition-colors duration-200 whitespace-nowrap shrink-0"
                    >
                      <span>Open Publication</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>

                    <a
                      href={item.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Official source: ${item.officialDomainLabel}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium tracking-wide border border-white/25 text-[#F9F7F3]/90 hover:border-[#D4AF63] hover:text-[#D4AF63] transition-colors duration-200 whitespace-nowrap shrink-0"
                    >
                      <span>Official Source</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>

        {/* Share Class Structural Reference Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-12 border-t border-white/15"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#D4AF63] font-semibold mb-2">
                Capital Structure Reference
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F9F7F3]">
                Class A &amp; Class B Common Stock Parity
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenPublication('common-stock-information')}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4AF63] hover:underline whitespace-nowrap shrink-0"
              >
                <span>Open Common Stock Publication</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              <a
                href="https://www.berkshirehathaway.com/compab/compo.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F9F7F3]/75 hover:text-[#D4AF63] whitespace-nowrap shrink-0"
              >
                <span>Official Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="overflow-x-auto border border-white/15 bg-[#0F1F38]">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/15 bg-[#142744]">
                  <th className="py-4 px-5 text-xs uppercase tracking-[0.12em] text-[#F9F7F3]/70 font-semibold">
                    Structural Attribute
                  </th>
                  <th className="py-4 px-5 text-xs uppercase tracking-[0.12em] text-[#D4AF63] font-semibold">
                    Class A Common Stock (BRK.A)
                  </th>
                  <th className="py-4 px-5 text-xs uppercase tracking-[0.12em] text-[#D4AF63] font-semibold">
                    Class B Common Stock (BRK.B)
                  </th>
                </tr>
              </thead>
              <tbody>
                {SHARE_CLASS_SPECS.map((row) => (
                  <tr key={row.attribute} className="border-b border-white/10 last:border-b-0">
                    <td className="py-4 px-5 text-sm font-medium text-[#F9F7F3]/90">
                      {row.attribute}
                    </td>
                    <td className="py-4 px-5 text-sm text-[#F9F7F3]/78 tabular-nums">
                      {row.classA}
                    </td>
                    <td className="py-4 px-5 text-sm text-[#F9F7F3]/78 tabular-nums">
                      {row.classB}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
