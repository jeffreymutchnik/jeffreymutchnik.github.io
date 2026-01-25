"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { PageHeader, CTASection } from "@/components/sections";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

// ============================================================================
// DATA
// ============================================================================

const EXPERT_THRESHOLD = 90;

const skillCategories = [
  {
    title: "Marketing Technology & CRM",
    icon: "🔧",
    skills: [
      { name: "HubSpot Marketing Hub", level: 95 },
      { name: "HubSpot Sales Hub", level: 95 },
      { name: "HubSpot Service Hub", level: 90 },
      { name: "HubSpot CMS Hub", level: 90 },
      { name: "HubSpot Operations Hub", level: 85 },
      { name: "Salesforce CRM", level: 85 },
      { name: "Salesforce Pardot", level: 80 },
      { name: "CRM Architecture & Design", level: 90 },
      { name: "Data Migration & Integration", level: 85 },
      { name: "Custom Object Development", level: 85 },
    ],
  },
  {
    title: "Marketing Automation & Operations",
    icon: "⚙️",
    skills: [
      { name: "Lead Lifecycle Management", level: 95 },
      { name: "Lead Scoring & Grading", level: 90 },
      { name: "Workflow Automation", level: 95 },
      { name: "Email Deliverability", level: 90 },
      { name: "List Segmentation", level: 95 },
      { name: "Campaign Attribution", level: 85 },
      { name: "Marketing-Sales Alignment", level: 90 },
      { name: "Revenue Operations", level: 85 },
      { name: "Process Documentation", level: 90 },
    ],
  },
  {
    title: "Demand Generation",
    icon: "📈",
    skills: [
      { name: "Account-Based Marketing (ABM)", level: 90 },
      { name: "Email Marketing & Nurture", level: 95 },
      { name: "SEO Strategy", level: 85 },
      { name: "SEM / Paid Search", level: 80 },
      { name: "Content Marketing", level: 85 },
      { name: "Webinar Programs", level: 90 },
      { name: "Event Marketing", level: 85 },
      { name: "Landing Page Optimization", level: 90 },
      { name: "Conversion Rate Optimization", level: 85 },
    ],
  },
  {
    title: "Analytics & Data",
    icon: "📊",
    skills: [
      { name: "Google Analytics 4", level: 85 },
      { name: "Looker Studio / Data Studio", level: 85 },
      { name: "HubSpot Reporting", level: 95 },
      { name: "SQL Queries", level: 70 },
      { name: "Marketing Attribution", level: 85 },
      { name: "Dashboard Development", level: 85 },
      { name: "A/B Testing", level: 85 },
      { name: "Cohort Analysis", level: 75 },
    ],
  },
  {
    title: "Technical & Development",
    icon: "💻",
    skills: [
      { name: "HTML / CSS / JavaScript", level: 80 },
      { name: "Python Scripting", level: 70 },
      { name: "API Integration", level: 75 },
      { name: "Webflow Development", level: 85 },
      { name: "WordPress / Shopify", level: 85 },
      { name: "Git / Version Control", level: 75 },
      { name: "Zapier / Make Automation", level: 90 },
      { name: "Custom Code Actions", level: 80 },
    ],
  },
  {
    title: "Industry & Domain Expertise",
    icon: "🏥",
    skills: [
      { name: "B2B Healthcare Technology", level: 95 },
      { name: "SaaS Marketing", level: 90 },
      { name: "Enterprise Sales Cycles", level: 85 },
      { name: "Health Systems & IDNs", level: 90 },
      { name: "Startup Marketing (0→1)", level: 90 },
      { name: "Series A-B Fundraising Support", level: 80 },
    ],
  },
];

const certifications = [
  {
    name: "HubSpot Marketing Software",
    issuer: "HubSpot",
    badge: "🏆",
    note: "3x Certified",
  },
  {
    name: "Google Digital Marketing",
    issuer: "Google",
    badge: "📱",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    badge: "🤖",
  },
  {
    name: "ZoomInfo MarketingOS",
    issuer: "ZoomInfo",
    badge: "🎯",
  },
  {
    name: "Google Ads Certified",
    issuer: "Google",
    badge: "📣",
  },
];

const toolsByCategory = {
  "CRM & Automation": [
    "HubSpot",
    "Salesforce",
    "Pardot",
    "ActiveCampaign",
  ],
  "ABM & Intent Data": [
    "ZoomInfo",
    "6Sense",
    "Demandbase",
    "Bombora",
  ],
  "Analytics": [
    "GA4",
    "Looker Studio",
    "Mixpanel",
    "Amplitude",
  ],
  "Web & CMS": [
    "Webflow",
    "WordPress",
    "Shopify",
    "Unbounce",
  ],
  "Design": [
    "Figma",
    "Canva",
    "Adobe Creative Suite",
  ],
  "Development": [
    "VS Code",
    "GitHub",
    "Postman",
    "Cursor",
  ],
  "Productivity": [
    "Notion",
    "Asana",
    "Slack",
    "Loom",
  ],
};

