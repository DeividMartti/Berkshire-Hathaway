import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  FileArchive,
  Link2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PUBLICATIONS, type Publication } from '../data/publications';

interface PublicationViewProps {
  publication: Publication;
  onSelectPublication: (slug: string) => void;
  onBackToOrigin: () => void;
}

export function PublicationView({
  publication,
  onSelectPublication,
  onBackToOrigin,
}: PublicationViewProps) {
  const [copiedPermalink, setCopiedPermalink] = useState(false);

  const currentIndex = PUBLICATIONS.findIndex((p) => p.slug === publication.slug);
  const prevPublication = currentIndex > 0 ? PUBLICATIONS[currentIndex - 1] : null;
  const nextPublication =
    currentIndex >= 0 && currentIndex < PUBLICATIONS.length - 1
      ? PUBLICATIONS[currentIndex + 1]
      : null;

  const permanentPath = `#publication/${publication.slug}`;
  const isAnnouncement = publication.category === 'Corporate Announcements';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setCopiedPermalink(false);
  }, [publication.slug]);

  const handleCopyPermalink = async () => {
    const fullUrl = `${window.location.origin}${window.location.pathname}${permanentPath}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiedPermalink(true);
      setTimeout(() => setCopiedPermalink(false), 2200);
    } catch {
      window.location.hash = permanentPath;
    }
  };

  return (
    <article className="bg-[#F9F7F3] text-[#0A1628] min-h-screen pt-16 lg:pt-20">
      {/* Dark Institutional Masthead */}
      <header className="bg-[#0A1628] text-[#F9F7F3] py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={onBackToOrigin}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#D4AF63] hover:text-[#E2C27D] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>
              {isAnnouncement
                ? 'Back to News & Official Updates'
                : 'Back to Information for Our Shareholders'}
            </span>
          </button>

          <motion.div
            key={publication.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#F9F7F3]/75 mb-5">
              <span className="uppercase tracking-[0.14em] text-[#D4AF63] font-semibold">
                {publication.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{publication.date}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[#F9F7F3]/60">{permanentPath}</span>
            </div>

            <h1
              className="font-serif font-medium tracking-[-0.02em] leading-[1.06] text-[#F9F7F3] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.8rem)' }}
            >
              {publication.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#F9F7F3]/80 max-w-3xl">
              {publication.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Two-Column Editorial Reading Layout */}
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Reading Column */}
          <motion.div
            key={`body-${publication.slug}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-12"
          >
            <p className="text-base sm:text-lg leading-[1.82] text-[#1E293B] max-w-prose first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#0A1628]">
              {publication.openingParagraph}
            </p>

            {/* Clearly Identified Reserved Verbatim Space */}
            <div className="p-6 sm:p-8 bg-[#EFECE5] border border-[#0A1628]/15 space-y-4">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.14em] text-[#8B6B2B] font-semibold">
                <FileArchive className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{publication.verifiedTranscriptNote.statusLabel}</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[#2A3444]">
                {publication.verifiedTranscriptNote.description}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={publication.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium bg-[#0A1628] text-[#F9F7F3] hover:bg-[#172844] transition-colors whitespace-nowrap"
                >
                  <span>{publication.officialSourceLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                {publication.secondarySourceUrl && publication.secondarySourceLabel && (
                  <a
                    href={publication.secondarySourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium border border-[#0A1628]/25 text-[#0A1628] hover:border-[#0A1628] transition-colors whitespace-nowrap"
                  >
                    <span>{publication.secondarySourceLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {publication.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="pt-8 border-t border-[#0A1628]/12 space-y-5"
              >
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#0A1628]">
                  {section.heading}
                </h2>

                <div className="space-y-4 max-w-prose">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base leading-[1.78] text-[#2A3444]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet.label}
                        className="p-5 bg-white border border-[#0A1628]/12"
                      >
                        <h3 className="font-serif text-lg font-semibold text-[#0A1628] mb-1.5">
                          {bullet.label}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#2A3444]">{bullet.detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.table && (
                  <div className="mt-6 overflow-x-auto border border-[#0A1628]/15 bg-white">
                    <table className="w-full text-left border-collapse min-w-[540px]">
                      <thead>
                        <tr className="border-b border-[#0A1628]/15 bg-[#EFECE5]">
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              className="py-3.5 px-4 text-xs uppercase tracking-[0.11em] text-[#0A1628]/75 font-semibold"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className="border-b border-[#0A1628]/10 last:border-b-0"
                          >
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className={`py-3.5 px-4 text-sm tabular-nums ${
                                  cellIdx === 0
                                    ? 'font-medium text-[#0A1628]'
                                    : 'text-[#2A3444]'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Previous / Next Publication Navigation */}
            <nav
              aria-label="Publication pagination"
              className="pt-8 border-t border-[#0A1628]/15 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {prevPublication ? (
                <button
                  type="button"
                  onClick={() => onSelectPublication(prevPublication.slug)}
                  className="p-5 text-left border border-[#0A1628]/12 bg-white hover:border-[#8B6B2B] transition-colors group"
                >
                  <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-[#5B6472] mb-1.5">
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Previous · {prevPublication.category}</span>
                  </span>
                  <span className="font-serif text-lg font-medium text-[#0A1628] group-hover:text-[#8B6B2B] transition-colors block">
                    {prevPublication.title}
                  </span>
                </button>
              ) : (
                <div />
              )}

              {nextPublication && (
                <button
                  type="button"
                  onClick={() => onSelectPublication(nextPublication.slug)}
                  className="p-5 text-left sm:text-right border border-[#0A1628]/12 bg-white hover:border-[#8B6B2B] transition-colors group"
                >
                  <span className="flex items-center sm:justify-end gap-1.5 text-[11px] uppercase tracking-[0.12em] text-[#5B6472] mb-1.5">
                    <span>Next · {nextPublication.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-lg font-medium text-[#0A1628] group-hover:text-[#8B6B2B] transition-colors block">
                    {nextPublication.title}
                  </span>
                </button>
              )}
            </nav>
          </motion.div>

          {/* Right-Hand Margin Rail */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Publication Metadata Card */}
            <div className="p-6 bg-white border border-[#0A1628]/12 space-y-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8B6B2B] font-semibold">
                Publication Record
              </p>

              <dl className="space-y-3 text-sm divide-y divide-[#0A1628]/10">
                <div className="pt-1">
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-[#5B6472]">
                    Category
                  </dt>
                  <dd className="font-medium text-[#0A1628] mt-0.5">{publication.category}</dd>
                </div>
                <div className="pt-3">
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-[#5B6472]">
                    Date / Period
                  </dt>
                  <dd className="font-mono text-xs text-[#0A1628] mt-0.5 tabular-nums">
                    {publication.date}
                  </dd>
                </div>
                <div className="pt-3">
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-[#5B6472]">
                    Permanent URL
                  </dt>
                  <dd className="mt-1 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#2A3444] truncate">
                      {permanentPath}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyPermalink}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium border border-[#0A1628]/20 text-[#0A1628] hover:border-[#8B6B2B] hover:text-[#8B6B2B] transition-colors shrink-0"
                    >
                      {copiedPermalink ? (
                        <>
                          <Check className="w-3 h-3" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Link2 className="w-3 h-3" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Table of Contents */}
            <div className="p-6 bg-[#EFECE5] border border-[#0A1628]/12">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#8B6B2B] font-semibold mb-4">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>In This Publication</span>
              </div>
              <nav aria-label="Publication contents" className="space-y-2">
                {publication.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-[#2A3444] hover:text-[#0A1628] hover:underline py-1 border-b border-[#0A1628]/10 last:border-b-0"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>

            {/* Complete Directory Switcher */}
            <div className="p-6 bg-white border border-[#0A1628]/12">
              <p className="text-xs uppercase tracking-[0.14em] text-[#5B6472] font-semibold mb-4">
                Institutional Publications Index
              </p>
              <div className="divide-y divide-[#0A1628]/10 max-h-[380px] overflow-y-auto pr-1">
                {PUBLICATIONS.map((item) => {
                  const isCurrent = item.slug === publication.slug;
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => onSelectPublication(item.slug)}
                      className={`w-full text-left py-2.5 transition-colors flex flex-col gap-0.5 ${
                        isCurrent
                          ? 'text-[#8B6B2B] font-semibold'
                          : 'text-[#2A3444] hover:text-[#0A1628]'
                      }`}
                    >
                      <span className="text-sm leading-snug">{item.title}</span>
                      <span className="text-[11px] font-mono text-[#5B6472] tabular-nums">
                        {item.category} · {item.date}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
