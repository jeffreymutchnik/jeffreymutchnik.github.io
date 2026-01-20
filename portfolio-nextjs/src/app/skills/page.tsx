"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

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

// Animated progress bar component
function AnimatedProgressBar({ level, delay = 0 }: { level: number; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="h-2 bg-[var(--color-border)] dark:bg-[var(--color-border-strong)] rounded-full overflow-hidden"
    >
      <motion.div
        className="h-full bg-[var(--color-crimson-500)] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${level}%` : 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  );
}

// Animated percentage counter
function AnimatedPercentage({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      ref={ref}
      className="text-body-xs text-[var(--color-text-soft)] tabular-nums"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : delay }}
    >
      {isInView || shouldReduceMotion ? value : 0}%
    </motion.span>
  );
}

// Skill card with hover effects
function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="p-8 h-full group hover:shadow-xl hover:border-[var(--color-crimson-500)]/30 transition-all duration-300">
        {/* Icon with subtle animation */}
        <motion.div
          className="text-4xl mb-4"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {category.icon}
        </motion.div>

        {/* Title with accent line */}
        <div className="relative mb-6">
          <h2 className="text-h4">{category.title}</h2>
          <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-crimson-500)] rounded-full group-hover:w-16 transition-all duration-300" />
        </div>

        {/* Skills with animated bars */}
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex}>
              <div className="flex justify-between mb-1">
                <span className="text-body-sm font-medium">{skill.name}</span>
                <AnimatedPercentage value={skill.level} delay={index * 0.1 + skillIndex * 0.05} />
              </div>
              <AnimatedProgressBar level={skill.level} delay={index * 0.1 + skillIndex * 0.05} />
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

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
                  <SkillCard category={category} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Tools Section */}
            <ScrollReveal className="mt-16 max-w-4xl mx-auto">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
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
                  ].map((tool, index) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                    >
                      <Badge variant="secondary" className="text-sm py-1.5 px-3">
                        {tool}
                      </Badge>
                    </motion.div>
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