const experienceYears = [
  { area: "Marketing Technology", years: "8+", color: "bg-[var(--color-crimson-500)]" },
  { area: "HubSpot", years: "6+", color: "bg-[var(--color-teal-500)]" },
  { area: "B2B Healthcare", years: "8+", color: "bg-[var(--color-electric-500)]" },
  { area: "Team Leadership", years: "4+", color: "bg-[var(--color-crimson-400)]" },
];

// ============================================================================
// COMPONENTS
// ============================================================================

// Skill card with tiered badge system
function SkillCard({ category }: { category: typeof skillCategories[0] }) {
  const shouldReduceMotion = useReducedMotion();

  // Split skills into tiers
  const expertSkills = category.skills.filter(s => s.level >= EXPERT_THRESHOLD);
  const proficientSkills = category.skills.filter(s => s.level < EXPERT_THRESHOLD);

  return (
    <motion.div
      className="h-full"
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="p-6 h-full group hover:shadow-xl hover:border-[var(--color-crimson-500)]/30 transition-all duration-300">
        {/* Icon with subtle animation */}
        <motion.div
          className="text-3xl mb-3"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {category.icon}
        </motion.div>

        {/* Title with accent line */}
        <div className="relative mb-5">
          <h2 className="text-h5 font-semibold">{category.title}</h2>
          <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-crimson-500)] rounded-full group-hover:w-12 transition-all duration-300" />
        </div>

        {/* Expert tier */}
        {expertSkills.length > 0 && (
          <div className="mb-4">
            <p className="text-body-xs font-medium text-[var(--color-text-soft)] uppercase tracking-wide mb-2">
              Expert
            </p>
            <div className="flex flex-wrap gap-1.5">
              {expertSkills.map(skill => (
                <Badge key={skill.name} className="bg-[var(--color-crimson-500)] text-white text-xs">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Proficient tier */}
        {proficientSkills.length > 0 && (
          <div>
            <p className="text-body-xs font-medium text-[var(--color-text-soft)] uppercase tracking-wide mb-2">
              Proficient
            </p>
            <div className="flex flex-wrap gap-1.5">
              {proficientSkills.map(skill => (
                <Badge key={skill.name} variant="secondary" className="text-xs">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}

// Certification card component
function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
    >
      <Card className="p-4 text-center hover:shadow-lg hover:border-[var(--color-teal-500)]/30 transition-all duration-300">
        <div className="text-3xl mb-2">{cert.badge}</div>
        <h3 className="text-body-sm font-semibold mb-1">{cert.name}</h3>
        <p className="text-body-xs text-[var(--color-text-soft)]">{cert.issuer}</p>
        {cert.note && (
          <Badge variant="secondary" className="mt-2 text-xs">
            {cert.note}
          </Badge>
        )}
      </Card>
    </motion.div>
  );
}

// Experience timeline component
function ExperienceTimeline() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {experienceYears.map((item, index) => (
        <motion.div
          key={item.area}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="text-center"
        >
          <div className={`w-16 h-16 mx-auto rounded-full ${item.color} flex items-center justify-center mb-3`}>
            <span className="text-h4 font-bold text-white">{item.years}</span>
          </div>
          <p className="text-body-sm font-medium">{item.area}</p>
          <p className="text-body-xs text-[var(--color-text-soft)]">years</p>
        </motion.div>
      ))}
    </div>
  );
}

// Tools grid component grouped by category
function ToolsGrid() {
  return (
    <div className="space-y-6">
      {Object.entries(toolsByCategory).map(([category, tools], categoryIndex) => (
        <div key={category}>
          <h3 className="text-body-sm font-semibold text-[var(--color-text-soft)] mb-3 uppercase tracking-wide">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, toolIndex) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.05 + toolIndex * 0.03, duration: 0.3 }}
              >
                <Badge variant="secondary" className="text-sm py-1.5 px-3">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// PAGE
// ============================================================================

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <PageHeader
          overline="Expertise"
          title="Skills & Capabilities"
          description="8+ years of experience building marketing technology infrastructure for B2B healthcare companies."
        />

        {/* Experience Timeline Section */}
        <section className="py-12 bg-[var(--color-surface-raised)]">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-4xl mx-auto">
              <h2 className="text-h3 text-center mb-8">Years of Experience</h2>
              <ExperienceTimeline />
            </ScrollReveal>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-h2 mb-4">Core Competencies</h2>
              <p className="text-body-lg text-[var(--color-text-soft)] max-w-2xl mx-auto">
                Deep expertise across marketing technology, automation, demand generation, and analytics.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {skillCategories.map((category, index) => (
                <StaggerItem key={index}>
                  <SkillCard category={category} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-[var(--color-surface-raised)]">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-10">
              <h2 className="text-h3 mb-4">Certifications</h2>
              <p className="text-body-md text-[var(--color-text-soft)] max-w-xl mx-auto">
                Industry-recognized certifications validating expertise in marketing technology and digital platforms.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <CertificationCard key={cert.name} cert={cert} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-4xl mx-auto">
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-h3 mb-2 text-center">Tools & Platforms</h2>
                <p className="text-body-md text-[var(--color-text-soft)] text-center mb-8">
                  Hands-on experience with 30+ marketing and development tools
                </p>
                <ToolsGrid />
              </Card>
            </ScrollReveal>
          </div>
        </section>

        <CTASection variant="light" />
      </main>
      <Footer />
    </>
  );
}
