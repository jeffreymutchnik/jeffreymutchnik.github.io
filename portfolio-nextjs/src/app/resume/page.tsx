import { Metadata } from "next";
import Link from "next/link";
import { Download, Award } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Timeline } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { resumeData } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Jeffrey Mutchnik Resume - Marketing Technology Manager with 8+ years in B2B healthcare technology.",
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <PageHeader
          overline="Professional Background"
          title="Resume"
          description="8+ years driving revenue growth for B2B healthcare technology companies."
        >
          <Button asChild size="lg" className="mt-2">
            <Link href="/Jeffrey_Mutchnik_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume (PDF)
            </Link>
          </Button>
        </PageHeader>

        <section className="section-py">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <Card className="p-8 md:p-12">
                {/* Summary */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="accent-line" />
                    <h2 className="text-h3 m-0">Summary</h2>
                  </div>
                  <p className="text-lead">{resumeData.summary}</p>
                </section>

                {/* Experience */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="accent-line" />
                    <h2 className="text-h3 m-0">Professional Experience</h2>
                  </div>
                  <Timeline items={resumeData.experience} />
                </section>

                {/* Skills */}
                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="accent-line" />
                    <h2 className="text-h3 m-0">Skills & Tools</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.primary.map((skill) => (
                      <Badge key={skill} variant="accent">
                        {skill}
                      </Badge>
                    ))}
                    {resumeData.skills.secondary.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="accent-line" />
                    <h2 className="text-h3 m-0">Education & Certifications</h2>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-h5 mb-1">{resumeData.education.school}</h3>
                    <p className="text-[var(--color-text-soft)] dark:text-[var(--color-text-muted)] mb-0">
                      {resumeData.education.degree} | {resumeData.education.details}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary">
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </section>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
