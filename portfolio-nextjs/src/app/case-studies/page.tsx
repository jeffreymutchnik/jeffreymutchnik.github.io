"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

const caseStudies = [
  {
    slug: "patientiq",
    title: "PatientIQ: Building Marketing from Zero to $20M Series B",
    description:
      "How I built the entire marketing technology infrastructure as the first marketing hire, contributing to 10x ARR growth and a successful Series B.",
    stats: ["$20M Series B", "10x ARR Growth", "44% Pipeline"],
    tags: ["HubSpot", "ABM", "First Hire"],
    featured: true,
  },
  {
    slug: "aasm",
    title: "AASM: Enterprise CRM Migration & Digital Transformation",
    description:
      "Led enterprise-wide HubSpot migration for a 13,000+ member organization, increasing webinar registrations by 1,200% YoY.",
    stats: ["1,200% Webinar Growth", "13,000+ Members", "8 Properties"],
    tags: ["CRM Migration", "HubSpot", "Non-Profit"],
  },
  {
    slug: "ambience",
    title: "Ambience Healthcare: GTM Strategy & HubSpot Implementation",
    description:
      "Generated $2.5M ARR within 30 days through strategic go-to-market planning and rapid HubSpot implementation.",
    stats: ["$2.5M ARR", "30 Day Launch", "Enterprise Sales"],
    tags: ["GTM Strategy", "AI Healthcare", "Consulting"],
  },
  {
    slug: "cliexa",
    title: "cliexa: SEO & Lead Generation Transformation",
    description:
      "Increased organic traffic by 826% and lead capture by 4,350% through comprehensive marketing technology overhaul.",
    stats: ["826% Traffic", "4,350% Leads", "ACC Finalist"],
    tags: ["SEO", "Lead Gen", "Healthcare"],
  },
];

// Case study card component with enhanced interactions
function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link href={`/case-studies/${study.slug}`} className="block group">
      <motion.div
        whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Card
          className={`transition-all duration-300 hover:shadow-xl overflow-hidden ${
            study.featured
              ? "border-[var(--color-crimson-500)]/30 hover:border-[var(--color-crimson-500)]/60"
              : "hover:border-[var(--color-cool-400)]"
          }`}
        >
          <CardHeader>
            {study.featured && (
              <motion.div
                className="relative w-fit mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Subtle glow behind featured badge */}
                {!shouldReduceMotion && (
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-crimson-500)] rounded-full blur-md"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <Badge variant="accent" className="relative flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </Badge>
              </motion.div>
            )}
            <CardTitle className="text-h3 group-hover:text-[var(--color-crimson-500)] transition-colors">
              {study.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-body-lg leading-relaxed mb-4">
              {study.description}
            </CardDescription>
            <div className="flex flex-wrap gap-4 mb-4">
              {study.stats.map((stat, statIndex) => (
                <motion.span
                  key={statIndex}
                  className="text-body-sm font-semibold text-[var(--color-crimson-500)] bg-[var(--color-crimson-500)]/5 px-3 py-1 rounded-full"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: statIndex * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, backgroundColor: "rgba(174, 25, 59, 0.1)" }}
                >
                  {stat}
                </motion.span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag, tagIndex) => (
                <motion.div
                  key={tagIndex}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: tagIndex * 0.05 }}
                >
                  <Badge variant="secondary">{tag}</Badge>
                </motion.div>
              ))}
            </div>
            <motion.span
              className="text-[var(--color-crimson-500)] flex items-center gap-1 text-body-sm font-medium"
              whileHover={shouldReduceMotion ? {} : { x: 4 }}
            >
              Read Case Study
              <motion.span
                className="inline-block"
                whileHover={shouldReduceMotion ? {} : { x: 4, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.span>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <PageHeader
          overline="In-Depth Analysis"
          title="Case Studies"
          description="Detailed breakdowns of marketing technology projects and their results."
        />

        <section className="section-py">
          <div className="container mx-auto px-6">
            <StaggerContainer className="space-y-8 max-w-4xl mx-auto">
              {caseStudies.map((study, index) => (
                <StaggerItem key={index}>
                  <CaseStudyCard study={study} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
