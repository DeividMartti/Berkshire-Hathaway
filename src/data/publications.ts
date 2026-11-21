export type PublicationCategory =
  | 'Shareholder Letters'
  | 'Annual & Interim Reports'
  | 'Corporate Announcements'
  | 'Corporate Governance'
  | 'Institutional Publications';

export interface PublicationSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: Array<{ label: string; detail: string }>;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Publication {
  slug: string;
  title: string;
  category: PublicationCategory;
  date: string;
  subtitle: string;
  openingParagraph: string;
  verifiedTranscriptNote: {
    statusLabel: string;
    description: string;
  };
  sections: PublicationSection[];
  officialSourceLabel: string;
  officialSourceUrl: string;
  secondarySourceLabel?: string;
  secondarySourceUrl?: string;
}

export const PUBLICATIONS: Publication[] = [
  /* ── 1. SHAREHOLDER LETTERS ─────────────────────────────────────────────── */
  {
    slug: 'warren-buffett-letters',
    title: 'Warren Buffett’s Letters to Shareholders',
    category: 'Shareholder Letters',
    date: 'Archive · 1977–Present',
    subtitle:
      'Index and official source reference for the annual letters written by Warren E. Buffett to Berkshire Hathaway shareholders.',
    openingParagraph:
      'Since 1977, Berkshire Hathaway has published Warren E. Buffett’s annual Letters to Shareholders directly on its corporate website. These letters serve as the primary narrative record of Berkshire Hathaway’s operations across insurance, freight rail, regulated energy, manufacturing, service, and retailing.',
    verifiedTranscriptNote: {
      statusLabel: 'Original Publication · Reserved Verbatim Archive',
      description:
        'To avoid paraphrasing or simulating official shareholder prose, this redesigned concept does not invent or fabricate letter text. Complete, unedited verbatim editions of every annual letter (1977 through recent years) are hosted directly at Berkshire Hathaway’s official archive.',
    },
    sections: [
      {
        id: 'official-letters-access',
        heading: '01. Verbatim Official Editions',
        paragraphs: [
          'Each annual letter is published alongside Berkshire Hathaway’s Annual Report and remains accessible in HTML and PDF formats without registration or paywall on berkshirehathaway.com.',
        ],
        bullets: [
          {
            label: 'Complete Chronological Archive (1977–Present)',
            detail:
              'Includes every annual shareholder letter starting from 1977, preserved in its original published form.',
          },
          {
            label: 'Owner-Related Business Principles (Owner’s Manual)',
            detail:
              'Issued in June 1996 alongside the introduction of Class B shares to document Berkshire’s foundational principles of corporate partnership.',
          },
        ],
      },
      {
        id: 'verified-verbatim-excerpt',
        heading: '02. Verified Quote from the 1988 Shareholder Letter',
        paragraphs: [
          'From Warren E. Buffett’s 1988 Letter to Shareholders (official text hosted at berkshirehathaway.com/letters/1988.html): “when we own portions of outstanding businesses with outstanding managements, our favorite holding period is forever.”',
        ],
      },
    ],
    officialSourceLabel: 'Open Warren Buffett’s Letters at berkshirehathaway.com',
    officialSourceUrl: 'https://www.berkshirehathaway.com/letters/letters.html',
    secondarySourceLabel: 'Read Owner’s Manual (ownman.pdf)',
    secondarySourceUrl: 'https://www.berkshirehathaway.com/ownman.pdf',
  },
  {
    slug: 'greg-abel-letters',
    title: 'Greg Abel’s Letters to Shareholders',
    category: 'Shareholder Letters',
    date: 'Official Shareholder Archive',
    subtitle:
      'Shareholder communications from Chief Executive Officer Greg Abel hosted within Berkshire Hathaway’s official Letters archive.',
    openingParagraph:
      'Following Berkshire Hathaway’s leadership transition establishing Greg Abel as Chief Executive Officer, shareholder letters authored by Greg Abel are published through Berkshire Hathaway’s official Shareholder Letters portal alongside the company’s multi-decade archive.',
    verifiedTranscriptNote: {
      statusLabel: 'Original Publication · Reserved Verbatim Archive',
      description:
        'This page intentionally preserves a clearly identified archival reference rather than simulating executive prose. Full verbatim text of Greg Abel’s shareholder letters is hosted exclusively on the official Berkshire Hathaway domain.',
    },
    sections: [
      {
        id: 'executive-communications',
        heading: '01. Official Source & Continuity',
        paragraphs: [
          'Berkshire Hathaway’s official Shareholder Letters index serves as the single authoritative repository for current CEO letters as well as Warren E. Buffett’s historical letters.',
        ],
      },
    ],
    officialSourceLabel: 'Open Shareholder Letters at berkshirehathaway.com',
    officialSourceUrl: 'https://www.berkshirehathaway.com/letters/letters.html',
  },
  {
    slug: 'special-letters-warren-charlie',
    title: 'Special Letters from Warren & Charlie',
    category: 'Shareholder Letters',
    date: 'February 2015 (50th Anniversary)',
    subtitle:
      'Separate special letters authored by Warren E. Buffett and Charles T. Munger commemorating Berkshire Hathaway’s 50th anniversary under current management.',
    openingParagraph:
      'Published in the 2014 Annual Report (released in February 2015) to mark fifty years since Buffett Partnership Ltd. assumed control of Berkshire Hathaway in 1965, Warren E. Buffett and Vice Chairman Charles T. Munger each contributed a dedicated essay reviewing Berkshire’s history, operating structure, and future.',
    verifiedTranscriptNote: {
      statusLabel: 'Original Publication · Reserved Verbatim Archive',
      description:
        'Full verbatim texts of both Warren E. Buffett’s and Charles T. Munger’s 50th-anniversary special letters are hosted on berkshirehathaway.com without reproduction or alteration here.',
    },
    sections: [
      {
        id: 'fifty-year-retrospective',
        heading: '01. Scope of the Commemorative Letters',
        paragraphs: [
          'The special section comprises two independent essays—one by Warren E. Buffett and one by Charles T. Munger—examining the structural evolution of Berkshire Hathaway from a struggling New England textile company into a decentralized holding company.',
        ],
      },
    ],
    officialSourceLabel: 'Read Special Letters at berkshirehathaway.com',
    officialSourceUrl: 'https://www.berkshirehathaway.com/SpecialLetters/WEBCTMLtr.html',
  },
  {
    slug: 'wesco-charlie-munger-letters',
    title: 'Charlie Munger’s Letters to Wesco Shareholders',
    category: 'Shareholder Letters',
    date: 'Wesco Financial Archive · 1997–2009',
    subtitle:
      'Historical shareholder letters authored by Charles T. Munger as Chairman of Wesco Financial Corporation.',
    openingParagraph:
      'Before Wesco Financial Corporation became wholly owned by Berkshire Hathaway, Charles T. Munger wrote annual letters to Wesco shareholders covering insurance, industrial businesses, capital allocation, and economic principles. Berkshire Hathaway preserves this historical archive directly on its official website.',
    verifiedTranscriptNote: {
      statusLabel: 'Original Publication · Reserved Verbatim Archive',
      description:
        'No simulated or abridged versions of Charlie Munger’s Wesco letters are generated here. Consult the official Berkshire Hathaway Wesco archive directly for complete verbatim documents.',
    },
    sections: [
      {
        id: 'wesco-archive-scope',
        heading: '01. Official Wesco Financial Repository',
        paragraphs: [
          'The Wesco Financial directory hosted on berkshirehathaway.com provides direct links to Charles T. Munger’s archived shareholder letters and related corporate notices.',
        ],
      },
    ],
    officialSourceLabel: 'Open Wesco Archive at berkshirehathaway.com',
    officialSourceUrl: 'https://www.berkshirehathaway.com/wesco/WescoHome.html',
  },

  /* ── 2. ANNUAL & INTERIM REPORTS ────────────────────────────────────────── */
  {
    slug: 'annual-interim-reports',
    title: 'Annual & Interim Reports',
    category: 'Annual & Interim Reports',
    date: 'Periodic Regulatory Reporting',
    subtitle:
      'Consolidated Form 10-K annual reports and Form 10-Q quarterly interim financial statements published by Berkshire Hathaway Inc.',
    openingParagraph:
      'Berkshire Hathaway publishes its Annual Reports (Form 10-K) and Interim Shareholder Reports (Form 10-Q) through its official investor reports directory and concurrently via U.S. Securities and Exchange Commission filings.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Financial Filings · Reserved Full-Document Space',
      description:
        'This redesign does not reproduce or simulate financial tables, earnings figures, or audited notes. Complete consolidated financial statements and footnote disclosures are available exclusively in the official PDF and HTML reports hosted on berkshirehathaway.com and SEC EDGAR.',
    },
    sections: [
      {
        id: 'reporting-structure',
        heading: '01. Primary Operating Reporting Groups',
        paragraphs: [
          'Berkshire Hathaway’s consolidated financial statements organize operations across its core insurance and non-insurance businesses:',
        ],
        bullets: [
          {
            label: 'Insurance & Reinsurance Operations',
            detail:
              'Reported across GEICO, Berkshire Hathaway Primary Group, and Berkshire Hathaway Reinsurance Group, detailing underwriting results and investment income.',
          },
          {
            label: 'BNSF Railway & Berkshire Hathaway Energy',
            detail:
              'Railroad transportation and regulated utility, pipeline, and energy operations.',
          },
          {
            label: 'Manufacturing, Service and Retailing',
            detail:
              'Includes industrial, building, and consumer manufacturing; service and distribution businesses including McLane Company; and retailing and travel centers including Pilot.',
          },
        ],
      },
      {
        id: 'verified-2025-2026-releases',
        heading: '02. Verified Recent Earnings Announcement Dates',
        paragraphs: [
          'Official quarterly and annual earnings press releases published in Berkshire Hathaway’s news archive include:',
        ],
        table: {
          headers: ['Announcement', 'Release Date', 'Official Archive'],
          rows: [
            ['Third Quarter Earnings 2026', 'November 7, 2026', 'berkshirehathaway.com/news/2026news.html'],
            ['Second Quarter Earnings 2026', 'August 8, 2026', 'berkshirehathaway.com/news/2026news.html'],
            ['First Quarter Earnings 2026', 'May 2, 2026', 'berkshirehathaway.com/news/2026news.html'],
            ['Fourth Quarter Earnings 2025', 'February 28, 2026', 'berkshirehathaway.com/news/2026news.html'],
            ['Third Quarter Earnings 2025', 'November 1, 2025', 'berkshirehathaway.com/news/2025news.html'],
          ],
        },
      },
    ],
    officialSourceLabel: 'Open Annual & Interim Reports (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/reports.html',
    secondarySourceLabel: 'View SEC EDGAR Filings',
    secondarySourceUrl: 'https://www.sec.gov/edgar/browse/?CIK=0001067983',
  },
  {
    slug: 'sec-filings',
    title: 'SEC Filings',
    category: 'Annual & Interim Reports',
    date: 'SEC EDGAR · CIK 0001067983',
    subtitle:
      'Regulatory filings submitted by Berkshire Hathaway Inc. to the U.S. Securities and Exchange Commission.',
    openingParagraph:
      'Berkshire Hathaway Inc. is a Delaware corporation whose Class A (BRK.A) and Class B (BRK.B) common stock trade on the New York Stock Exchange. Statutory filings are maintained publicly by the U.S. Securities and Exchange Commission on the EDGAR database under Central Index Key (CIK) 0001067983.',
    verifiedTranscriptNote: {
      statusLabel: 'Regulatory Database · Reserved Source Link',
      description:
        'Full statutory filings (Forms 10-K, 10-Q, 8-K, DEF 14A, 13F-HR, and Forms 3/4/5) are maintained directly by the U.S. Securities and Exchange Commission without local mirroring.',
    },
    sections: [
      {
        id: 'registrant-identifiers',
        heading: '01. Official SEC Registrant Record',
        paragraphs: [
          'Verified statutory identifiers for querying Berkshire Hathaway Inc. on SEC EDGAR:',
        ],
        table: {
          headers: ['Field', 'Official Record'],
          rows: [
            ['Registrant Name', 'Berkshire Hathaway Inc.'],
            ['CIK Number', '0001067983'],
            ['NYSE Symbols', 'BRK.A (Class A) · BRK.B (Class B)'],
            ['Principal Executive Office', '3555 Farnam Street, Omaha, NE 68131'],
          ],
        },
      },
    ],
    officialSourceLabel: 'Open SEC EDGAR Repository (sec.gov)',
    officialSourceUrl: 'https://www.sec.gov/edgar/browse/?CIK=0001067983',
    secondarySourceLabel: 'Berkshire Reports Directory',
    secondarySourceUrl: 'https://www.berkshirehathaway.com/reports.html',
  },

  /* ── 3. CORPORATE GOVERNANCE & SUSTAINABILITY ───────────────────────────── */
  {
    slug: 'corporate-governance',
    title: 'Corporate Governance',
    category: 'Corporate Governance',
    date: 'Official Board Policies & Charters',
    subtitle:
      'Corporate Governance Guidelines, standing committee charters, and ethical conduct standards of Berkshire Hathaway Inc.',
    openingParagraph:
      'Berkshire Hathaway Inc. publishes its Corporate Governance Guidelines, Audit Committee Charter, Governance, Compensation and Nominating Committee Charter, and Code of Business Conduct and Ethics on its official Corporate Governance portal.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Governance Charters · Reserved Verbatim Text',
      description:
        'Full legal texts of board committee charters, insider trading policies, and compliance procedures are hosted in official PDF/HTML format on berkshirehathaway.com/govern/govern.html.',
    },
    sections: [
      {
        id: 'governance-documents-list',
        heading: '01. Published Board Documents',
        paragraphs: [
          'The official Corporate Governance directory encompasses the following primary documents:',
        ],
        bullets: [
          {
            label: 'Corporate Governance Guidelines',
            detail:
              'Framework defining Board of Directors structure, independence criteria, and oversight responsibilities.',
          },
          {
            label: 'Audit Committee Charter',
            detail:
              'Mandate of the Audit Committee covering financial reporting integrity, internal controls, and independent auditor oversight.',
          },
          {
            label: 'Governance, Compensation and Nominating Committee Charter',
            detail:
              'Mandate covering director nominations, governance review, and executive compensation oversight.',
          },
          {
            label: 'Code of Business Conduct and Ethics',
            detail:
              'Enterprise standards governing legal compliance, conflict-of-interest rules, and confidential ethics reporting.',
          },
        ],
      },
    ],
    officialSourceLabel: 'Open Corporate Governance at berkshirehathaway.com',
    officialSourceUrl: 'https://www.berkshirehathaway.com/govern/govern.html',
  },
  {
    slug: 'sustainability-disclosures',
    title: 'Sustainability & Workforce Data',
    category: 'Corporate Governance',
    date: 'Official Sustainability Portal',
    subtitle:
      'Berkshire Hathaway Sustainability Leadership Council overview, subsidiary reporting links, and consolidated EEO-1 workforce diversity disclosures.',
    openingParagraph:
      'Consistent with Berkshire Hathaway’s decentralized operating structure, environmental and sustainability programs are managed at the operating company level, complemented by the Berkshire Hathaway Sustainability Leadership Council and consolidated U.S. EEO-1 workforce disclosures.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Disclosures · Reserved Source Space',
      description:
        'Official consolidated EEO-1 workforce data tables and subsidiary sustainability reports are published directly on Berkshire Hathaway’s official sustainability pages.',
    },
    sections: [
      {
        id: 'sustainability-links',
        heading: '01. Published Disclosures',
        paragraphs: [
          'Berkshire Hathaway’s sustainability section directs stakeholders to consolidated workforce data as well as subsidiary-specific sustainability reports (including Berkshire Hathaway Energy and other operating businesses).',
        ],
        bullets: [
          {
            label: 'Sustainability Leadership Council',
            detail:
              'Provides a forum across Berkshire Hathaway subsidiaries to share sustainability practices and operational insights.',
          },
          {
            label: 'Consolidated EEO-1 Workforce Data',
            detail:
              'Workforce demographic disclosures published in the official sustainability section of berkshirehathaway.com.',
          },
        ],
      },
    ],
    officialSourceLabel: 'Open Sustainability Portal (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/sustainability/sustainabilityintro.html',
    secondarySourceLabel: 'Workforce Diversity Data (sustainability.html)',
    secondarySourceUrl: 'https://www.berkshirehathaway.com/sustainability/sustainability.html',
  },

  /* ── 4. INSTITUTIONAL PUBLICATIONS (MEETING & STOCK) ────────────────────── */
  {
    slug: 'annual-meeting-information',
    title: 'Annual Meeting Information',
    category: 'Institutional Publications',
    date: 'Annual Shareholders Meeting · Omaha, NE',
    subtitle:
      'Official shareholder meeting notices, proxy materials, credential guidelines, and Omaha visitor information.',
    openingParagraph:
      'Berkshire Hathaway’s Annual Meeting of Shareholders is held each spring in Omaha, Nebraska (typically at the CHI Health Center Omaha), welcoming Class A and Class B shareholders for formal annual business, an extended Question & Answer session, and subsidiary exhibitions.',
    verifiedTranscriptNote: {
      statusLabel: 'Annual Event Documentation · Reserved Schedule Notice',
      description:
        'Exact annual dates, credential request forms, and current Visitor’s Guide PDFs are updated each year exclusively on berkshirehathaway.com/sharehold.html alongside the definitive Proxy Statement.',
    },
    sections: [
      {
        id: 'meeting-components',
        heading: '01. Recurring Annual Meeting Components',
        paragraphs: [
          'Official materials published on the Shareholder Meeting page typically cover:',
        ],
        bullets: [
          {
            label: 'Visitor’s Guide & Credential Instructions',
            detail:
              'Official guidance for Class A and Class B shareholders to request meeting credentials and plan travel to Omaha.',
          },
          {
            label: 'Subsidiary Exhibit Hall & Shopping Events',
            detail:
              'Product exhibitions at the CHI Health Center alongside shareholder events at Omaha businesses such as Borsheims and Nebraska Furniture Mart.',
          },
        ],
      },
    ],
    officialSourceLabel: 'Open Annual Meeting Page (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/sharehold.html',
  },
  {
    slug: 'common-stock-information',
    title: 'Common Stock Information',
    category: 'Institutional Publications',
    date: 'NYSE: BRK.A & BRK.B',
    subtitle:
      'Comparative rights, economic parity, voting power, and conversion terms between Berkshire Hathaway Class A and Class B common stock.',
    openingParagraph:
      'Berkshire Hathaway Inc. has two classes of common stock listed on the New York Stock Exchange under ticker symbols BRK.A (Class A) and BRK.B (Class B). The rights and conversion privileges between both classes are documented in Warren Buffett’s recurring Comparative Rights Memorandum.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Memorandum · Reserved Full Text',
      description:
        'The complete official comparative memorandum and transfer agent instructions are hosted directly at berkshirehathaway.com/compab/compo.html and compab.pdf.',
    },
    sections: [
      {
        id: 'class-a-vs-b-facts',
        heading: '01. Verified Structural Comparison',
        paragraphs: [
          'Key charter-defined structural attributes between Class A and Class B common shares:',
        ],
        table: {
          headers: ['Attribute', 'Class A (BRK.A)', 'Class B (BRK.B)'],
          rows: [
            ['Economic Rights', '1.0000 Base Unit', '1 / 1,500th of Class A'],
            ['Voting Rights', 'Full voting rights', '1 / 10,000th of Class A'],
            ['Convertibility', 'Convertible into 1,500 Class B shares at holder’s option', 'Not convertible into Class A'],
            ['Annual Meeting Credentials', 'Eligible', 'Eligible'],
          ],
        },
      },
    ],
    officialSourceLabel: 'Open Common Stock Information (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/compab/compo.html',
    secondarySourceLabel: 'Comparative Memo PDF (compab.pdf)',
    secondarySourceUrl: 'https://www.berkshirehathaway.com/compab.pdf',
  },

  /* ── 5. CORPORATE ANNOUNCEMENTS (COMUNICADOS) ───────────────────────────── */
  {
    slug: 'news-thanksgiving-2026',
    title: 'Thanksgiving Message from Warren Buffett',
    category: 'Corporate Announcements',
    date: 'November 16, 2026',
    subtitle:
      'Official announcement listed in Berkshire Hathaway Inc.’s 2026 News Releases archive.',
    openingParagraph:
      'On November 16, 2026, Berkshire Hathaway Inc. published a Thanksgiving Message from Warren Buffett in its official 2026 corporate news releases directory.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Press Release · Reserved Verbatim Text',
      description:
        'Full verbatim text of the November 16, 2026 release is hosted directly in Berkshire Hathaway’s official 2026 news releases archive.',
    },
    sections: [
      {
        id: 'release-source',
        heading: '01. Official Archive Reference',
        paragraphs: [
          'Date of publication: November 16, 2026. Hosted under News Releases on berkshirehathaway.com/news/2026news.html.',
        ],
      },
    ],
    officialSourceLabel: 'Read Official Release (2026news.html)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
  },
  {
    slug: 'news-q3-2026-earnings',
    title: 'Third Quarter Earnings 2026',
    category: 'Corporate Announcements',
    date: 'November 7, 2026',
    subtitle:
      'Official third-quarter 2026 consolidated earnings announcement from Berkshire Hathaway Inc.',
    openingParagraph:
      'On November 7, 2026, Berkshire Hathaway Inc. released its Third Quarter 2026 financial results alongside its quarterly Form 10-Q filing.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Earnings Release · Reserved Verbatim Figures',
      description:
        'Official financial tables and press release text are published in Berkshire Hathaway’s 2026 news archive and Form 10-Q on SEC EDGAR.',
    },
    sections: [
      {
        id: 'q3-2026-source',
        heading: '01. Official Release & Filing Links',
        paragraphs: [
          'Date of publication: November 7, 2026. Official press release and corresponding Form 10-Q are available via the primary sources below.',
        ],
      },
    ],
    officialSourceLabel: 'Read Official Release (2026news.html)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
    secondarySourceLabel: 'SEC EDGAR Filings',
    secondarySourceUrl: 'https://www.sec.gov/edgar/browse/?CIK=0001067983',
  },
  {
    slug: 'news-chairmanship-2026',
    title: 'Warren E. Buffett Becomes Chairman Emeritus, Remains Director; Howard G. Buffett Elected Chairman',
    category: 'Corporate Announcements',
    date: 'September 18, 2026',
    subtitle:
      'Official Board of Directors chairmanship transition announcement by Berkshire Hathaway Inc.',
    openingParagraph:
      'On September 18, 2026, Berkshire Hathaway Inc. announced that Warren E. Buffett became Chairman Emeritus while remaining a Director of the company, and Howard G. Buffett was elected Chairman of the Board.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Press Release · Reserved Verbatim Text',
      description:
        'The complete official announcement dated September 18, 2026 is published on Berkshire Hathaway’s 2026 news archive.',
    },
    sections: [
      {
        id: 'chairmanship-record',
        heading: '01. Official Record',
        paragraphs: [
          'Date of publication: September 18, 2026. Consult the official 2026 news archive on berkshirehathaway.com for the complete verbatim notice.',
        ],
      },
    ],
    officialSourceLabel: 'Read Official Release (2026news.html)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
  },
  {
    slug: 'news-taylor-morrison-2026',
    title: 'Berkshire Hathaway Completes Acquisition of Taylor Morrison',
    category: 'Corporate Announcements',
    date: 'July 24, 2026',
    subtitle:
      'Official announcement confirming completion of the $8.5 billion acquisition of Taylor Morrison Home Corporation.',
    openingParagraph:
      'Following the May 31, 2026 acquisition agreement, Berkshire Hathaway Inc. announced on July 24, 2026 that it completed the acquisition of Taylor Morrison Home Corporation.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Press Release · Reserved Verbatim Text',
      description:
        'Full transaction terms and official press release text are published in Berkshire Hathaway’s 2026 news releases directory.',
    },
    sections: [
      {
        id: 'taylor-morrison-record',
        heading: '01. Official Transaction Record',
        paragraphs: [
          'Agreement announced: May 31, 2026 ($8.5 billion). Acquisition completion announced: July 24, 2026.',
        ],
      },
    ],
    officialSourceLabel: 'Read Official Release (2026news.html)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
  },
  {
    slug: 'news-oxychem-2026',
    title: 'Berkshire Hathaway Inc. Completes Acquisition of OxyChem',
    category: 'Corporate Announcements',
    date: 'January 2, 2026',
    subtitle:
      'Official announcement confirming completion of the acquisition of OxyChem following the October 2, 2025 agreement.',
    openingParagraph:
      'On January 2, 2026, Berkshire Hathaway Inc. announced the completion of its acquisition of OxyChem, following the definitive agreement initially announced on October 2, 2025.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Press Release · Reserved Verbatim Text',
      description:
        'Full verbatim details of both the October 2, 2025 agreement and the January 2, 2026 closing release are hosted on berkshirehathaway.com.',
    },
    sections: [
      {
        id: 'oxychem-record',
        heading: '01. Official Transaction Record',
        paragraphs: [
          'Agreement announced: October 2, 2025. Completion announced: January 2, 2026.',
        ],
      },
    ],
    officialSourceLabel: 'Read Official Release (2026news.html)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
  },
  {
    slug: 'news-leadership-2025',
    title: 'Berkshire Hathaway Announces Leadership Appointments',
    category: 'Corporate Announcements',
    date: 'December 8, 2025',
    subtitle:
      'Official December 2025 announcement detailing leadership appointments at Berkshire Hathaway Inc.',
    openingParagraph:
      'On December 8, 2025, Berkshire Hathaway Inc. published an official press release announcing senior executive leadership appointments.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Press Release · Reserved Verbatim Text',
      description:
        'The complete December 8, 2025 announcement is archived directly in Berkshire Hathaway’s 2025 news releases directory.',
    },
    sections: [
      {
        id: 'leadership-2025-record',
        heading: '01. Official Archive Reference',
        paragraphs: [
          'Date of publication: December 8, 2025. Hosted at berkshirehathaway.com/news/2025news.html.',
        ],
      },
    ],
    officialSourceLabel: 'Read Official Release (2025news.html)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/news/2025news.html',
  },
  {
    slug: 'news-fraud-notice-2025',
    title: 'It’s Not Me — Official Notice on Fraudulent Endorsements',
    category: 'Corporate Announcements',
    date: 'November 6, 2025',
    subtitle:
      'Public notice issued by Berkshire Hathaway Inc. regarding fraudulent social media and media impersonations.',
    openingParagraph:
      'On November 6, 2025, Berkshire Hathaway Inc. issued a formal public notice titled “It’s Not Me,” clarifying that fraudulent advertisements and social media endorsements falsely utilizing Warren Buffett’s name, voice, or likeness are unauthorized.',
    verifiedTranscriptNote: {
      statusLabel: 'Official Public Notice · Reserved Verbatim Text',
      description:
        'The complete verbatim notice is published directly on Berkshire Hathaway’s 2025 news releases page.',
    },
    sections: [
      {
        id: 'fraud-notice-record',
        heading: '01. Official Archive Reference',
        paragraphs: [
          'Date of publication: November 6, 2025. Hosted at berkshirehathaway.com/news/2025news.html.',
        ],
      },
    ],
    officialSourceLabel: 'Read Official Notice (2025news.html)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/news/2025news.html',
  },
];
