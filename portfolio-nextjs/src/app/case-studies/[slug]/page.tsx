import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Database, Target, Globe, Users, Zap, ShoppingCart, Rocket, Settings, Filter, Search, Award } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { CountUp } from "@/components/motion/CountUp";
import { getCaseStudy, getAllCaseStudySlugs, caseStudies } from "@/data/case-studies";

// Icon mapping for approach sections
const iconMap: Record<string, React.ReactNode> = {
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

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  // Get prev/next case studies for navigation
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--color-cool-900)] via-[var(--color-cool-800)] to-[var(--color-cool-900)] text-white py-20 md:py-28">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Case Studies
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Badge variant="accent" className="mb-4">
                {caseStudy.category}
              </Badge>
              <h1 className="text-display-sm md:text-display-md text-white mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-h4 text-white/80 font-normal mb-2">
                {caseStudy.subtitle}
              </p>
              <p className="text-body-lg text-white/70 max-w-3xl">
                {caseStudy.description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[var(--color-bg-subtle)] py-12 border-b border-[var(--color-border)]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {caseStudy.stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div>
                    <span className="text-metric block text-[var(--color-crimson-500)]">
                      {stat.value}
                    </span>
                    <span className="text-body-sm text-[var(--color-text-soft)]">
                      {stat.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                  The Challenge
                </span>
                <h2 className="text-h2 mb-6">Understanding the Problem</h2>
                <p className="text-lead text-[var(--color-text-soft)] mb-8">
                  {caseStudy.challenge.description}
                </p>
              </ScrollReveal>

              <StaggerContainer className="space-y-4">
                {caseStudy.challenge.points.map((point, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-4 p-4 bg-[var(--color-bg-subtle)] rounded-lg">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-crimson-500)]/10 text-[var(--color-crimson-500)] flex items-center justify-center text-body-sm font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-body-md text-[var(--color-text-soft)]">{point}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="section-py bg-[var(--color-bg-subtle)]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal className="text-center mb-12">
                <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                  The Approach
                </span>
                <h2 className="text-h2">How I Solved It</h2>
              </ScrollReveal>

              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                {caseStudy.approach.map((section, index) => (
                  <StaggerItem key={index}>
                    <Card className="h-full">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-[var(--color-crimson-500)]/10 text-[var(--color-crimson-500)] flex items-center justify-center">
                            {iconMap[section.icon] || <Database className="h-6 w-6" />}
                          </div>
                          <h3 className="text-h4">{section.title}</h3>
                        </div>
                        <ul className="space-y-3">
                          {section.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex items-start gap-2 text-body-md text-[var(--color-text-soft)]"
                            >
                              <span className="text-[var(--color-crimson-500)] mt-1.5">
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
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal className="text-center mb-12">
                <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                  The Results
                </span>
                <h2 className="text-h2">Impact & Outcomes</h2>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {caseStudy.results.map((result, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center h-full">
                      <CardContent className="pt-6">
                        <span className="text-metric block text-[var(--color-crimson-500)] mb-2">
                          {result.value}
                        </span>
                        <span className="text-body-sm text-[var(--color-text-soft)]">
                          {result.label}
                        </span>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 bg-[var(--color-bg-subtle)] border-y border-[var(--color-border)]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal className="text-center">
                <h3 className="text-h5 mb-6 text-[var(--color-text-soft)]">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {caseStudy.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-body-md py-2 px-4">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="section-py">
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
                    <Card className="h-full border-t-4 border-t-[var(--color-crimson-500)]">
                      <CardContent className="pt-6">
                        <h4 className="text-h5 mb-3">{learning.title}</h4>
                        <p className="text-body-md text-[var(--color-text-soft)]">
                          {learning.description}
                        </p>
                      </CardContent>
                    </Card>
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
                  <span className="flex items-center gap-2 text-h5 group-hover:text-[var(--color-crimson-500)] transition-colors">
                    <ArrowLeft className="h-4 w-4" />
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
                  <span className="flex items-center gap-2 text-h5 group-hover:text-[var(--color-crimson-500)] transition-colors">
                    {nextStudy.company}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-py bg-[var(--color-cool-900)] text-white">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-h2 text-white mb-4">
                Want to discuss this project?
              </h2>
              <p className="text-body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                I'd love to walk you through the details and discuss how similar strategies could work for your organization.
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
