export interface PostSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: Array<{ label: string; detail: string }>;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface ShareholderPost {
  slug: string;
  code: string;
  category: 'Reports & Filings' | 'Shareholder Letters' | 'Meeting & Stock';
  title: string;
  subtitle: string;
  publishedMeta: string;
  readTime: string;
  leadQuote: {
    text: string;
    attribution: string;
  };
  openingParagraph: string;
  sections: PostSection[];
  officialSourceLabel: string;
  officialSourceUrl: string;
  secondarySourceLabel?: string;
  secondarySourceUrl?: string;
}

export const SHAREHOLDER_POSTS: ShareholderPost[] = [
  {
    slug: 'annual-reports',
    code: 'DOC-IR-01',
    category: 'Reports & Filings',
    title: 'Annual & Interim Reports',
    subtitle:
      'Comprehensive consolidated financial reporting structured around operating earnings, insurance underwriting discipline, and multi-decade asset stewardship.',
    publishedMeta: 'Periodic Financial Reporting · Form 10-K & Form 10-Q',
    readTime: '5 min read',
    leadQuote: {
      text: 'We focus shareholders’ attention on operating earnings—the recurring economic engine of our wholly owned businesses—rather than short-term swings in unrealized equity market valuations.',
      attribution: 'Berkshire Hathaway Financial Reporting Principle',
    },
    openingParagraph:
      'Berkshire Hathaway’s annual and quarterly reports are designed to provide every owner—whether an individual holding a single Class B share or an institutional steward—with transparent, unvarnished access to the financial condition of the enterprise. Reports are published concurrently with U.S. Securities and Exchange Commission filings without selective briefings, analyst conference calls, or speculative quarterly earnings guidance.',
    sections: [
      {
        id: 'reporting-cadence',
        heading: '01. Consolidated Reporting Architecture',
        paragraphs: [
          'Every fiscal year culminates in the Form 10-K Annual Report, typically released on a Saturday morning in late February alongside the annual Shareholder Letter. Releasing comprehensive financial statements over the weekend ensures all investors have equal time to digest consolidated disclosures before markets open.',
          'Interim Form 10-Q reports are similarly published on Saturdays in May, August, and November, providing consistent visibility across all four primary reporting pillars.',
        ],
        bullets: [
          {
            label: 'Insurance Underwriting & Investment Income',
            detail:
              'Detailed loss-reserve development, combined ratios, and net investment income across GEICO, Berkshire Hathaway Primary Group, and Reinsurance operations.',
          },
          {
            label: 'BNSF Railway Operations',
            detail:
              'Freight revenues by commodity group (consumer products, industrial products, agricultural products, and coal), operating ratios, and capital expenditure commitments.',
          },
          {
            label: 'Berkshire Hathaway Energy',
            detail:
              'Regulated utility margins, interstate natural gas pipeline throughput, renewable generation investments, and non-recourse subsidiary debt profiles.',
          },
          {
            label: 'Manufacturing, Service & Retailing',
            detail:
              'Aggregated performance across dozens of industrial, building products, consumer, aviation service, and retail subsidiaries—including newly integrated operations such as OxyChem and Taylor Morrison.',
          },
        ],
      },
      {
        id: 'archive-schedule',
        heading: '02. Recent Reporting Schedule & Filings Index',
        paragraphs: [
          'Below is the structured schedule of recent annual and interim reporting periods. Official signed financial tables and XBRL exhibits remain archived at the primary corporate and SEC repositories.',
        ],
        table: {
          headers: ['Period', 'Filing Form', 'Release Date', 'Primary Focus'],
          rows: [
            ['Q3 2026', 'Form 10-Q', 'Nov 7, 2026', 'Nine-month consolidated operating results & balance sheet'],
            ['Q2 2026', 'Form 10-Q', 'Aug 8, 2026', 'Mid-year underwriting, rail, utility & manufacturing update'],
            ['Q1 2026', 'Form 10-Q', 'May 2, 2026', 'First-quarter earnings & OxyChem integration summary'],
            ['FY 2025', 'Form 10-K', 'Feb 28, 2026', 'Audited full-year financial statements & segment disclosures'],
            ['FY 2024', 'Form 10-K', 'Feb 22, 2025', 'Audited consolidated statements & comparative multi-year data'],
          ],
        },
      },
      {
        id: 'accounting-perspective',
        heading: '03. Interpreting Operating vs. Net Earnings',
        paragraphs: [
          'Under U.S. GAAP accounting rules (ASU 2016-01), Berkshire Hathaway is required to include unrealized gains and losses from its publicly traded equity portfolio directly inside quarterly net income. Because equity prices fluctuate widely over 90-day windows, reported GAAP net income can appear volatile even when underlying businesses operate steadily.',
          'For this reason, Berkshire prominently highlights Operating Earnings—earnings before realized and unrealized investment gains or losses—in every press release and report overview as a clearer measure of recurring business performance.',
        ],
      },
    ],
    officialSourceLabel: 'Official Reports Page (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/reports.html',
    secondarySourceLabel: 'SEC EDGAR 10-K / 10-Q Filings',
    secondarySourceUrl: 'https://www.sec.gov/edgar/browse/?CIK=0001067983',
  },
  {
    slug: 'shareholder-letters',
    code: 'DOC-IR-02',
    category: 'Shareholder Letters',
    title: 'Annual Letters to Shareholders',
    subtitle:
      'An unbroken five-decade chronicle of candid owner-to-owner communication—spanning capital allocation lessons, operating reviews, and leadership continuity.',
    publishedMeta: 'Annual Archive · 1977–Present',
    readTime: '6 min read',
    leadQuote: {
      text: 'When writing to our owners, we imagine we are addressing a thoughtful partner who has invested a significant portion of their family’s net worth in Berkshire and asks only for an honest accounting.',
      attribution: 'Shareholder Communication Standard · Omaha, Nebraska',
    },
    openingParagraph:
      'Beginning in 1977 in their modern form, Berkshire Hathaway’s annual Letters to Shareholders have become a benchmark in corporate transparency. Rather than outsourcing investor prose to public-relations agencies, Berkshire’s leadership writes directly to shareholders—explaining both operational triumphs and candidly acknowledging errors in judgment, acquisition missteps, and structural industry shifts.',
    sections: [
      {
        id: 'continuum-of-stewardship',
        heading: '01. Continuity of Voice & Purpose',
        paragraphs: [
          'Across nearly fifty consecutive letters, Warren E. Buffett codified principles on intrinsic business value, economic moats, insurance float economics, and conservative balance-sheet management. With Chief Executive Officer Greg Abel leading Berkshire’s operating stewardship and Howard G. Buffett serving as Chairman alongside Chairman Emeritus Warren E. Buffett, the commitment to plain-spoken owner reporting remains unchanged.',
          'Each annual letter examines how retained earnings were deployed across wholly owned subsidiaries, fixed-maturity reserves, and marketable securities, while spotlighting the decentralized leaders responsible for day-to-day excellence.',
        ],
      },
      {
        id: 'historical-eras',
        heading: '02. Archival Index by Decade',
        paragraphs: [
          'Every historical letter since 1977 is preserved in full without retroactive editing, allowing long-term owners and students of business to trace how Berkshire’s capital allocation framework evolved through inflation, market panics, and industrial transformation.',
        ],
        table: {
          headers: ['Era', 'Span', 'Landmark Themes Covered'],
          rows: [
            ['2020s', '2020–2025/26', 'Leadership succession to Greg Abel, energy transition, BNSF & Japanese trading houses'],
            ['2010s', '2010–2019', 'BNSF Railway acquisition, Lubrizol & Precision Castparts, share repurchase criteria'],
            ['2000s', '2000–2009', 'Post-9/11 reinsurance discipline, MidAmerican utility growth, 2008 financial liquidity'],
            ['1990s', '1990–1999', 'GEICO full ownership, General Re merger, Class B stock creation, intrinsic value definition'],
            ['Foundational', '1977–1989', 'Transition out of New England textiles, See’s Candies economics, insurance float mechanics'],
          ],
        },
      },
      {
        id: 'core-pillars',
        heading: '03. Four Enduring Lessons Across the Archive',
        paragraphs: [
          'While business conditions change every decade, four analytical themes recur throughout the archive:',
        ],
        bullets: [
          {
            label: 'Owner Earnings Over Accounting Cosmetics',
            detail:
              'Evaluating businesses by sustainable free cash generation after required maintenance capital expenditures.',
          },
          {
            label: 'Cost-Free or Negative-Cost Float',
            detail:
              'Treating disciplined underwriting profit—not mere premium volume—as the prerequisite for holding insurance float.',
          },
          {
            label: 'Permanent Ownership Without Exit Timelines',
            detail:
              'Offering founders an alternative to financial buyers by guaranteeing their enterprises will never be flipped.',
          },
          {
            label: 'Unshakeable Liquidity',
            detail:
              'Maintaining substantial U.S. Treasury reserves so Berkshire can act decisively when credit markets seize.',
          },
        ],
      },
    ],
    officialSourceLabel: 'Official Letters Index (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/letters/letters.html',
    secondarySourceLabel: 'Owner’s Manual & Special Letters',
    secondarySourceUrl: 'https://www.berkshirehathaway.com/ownman.pdf',
  },
  {
    slug: 'sec-filings',
    code: 'DOC-IR-03',
    category: 'Reports & Filings',
    title: 'SEC Filings & EDGAR Repository',
    subtitle:
      'Complete regulatory transparency through the U.S. Securities and Exchange Commission—covering periodic reports, current events, proxy statements, and equity holdings.',
    publishedMeta: 'Regulatory Compliance · CIK 0001067983',
    readTime: '4 min read',
    leadQuote: {
      text: 'Simultaneous public disclosure ensures that every market participant receives material corporate information on equal terms, without whispers or privileged access.',
      attribution: 'Disclosure Governance Policy',
    },
    openingParagraph:
      'As a publicly traded Delaware corporation listed on the New York Stock Exchange under the ticker symbols BRK.A and BRK.B, Berkshire Hathaway Inc. files all statutory reports electronically with the U.S. Securities and Exchange Commission via the EDGAR system under Central Index Key (CIK) 0001067983.',
    sections: [
      {
        id: 'registrant-profile',
        heading: '01. Official Registrant Identifiers',
        paragraphs: [
          'Investors, auditors, and institutional compliance teams can verify Berkshire Hathaway’s primary statutory identifiers below before querying regulatory databases.',
        ],
        table: {
          headers: ['Identifier', 'Official Record'],
          rows: [
            ['Legal Registrant Name', 'Berkshire Hathaway Inc.'],
            ['SEC Central Index Key (CIK)', '0001067983'],
            ['Standard Industrial Classification', '6331 — Fire, Marine & Casualty Insurance'],
            ['State of Incorporation', 'Delaware'],
            ['Primary Exchange & Tickers', 'New York Stock Exchange · BRK.A / BRK.B'],
            ['Principal Executive Offices', '3555 Farnam Street, Omaha, Nebraska 68131'],
          ],
        },
      },
      {
        id: 'filing-taxonomy',
        heading: '02. Guide to Regulatory Filing Forms',
        paragraphs: [
          'Different statutory forms serve distinct analytical purposes for shareholders reviewing capital allocation, governance proposals, and executive stock ownership:',
        ],
        bullets: [
          {
            label: 'Form 10-K & Form 10-Q',
            detail:
              'Annual audited and quarterly unaudited financial statements, Risk Factors, Management’s Discussion and Analysis (MD&A), and segment footnotes.',
          },
          {
            label: 'Form 8-K (Current Reports)',
            detail:
              'Timely disclosures of material corporate events, earnings releases, board leadership transitions, and major acquisition agreements.',
          },
          {
            label: 'Schedule 14A (Proxy Statement)',
            detail:
              'Annual shareholder meeting agenda, director nominee biographies, board committee independence, and shareholder proposal recommendations.',
          },
          {
            label: 'Form 13F-HR',
            detail:
              'Quarterly institutional investment manager holdings report detailing U.S.-listed equity positions held across Berkshire’s insurance and corporate portfolios as of quarter-end.',
          },
          {
            label: 'Forms 3, 4 & 5',
            detail:
              'Statutory beneficial ownership and transaction reports filed by directors and executive officers.',
          },
        ],
      },
    ],
    officialSourceLabel: 'Open SEC EDGAR Filing Feed (CIK 0001067983)',
    officialSourceUrl: 'https://www.sec.gov/edgar/browse/?CIK=0001067983',
    secondarySourceLabel: 'Berkshire Filings & Reports Portal',
    secondarySourceUrl: 'https://www.berkshirehathaway.com/reports.html',
  },
  {
    slug: 'annual-meeting',
    code: 'DOC-IR-04',
    category: 'Meeting & Stock',
    title: 'Annual Shareholders Meeting',
    subtitle:
      'Visitor’s guide, credential instructions, and the Saturday schedule for Berkshire Hathaway’s annual gathering at the CHI Health Center in Omaha, Nebraska.',
    publishedMeta: 'Annual Gathering · Omaha, Nebraska',
    readTime: '5 min read',
    leadQuote: {
      text: 'Our annual meeting is an unscripted forum where shareholders from around the globe gather in Omaha to examine our businesses, question leadership candidly, and experience the companies they own.',
      attribution: 'Omaha Annual Meeting Tradition',
    },
    openingParagraph:
      'Every spring, tens of thousands of Class A and Class B shareholders converge on Omaha, Nebraska for Berkshire Hathaway’s Annual Shareholders Meeting at the CHI Health Center. Far more than a statutory corporate vote, the weekend functions as an extended dialogue between leadership and owners alongside an exhibition hall showcasing Berkshire’s operating subsidiaries.',
    sections: [
      {
        id: 'weekend-schedule',
        heading: '01. Typical Meeting & Exhibition Schedule',
        paragraphs: [
          'While exact calendar dates are published each spring in the official Proxy Statement and Visitor’s Guide, the meeting weekend follows a structured rhythm across Friday and Saturday:',
        ],
        table: {
          headers: ['Day & Time (CT)', 'Location', 'Program / Event'],
          rows: [
            ['Friday · 12:00 PM – 5:00 PM', 'CHI Health Center Exhibit Hall', 'Shareholder Shopping Day across subsidiary booths'],
            ['Friday · 6:00 PM – 8:00 PM', 'Borsheims Fine Jewelry', 'Shareholder-only evening reception & shopping event'],
            ['Saturday · 7:00 AM', 'CHI Health Center', 'Arena doors & subsidiary Exhibit Hall open'],
            ['Saturday · 8:30 AM', 'Main Arena', 'Welcome & annual corporate update presentation'],
            ['Saturday · 9:30 AM – 10:45 AM', 'Main Arena', 'Morning Question & Answer Session with leadership'],
            ['Saturday · 11:45 AM – 1:00 PM', 'Main Arena', 'Midday Question & Answer Session'],
            ['Saturday · 2:00 PM', 'Main Arena', 'Formal Annual Meeting of Shareholders & voting'],
            ['Saturday · 4:00 PM', 'CHI Health Center', 'Exhibit Hall closes'],
          ],
        },
      },
      {
        id: 'credentials-and-exhibits',
        heading: '02. Shareholder Credentials & Subsidiary Showcase',
        paragraphs: [
          'Both Class A and Class B shareholders—whether registered directly or holding shares in street name through a brokerage—are entitled to request up to four meeting credentials annually by following the credential form instructions enclosed with the proxy materials.',
        ],
        bullets: [
          {
            label: 'Subsidiary Exhibit Hall',
            detail:
              'Featured displays and shareholder-exclusive offerings from GEICO, BNSF Railway, NetJets, See’s Candies, Brooks Running, Fruit of the Loom, Dairy Queen, Jazwares, Clayton Homes, and The Bookworm.',
          },
          {
            label: 'Omaha Flagship Visits',
            detail:
              'Shareholder weekend specials extend across Omaha landmarks including Nebraska Furniture Mart, Borsheims Fine Jewelry, and Gorat’s Steak House.',
          },
          {
            label: 'Live Webcast Access',
            detail:
              'For owners unable to travel to Nebraska, the morning and midday Question & Answer sessions are made available via live public webcast.',
          },
        ],
      },
    ],
    officialSourceLabel: 'Official Meeting & Proxy Information (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/sharehold.html',
  },
  {
    slug: 'stock-info',
    code: 'DOC-IR-05',
    category: 'Meeting & Stock',
    title: 'Common Stock Information (Class A & Class B)',
    subtitle:
      'Structural mechanics, economic parity, voting ratios, conversion rules, and Berkshire’s framework for retained earnings and share repurchases.',
    publishedMeta: 'Capital Structure Memo · NYSE: BRK.A / BRK.B',
    readTime: '5 min read',
    leadQuote: {
      text: 'Class A shares have never been split because we want owners who view their stock as a fractional interest in an enduring business rather than a short-term trading counter.',
      attribution: 'Memorandum on Class A & Class B Common Stock',
    },
    openingParagraph:
      'Berkshire Hathaway’s equity capital consists solely of two classes of common stock listed on the New York Stock Exchange: Class A (BRK.A) and Class B (BRK.B). Class B shares were introduced in May 1996—and subsequently split 50-for-1 in January 2010—to provide smaller investors direct ownership without the cost of unit trusts, while preserving long-term governance stability.',
    sections: [
      {
        id: 'structural-parity',
        heading: '01. Economic & Voting Comparison',
        paragraphs: [
          'The relationship between Class A and Class B shares is governed by an exact mathematical ratio embedded in Berkshire Hathaway’s corporate charter. Arbitrage conversion keeps the market price of one Class B share closely aligned with 1/1,500th of a Class A share.',
        ],
        table: {
          headers: ['Feature', 'Class A Common (BRK.A)', 'Class B Common (BRK.B)'],
          rows: [
            ['Economic Rights', '1.0000 Base Share', '1 / 1,500th of a Class A share'],
            ['Voting Rights', '1 Full Vote per Share', '1 / 10,000th of a Class A share'],
            ['Convertibility', 'Convertible anytime into 1,500 Class B shares', 'Not convertible into Class A shares'],
            ['Stock Split History', 'Never split', '50-for-1 split completed Jan 2010'],
            ['Dividend Policy', 'Earnings retained for reinvestment', 'Earnings retained for reinvestment'],
          ],
        },
      },
      {
        id: 'retained-earnings-policy',
        heading: '02. Retained Earnings & Repurchase Discipline',
        paragraphs: [
          'Berkshire Hathaway has not paid a cash dividend since 1967 because management believes retaining earnings within the enterprise—reinvesting in regulated utilities, freight rail infrastructure, whole-company acquisitions, and marketable securities—creates more than one dollar of long-term market value for each dollar retained.',
          'When Berkshire repurchases its own Class A or Class B shares, buybacks are executed solely when leadership concludes that the market price sits comfortably below a conservative estimate of intrinsic business value, while leaving ample cash and U.S. Treasury liquidity untouched.',
        ],
        bullets: [
          {
            label: 'Conversion Mechanics',
            detail:
              'Registered or brokerage holders wishing to convert Class A shares into Class B shares may instruct the transfer agent (Equiniti Trust Company / EQ Shareowner Services) at any time; the conversion is irreversible.',
          },
          {
            label: 'No Preferred Stock Overlay',
            detail:
              'Both classes participate identically in corporate net worth on a 1,500-to-1 economic basis with no senior preferred claims.',
          },
        ],
      },
    ],
    officialSourceLabel: 'Official Comparative Stock Memo PDF (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/compab.pdf',
  },
  {
    slug: 'governance-docs',
    code: 'DOC-IR-06',
    category: 'Reports & Filings',
    title: 'Corporate Governance & Committee Charters',
    subtitle:
      'Board oversight charters, director independence standards, executive succession principles, and enterprise-wide ethical conduct frameworks.',
    publishedMeta: 'Board Governance Framework · Omaha, Nebraska',
    readTime: '5 min read',
    leadQuote: {
      text: 'True corporate governance rests not in voluminous bureaucracy, but in directors who possess genuine business judgment, personal integrity, and substantial ownership stakes alongside fellow shareholders.',
      attribution: 'Board Stewardship Principle',
    },
    openingParagraph:
      'Berkshire Hathaway’s governance model balances strict fiduciary accountability at the parent Board level with broad operational autonomy across its subsidiary enterprises. All foundational board charters, independence standards, and ethics policies are maintained publicly for review by shareholders, employees, and business partners.',
    sections: [
      {
        id: 'charters-overview',
        heading: '01. Core Governance Documents & Committee Mandates',
        paragraphs: [
          'The Board of Directors executes its statutory and fiduciary responsibilities through clearly defined guidelines and standing committees composed of independent directors.',
        ],
        bullets: [
          {
            label: 'Corporate Governance Guidelines',
            detail:
              'Establishes director qualification standards, board independence determinations, annual self-evaluations, executive succession oversight, and director stock ownership alignment.',
          },
          {
            label: 'Audit Committee Charter',
            detail:
              'Empowers financially literate independent directors to oversee consolidated financial statement integrity, internal accounting controls, risk management processes, and the independent registered public accounting firm.',
          },
          {
            label: 'Governance, Compensation & Nominating Committee Charter',
            detail:
              'Evaluates board composition, nominates director candidates, reviews governance policies, and determines compensation arrangements for the Chief Executive Officer and senior corporate officers.',
          },
          {
            label: 'Code of Business Conduct and Ethics',
            detail:
              'Requires directors, corporate officers, and subsidiary personnel worldwide to uphold legal compliance, honest financial recordkeeping, antitrust adherence, and strict avoidance of conflicts of interest.',
          },
        ],
      },
      {
        id: 'ethics-and-compliance',
        heading: '02. Integrity Reporting & Insider Trading Standards',
        paragraphs: [
          'Across a decentralized federation of businesses, ethical culture is non-negotiable. Operating company presidents bear direct responsibility for maintaining compliance programs tailored to their industries, backed by an independent, confidential whistleblower hotline overseen by the Audit Committee.',
          'Berkshire Hathaway also enforces a formal Insider Trading Policy prohibiting directors, officers, and knowledgeable personnel from trading company or target securities while aware of material non-public information.',
        ],
        table: {
          headers: ['Governance Pillar', 'Oversight Body', 'Primary Focus'],
          rows: [
            ['Financial Audit & Controls', 'Audit Committee', 'Independent auditor oversight & internal audit review'],
            ['Executive Succession & Pay', 'Governance, Comp. & Nominating', 'CEO accountability & board nomination slate'],
            ['Ethical Conduct & Hotline', 'Audit Committee & General Counsel', 'Code of Ethics compliance & confidential reporting'],
            ['Insider Trading Controls', 'Corporate Legal & Compliance', 'Window periods & material non-public info safeguards'],
          ],
        },
      },
    ],
    officialSourceLabel: 'Official Governance Portal (berkshirehathaway.com)',
    officialSourceUrl: 'https://www.berkshirehathaway.com/govern/govern.html',
  },
];
