import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Jeffrey Mutchnik's marketing technology skills - HubSpot, Salesforce, marketing automation, and more.",
};

const skillCategories = [
  {
    title: "Marketing Technology",
    icon: "🔧",
    skills: [
      { name: "HubSpot (All Hubs)", level: 95 },
      { name: "Salesforce", level: 85 },
      { name: "Marketing Automation", level: 95 },
      { name: "CRM Architecture", level: 90 },
      { name: "Lead Lifecycle Design", level: 90 },
      { name: "API Integration", level: 75 },
    ],
  },
  {
    title: "Demand Generation",
    icon: "📈",
    skills: [
      { name: "ABM Campaigns", level: 90 },
      { name: "Email Marketing", level: 95 },
      { name: "SEO/SEM", level: 85 },
      { name: "Content Marketing", level: 85 },
      { name: "Lead Scoring", level: 90 },
      { name: "Analytics & Reporting", level: 85 },
    ],
  },
  {
    title: "Technical Skills",
    icon: "💻",
    skills: [
      { name: "HTML/CSS/JavaScript", level: 80 },
      { name: "SQL & Python", level: 70 },
      { name: "Google Analytics 4", level: 85 },
      { name: "Webflow / WordPress", level: 85 },
      { name: "Figma / Design Tools", level: 80 },
      { name: "Data Visualization", level: 75 },
    ],
  },
];

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

        <section className="section-py">
          <div className="container mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skillCategories.map((category, index) => (
                <StaggerItem key={index}>
                  <Card className="p-8 h-full">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h2 className="text-h4 mb-6">{category.title}</h2>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="text-body-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-body-xs text-[var(--color-text-soft)]">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-[var(--color-border)] dark:bg-[var(--color-border-strong)] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[var(--color-crimson-500)] rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Tools Section */}
            <ScrollReveal className="mt-16 max-w-4xl mx-auto">
              <Card className="p-8 text-center">
                <h2 className="text-h3 mb-6">Tools & Platforms</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "HubSpot",
                    "Salesforce",
                    "ZoomInfo",
                    "6Sense",
                    "Google Analytics 4",
                    "Webflow",
                    "WordPress",
                    "Shopify",
                    "Figma",
                    "Looker Studio",
                    "Zapier",
                    "Make",
                    "Python",
                    "SQL",
                    "GitHub",
                  ].map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-sm py-1.5 px-3">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
