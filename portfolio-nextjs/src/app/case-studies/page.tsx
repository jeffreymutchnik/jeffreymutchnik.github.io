import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Detailed case studies of Jeffrey Mutchnik's marketing technology work in B2B healthcare.",
};

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
                  <Link href={`/case-studies/${study.slug}`} className="block group">
                    <Card
                      className={`transition-all duration-300 hover:shadow-xl hover:border-[var(--color-border-strong)] dark:hover:border-[var(--color-border-strong)] hover:-translate-y-1 ${
                        study.featured ? "border-[var(--color-crimson-500)]/30" : ""
                      }`}
                    >
                      <CardHeader>
                        {study.featured && (
                          <Badge variant="accent" className="w-fit mb-2">
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
                            <span
                              key={statIndex}
                              className="text-body-sm font-semibold text-[var(--color-crimson-500)]"
                            >
                              {stat}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-[var(--color-crimson-500)] flex items-center gap-1 text-body-sm font-medium group-hover:gap-2 transition-all">
                          Read Case Study
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
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
