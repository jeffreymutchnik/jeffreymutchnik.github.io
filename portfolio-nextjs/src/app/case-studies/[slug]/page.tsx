import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudySlugs, caseStudies } from "@/data/case-studies";
import { CaseStudyClient } from "./CaseStudyClient";

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
    <CaseStudyClient
      caseStudy={caseStudy}
      prevStudy={prevStudy}
      nextStudy={nextStudy}
    />
  );
}
