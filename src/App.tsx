/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BusinessesSection } from './components/BusinessesSection';
import { InvestorsSection } from './components/InvestorsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { NewsSection } from './components/NewsSection';
import { GovernanceSustainabilitySection } from './components/GovernanceSustainabilitySection';
import { Footer } from './components/Footer';
import { ShareholderPostView } from './components/ShareholderPostView';
import { SHAREHOLDER_POSTS } from './data/shareholderPosts';

function parsePublicationHash(hash: string): string | null {
  const prefix = '#publication/';
  if (!hash.startsWith(prefix)) return null;
  const slug = hash.slice(prefix.length);
  return SHAREHOLDER_POSTS.some((p) => p.slug === slug) ? slug : null;
}

export default function App() {
  const [activePostSlug, setActivePostSlug] = useState<string | null>(() =>
    parsePublicationHash(window.location.hash)
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActivePostSlug(parsePublicationHash(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openPost = useCallback((slug: string) => {
    setActivePostSlug(slug);
    window.history.pushState(null, '', `#publication/${slug}`);
  }, []);

  const navigateToSection = useCallback((sectionHash: string) => {
    setActivePostSlug(null);
    window.history.pushState(null, '', sectionHash);
    requestAnimationFrame(() => {
      const targetId = sectionHash.replace(/^#/, '');
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  const activePost = activePostSlug
    ? SHAREHOLDER_POSTS.find((p) => p.slug === activePostSlug) ?? null
    : null;

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F9F7F3] text-[#0A1628]">
        <ScrollProgressBar />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#D4AF63] focus:text-[#0A1628] focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>

        <Navbar onNavigateSection={navigateToSection} forceSolid={Boolean(activePost)} />

        <main id="main-content" className="flex-1">
          {activePost ? (
            <ShareholderPostView
              post={activePost}
              onSelectPost={openPost}
              onBackToInvestors={() => navigateToSection('#investors')}
            />
          ) : (
            <>
              <HeroSection />
              <AboutSection />
              <BusinessesSection />
              <InvestorsSection onOpenPost={openPost} />
              <PhilosophySection />
              <NewsSection />
              <GovernanceSustainabilitySection onOpenPost={openPost} />
            </>
          )}
        </main>

        <Footer onOpenPost={openPost} onNavigateSection={navigateToSection} />
      </div>
    </MotionConfig>
  );
}
