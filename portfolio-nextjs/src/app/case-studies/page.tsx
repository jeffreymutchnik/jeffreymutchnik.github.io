"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { caseStudies as caseStudiesData } from "@/data/case-studies";

// Transform case study data for display
const caseStudies = caseStudiesData.map((study, index) => ({
  slug: study.slug,
  title: `${study.title}: ${study.subtitle}`,
  description: study.description,
  stats: study.stats.slice(0, 3).map(s => `${s.value} ${s.label}`),
  tags: study.technologies.slice(0, 3),
  featured: index === 0,
}));

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
              <Badge variant="accent" className="mb-2 flex items-center gap-1 w-fit">
                <Sparkles className="h-3 w-3" />
                Featured
              </Badge>
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
