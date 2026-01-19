"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  href: string;
}

interface FeaturedWorkProps {
  title?: string;
  overline?: string;
  projects?: Project[];
}

const defaultProjects: Project[] = [
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
    title: "Demand Generation Overhaul",
    company: "cliexa",
    description:
      "Transformed marketing operations with new CRM architecture, automated workflows, and integrated analytics that increased lead velocity by 300%.",
    tags: ["Demand Gen", "Salesforce", "Analytics"],
    href: "/case-studies/cliexa",
  },
];

export function FeaturedWork({
  title = "Featured Work",
  overline = "Case Studies",
  projects = defaultProjects,
}: FeaturedWorkProps) {
  return (
    <section className="section-py">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-overline block mb-3">{overline}</span>
          <h2 className="text-h2">{title}</h2>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Link href={project.href} className="block h-full group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-[var(--color-border-strong)] dark:hover:border-[var(--color-border-strong)] hover:-translate-y-1">
                  <CardHeader>
                    <span className="text-body-sm text-[var(--color-plum-500)] font-medium mb-1">
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

        {/* View All Link */}
        <ScrollReveal className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default FeaturedWork;
