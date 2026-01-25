"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Database, Target, Globe, Users, Zap, ShoppingCart, Rocket, Settings, Filter, Search, Award, Quote, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { CountUpFromString } from "@/components/motion/CountUp";
import { CaseStudy } from "@/data/case-studies";
import { SCROLL_THRESHOLDS, INTERSECTION_MARGINS } from "@/lib/constants";

// Strict icon key type for approach sections
type IconKey = "database" | "target" | "globe" | "users" | "zap" | "shopping-cart" | "rocket" | "settings" | "filter" | "search" | "award";

// Icon mapping for approach sections
const iconMap: Record<IconKey, React.ReactNode> = {
  database: <Database className="h-6 w-6" />,
  target: <Target className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  "shopping-cart": <ShoppingCart className="h-6 w-6" />,
  rocket: <Rocket className="h-6 w-6" />,
  settings: <Settings className="h-6 w-6" />,
  filter: <Filter className="h-6 w-6" />,
  search: <Search className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
};

// Type guard to check if a string is a valid icon key
function isIconKey(key: string): key is IconKey {
  return key in iconMap;
}

// Progress indicator sections
const sections = [
  { id: "hero", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Approach" },
  { id: "results", label: "Results" },
  { id: "learnings", label: "Learnings" },
];

function FloatingNav({ activeSection, showNav }: { activeSection: string; showNav: boolean }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-40 hidden md:block pointer-events-none"
      style={{ pointerEvents: showNav ? 'auto' : 'none' }}
    >
      <div className="flex items-center gap-1 bg-white/80 dark:bg-[var(--color-surface-dark-elevated)]/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-lg border border-[var(--color-border)]">
        {sections.map((section, index) => (
          <React.Fragment key={section.id}>
            <a
              href={`#${section.id}`}
              className={`px-3 py-1 text-body-sm rounded-full transition-all ${
                activeSection === section.id
                  ? "bg-[var(--color-crimson-500)] text-white"
                  : "text-[var(--color-text-soft)] hover:text-[var(--color-text)]"
              }`}
              aria-label={`Jump to ${section.label}`}
            >
              {section.label}
            </a>
            {index < sections.length - 1 && (
              <span className="text-[var(--color-cool-300)] text-xs">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.nav>
  );
}

interface CaseStudyClientProps {
  caseStudy: CaseStudy;
  prevStudy: CaseStudy | null;
  nextStudy: CaseStudy | null;
}

export function CaseStudyClient({ caseStudy, prevStudy, nextStudy }: CaseStudyClientProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [showNav, setShowNav] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  // Track active section - consolidated single IntersectionObserver
  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: INTERSECTION_MARGINS.sectionTracking }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Track scroll position to show/hide floating nav
  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setShowNav(window.scrollY > SCROLL_THRESHOLDS.caseStudyNav);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Find the primary stat (first one, usually the biggest impact)
  const primaryStat = caseStudy.stats[0];
  const secondaryStats = caseStudy.stats.slice(1);

  // Find the primary result (first/biggest)
  const primaryResult = caseStudy.results[0];
  const secondaryResults = caseStudy.results.slice(1);

  // Determine role badge text based on case study
  const getRoleBadge = () => {
    if (caseStudy.slug === "patientiq" || caseStudy.slug === "cliexa") {
      return "First Marketing Hire";
    }
    if (caseStudy.slug === "aasm") {
      return "Marketing Technology Manager";
    }
    return "Consultant";
  };

  return (
    <>
      <Header />
      <FloatingNav activeSection={activeSection} showNav={showNav} />

      <main id="main-content" className="pt-20">
        {/* Hero Section - Enhanced with gradient and integrated stat */}
        <motion.section
          ref={heroRef}
          id="hero"
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative bg-[var(--color-cool-900)] text-white py-20 md:py-28 overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cool-900)] via-[var(--color-cool-900)] to-[var(--color-cool-800)]" />

          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-grid-hero opacity-50" />

          {/* Gradient accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-crimson-500)]/5 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Case Studies
              </Link>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-12 items-end">
              <div className="lg:col-span-2">
                {/* Company Logo */}
                {caseStudy.logo && (
                  <ScrollReveal delay={0.05}>
                    <div className="mb-6">
                      <Image
                        src={caseStudy.logo}
                        alt={`${caseStudy.company} logo`}
                        width={140}
                        height={40}
                        className={`h-10 w-auto ${
                          caseStudy.slug === "ambience" || caseStudy.slug === "cliexa"
                            ? "brightness-0 invert"
                            : ""
                        }`}
                      />
                    </div>
                  </ScrollReveal>
                )}

                <ScrollReveal delay={0.1}>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <Badge variant="accent" className="text-body-sm">
                      {caseStudy.category}
                    </Badge>
                    {/* Role badge */}
                    <Badge
                      variant="outline"
                      className="border-white/20 !text-white bg-white/5 text-body-sm"
                    >
                      <Briefcase className="h-3 w-3 mr-1.5" />
                      {getRoleBadge()}
                    </Badge>
                  </div>

                  <h1 className="text-display-lg md:text-display-xl font-display text-white mb-4">
                    {caseStudy.title}
                  </h1>
                  <p className="text-h4 text-white/90 font-normal mb-3">
                    {caseStudy.subtitle}
                  </p>
                  <p className="text-body-lg text-white/80 max-w-2xl">
                    {caseStudy.description}
                  </p>
                </ScrollReveal>
              </div>

              {/* Hero Featured Stat */}
              <ScrollReveal delay={0.2} className="lg:text-right">
                <div className="inline-block lg:ml-auto">
                  <span className="block text-overline text-[var(--color-crimson-400)] mb-2">
                    Key Impact
                  </span>
                  <span className="block text-display-lg md:text-display-xl font-bold text-white">
                    <CountUpFromString value={primaryStat.value} />
                  </span>
                  <span className="block text-body-md text-white/80">
                    {primaryStat.label}
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </motion.section>

        {/* Secondary Stats Bar - Horizontal scroll on mobile */}
        <section className="bg-[var(--color-bg-subtle)] dark:bg-[var(--color-surface-dark-secondary)] py-8 border-b border-[var(--color-border)]">
          <div className="container mx-auto px-6">
            <div className="flex md:justify-center gap-8 md:gap-16 overflow-x-auto scrollbar-hide pb-2 -mb-2">
              {secondaryStats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1} className="flex-shrink-0">
                  <div className="text-center min-w-[100px]">
                    <span className="text-h2 md:text-h1 block font-bold text-[var(--color-crimson-500)]">
                      <CountUpFromString value={stat.value} />
                    </span>
                    <span className="text-body-sm text-[var(--color-text-soft)] whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section - Timeline style */}
        <section id="challenge" className="section-py">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                  The Challenge
                </span>
                <h2 className="text-h2 mb-6">Understanding the Problem</h2>
                <p className="text-lead text-[var(--color-text-soft)] mb-10">
                  {caseStudy.challenge.description}
                </p>
              </ScrollReveal>

              {/* Timeline style points */}
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-crimson-500)] via-[var(--color-crimson-300)] to-transparent hidden md:block" />

                <StaggerContainer className="space-y-4">
                  {caseStudy.challenge.points.map((point, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-4 p-4 md:pl-12 bg-[var(--color-bg-subtle)] dark:bg-[var(--color-surface-dark-tertiary)] rounded-lg relative group hover:shadow-md transition-shadow"
                      >
                        {/* Timeline dot */}
                        <span className="hidden md:flex absolute left-2 top-6 w-5 h-5 rounded-full bg-white dark:bg-[var(--color-surface-dark-primary)] border-2 border-[var(--color-crimson-500)] items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[var(--color-crimson-500)] group-hover:scale-125 transition-transform" />
                        </span>

                        {/* Mobile number */}
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-crimson-500)]/10 text-[var(--color-crimson-500)] flex items-center justify-center text-body-sm font-semibold md:hidden">
                          {index + 1}
                        </span>

                        <p className="text-body-md text-[var(--color-text)] dark:text-[var(--color-cool-100)]">
                          {point}
                        </p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section - Visual Process Flow */}
        <section id="approach" className="section-py bg-[var(--color-bg-subtle)] dark:bg-[var(--color-surface-dark-secondary)]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal className="text-center mb-16">
                <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                  The Approach
                </span>
                <h2 className="text-h2 text-[var(--color-cool-400)]">How I Solved It</h2>
              </ScrollReveal>

              <div className="relative">
                {/* Connecting line for desktop */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-crimson-500)]/30 via-[var(--color-crimson-500)]/20 to-transparent hidden lg:block" />

                <div className="space-y-8 lg:space-y-16">
                  {caseStudy.approach.map((section, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className={`relative ${
                          index % 2 === 0 ? "lg:pr-[52%]" : "lg:pl-[52%]"
                        }`}
                      >
                        {/* Step number watermark */}
                        <span
                          className={`absolute top-0 text-[8rem] md:text-[12rem] font-bold text-[var(--color-crimson-500)]/5 dark:text-[var(--color-crimson-500)]/10 leading-none pointer-events-none select-none ${
                            index % 2 === 0 ? "right-4 lg:right-auto lg:left-4" : "right-4"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-crimson-500)] border-4 border-white dark:border-[var(--color-surface-dark-primary)] hidden lg:block z-10" />

                        <Card className="relative overflow-hidden hover:shadow-lg transition-shadow dark:bg-[var(--color-surface-dark-elevated)] dark:border-[var(--color-cool-600)]">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-4 mb-5">
                              {/* Icon with gradient background */}
                              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-crimson-500)]/20 to-[var(--color-crimson-500)]/5 text-[var(--color-crimson-500)] flex items-center justify-center flex-shrink-0">
                                {isIconKey(section.icon) ? iconMap[section.icon] : <Database className="h-6 w-6" />}
                              </div>
                              <div>
                                <span className="text-body-sm text-[var(--color-crimson-500)] font-semibold uppercase tracking-wider">
                                  Step {index + 1}
                                </span>
                                <h3 className="text-h4 text-[var(--color-text)] dark:text-white">
                                  {section.title}
                                </h3>
                              </div>
                            </div>

                            <ul className="space-y-3 pl-0">
                              {section.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="flex items-start gap-3 text-body-md text-[var(--color-text-soft)] dark:text-[var(--color-cool-200)]"
                                >
                                  <span className="text-[var(--color-crimson-500)] mt-2 flex-shrink-0">
                                    <svg
                                      width="6"
                                      height="6"
                                      viewBox="0 0 6 6"
                                      fill="currentColor"
                                    >
                                      <circle cx="3" cy="3" r="3" />
                                    </svg>
                                  </span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section - Impact Dashboard */}
        <section id="results" className="section-py relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-crimson-500)]/3 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal className="text-center mb-12">
                <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                  The Results
                </span>
                <h2 className="text-h2">Impact & Outcomes</h2>
              </ScrollReveal>

              {/* Featured Primary Result */}
              <ScrollReveal delay={0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[var(--color-cool-900)] to-[var(--color-cool-800)] rounded-2xl p-8 md:p-12 text-center mb-8 relative overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-crimson-500)]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-crimson-500)]/5 to-transparent" />

                  <div className="relative z-10">
                    <span className="text-overline text-[var(--color-crimson-400)] mb-4 block">
                      Primary Impact
                    </span>
                    <span className="text-display-xl md:text-display-2xl font-bold text-white block mb-3">
                      <CountUpFromString value={primaryResult.value} />
                    </span>
                    <span className="text-body-lg text-white/80">
                      {primaryResult.label}
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Secondary Results Grid */}
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {secondaryResults.map((result, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="text-center h-full hover:shadow-lg transition-all dark:bg-[var(--color-surface-dark-tertiary)] dark:border-[var(--color-cool-600)] hover:border-[var(--color-crimson-500)]/30">
                        <CardContent className="pt-6 pb-6">
                          <span className="text-h2 md:text-h1 block font-bold text-[var(--color-crimson-500)] mb-2">
                            <CountUpFromString value={result.value} />
                          </span>
                          <span className="text-body-sm text-[var(--color-text-soft)] dark:text-[var(--color-cool-300)]">
                            {result.label}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Technologies Section - Enhanced badges */}
        <section className="py-12 bg-[var(--color-bg-subtle)] dark:bg-[var(--color-surface-dark-secondary)] border-y border-[var(--color-border)]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal className="text-center">
                <h3 className="text-h2 mb-6 text-[var(--color-text-soft)] dark:text-[var(--color-cool-200)]">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {caseStudy.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-body-md py-2 px-4 hover:bg-[var(--color-crimson-500)]/10 hover:text-[var(--color-crimson-600)] dark:hover:text-[var(--color-crimson-400)] transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Key Learnings Section - Quote Cards */}
        <section id="learnings" className="section-py">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal className="text-center mb-12">
                <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                  Reflections
                </span>
                <h2 className="text-h2">Key Learnings</h2>
              </ScrollReveal>

              <StaggerContainer className="grid md:grid-cols-3 gap-6">
                {caseStudy.learnings.map((learning, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full relative overflow-hidden group hover:shadow-lg transition-all dark:bg-[var(--color-surface-dark-tertiary)] dark:border-[var(--color-cool-600)]">
                        {/* Top accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-crimson-500)] to-[var(--color-crimson-400)]" />

                        <CardContent className="pt-8 relative">
                          {/* Quote mark */}
                          <Quote className="absolute top-4 right-4 h-8 w-8 text-[var(--color-crimson-500)]/10 group-hover:text-[var(--color-crimson-500)]/20 transition-colors" />

                          <h4 className="text-h4 mb-3 text-[var(--color-text)] dark:text-white pr-8">
                            {learning.title}
                          </h4>
                          <p className="text-body-md text-[var(--color-text-soft)] dark:text-[var(--color-cool-300)]">
                            {learning.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-[var(--color-border)]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              {prevStudy ? (
                <Link href={`/case-studies/${prevStudy.slug}`} className="group">
                  <span className="text-body-sm text-[var(--color-text-soft)] block mb-1">
                    Previous
                  </span>
                  <span className="flex items-center gap-2 text-h4 group-hover:text-[var(--color-crimson-500)] transition-colors text-[var(--color-text)] dark:text-white">
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    {prevStudy.company}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextStudy ? (
                <Link href={`/case-studies/${nextStudy.slug}`} className="group text-right">
                  <span className="text-body-sm text-[var(--color-text-soft)] block mb-1">
                    Next
                  </span>
                  <span className="flex items-center gap-2 text-h4 group-hover:text-[var(--color-crimson-500)] transition-colors text-[var(--color-text)] dark:text-white">
                    {nextStudy.company}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-py bg-[var(--color-cool-900)] text-white relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-crimson-500)]/10 via-transparent to-transparent" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-h2 text-white mb-4">
                Want to discuss this project?
              </h2>
              <p className="text-body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                I&apos;d love to walk you through the details and discuss how similar strategies could work for your organization.
              </p>
              <Button asChild size="lg" variant="accent">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
