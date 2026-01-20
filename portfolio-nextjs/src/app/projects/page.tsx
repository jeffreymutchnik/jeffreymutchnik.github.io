import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, CTASection } from "@/components/sections";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Jeffrey Mutchnik's marketing technology projects - HubSpot implementations, ABM campaigns, and demand generation.",
};

const projects = [
  {
    title: "HubSpot Enterprise Implementation",
    company: "PatientIQ",
    description:
      "Led complete HubSpot implementation from scratch, building marketing automation, lead scoring, and sales enablement that contributed to $20M Series B.",
    tags: ["HubSpot", "Marketing Automation", "Lead Scoring"],
    href: "/case-studies/patientiq",
  },
  {
    title: "ABM Campaign Strategy",
    company: "Ambience Healthcare",
    description:
      "Developed and executed account-based marketing campaigns targeting enterprise health systems, generating qualified opportunities with major IDNs.",
    tags: ["ABM", "Healthcare", "Enterprise Sales"],
    href: "/case-studies/ambience",
  },
  {
    title: "CRM Migration & Optimization",
    company: "AASM",
    description:
      "Led enterprise CRM migration to HubSpot with 100% data integrity, serving 13,000+ members across 8 web properties.",
    tags: ["CRM Migration", "HubSpot", "Data Integration"],
    href: "/case-studies/aasm",
  },
  {
    title: "Demand Generation Overhaul",
    company: "cliexa",
    description:
      "Transformed marketing operations with new CRM architecture, automated workflows, and integrated analytics that increased lead velocity by 300%.",
    tags: ["Demand Gen", "Salesforce", "Analytics"],
    href: "/case-studies/cliexa",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <PageHeader
          overline="Portfolio"
          title="Projects"
          description="Featured marketing technology projects from 8+ years in B2B healthcare."
        />

        <section className="section-py">
          <div className="container mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <Link href={project.href} className="block h-full group">
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-[var(--color-border-strong)] dark:hover:border-[var(--color-border-strong)] hover:-translate-y-1">
                      <CardHeader>
                        <span className="text-body-sm text-[var(--color-crimson-500)] font-medium mb-1">
                          {project.company}
                        </span>
                        <CardTitle className="text-h4 group-hover:text-[var(--color-crimson-500)] transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-body-md leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="accent">
                            {tag}
                          </Badge>
                        ))}
                      </CardFooter>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <CTASection variant="light" />
      </main>
      <Footer />
    </>
  );
}
