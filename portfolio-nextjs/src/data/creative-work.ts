export type Company = "PatientIQ" | "Ambience" | "cliexa" | "AASM";

export type WorkCategory =
  | "Case Studies"
  | "Whitepapers & eBooks"
  | "Sales Collateral"
  | "Digital Advertising"
  | "Email Campaigns"
  | "Social Media"
  | "Event Materials"
  | "Brand & Design"
  | "Presentations";

export interface WorkItem {
  id: string;
  title: string;
  company: Company;
  category: WorkCategory;
  type: "pdf" | "image";
  file: string;
  description?: string;
  featured?: boolean;
  date?: string; // e.g., "Dec 2023"
}

export const workItems: WorkItem[] = [
  // ===== PATIENTIQ CASE STUDIES =====
  {
    id: "piq-cs-nebh",
    title: "New England Baptist Hospital Case Study",
    company: "PatientIQ",
    category: "Case Studies",
    type: "pdf",
    file: "/work/patientiq/case-studies/Case Study - New England Baptist Hospital.pdf",
    description: "How NEBH improved patient outcomes tracking with PatientIQ",
    featured: true,
    date: "Mar 2021",
  },
  {
    id: "piq-cs-uc-health",
    title: "University of Colorado Health Case Study",
    company: "PatientIQ",
    category: "Case Studies",
    type: "pdf",
    file: "/work/patientiq/case-studies/Case Study - University of Colorado Health.pdf",
    description: "UC Health's implementation of patient-reported outcomes",
  },
  {
    id: "piq-cs-midwest",
    title: "Midwest Orthopaedics at Rush Case Study",
    company: "PatientIQ",
    category: "Case Studies",
    type: "pdf",
    file: "/work/patientiq/case-studies/Case Study - Midwest Orthopaedics at Rush.pdf",
    description: "Rush's journey to comprehensive outcomes tracking",
  },
  {
    id: "piq-cs-dmos",
    title: "DMOS Orthopaedic Centers Case Study",
    company: "PatientIQ",
    category: "Case Studies",
    type: "pdf",
    file: "/work/patientiq/case-studies/Case Study - DMOS Orthopaedic Centers.pdf",
    description: "DMOS outcomes and reputation management success",
  },
  {
    id: "piq-cs-onkos",
    title: "Onkos Surgical Case Study",
    company: "PatientIQ",
    category: "Case Studies",
    type: "pdf",
    file: "/work/patientiq/case-studies/Case Study - Onkos Surgical.pdf",
    description: "Medical device company leveraging real-world evidence",
  },

  // ===== PATIENTIQ WHITEPAPERS =====
  {
    id: "piq-wp-build-buy",
    title: "Build vs Buy: Launching a PRO Program",
    company: "PatientIQ",
    category: "Whitepapers & eBooks",
    type: "pdf",
    file: "/work/patientiq/whitepapers/eBook - Build vs Buy - Launching an Integrated Patient-Reported Outcomes Program.pdf",
    description: "Comprehensive guide to building vs buying PRO infrastructure",
    featured: true,
    date: "Sep 2020",
  },
  {
    id: "piq-wp-evaluating",
    title: "Evaluating PRO Platforms",
    company: "PatientIQ",
    category: "Whitepapers & eBooks",
    type: "pdf",
    file: "/work/patientiq/whitepapers/eBook - Evaluating Patient-Reported Outcome Platforms.pdf",
    description: "How to evaluate and select PRO technology partners",
  },
  {
    id: "piq-wp-compliance",
    title: "Top 10 Tactics for Patient Compliance",
    company: "PatientIQ",
    category: "Whitepapers & eBooks",
    type: "pdf",
    file: "/work/patientiq/whitepapers/eBook - Top 10 Tactics to Improve Patient Compliance.pdf",
    description: "Strategies to improve patient engagement and compliance",
  },
  {
    id: "piq-wp-blindspot",
    title: "Value-Based Care Blindspot",
    company: "PatientIQ",
    category: "Whitepapers & eBooks",
    type: "pdf",
    file: "/work/patientiq/whitepapers/eBook - Uncovering the Blindspot in Value-Based Care Strategies.pdf",
    description: "Identifying gaps in value-based care approaches",
  },

  // ===== PATIENTIQ SELL SHEETS =====
  {
    id: "piq-ss-overview",
    title: "PatientIQ Platform Overview",
    company: "PatientIQ",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/patientiq/sell-sheets/PatientIQ Overview.pdf",
    description: "Comprehensive platform overview and capabilities",
  },
  {
    id: "piq-ss-reputation",
    title: "Online Reputation & Satisfaction",
    company: "PatientIQ",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/patientiq/sell-sheets/Online Reputation & Satisfaction.pdf",
    description: "Patient satisfaction and online reputation management",
  },
  {
    id: "piq-ss-engagement",
    title: "Patient Engagement Solutions",
    company: "PatientIQ",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/patientiq/sell-sheets/Patient Engagement.pdf",
    description: "Driving patient engagement through technology",
  },
  {
    id: "piq-ss-epic",
    title: "PatientIQ Epic App",
    company: "PatientIQ",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/patientiq/sell-sheets/PatientIQ Epic App - 1-Page Handout.pdf",
    description: "Epic integration and app capabilities",
  },
  {
    id: "piq-ss-rwe",
    title: "Real-World Evidence Solutions",
    company: "PatientIQ",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/patientiq/sell-sheets/PatientIQ RWE Solutions.pdf",
    description: "Generating real-world evidence from patient data",
  },

  // ===== PATIENTIQ TEARSHEETS (samples) =====
  {
    id: "piq-ts-addiction",
    title: "Addiction Pathway Tearsheet",
    company: "PatientIQ",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/patientiq/tearsheets/Addiction Pathway Tearsheet.pdf",
    description: "Clinical pathway guide for addiction treatment",
  },
  {
    id: "piq-ts-bone",
    title: "Bone Health Pathway Tearsheet",
    company: "PatientIQ",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/patientiq/tearsheets/Bone Health Pathway Tearsheet.pdf",
    description: "Clinical pathway guide for bone health",
  },
  {
    id: "piq-ts-breast",
    title: "Breast Cancer Pathway Tearsheet",
    company: "PatientIQ",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/patientiq/tearsheets/Breast Cancer Pathway Tearsheet.pdf",
    description: "Clinical pathway guide for breast cancer care",
  },

  // ===== PATIENTIQ GRAPHICS (from existing images folder) =====
  {
    id: "piq-ad-linkedin",
    title: "LinkedIn Sponsored Ads",
    company: "PatientIQ",
    category: "Digital Advertising",
    type: "image",
    file: "/images/work/patientiq/linkedin-ads.png",
    description: "LinkedIn advertising campaign creative",
  },
  {
    id: "piq-ad-nebh",
    title: "NEBH Case Study Ad",
    company: "PatientIQ",
    category: "Digital Advertising",
    type: "image",
    file: "/images/work/patientiq/nebh-ad.png",
    description: "New England Baptist Hospital promotional ad",
  },
  {
    id: "piq-ad-uc-health",
    title: "UC Health Case Study Ad",
    company: "PatientIQ",
    category: "Digital Advertising",
    type: "image",
    file: "/images/work/patientiq/uc-health-ad.png",
    description: "University of Colorado Health promotional ad",
  },
  {
    id: "piq-social-spotlight1",
    title: "Employee Spotlight Series",
    company: "PatientIQ",
    category: "Social Media",
    type: "image",
    file: "/images/work/patientiq/employee-spotlight-1.png",
    description: "Employee spotlight social media content",
  },
  {
    id: "piq-social-customer",
    title: "Customer Highlight Template",
    company: "PatientIQ",
    category: "Social Media",
    type: "image",
    file: "/images/work/patientiq/customer-highlight-template.png",
    description: "Customer success story social template",
  },
  {
    id: "piq-email-aaos",
    title: "AAOS Conference Email",
    company: "PatientIQ",
    category: "Email Campaigns",
    type: "image",
    file: "/images/work/patientiq/aaos-email-graphic.png",
    description: "AAOS conference promotional email graphic",
  },
  {
    id: "piq-event-flyer",
    title: "AAOS Restaurant Event Flyer",
    company: "PatientIQ",
    category: "Event Materials",
    type: "image",
    file: "/images/work/patientiq/aaos-restaurant-flyer.png",
    description: "Conference dinner event promotional flyer",
  },

  // ===== AMBIENCE HEALTHCARE =====
  {
    id: "amb-brand-guidelines",
    title: "Ambience Brand Guidelines",
    company: "Ambience",
    category: "Brand & Design",
    type: "pdf",
    file: "/work/ambience/Ambience Brand Guidelines.pdf",
    description: "Comprehensive brand identity and usage guidelines",
    featured: true,
    date: "Feb 2023",
  },
  {
    id: "amb-keynote",
    title: "Marketing Keynote Presentation",
    company: "Ambience",
    category: "Presentations",
    type: "pdf",
    file: "/work/ambience/presentations/Ambience_ Keynote Presentation - Jeffrey Mutchnik.pdf",
    description: "Strategic marketing presentation for leadership",
    featured: true,
    date: "Mar 2023",
  },
  {
    id: "amb-ad-linkedin1",
    title: "LinkedIn Ad - AI Documentation",
    company: "Ambience",
    category: "Digital Advertising",
    type: "image",
    file: "/work/ambience/graphics/linkedin-ad-1.png",
    description: "LinkedIn campaign promoting AI documentation",
  },
  {
    id: "amb-ad-linkedin2",
    title: "LinkedIn Ad - Clinical Efficiency",
    company: "Ambience",
    category: "Digital Advertising",
    type: "image",
    file: "/work/ambience/graphics/linkedin-ad-2.png",
    description: "LinkedIn campaign for clinical workflow",
  },
  {
    id: "amb-ad-linkedin3",
    title: "LinkedIn Ad - Provider Experience",
    company: "Ambience",
    category: "Digital Advertising",
    type: "image",
    file: "/work/ambience/graphics/linkedin-ad-3.png",
    description: "LinkedIn campaign for provider satisfaction",
  },
  {
    id: "amb-campaign1",
    title: "LinkedIn Campaign Creative 1",
    company: "Ambience",
    category: "Digital Advertising",
    type: "image",
    file: "/work/ambience/graphics/ambience-campaign-1.jpg",
    description: "LinkedIn advertising campaign variation",
  },
  {
    id: "amb-campaign2",
    title: "LinkedIn Campaign Creative 2",
    company: "Ambience",
    category: "Digital Advertising",
    type: "image",
    file: "/work/ambience/graphics/ambience-campaign-2.jpg",
    description: "LinkedIn advertising campaign variation",
  },
  {
    id: "amb-flowchart",
    title: "Lead Qualification Flowchart",
    company: "Ambience",
    category: "Sales Collateral",
    type: "image",
    file: "/images/work/ambience/lead-qualification-flowchart.jpg",
    description: "Sales process and lead qualification visual",
  },

  // ===== CLIEXA =====
  {
    id: "cli-overview",
    title: "cliexa Platform Overview",
    company: "cliexa",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/cliexa/collateral/cliexa Overview.pdf",
    description: "Comprehensive platform capabilities overview",
  },
  {
    id: "cli-whitepaper",
    title: "cliexaEASE Whitepaper",
    company: "cliexa",
    category: "Whitepapers & eBooks",
    type: "pdf",
    file: "/work/cliexa/collateral/cliexaEASE-whitepaper.pdf",
    description: "Technical whitepaper on ease of use",
  },
  {
    id: "cli-remote-care",
    title: "Enable Remote Care Guide",
    company: "cliexa",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/cliexa/collateral/Enable Remote Care _ Virtual Health.pdf",
    description: "Guide to enabling remote patient care",
  },
  {
    id: "cli-virtual-health",
    title: "Full Stack Virtual Health",
    company: "cliexa",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/cliexa/collateral/Full Stack Virtual Health.pdf",
    description: "Complete virtual health solution overview",
  },
  {
    id: "cli-navigater",
    title: "navigatER Product Handout",
    company: "cliexa",
    category: "Sales Collateral",
    type: "pdf",
    file: "/work/cliexa/collateral/navigatER Product Handout.pdf",
    description: "Emergency department navigation product",
  },
  {
    id: "cli-uc-pilot",
    title: "UC Health OPTIONS Pilot Study",
    company: "cliexa",
    category: "Case Studies",
    type: "pdf",
    file: "/work/cliexa/collateral/cliexa-OPTIONS Pilot Study with UC Health.pdf",
    description: "Pilot study results with UC Health",
  },
  {
    id: "cli-event-healthcon",
    title: "HealthCon 2019 Booth",
    company: "cliexa",
    category: "Event Materials",
    type: "image",
    file: "/work/cliexa/graphics/healthcon2019.png",
    description: "Trade show booth design for HealthCon",
  },
  {
    id: "cli-social-covid",
    title: "COVID Screening Campaign",
    company: "cliexa",
    category: "Social Media",
    type: "image",
    file: "/work/cliexa/graphics/cliexa-covid-example-post-01.png",
    description: "COVID-19 screening social campaign",
  },
  {
    id: "cli-social-fb1",
    title: "Facebook Campaign Creative",
    company: "cliexa",
    category: "Digital Advertising",
    type: "image",
    file: "/work/cliexa/graphics/cliexa-facebook-campaign.jpg",
    description: "Facebook advertising campaign",
  },
  {
    id: "cli-email-athena",
    title: "athenahealth Email Banner",
    company: "cliexa",
    category: "Email Campaigns",
    type: "image",
    file: "/work/cliexa/graphics/athenahealth_v2_email_banner.png",
    description: "athenahealth marketplace promotion email",
  },
  {
    id: "cli-email-azure",
    title: "Azure Marketplace Email",
    company: "cliexa",
    category: "Email Campaigns",
    type: "image",
    file: "/work/cliexa/graphics/cliexa-azure-email-banner.png",
    description: "Microsoft Azure marketplace launch email",
  },
  {
    id: "cli-social-rpm",
    title: "RPM Changing the Game",
    company: "cliexa",
    category: "Social Media",
    type: "image",
    file: "/work/cliexa/graphics/cliexa-rpm-changing-game.png",
    description: "Remote patient monitoring thought leadership",
  },
  {
    id: "cli-social-navigater",
    title: "navigatER Social Banner",
    company: "cliexa",
    category: "Social Media",
    type: "image",
    file: "/work/cliexa/graphics/navigatER_social_media_banner_image_2019-03.png",
    description: "navigatER product social media banner",
  },
  {
    id: "cli-afib",
    title: "AFib Focus Group Event",
    company: "cliexa",
    category: "Event Materials",
    type: "image",
    file: "/work/cliexa/graphics/afib-focus-group.jpg",
    description: "Atrial fibrillation patient focus group",
  },
  {
    id: "cli-global-health",
    title: "Global Health Goes Digital",
    company: "cliexa",
    category: "Social Media",
    type: "image",
    file: "/work/cliexa/graphics/global_health_goes_digital-02.png",
    description: "Global health digitization thought leadership",
  },
];

// Helper functions
export function getWorkByCategory(category: WorkCategory): WorkItem[] {
  return workItems.filter((item) => item.category === category);
}

export function getWorkByCompany(company: Company): WorkItem[] {
  return workItems.filter((item) => item.company === company);
}

export function getFeaturedWork(): WorkItem[] {
  return workItems.filter((item) => item.featured);
}

export function getCategories(): WorkCategory[] {
  return [
    "Case Studies",
    "Whitepapers & eBooks",
    "Sales Collateral",
    "Digital Advertising",
    "Email Campaigns",
    "Social Media",
    "Event Materials",
    "Brand & Design",
    "Presentations",
  ];
}

export function getCompanies(): Company[] {
  return ["PatientIQ", "Ambience", "cliexa"];
}
