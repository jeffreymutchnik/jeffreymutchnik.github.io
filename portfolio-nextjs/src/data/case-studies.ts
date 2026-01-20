export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  subtitle: string;
  category: string;
  description: string;
  stats: { value: string; label: string }[];
  challenge: {
    description: string;
    points: string[];
  };
  approach: {
    title: string;
    icon: string;
    points: string[];
  }[];
  results: { value: string; label: string }[];
  technologies: string[];
  learnings: { title: string; description: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "patientiq",
    title: "PatientIQ",
    company: "PatientIQ",
    subtitle: "Building Marketing from Zero to $6M Pipeline",
    category: "B2B SaaS | Clinical Outcomes Platform",
    description:
      "How I generated 44% of company pipeline and contributed to $20M Series B as the first marketing hire.",
    stats: [
      { value: "44%", label: "of Company Pipeline" },
      { value: "$6M", label: "ARR Generated" },
      { value: "10x", label: "ARR Growth" },
      { value: "$20M", label: "Series B Contribution" },
    ],
    challenge: {
      description:
        "PatientIQ is a clinical outcomes platform helping orthopedic surgeons, health systems, and medical device companies track patient-reported outcomes. When I joined as the first marketing hire, the company had:",
      points: [
        "No marketing infrastructure or lead generation engine",
        "$300K in annual recurring revenue (ARR)",
        "Salesforce CRM with limited marketing functionality",
        "No brand awareness in the clinical outcomes market",
        "A small sales team relying entirely on founder-led outreach",
      ],
    },
    approach: [
      {
        title: "CRM Migration & Architecture",
        icon: "database",
        points: [
          "Led full migration from Salesforce to HubSpot with 100% data integrity",
          "Designed complete CRM architecture including lead scoring, lifecycle stages, and attribution models",
          "Built custom reporting dashboards for executive team decision-making",
          "Integrated ZoomInfo and 6Sense for intent data and lead enrichment",
        ],
      },
      {
        title: "Demand Generation Strategy",
        icon: "target",
        points: [
          "Developed integrated ABM strategy targeting AAOS conference attendees and specialty orthopedic practices",
          "Created automated nurture sequences moving leads through funnel stages",
          "Built co-marketing program with health system customers (Northwestern Medicine, Mass General, Cleveland Clinic)",
          "Scaled from 0 to 50 MQLs per month within first year",
        ],
      },
      {
        title: "Website & Content",
        icon: "globe",
        points: [
          "Rebuilt website on Webflow with SEO optimization for clinical outcomes keywords",
          "Achieved 235% increase in organic traffic",
          "Created case studies, webinars, and testimonial videos with customer partners",
        ],
      },
      {
        title: "Sales Enablement",
        icon: "users",
        points: [
          "Trained entire organization on HubSpot CRM for provider relationship management",
          "Developed comprehensive documentation and onboarding materials",
          "Created investor deck contributing to successful $20M Series B (Health Enterprise Partners)",
        ],
      },
    ],
    results: [
      { value: "44%", label: "of Pipeline" },
      { value: "$6M", label: "ARR Generated" },
      { value: "10x", label: "ARR Growth ($300K to $3M)" },
      { value: "235%", label: "Organic Traffic Increase" },
      { value: "50", label: "MQLs/Month" },
      { value: "$20M", label: "Series B Raised" },
    ],
    technologies: [
      "HubSpot",
      "Webflow",
      "ZoomInfo",
      "6Sense",
      "Google Analytics",
      "Looker Studio",
    ],
    learnings: [
      {
        title: "Start with Attribution",
        description:
          "Building proper attribution from day one made it possible to demonstrate marketing's impact on revenue.",
      },
      {
        title: "ABM Works in Healthcare",
        description:
          "Account-based marketing is particularly effective when targeting health systems with long sales cycles.",
      },
      {
        title: "Customer Stories Sell",
        description:
          "Co-marketing with prestigious health systems provided third-party validation that accelerated deals.",
      },
    ],
  },
  {
    slug: "aasm",
    title: "AASM",
    company: "American Academy of Sleep Medicine",
    subtitle: "Enterprise CRM Migration & Digital Transformation",
    category: "Non-Profit | Medical Association",
    description:
      "Led enterprise-wide HubSpot migration for a 13,000+ member organization, increasing webinar registrations by 1,200% YoY.",
    stats: [
      { value: "1,200%", label: "Webinar Growth YoY" },
      { value: "13,000+", label: "Members Served" },
      { value: "8", label: "Web Properties" },
      { value: "$500K+", label: "E-commerce Revenue" },
    ],
    challenge: {
      description:
        "The American Academy of Sleep Medicine is the leading professional society for sleep medicine. As Marketing Technology Manager, I inherited:",
      points: [
        "Outdated CRM system with fragmented member data",
        "8 disconnected web properties with inconsistent branding",
        "Manual processes for member communications",
        "No centralized analytics or reporting",
        "Limited e-commerce capabilities for educational products",
      ],
    },
    approach: [
      {
        title: "CRM Migration",
        icon: "database",
        points: [
          "Led enterprise migration to HubSpot with 100% data integrity",
          "Unified 13,000+ member records across multiple systems",
          "Implemented Service Hub with AI-powered chatbot",
          "Created automated member lifecycle workflows",
        ],
      },
      {
        title: "Web Properties Rebuild",
        icon: "globe",
        points: [
          "Rebuilt 8 web properties with consistent design system",
          "Implemented proper analytics tracking across all properties",
          "Improved site performance and accessibility scores",
          "Cross-functional collaboration with IT, membership, and education teams",
        ],
      },
      {
        title: "Marketing Automation",
        icon: "zap",
        points: [
          "Created automated nurture campaigns for event promotion",
          "Built dynamic content personalization for member segments",
          "Achieved 1,200% increase in webinar registrations YoY",
          "Automated renewal reminders and engagement sequences",
        ],
      },
      {
        title: "E-commerce Platform",
        icon: "shopping-cart",
        points: [
          "Built Shopify e-commerce platform for educational products",
          "Generated $500K+ in annual sales",
          "Integrated with HubSpot for unified customer view",
          "Implemented abandoned cart recovery workflows",
        ],
      },
    ],
    results: [
      { value: "1,200%", label: "Webinar Growth" },
      { value: "100%", label: "Data Integrity" },
      { value: "$500K+", label: "E-commerce Sales" },
      { value: "8", label: "Properties Rebuilt" },
      { value: "3", label: "Team Members Managed" },
      { value: "13,000+", label: "Members Served" },
    ],
    technologies: [
      "HubSpot",
      "Shopify",
      "WordPress",
      "Google Analytics 4",
      "Looker Studio",
      "Zapier",
    ],
    learnings: [
      {
        title: "Stakeholder Alignment",
        description:
          "Enterprise migrations require extensive stakeholder buy-in and clear communication of benefits.",
      },
      {
        title: "Data Quality First",
        description:
          "Investing time in data cleanup before migration prevents compounding issues later.",
      },
      {
        title: "Automation Compounds",
        description:
          "Well-designed automation workflows continue to deliver value long after implementation.",
      },
    ],
  },
  {
    slug: "ambience",
    title: "Ambience Healthcare",
    company: "Ambience Healthcare",
    subtitle: "GTM Strategy & Rapid HubSpot Implementation",
    category: "AI Healthcare | Series A Startup",
    description:
      "Generated $2.5M ARR within 30 days through strategic go-to-market planning and rapid HubSpot implementation.",
    stats: [
      { value: "$2.5M", label: "ARR in 30 Days" },
      { value: "30", label: "Day Implementation" },
      { value: "Enterprise", label: "Health System Deals" },
      { value: "AI", label: "Ambient Documentation" },
    ],
    challenge: {
      description:
        "Ambience Healthcare is an AI-powered ambient documentation platform for healthcare providers. As a consultant, I was brought in to:",
      points: [
        "Establish go-to-market strategy for enterprise health system sales",
        "Implement HubSpot CRM from scratch under tight timeline",
        "Create lead scoring and qualification framework",
        "Build reporting infrastructure for investor updates",
      ],
    },
    approach: [
      {
        title: "GTM Strategy",
        icon: "rocket",
        points: [
          "Defined ideal customer profile for enterprise health systems",
          "Created account-based targeting strategy for top 100 IDNs",
          "Developed messaging framework for AI healthcare buyers",
          "Established sales and marketing alignment processes",
        ],
      },
      {
        title: "HubSpot Implementation",
        icon: "settings",
        points: [
          "Rapid 30-day HubSpot implementation",
          "Configured deal pipeline and lead scoring",
          "Built custom properties for healthcare-specific data",
          "Integrated with existing tools and workflows",
        ],
      },
      {
        title: "Lead Qualification",
        icon: "filter",
        points: [
          "Designed lead scoring model for enterprise buyers",
          "Created qualification criteria for health system opportunities",
          "Built automated routing to sales team",
          "Established SLA framework for lead response",
        ],
      },
    ],
    results: [
      { value: "$2.5M", label: "ARR Generated" },
      { value: "30", label: "Days to Launch" },
      { value: "100%", label: "CRM Adoption" },
      { value: "Enterprise", label: "Deals Closed" },
    ],
    technologies: ["HubSpot", "ZoomInfo", "Gong", "Slack"],
    learnings: [
      {
        title: "Speed Matters",
        description:
          "In fast-moving startups, getting 80% right quickly beats 100% right slowly.",
      },
      {
        title: "AI Requires Trust",
        description:
          "Healthcare AI buyers need extensive validation and reference customers before committing.",
      },
    ],
  },
  {
    slug: "cliexa",
    title: "cliexa",
    company: "cliexa",
    subtitle: "SEO & Lead Generation Transformation",
    category: "Healthcare SaaS | Patient Engagement",
    description:
      "Increased organic traffic by 826% and lead capture by 435% through comprehensive marketing technology overhaul.",
    stats: [
      { value: "826%", label: "Organic Traffic" },
      { value: "435%", label: "Lead Capture" },
      { value: "ACC", label: "Innovation Finalist" },
      { value: "First", label: "Marketing Hire" },
    ],
    challenge: {
      description:
        "cliexa is a patient engagement platform for remote monitoring. As the first marketing hire, I found:",
      points: [
        "No existing marketing infrastructure",
        "Minimal website traffic and zero SEO presence",
        "No lead capture or nurturing capabilities",
        "Limited brand awareness in target markets",
        "Early-stage startup with constrained resources",
      ],
    },
    approach: [
      {
        title: "SEO Foundation",
        icon: "search",
        points: [
          "Complete technical SEO audit and optimization",
          "Keyword research for patient engagement market",
          "Content strategy targeting healthcare decision-makers",
          "Link building through industry publications",
        ],
      },
      {
        title: "Lead Generation",
        icon: "users",
        points: [
          "Implemented marketing automation platform",
          "Created gated content offers for lead capture",
          "Built automated nurture sequences",
          "Developed lead scoring framework",
        ],
      },
      {
        title: "Brand Building",
        icon: "award",
        points: [
          "Secured American College of Cardiology partnership",
          "ACC Innovation Challenge finalist recognition",
          "Denver Startup of the Year finalist 2019",
          "Industry speaking opportunities and thought leadership",
        ],
      },
    ],
    results: [
      { value: "826%", label: "Traffic Increase" },
      { value: "435%", label: "Lead Capture" },
      { value: "ACC", label: "Partnership Secured" },
      { value: "2019", label: "Startup of Year Finalist" },
    ],
    technologies: [
      "HubSpot",
      "WordPress",
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
    ],
    learnings: [
      {
        title: "SEO Compounds",
        description:
          "Early investment in SEO pays dividends as organic traffic compounds over time.",
      },
      {
        title: "Partnerships Accelerate",
        description:
          "Strategic partnerships with established organizations provide instant credibility.",
      },
      {
        title: "First Hire Flexibility",
        description:
          "Being the first marketing hire requires wearing many hats and prioritizing ruthlessly.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
