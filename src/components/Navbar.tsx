import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Businesses', href: '#businesses' },
  { label: 'Investors', href: '#investors' },
  { label: 'News', href: '#news' },
  { label: 'Governance', href: '#governance' },
  { label: 'Sustainability', href: '#sustainability' },
];

interface NavbarProps {
  onNavigateSection: (href: string) => void;
  forceSolid?: boolean;
}

export function Navbar({ onNavigateSection, forceSolid = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigateSection(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileOpen || forceSolid
          ? 'bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-gradient-to-b from-[#0A1628]/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-8">
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="font-serif text-lg sm:text-xl font-semibold tracking-[0.06em] text-[#F9F7F3] whitespace-nowrap shrink-0"
        >
          BERKSHIRE HATHAWAY
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium tracking-wide text-[#F9F7F3]/80"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="relative py-1.5 hover:text-[#F9F7F3] transition-colors duration-200 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#D4AF63] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#investors"
            onClick={(e) => handleLinkClick(e, '#investors')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-wider text-[#0A1628] bg-[#D4AF63] hover:bg-[#E2C27D] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Annual Reports
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#F9F7F3] hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#0A1628] border-t border-white/10 px-6 py-6 space-y-1"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="py-3.5 text-base font-medium text-[#F9F7F3]/90 hover:text-[#D4AF63] border-b border-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4">
            <a
              href="#investors"
              onClick={(e) => handleLinkClick(e, '#investors')}
              className="flex items-center justify-center w-full py-3.5 px-6 text-sm font-medium text-[#0A1628] bg-[#D4AF63] hover:bg-[#E2C27D] transition-colors"
            >
              Annual Reports & Filings
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
