export interface SubsidiaryLink {
  name: string;
  url: string;
  note: string;
}

export interface InsuranceDivision {
  name: string;
  headquartersOrScope: string;
  description: string;
  entities: string[];
  url: string;
}

export interface BusinessSegment {
  id: string;
  index: string;
  name: string;
  headline: string;
  summary: string;
  stewardshipNote: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  imagePosition?: string;
  aspectClass: string;
  subsidiaries: SubsidiaryLink[];
  officialUrl: string;
}

export interface Milestone {
  year: string;
  title: string;
  detail: string;
}

export interface InvestorResource {
  id: string;
  publicationSlug: string;
  category:
    | 'Reports & Filings'
    | 'Shareholder Letters'
    | 'Governance & Sustainability'
    | 'Meeting & Stock';
  title: string;
  subtitle: string;
  archivePeriod: string;
  officialUrl: string;
  officialDomainLabel: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface NewsItem {
  id: string;
  publicationSlug: string;
  date: string;
  year: '2026' | '2025';
  category: string;
  title: string;
  summary: string;
  officialUrl: string;
  featured?: boolean;
}

export const HERO_IMAGE = {
  src: './src/assets/images/hero_corporate_architecture_1795210559969.jpg',
  alt: 'Illustrative architectural photograph of a limestone and glass corporate tower at twilight',
  caption: 'Illustrative architectural imagery — conceptual visual representation.',
};

export const ABOUT_IMAGE = {
  src: './src/assets/images/about_omaha_heritage_1795210559250.jpg',
  alt: 'Illustrative editorial photograph of a classical study with archival ledger volumes',
  caption:
    'Illustrative editorial visual — not a documentary photograph of Berkshire Hathaway executives, offices, or records.',
};

export const PHILOSOPHY_IMAGE = {
  src: './src/assets/images/philosophy_longterm_stewardship_1795210559321.jpg',
  alt: 'Illustrative architectural study of travertine stone colonnades and natural daylight',
  caption:
    'Illustrative architectural imagery — conceptual representation of institutional permanence.',
};

export const INSURANCE_DIVISIONS: InsuranceDivision[] = [
  {
    name: 'GEICO',
    headquartersOrScope: 'Chevy Chase, Maryland · Private Passenger Auto',
    description:
      'One of the largest private passenger automobile insurers in the United States, serving millions of policyholders directly through disciplined pricing, claims service, and underwriting.',
    entities: ['GEICO Corporation', 'GEICO Indemnity', 'GEICO General Insurance'],
    url: 'https://www.geico.com/',
  },
  {
    name: 'Berkshire Hathaway Primary Group',
    headquartersOrScope: 'Commercial, Specialty & Workers’ Compensation',
    description:
      'A federation of independently managed primary insurance carriers providing commercial auto, specialty casualty, medical professional liability, and workers’ compensation coverage.',
    entities: [
      'National Indemnity Company (Primary)',
      'Berkshire Hathaway Specialty Insurance (BHSI)',
      'Berkshire Hathaway Homestate Companies',
      'GUARD Insurance Companies',
      'MedPro Group',
    ],
    url: 'https://www.berkshirehathaway.com/subs/sublinks.html',
  },
  {
    name: 'Berkshire Hathaway Reinsurance Group',
    headquartersOrScope: 'Global Property, Casualty, Life & Health Reinsurance',
    description:
      'Provides global excess-of-loss, quota-share, catastrophe, and life/health reinsurance capacity backed by exceptional balance-sheet capital strength.',
    entities: [
      'National Indemnity Company (Reinsurance)',
      'General Re Corporation (Gen Re)',
      'Transatlantic Holdings (TransRe)',
    ],
    url: 'https://www.genre.com/',
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: '1965',
    title: 'Partnership Control & Capital Redeployment',
    detail:
      'Buffett Partnership Ltd. assumed control of Berkshire Hathaway Inc., initiating the transition from New England textile manufacturing into insurance and diversified operating businesses.',
  },
  {
    year: '1967',
    title: 'Acquisition of National Indemnity Company',
    detail:
      'Purchase of National Indemnity Company and National Fire & Marine Insurance Company in Omaha established property-casualty insurance and underwriting float as core pillars of Berkshire.',
  },
  {
    year: '1996',
    title: 'GEICO Wholly Owned & Class B Common Stock',
    detail:
      'Berkshire Hathaway completed full ownership of GEICO Corporation and issued Class B common stock (BRK.B) to provide accessible ownership for long-term individual investors.',
  },
  {
    year: '2010',
    title: 'Acquisition of BNSF Railway',
    detail:
      'Burlington Northern Santa Fe, LLC became a wholly owned subsidiary, expanding Berkshire’s regulated and infrastructure operations across North American freight rail.',
  },
  {
    year: '2025–2026',
    title: 'Leadership Transition & Acquisitions',
    detail:
      'In December 2025 Berkshire announced leadership appointments naming Greg Abel Chief Executive Officer; in September 2026 Warren E. Buffett became Chairman Emeritus while remaining a Director and Howard G. Buffett was elected Chairman. Berkshire also completed acquisitions of OxyChem (Jan 2026) and Taylor Morrison (Jul 2026).',
  },
];

export const BUSINESS_SEGMENTS: BusinessSegment[] = [
  {
    id: 'insurance',
    index: '01',
    name: 'Insurance & Reinsurance',
    headline: 'GEICO, Berkshire Hathaway Primary Group & Reinsurance Group',
    summary:
      'Insurance and reinsurance sit at the center of Berkshire Hathaway’s operating model. Divided across GEICO, the Berkshire Hathaway Primary Group, and the Berkshire Hathaway Reinsurance Group, these operations underwrite personal, commercial specialty, and global catastrophe risks while generating durable investment float.',
    stewardshipNote:
      'Underwriting discipline takes precedence over premium volume across every carrier in the group.',
    imageSrc: './src/assets/images/segment_insurance_risk_1795210559117.jpg',
    imageAlt: 'Illustrative aerial maritime photograph symbolizing global commercial underwriting and risk protection',
    imageCaption:
      'Illustrative editorial visual — representing global underwriting and risk stewardship (not a Berkshire facility).',
    imagePosition: 'object-center',
    aspectClass: 'aspect-[4/3]',
    officialUrl: 'https://www.berkshirehathaway.com/subs/sublinks.html',
    subsidiaries: [
      { name: 'GEICO', url: 'https://www.geico.com/', note: 'Private passenger auto insurance' },
      {
        name: 'Berkshire Hathaway Primary Group',
        url: 'https://bhspecialty.com/',
        note: 'BHSI, Homestate, GUARD & MedPro commercial lines',
      },
      {
        name: 'Berkshire Hathaway Reinsurance Group',
        url: 'https://www.genre.com/',
        note: 'General Re, National Indemnity & global reinsurance',
      },
      {
        name: 'National Indemnity Company',
        url: 'https://www.nationalindemnity.com/',
        note: 'Foundational Omaha commercial & reinsurance carrier',
      },
    ],
  },
  {
    id: 'railroad',
    index: '02',
    name: 'BNSF Railway',
    headline: 'North American freight rail & intermodal transportation',
    summary:
      'Burlington Northern Santa Fe, LLC (BNSF Railway) operates one of North America’s largest freight railroad networks, transporting consumer goods, industrial materials, agricultural commodities, and energy products across major continental corridors.',
    stewardshipNote:
      'Reinvests continuously in track infrastructure, signaling safety, locomotives, and intermodal terminals.',
    imageSrc: './src/assets/images/segment_railroad_freight_1795210559571.jpg',
    imageAlt: 'Illustrative photograph of an intermodal freight train crossing open plains at sunrise',
    imageCaption:
      'Illustrative editorial visual — representing North American freight rail logistics (not a documented BNSF asset).',
    imagePosition: 'object-center',
    aspectClass: 'aspect-[16/9]',
    officialUrl: 'https://www.bnsf.com/',
    subsidiaries: [
      { name: 'BNSF Railway', url: 'https://www.bnsf.com/', note: 'North American freight rail network' },
    ],
  },
  {
    id: 'energy',
    index: '03',
    name: 'Berkshire Hathaway Energy',
    headline: 'Regulated utilities, natural gas pipelines & power infrastructure',
    summary:
      'Berkshire Hathaway Energy (BHE) owns locally managed regulated electric and natural gas utilities, interstate natural gas pipelines, electricity distribution networks, and power generation facilities across North America and the United Kingdom.',
    stewardshipNote:
      'Retains earnings internally to fund multi-decade electric grid, pipeline, and generation capital programs.',
    imageSrc: './src/assets/images/segment_energy_infrastructure_1795210559992.jpg',
    imageAlt: 'Illustrative architectural photograph of high-voltage transmission towers and wind turbines',
    imageCaption:
      'Illustrative editorial visual — representing electric transmission and power generation infrastructure.',
    imagePosition: 'object-center',
    aspectClass: 'aspect-[16/9]',
    officialUrl: 'https://www.brkenergy.com/',
    subsidiaries: [
      { name: 'Berkshire Hathaway Energy', url: 'https://www.brkenergy.com/', note: 'Energy holding company' },
      { name: 'MidAmerican Energy', url: 'https://www.midamericanenergy.com/', note: 'Regulated electric & gas utility' },
      { name: 'PacifiCorp', url: 'https://www.pacificorp.com/', note: 'Western U.S. electric utility & transmission' },
      { name: 'NV Energy', url: 'https://www.nvenergy.com/', note: 'Nevada regulated electric & gas utility' },
      { name: 'Northern Powergrid', url: 'https://www.northernpowergrid.com/', note: 'UK electricity distribution' },
    ],
  },
  {
    id: 'manufacturing',
    index: '04',
    name: 'Manufacturing',
    headline: 'Industrial products, building materials & consumer goods',
    summary:
      'Berkshire Hathaway’s manufacturing operations produce aerospace metal alloys, specialty chemicals, engineered building materials, manufactured housing, industrial cutting tools, batteries, and apparel across international markets.',
    stewardshipNote:
      'Operating subsidiaries maintain independent engineering teams, brands, and manufacturing footprints.',
    imageSrc: './src/assets/images/segment_precision_manufacturing_1795210559166.jpg',
    imageAlt: 'Illustrative industrial photograph of precision machined metal turbine components',
    imageCaption:
      'Illustrative editorial visual — representing precision aerospace and industrial manufacturing.',
    imagePosition: 'object-center',
    aspectClass: 'aspect-[4/3]',
    officialUrl: 'https://www.berkshirehathaway.com/subs/sublinks.html',
    subsidiaries: [
      { name: 'Precision Castparts Corp.', url: 'https://www.precast.com/', note: 'Aerospace & power metal components' },
      { name: 'The Lubrizol Corporation', url: 'https://www.lubrizol.com/', note: 'Specialty chemicals & fluid technologies' },
      { name: 'Marmon Holdings', url: 'https://www.marmon.com/', note: 'Diversified industrial manufacturing' },
      { name: 'Johns Manville', url: 'https://www.jm.com/', note: 'Insulation & engineered building materials' },
      { name: 'Shaw Industries', url: 'https://shawinc.com/', note: 'Flooring & surface products' },
      { name: 'Clayton Homes', url: 'https://www.claytonhomes.com/', note: 'Manufactured & site-built housing' },
      { name: 'OxyChem', url: 'https://www.oxy.com/', note: 'Chemical manufacturing (acquisition completed Jan 2026)' },
    ],
  },
  {
    id: 'services',
    index: '05',
    name: 'Service & Distribution (incl. McLane)',
    headline: 'Supply-chain logistics, private aviation & B2B services',
    summary:
      'Berkshire’s service businesses encompass nationwide wholesale grocery and foodservice distribution through McLane Company, fractional private aviation via NetJets, pilot simulator training at FlightSafety International, electronic component distribution, and corporate communications.',
    stewardshipNote:
      'Built on high-volume distribution reliability, aviation safety standards, and long-term B2B customer contracts.',
    imageSrc: './src/assets/images/segment_aviation_services_1795210559521.jpg',
    imageAlt: 'Illustrative commercial photograph of a midsize executive aircraft inside a sunlit hangar',
    imageCaption:
      'Illustrative editorial visual — representing corporate aviation and B2B service operations (not an official Berkshire hangar).',
    imagePosition: 'object-[18%_55%]',
    aspectClass: 'aspect-[4/3]',
    officialUrl: 'https://www.berkshirehathaway.com/subs/sublinks.html',
    subsidiaries: [
      { name: 'McLane Company', url: 'https://www.mclaneco.com/', note: 'Wholesale grocery & foodservice distribution' },
      { name: 'NetJets', url: 'https://www.netjets.com/', note: 'Fractional private aviation & fleet operations' },
      { name: 'FlightSafety International', url: 'https://www.flightsafety.com/', note: 'Aviation simulation & pilot training' },
      { name: 'TTI, Inc.', url: 'https://www.tti.com/', note: 'Electronic component distribution' },
      { name: 'Business Wire', url: 'https://www.businesswire.com/', note: 'Regulatory & corporate news distribution' },
      { name: 'XTRA Lease', url: 'https://www.xtralease.com/', note: 'Commercial semi-trailer leasing' },
    ],
  },
  {
    id: 'retailing',
    index: '06',
    name: 'Retailing & Travel Centers (incl. Pilot)',
    headline: 'Pilot Travel Centers, home furnishings, jewelry & consumer brands',
    summary:
      'Across consumer retail and highway travel infrastructure, Berkshire owns a controlling interest in Pilot Travel Centers alongside iconic retail franchises in home furnishings, fine jewelry, confections, and quick-service restaurants.',
    stewardshipNote:
      'Rooted in multi-generational brand loyalty, regional scale, and founder-led retail heritage.',
    imageSrc: './src/assets/images/segment_retailing_craft_1795210559242.jpg',
    imageAlt: 'Illustrative commercial photograph of a heritage retail boutique interior',
    imageCaption:
      'Illustrative editorial visual — representing consumer retail craftsmanship (not a specific store interior).',
    imagePosition: 'object-center',
    aspectClass: 'aspect-[4/3]',
    officialUrl: 'https://www.berkshirehathaway.com/subs/sublinks.html',
    subsidiaries: [
      { name: 'Pilot Travel Centers', url: 'https://pilotflyingj.com/', note: 'North American highway travel centers & fuel retail' },
      { name: 'Nebraska Furniture Mart', url: 'https://www.nfm.com/', note: 'Home furnishings, electronics & appliances' },
      { name: 'See’s Candies', url: 'https://www.sees.com/', note: 'Heritage American chocolates & confections' },
      { name: 'Borsheims Fine Jewelry', url: 'https://www.borsheims.com/', note: 'Omaha fine jewelry & timepieces' },
      { name: 'Helzberg Diamonds', url: 'https://www.helzberg.com/', note: 'National fine jewelry stores' },
      { name: 'International Dairy Queen', url: 'https://www.dairyqueen.com/', note: 'Quick-service restaurant franchisor' },
    ],
  },
];

export const INVESTOR_RESOURCES: InvestorResource[] = [
  {
    id: 'annual-interim-reports',
    publicationSlug: 'annual-interim-reports',
    category: 'Reports & Filings',
    title: 'Annual & Interim Reports',
    subtitle:
      'Consolidated Form 10-K annual reports and Form 10-Q quarterly interim financial statements published by Berkshire Hathaway Inc.',
    archivePeriod: 'Periodic Official Reports',
    officialUrl: 'https://www.berkshirehathaway.com/reports.html',
    officialDomainLabel: 'berkshirehathaway.com/reports.html',
  },
  {
    id: 'warren-buffett-letters',
    publicationSlug: 'warren-buffett-letters',
    category: 'Shareholder Letters',
    title: 'Warren Buffett’s Letters to Shareholders',
    subtitle:
      'Official archive of annual letters written by Warren E. Buffett to Berkshire Hathaway shareholders from 1977 onward.',
    archivePeriod: 'Archive · 1977–Present',
    officialUrl: 'https://www.berkshirehathaway.com/letters/letters.html',
    officialDomainLabel: 'berkshirehathaway.com/letters',
  },
  {
    id: 'greg-abel-letters',
    publicationSlug: 'greg-abel-letters',
    category: 'Shareholder Letters',
    title: 'Greg Abel’s Letters to Shareholders',
    subtitle:
      'Annual shareholder communications from Chief Executive Officer Greg Abel, hosted alongside the official Berkshire Hathaway Letters archive.',
    archivePeriod: 'Executive Communications',
    officialUrl: 'https://www.berkshirehathaway.com/letters/letters.html',
    officialDomainLabel: 'berkshirehathaway.com/letters',
  },
  {
    id: 'special-letters-warren-charlie',
    publicationSlug: 'special-letters-warren-charlie',
    category: 'Shareholder Letters',
    title: 'Special Letters from Warren & Charlie',
    subtitle:
      'Commemorative 50th-anniversary special letters by Warren E. Buffett and Charles T. Munger reflecting on Berkshire Hathaway’s past, present, and future.',
    archivePeriod: 'Published 2015 (50th Anniversary)',
    officialUrl: 'https://www.berkshirehathaway.com/SpecialLetters/WEBCTMLtr.html',
    officialDomainLabel: 'berkshirehathaway.com/SpecialLetters',
  },
  {
    id: 'wesco-charlie-munger-letters',
    publicationSlug: 'wesco-charlie-munger-letters',
    category: 'Shareholder Letters',
    title: 'Charlie Munger’s Letters to Wesco Shareholders',
    subtitle:
      'Historical archive of annual shareholder letters authored by Charles T. Munger for Wesco Financial Corporation.',
    archivePeriod: 'Wesco Financial Archive',
    officialUrl: 'https://www.berkshirehathaway.com/wesco/WescoHome.html',
    officialDomainLabel: 'berkshirehathaway.com/wesco',
  },
  {
    id: 'sec-filings',
    publicationSlug: 'sec-filings',
    category: 'Reports & Filings',
    title: 'SEC Filings',
    subtitle:
      'Regulatory filings submitted to the U.S. Securities and Exchange Commission under CIK 0001067983 (Forms 10-K, 10-Q, 8-K, DEF 14A, 13F, and 4).',
    archivePeriod: 'SEC EDGAR · CIK 0001067983',
    officialUrl: 'https://www.sec.gov/edgar/browse/?CIK=0001067983',
    officialDomainLabel: 'sec.gov/edgar',
  },
  {
    id: 'annual-meeting-information',
    publicationSlug: 'annual-meeting-information',
    category: 'Meeting & Stock',
    title: 'Annual Meeting Information',
    subtitle:
      'Official Shareholder’s Guide, proxy materials, credential instructions, and Omaha meeting event notices.',
    archivePeriod: 'Annual Gathering · Omaha, NE',
    officialUrl: 'https://www.berkshirehathaway.com/sharehold.html',
    officialDomainLabel: 'berkshirehathaway.com/sharehold.html',
  },
  {
    id: 'common-stock-information',
    publicationSlug: 'common-stock-information',
    category: 'Meeting & Stock',
    title: 'Common Stock Information',
    subtitle:
      'Official comparative rights, conversion rules (1 Class A = 1,500 Class B economic rights), and transfer agent details for NYSE: BRK.A and BRK.B.',
    archivePeriod: 'NYSE: BRK.A / BRK.B',
    officialUrl: 'https://www.berkshirehathaway.com/compab/compo.html',
    officialDomainLabel: 'berkshirehathaway.com/compab',
  },
  {
    id: 'corporate-governance',
    publicationSlug: 'corporate-governance',
    category: 'Governance & Sustainability',
    title: 'Corporate Governance',
    subtitle:
      'Corporate Governance Guidelines, Audit Committee Charter, Governance, Compensation and Nominating Committee Charter, and Code of Business Conduct and Ethics.',
    archivePeriod: 'Board Charters & Policies',
    officialUrl: 'https://www.berkshirehathaway.com/govern/govern.html',
    officialDomainLabel: 'berkshirehathaway.com/govern',
  },
  {
    id: 'sustainability-disclosures',
    publicationSlug: 'sustainability-disclosures',
    category: 'Governance & Sustainability',
    title: 'Sustainability',
    subtitle:
      'Information regarding the Berkshire Hathaway Sustainability Leadership Council, subsidiary environmental reporting, and consolidated EEO-1 workforce data.',
    archivePeriod: 'Environmental & Workforce Data',
    officialUrl: 'https://www.berkshirehathaway.com/sustainability/sustainabilityintro.html',
    officialDomainLabel: 'berkshirehathaway.com/sustainability',
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    number: '01',
    title: 'Permanent Capital Horizon',
    description:
      'Acquisitions are structured for permanent ownership, enabling operating managers to allocate capital across multi-decade infrastructure and brand horizons.',
  },
  {
    number: '02',
    title: 'Decentralized Operating Autonomy',
    description:
      'Subsidiary chief executives run their businesses independently, preserving local accountability, specialized expertise, and customer culture while Omaha focuses on capital allocation.',
  },
  {
    number: '03',
    title: 'Conservative Financial Fortress',
    description:
      'Substantial liquidity, modest leverage, and diversified earnings from insurance, rail, energy, manufacturing, service, and retail sustain institutional resilience.',
  },
  {
    number: '04',
    title: 'Owner-Oriented Candor',
    description:
      'Described in Berkshire’s Owner’s Manual, corporate communications address all shareholders as business partners with plain-spoken reporting of both strengths and mistakes.',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'thanksgiving-2026',
    publicationSlug: 'news-thanksgiving-2026',
    date: 'November 16, 2026',
    year: '2026',
    category: 'Corporate Announcement',
    title: 'Thanksgiving Message from Warren Buffett',
    summary:
      'Official Thanksgiving message from Warren E. Buffett published in Berkshire Hathaway’s 2026 news releases archive.',
    officialUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
    featured: true,
  },
  {
    id: 'q3-2026-earnings',
    publicationSlug: 'news-q3-2026-earnings',
    date: 'November 7, 2026',
    year: '2026',
    category: 'Financial Results',
    title: 'Third Quarter Earnings 2026',
    summary:
      'Official third-quarter 2026 earnings release covering Berkshire Hathaway’s consolidated insurance and non-insurance operations.',
    officialUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
  },
  {
    id: 'chairmanship-2026',
    publicationSlug: 'news-chairmanship-2026',
    date: 'September 18, 2026',
    year: '2026',
    category: 'Board Governance',
    title: 'Warren E. Buffett Becomes Chairman Emeritus, Remains Director; Howard G. Buffett Elected Chairman',
    summary:
      'Board leadership announcement confirming Warren E. Buffett’s transition to Chairman Emeritus while remaining a Director, and the election of Howard G. Buffett as Chairman.',
    officialUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
  },
  {
    id: 'taylor-morrison-close-2026',
    publicationSlug: 'news-taylor-morrison-2026',
    date: 'July 24, 2026',
    year: '2026',
    category: 'Acquisitions',
    title: 'Berkshire Hathaway Completes Acquisition of Taylor Morrison',
    summary:
      'Completion of the $8.5 billion acquisition of Taylor Morrison Home Corporation announced earlier in May 2026.',
    officialUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
  },
  {
    id: 'oxychem-close-2026',
    publicationSlug: 'news-oxychem-2026',
    date: 'January 2, 2026',
    year: '2026',
    category: 'Acquisitions',
    title: 'Berkshire Hathaway Inc. Completes Acquisition of OxyChem',
    summary:
      'Official announcement confirming completion of the acquisition of Occidental Chemical Corporation (OxyChem).',
    officialUrl: 'https://www.berkshirehathaway.com/news/2026news.html',
  },
  {
    id: 'leadership-2025',
    publicationSlug: 'news-leadership-2025',
    date: 'December 8, 2025',
    year: '2025',
    category: 'Leadership',
    title: 'Berkshire Hathaway Announces Leadership Appointments',
    summary:
      'Official December 2025 press release outlining executive leadership appointments.',
    officialUrl: 'https://www.berkshirehathaway.com/news/2025news.html',
  },
  {
    id: 'its-not-me-2025',
    publicationSlug: 'news-fraud-notice-2025',
    date: 'November 6, 2025',
    year: '2025',
    category: 'Shareholder Notice',
    title: 'It’s Not Me — Official Notice on Fraudulent Endorsements',
    summary:
      'Formal warning against fraudulent impersonations and unauthorized political or investment endorsements using Warren Buffett’s likeness.',
    officialUrl: 'https://www.berkshirehathaway.com/news/2025news.html',
  },
];

export const GOVERNANCE_RESOURCES = [
  {
    title: 'Corporate Governance Guidelines',
    detail: 'Board composition, director independence standards, and fiduciary oversight frameworks.',
    url: 'https://www.berkshirehathaway.com/govern/govern.html',
  },
  {
    title: 'Code of Business Conduct and Ethics',
    detail: 'Standards governing integrity, legal compliance, and conflict-of-interest disclosure across all personnel.',
    url: 'https://www.berkshirehathaway.com/govern/govern.html',
  },
  {
    title: 'Audit & Governance Committee Charters',
    detail: 'Formal charters of the Audit Committee and the Governance, Compensation and Nominating Committee.',
    url: 'https://www.berkshirehathaway.com/govern/govern.html',
  },
  {
    title: 'Prohibited Business Practices & Hotline',
    detail: 'Confidential reporting channels overseen by the Audit Committee for ethics and compliance concerns.',
    url: 'https://www.berkshirehathaway.com/govern/govern.html',
  },
];

export const SUSTAINABILITY_RESOURCES = [
  {
    title: 'Sustainability Leadership Council',
    detail: 'Cross-subsidiary forum sharing operational initiatives across energy, rail, manufacturing, and insurance.',
    url: 'https://www.berkshirehathaway.com/sustainability/sustainabilityintro.html',
  },
  {
    title: 'Workforce Diversity & Consolidated EEO-1 Data',
    detail: 'Official U.S. Equal Employment Opportunity (EEO-1) workforce demographic disclosures across Berkshire Hathaway Inc.',
    url: 'https://www.berkshirehathaway.com/sustainability/sustainability.html',
  },
  {
    title: 'Subsidiary Environmental Disclosures',
    detail: 'Individual environmental and operational reporting maintained by subsidiaries such as Berkshire Hathaway Energy and Johns Manville.',
    url: 'https://www.berkshirehathaway.com/sustainability/sustainabilityintro.html',
  },
];
