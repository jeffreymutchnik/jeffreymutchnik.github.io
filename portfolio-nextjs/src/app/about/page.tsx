"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const values = [
  {
    title: "Strategy Meets Systems",
    description: "Good ideas need infrastructure to become outcomes. I build the systems that make marketing actually work.",
  },
  {
    title: "Clarity Over Complexity",
    description: "The best solution is often the simplest one. I focus on removing friction, not adding tools.",
  },
  {
    title: "Craft in the Details",
    description: "I care about the boring-but-critical details that keep everything from breaking five minutes before launch.",
  },
  {
    title: "Translate & Bridge",
    description: "I sit between technical and non-technical stakeholders, turning vague goals into clear plans.",
  },
];

const interests = [
  { label: "Clean Interfaces", icon: "🎨" },
  { label: "Smart Automation", icon: "⚡" },
  { label: "Data Architecture", icon: "📊" },
  { label: "Accessibility", icon: "♿" },
  { label: "Design Systems", icon: "🧩" },
  { label: "Process Optimization", icon: "🔄" },
];

const quickFacts = [
  { icon: MapPin, label: "Based in Chicago, IL" },
  { icon: Briefcase, label: "8+ Years in Marketing Technology" },
  { icon: GraduationCap, label: "University of Denver, BA" },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <PageHeader
          overline="Get to Know Me"
          title="About"
          description="Marketing technology leader focused on building infrastructure that makes marketing actually work."
        />

        {/* Main Bio Section */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Photo & Quick Facts */}
                <ScrollReveal className="lg:col-span-1">
                  <div className="sticky top-28">
                    {/* Photo placeholder - can be replaced with actual image */}
                    <motion.div
                      className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--color-cool-900)] mb-6"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl">👨‍💻</span>
                      </div>
                      {/* Accent corner */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[var(--color-crimson-500)] rounded-tl-2xl" />
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[var(--color-crimson-500)] rounded-br-2xl" />
                    </motion.div>

                    {/* Quick Facts */}
                    <div className="space-y-3">
                      {quickFacts.map((fact, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 text-body-sm text-[var(--color-text-soft)]"
                          initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <fact.icon className="h-4 w-4 text-[var(--color-crimson-500)]" />
                          {fact.label}
                        </motion.div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 mt-6">
                      <a
                        href="https://www.linkedin.com/in/jeffreymutchnik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-[var(--color-bg-subtle)] hover:bg-[var(--color-crimson-500)] hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://github.com/jeffreymutchnik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-[var(--color-bg-subtle)] hover:bg-[var(--color-crimson-500)] hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <Link
                        href="/contact"
                        className="p-2.5 rounded-lg bg-[var(--color-bg-subtle)] hover:bg-[var(--color-crimson-500)] hover:text-white transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Bio Content */}
                <div className="lg:col-span-2 space-y-8">
                  <ScrollReveal>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-body-xl text-[var(--color-text)] leading-relaxed">
                        I&apos;m a marketing technology manager who sits at the intersection of strategy, systems, and execution—where good ideas either become measurable outcomes or die quietly in a spreadsheet.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal>
                    <div className="prose max-w-none">
                      <p className="text-body-lg text-[var(--color-text-soft)] leading-relaxed">
                        My work is focused on building the infrastructure that makes marketing actually work: clean data, reliable integrations, scalable processes, thoughtful automation, and reporting you can trust. I&apos;ve supported organizations across healthcare and mission-driven spaces, partnering with teams to simplify how work gets requested, produced, launched, and evaluated—without adding unnecessary complexity or &quot;one more tool&quot; to the stack.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal>
                    <div className="prose max-w-none">
                      <p className="text-body-lg text-[var(--color-text-soft)] leading-relaxed">
                        I&apos;m at my best when I&apos;m translating between technical and non-technical stakeholders: turning vague goals into clear plans, and turning messy reality into systems that are easier to run (and easier to improve). I care about craft, usability, accessibility, and the boring-but-critical details that keep everything from breaking five minutes before launch.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal>
                    <div className="prose max-w-none">
                      <p className="text-body-lg text-[var(--color-text-soft)] leading-relaxed">
                        Outside of work, I&apos;m a design and technology enthusiast with a deep appreciation for clean interfaces, smart automation, and anything that makes life a little more efficient.
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Interests */}
                  <ScrollReveal>
                    <div className="pt-4">
                      <h3 className="text-body-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                        Areas of Interest
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest, index) => (
                          <motion.div
                            key={index}
                            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="py-1.5 px-3 text-body-sm"
                            >
                              <span className="mr-1.5">{interest.icon}</span>
                              {interest.label}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-py bg-[var(--color-bg-subtle)]">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                How I Work
              </span>
              <h2 className="text-h2">My Approach</h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-[var(--color-crimson-500)]/30">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-crimson-500)]/10 flex items-center justify-center">
                            <span className="text-[var(--color-crimson-500)] font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-h5 mb-2">{value.title}</h3>
                            <p className="text-body-md text-[var(--color-text-soft)]">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-py bg-[var(--color-cool-900)] text-white">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-h2 text-white mb-4">Let&apos;s Connect</h2>
              <p className="text-body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                If you&apos;re looking for someone who can combine structure with creativity—and deliver work that&apos;s both practical and polished—I&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-[var(--color-crimson-500)] hover:bg-[var(--color-crimson-600)]">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link href="/resume">
                    View Resume
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
