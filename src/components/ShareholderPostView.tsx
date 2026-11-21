import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { SHAREHOLDER_POSTS, type ShareholderPost } from '../data/shareholderPosts';

interface ShareholderPostViewProps {
  post: ShareholderPost;
  onSelectPost: (slug: string) => void;
  onBackToInvestors: () => void;
}

export function ShareholderPostView({
  post,
  onSelectPost,
  onBackToInvestors,
}: ShareholderPostViewProps) {
  const currentIndex = SHAREHOLDER_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? SHAREHOLDER_POSTS[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < SHAREHOLDER_POSTS.length - 1
      ? SHAREHOLDER_POSTS[currentIndex + 1]
      : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [post.slug]);

  return (
    <article className="bg-[#F9F7F3] text-[#0A1628] min-h-screen pt-16 lg:pt-20">
      {/* Dark Institutional Masthead */}
      <header className="bg-[#0A1628] text-[#F9F7F3] py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={onBackToInvestors}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#D4AF63] hover:text-[#E2C27D] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Information for Our Shareholders</span>
          </button>

          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#F9F7F3]/70 font-mono mb-5">
              <span className="text-[#D4AF63] font-medium tabular-nums">{post.code}</span>
              <span aria-hidden="true">·</span>
              <span className="font-sans uppercase tracking-[0.12em]">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-sans">{post.publishedMeta}</span>
              <span aria-hidden="true">·</span>
              <span className="font-sans">{post.readTime}</span>
            </div>

            <h1
              className="font-serif font-medium tracking-[-0.02em] leading-[1.06] text-[#F9F7F3] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.8rem)' }}
            >
              {post.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#F9F7F3]/80 max-w-3xl">
              {post.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Editorial Body + Right-Hand Archival Rail */}
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Reading Column */}
          <motion.div
            key={`body-${post.slug}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-12"
          >
            <p className="text-base sm:text-lg leading-[1.82] text-[#1E293B] max-w-prose first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#0A1628]">
              {post.openingParagraph}
            </p>

            <blockquote className="py-7 border-y border-[#0A1628]/15 max-w-2xl">
              <p className="font-serif italic text-xl sm:text-2xl leading-[1.45] text-[#0A1628]">
                “{post.leadQuote.text}”
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.14em] text-[#5B6472]">
                {post.leadQuote.attribution}
              </footer>
            </blockquote>

            {post.sections.map((section) => (
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
                    <p
                      key={pIndex}
                      className="text-base leading-[1.78] text-[#2A3444]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet.label}
                        className="p-5 bg-[#EFECE5]/75 border border-[#0A1628]/10"
                      >
                        <h3 className="font-serif text-lg font-semibold text-[#0A1628] mb-1.5">
                          {bullet.label}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#2A3444]">
                          {bullet.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.table && (
                  <div className="mt-6 overflow-x-auto border border-[#0A1628]/15 bg-white">
                    <table className="w-full text-left border-collapse min-w-[560px]">
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

            {/* Primary Source Verification Footer */}
            <div className="pt-8 border-t border-[#0A1628]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#EFECE5]/75 p-6 border border-[#0A1628]/10">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[#8B6B2B] font-semibold mb-1">
                  Primary Official Filing Source
                </p>
                <p className="text-xs text-[#4A5568]">
                  Direct access to the statutory filing or official publication hosted on Berkshire
                  Hathaway’s primary archive.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={post.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium bg-[#0A1628] text-[#F9F7F3] hover:bg-[#172844] transition-colors whitespace-nowrap"
                >
                  <span>{post.officialSourceLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                {post.secondarySourceUrl && post.secondarySourceLabel && (
                  <a
                    href={post.secondarySourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium border border-[#0A1628]/25 text-[#0A1628] hover:border-[#0A1628] transition-colors whitespace-nowrap"
                  >
                    <span>{post.secondarySourceLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {/* Previous / Next Post Navigation */}
            <nav
              aria-label="Publication pagination"
              className="pt-8 border-t border-[#0A1628]/15 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {prevPost ? (
                <button
                  type="button"
                  onClick={() => onSelectPost(prevPost.slug)}
                  className="p-5 text-left border border-[#0A1628]/12 bg-white hover:border-[#8B6B2B] transition-colors group"
                >
                  <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-[#5B6472] mb-1.5">
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Previous Publication</span>
                  </span>
                  <span className="font-serif text-lg font-medium text-[#0A1628] group-hover:text-[#8B6B2B] transition-colors block">
                    {prevPost.title}
                  </span>
                </button>
              ) : (
                <div />
              )}

              {nextPost && (
                <button
                  type="button"
                  onClick={() => onSelectPost(nextPost.slug)}
                  className="p-5 text-left sm:text-right border border-[#0A1628]/12 bg-white hover:border-[#8B6B2B] transition-colors group"
                >
                  <span className="flex items-center sm:justify-end gap-1.5 text-[11px] uppercase tracking-[0.12em] text-[#5B6472] mb-1.5">
                    <span>Next Publication</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-lg font-medium text-[#0A1628] group-hover:text-[#8B6B2B] transition-colors block">
                    {nextPost.title}
                  </span>
                </button>
              )}
            </nav>
          </motion.div>

          {/* Right-Hand Margin Rail */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="p-6 bg-[#EFECE5] border border-[#0A1628]/12">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#8B6B2B] font-semibold mb-4">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>In This Publication</span>
              </div>
              <nav aria-label="Publication contents" className="space-y-2.5">
                {post.sections.map((section) => (
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

            <div className="p-6 bg-white border border-[#0A1628]/12">
              <p className="text-xs uppercase tracking-[0.14em] text-[#5B6472] font-semibold mb-4">
                Shareholder Publications Index
              </p>
              <div className="divide-y divide-[#0A1628]/10">
                {SHAREHOLDER_POSTS.map((item) => {
                  const isCurrent = item.slug === post.slug;
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => onSelectPost(item.slug)}
                      className={`w-full text-left py-3 transition-colors flex items-baseline justify-between gap-3 ${
                        isCurrent
                          ? 'text-[#8B6B2B] font-semibold'
                          : 'text-[#2A3444] hover:text-[#0A1628]'
                      }`}
                    >
                      <span className="text-sm">{item.title}</span>
                      <span className="font-mono text-[11px] opacity-75 shrink-0 tabular-nums">
                        {item.code}
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
