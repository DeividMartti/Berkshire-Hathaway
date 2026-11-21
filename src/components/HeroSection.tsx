import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE } from '../data/berkshireData';
import { ResilientImage } from './ResilientImage';

const HERO_ANCHORS = [
  { label: 'Corporate Headquarters', value: '3555 Farnam St., Omaha, NE' },
  { label: 'Public Listings', value: 'NYSE: BRK.A · BRK.B' },
  { label: 'Operating Model', value: 'Decentralized Autonomy' },
  { label: 'Official Repository', value: 'berkshirehathaway.com' },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative bg-[#0A1628] text-[#F9F7F3] min-h-[92vh] flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-0">
        <ResilientImage
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fallbackTitle="Berkshire Hathaway"
          priority
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/78 to-[#0A1628]/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/60"
        />
      </div>

      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-16 lg:pt-44 lg:pb-20 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm tracking-[0.14em] uppercase text-[#D4AF63] font-medium mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Omaha, Nebraska</span>
            <span aria-hidden="true">·</span>
            <span>NYSE: BRK.A &amp; BRK.B</span>
            <span aria-hidden="true">·</span>
            <span>Independent Redesign Concept</span>
          </p>

          <h1
            className="font-serif font-medium tracking-[-0.02em] leading-[1.03] text-[#F9F7F3] text-balance"
            style={{ fontSize: 'clamp(2.65rem, 5.4vw, 4.75rem)' }}
          >
            Building value.
            <br />
            For generations.
          </h1>

          <p className="mt-7 text-base sm:text-lg lg:text-xl leading-relaxed text-[#F9F7F3]/85 max-w-2xl font-normal">
            A diversified global enterprise built on a long-term vision, disciplined capital
            allocation and enduring business principles.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#businesses"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-wide bg-[#D4AF63] text-[#0A1628] hover:bg-[#E2C27D] transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#investors"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-[#F9F7F3] border border-[#F9F7F3]/30 hover:border-[#D4AF63] hover:text-[#D4AF63] transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              <span>Shareholder Resources</span>
              <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-[#0A1628]/85 backdrop-blur-sm">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {HERO_ANCHORS.map((anchor) => (
            <div key={anchor.label} className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#F9F7F3]/55">
                {anchor.label}
              </span>
              <span className="text-sm font-medium text-[#F9F7F3]/95 tabular-nums">
                {anchor.value}
              </span>
            </div>
          ))}
        </div>
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pb-3">
          <p className="text-[11px] text-[#F9F7F3]/50 italic">
            {HERO_IMAGE.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
