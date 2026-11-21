import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onOpenPublication: (slug: string) => void;
  onNavigateSection: (href: string) => void;
}

export function Footer({ onOpenPublication, onNavigateSection }: FooterProps) {
  const handleSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigateSection(href);
  };

  return (
    <footer className="bg-[#060E1A] text-[#F9F7F3] pt-16 pb-12 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/12">
          {/* Corporate Identity */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <a
              href="#top"
              onClick={(e) => handleSection(e, '#top')}
              className="font-serif text-xl font-semibold tracking-[0.06em] text-[#F9F7F3] inline-block"
            >
              BERKSHIRE HATHAWAY INC.
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[#F9F7F3]/70 max-w-sm">
              A diversified American holding company encompassing insurance and reinsurance,
              freight rail transportation, regulated energy utilities, manufacturing, and service
              and retailing enterprises.
            </p>
            <div className="mt-6 text-xs leading-relaxed text-[#F9F7F3]/60 space-y-1">
              <p className="font-semibold text-[#F9F7F3]/85">Corporate Headquarters</p>
              <p>3555 Farnam Street</p>
              <p>Omaha, Nebraska 68131</p>
              <p>United States of America</p>
            </div>
          </div>

          {/* Institutional Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[#D4AF63] font-semibold mb-4">
              Enterprise
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F9F7F3]/75">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSection(e, '#about')}
                  className="hover:text-[#F9F7F3] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  onClick={(e) => handleSection(e, '#businesses')}
                  className="hover:text-[#F9F7F3] transition-colors"
                >
                  Our Businesses
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  onClick={(e) => handleSection(e, '#philosophy')}
                  className="hover:text-[#F9F7F3] transition-colors"
                >
                  Our Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  onClick={(e) => handleSection(e, '#news')}
                  className="hover:text-[#F9F7F3] transition-colors"
                >
                  News &amp; Updates
                </a>
              </li>
              <li>
                <a
                  href="https://www.berkshirehathaway.com/subs/sublinks.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F9F7F3] transition-colors"
                >
                  <span>Operating Subsidiaries</span>
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Investor Relations */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[#D4AF63] font-semibold mb-4">
              Investor Relations
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F9F7F3]/75">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('annual-interim-reports')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Annual &amp; Interim Reports
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('warren-buffett-letters')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Warren Buffett’s Letters
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('greg-abel-letters')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Greg Abel’s Letters
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('special-letters-warren-charlie')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Special Letters (Warren &amp; Charlie)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('wesco-charlie-munger-letters')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Charlie Munger’s Wesco Letters
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('sec-filings')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  SEC Filings
                </button>
              </li>
            </ul>
          </div>

          {/* Governance, Stock & Legal */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[#D4AF63] font-semibold mb-4">
              Governance &amp; Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F9F7F3]/75">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('annual-meeting-information')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Annual Meeting Information
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('common-stock-information')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Common Stock Information
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('corporate-governance')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Corporate Governance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPublication('sustainability-disclosures')}
                  className="hover:text-[#F9F7F3] transition-colors text-left"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <a
                  href="https://www.berkshirehathaway.com/disclaimer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F9F7F3] transition-colors"
                >
                  <span>Official Legal Disclaimer</span>
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-[#F9F7F3]/55">
          <div className="space-y-1.5 max-w-3xl">
            <p className="text-[#F9F7F3]/75 font-medium">
              Independent Corporate Redesign Concept — Not an official website of Berkshire
              Hathaway Inc.
            </p>
            <p className="leading-relaxed">
              This independent concept preserves verified institutional facts and links directly to
              official publications at{' '}
              <a
                href="https://www.berkshirehathaway.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#D4AF63] transition-colors"
              >
                berkshirehathaway.com
              </a>
              . All photographic visuals are illustrative editorial imagery and do not depict
              official facilities, personnel, or operations of Berkshire Hathaway.
            </p>
          </div>

          <a
            href="#top"
            onClick={(e) => handleSection(e, '#top')}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/15 text-[#F9F7F3]/80 hover:text-[#D4AF63] hover:border-[#D4AF63] transition-colors whitespace-nowrap shrink-0 self-start md:self-center"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
