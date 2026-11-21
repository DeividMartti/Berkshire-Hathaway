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
import { PublicationView } from './components/PublicationView';
import { PUBLICATIONS } from './data/publications';

function parsePublicationHash(hash: string): string | null {
  const prefix = '#publication/';
  if (!hash.startsWith(prefix)) return null;
  const slug = hash.slice(prefix.length);
  return PUBLICATIONS.some((p) => p.slug === slug) ? slug : null;
}

export default function App() {
  const [activeSlug, setActiveSlug] = useState<string | null>(() =>
    parsePublicationHash(window.location.hash)
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSlug(parsePublicationHash(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openPublication = useCallback((slug: string) => {
    setActiveSlug(slug);
    window.history.pushState(null, '', `#publication/${slug}`);
  }, []);

  const navigateToSection = useCallback((sectionHash: string) => {
    setActiveSlug(null);
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

  const activePublication = activeSlug
    ? PUBLICATIONS.find((p) => p.slug === activeSlug) ?? null
    : null;

  const backTargetHash =
    activePublication?.category === 'Corporate Announcements' ? '#news' : '#investors';

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

        <Navbar
          onNavigateSection={navigateToSection}
          forceSolid={Boolean(activePublication)}
        />

        <main id="main-content" className="flex-1">
          {activePublication ? (
            <PublicationView
              publication={activePublication}
              onSelectPublication={openPublication}
              onBackToOrigin={() => navigateToSection(backTargetHash)}
            />
          ) : (
            <>
              <HeroSection />
              <AboutSection />
              <BusinessesSection />
              <InvestorsSection onOpenPublication={openPublication} />
              <PhilosophySection />
              <NewsSection onOpenPublication={openPublication} />
              <GovernanceSustainabilitySection onOpenPublication={openPublication} />
            </>
          )}
        </main>

        <Footer
          onOpenPublication={openPublication}
          onNavigateSection={navigateToSection}
        />
      </div>
    </MotionConfig>
  );
}
