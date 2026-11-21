import { useState } from 'react';
import { motion } from 'motion/react';
import { ABOUT_IMAGE, MILESTONES } from '../data/berkshireData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  const [activeYear, setActiveYear] = useState(MILESTONES[0].year);
  const activeMilestone = MILESTONES.find((m) => m.year === activeYear) ?? MILESTONES[0];

  return (
    <section id="about" className="bg-[#F9F7F3] text-[#0A1628] py-20 sm:py-24 lg:py-32 border-b border-[#0A1628]/10">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-[#8B6B2B] font-semibold mb-4">
              About Berkshire Hathaway
            </p>
            <h2
              className="font-serif font-medium tracking-[-0.02em] leading-[1.08] text-[#0A1628] text-balance"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)' }}
            >
              A different kind of company.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-[1.78] text-[#2A3444] max-w-prose">
              <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#0A1628]">
                Headquartered at 3555 Farnam Street in Omaha, Nebraska, Berkshire Hathaway Inc. is
                a holding company owning subsidiaries engaged in diverse business activities—led by
                property-casualty insurance and global reinsurance alongside freight rail
                transportation, regulated energy and utility infrastructure, manufacturing, and
                service and retailing enterprises including McLane and Pilot.
              </p>
              <p>
                What distinguishes Berkshire Hathaway is not simply the breadth of its operating
                enterprises, but the architecture of its stewardship. For more than six decades—shaped
                by Warren E. Buffett’s capital allocation principles and carried forward today under
                Chief Executive Officer Greg Abel and Chairman Howard G. Buffett—the organization has
                offered founders and enduring enterprises a permanent home free from short-term
                divestiture cycles.
              </p>
              <p>
                Each operating company retains its management team, brand identity, and operational
                autonomy, supported by a lean corporate office in Omaha dedicated to disciplined
                reinvestment and unyielding financial integrity.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#0A1628]/12">
              <div className="flex items-center justify-between gap-4 mb-5">
                <h3 className="font-serif text-xl font-medium text-[#0A1628]">
                  Institutional Milestones
                </h3>
                <span className="font-mono text-xs text-[#5B6472] tabular-nums">
                  1965 — 2026
                </span>
              </div>

              <div
                role="tablist"
                aria-label="Berkshire Hathaway historical milestones"
                className="flex flex-wrap gap-2 mb-6"
              >
                {MILESTONES.map((milestone) => {
                  const selected = milestone.year === activeYear;
                  return (
                    <button
                      key={milestone.year}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveYear(milestone.year)}
                      className={`px-3.5 py-2 text-xs font-mono tracking-wide transition-colors duration-200 whitespace-nowrap shrink-0 tabular-nums border ${
                        selected
                          ? 'bg-[#0A1628] text-[#F9F7F3] border-[#0A1628]'
                          : 'bg-transparent text-[#2A3444] border-[#0A1628]/15 hover:border-[#0A1628]/45'
                      }`}
                    >
                      {milestone.year}
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                className="p-6 bg-[#EFECE5]/75 border border-[#0A1628]/10 min-h-[144px]"
              >
                <p className="font-mono text-xs text-[#8B6B2B] mb-1.5 tabular-nums">
                  {activeMilestone.year}
                </p>
                <h4 className="font-serif text-xl font-semibold text-[#0A1628] mb-2">
                  {activeMilestone.title}
                </h4>
                <p className="text-sm leading-relaxed text-[#2A3444]">
                  {activeMilestone.detail}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:sticky lg:top-28"
          >
            <div className="overflow-hidden border border-[#0A1628]/12 bg-[#EFECE5]">
              <ResilientImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                fallbackTitle="Archival Study"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <figcaption className="mt-3.5 text-xs font-serif italic text-[#4A5568]">
              {ABOUT_IMAGE.caption}
            </figcaption>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#0A1628]/12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#5B6472] mb-1">
                  Executive Leadership
                </p>
                <p className="text-sm font-medium text-[#0A1628]">
                  Greg Abel, Chief Executive Officer
                </p>
                <p className="text-xs text-[#4A5568] mt-0.5">
                  Howard G. Buffett, Chairman · Warren E. Buffett, Chairman Emeritus
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#5B6472] mb-1">
                  Corporate Domicile
                </p>
                <p className="text-sm font-medium text-[#0A1628]">
                  Delaware Corporation · Omaha HQ
                </p>
                <p className="text-xs text-[#4A5568] mt-0.5">
                  3555 Farnam Street, Omaha, NE 68131
                </p>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
