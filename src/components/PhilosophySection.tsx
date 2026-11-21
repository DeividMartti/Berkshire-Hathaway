import { motion } from 'motion/react';
import { PHILOSOPHY_IMAGE, PHILOSOPHY_PRINCIPLES } from '../data/berkshireData';
import { ResilientImage } from './ResilientImage';

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="bg-[#EFECE5] text-[#0A1628] py-20 sm:py-24 lg:py-32 border-b border-[#0A1628]/10"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="overflow-hidden border border-[#0A1628]/12 bg-[#E4DFD5]">
              <ResilientImage
                src={PHILOSOPHY_IMAGE.src}
                alt={PHILOSOPHY_IMAGE.alt}
                fallbackTitle="Long-Term Stewardship"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <figcaption className="mt-3.5 text-xs font-serif italic text-[#4A5568]">
              {PHILOSOPHY_IMAGE.caption}
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-[#8B6B2B] font-semibold mb-4">
              Operating Philosophy
            </p>
            <h2
              className="font-serif font-medium tracking-[-0.02em] leading-[1.05] text-[#0A1628] text-balance"
              style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.85rem)' }}
            >
              Think long term.
            </h2>

            <blockquote className="mt-8 py-7 border-y border-[#0A1628]/15">
              <p className="font-serif italic text-xl sm:text-2xl lg:text-[28px] leading-[1.4] text-[#0A1628]">
                “When we own portions of outstanding businesses with outstanding managements, our
                favorite holding period is forever.”
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.14em] text-[#5B6472]">
                Warren E. Buffett · 1988 Letter to Shareholders (berkshirehathaway.com)
              </footer>
            </blockquote>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {PHILOSOPHY_PRINCIPLES.map((principle) => (
                <div key={principle.number} className="pt-4 border-t border-[#0A1628]/15">
                  <span className="font-mono text-xs text-[#8B6B2B] block mb-2 tabular-nums">
                    {principle.number}.
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0A1628] mb-2.5">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2A3444]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
