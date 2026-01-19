import { MetadataRoute } from "next";
import { getAllCaseStudySlugs } from "@/data/case-studies";
import { getAllBlogSlugs } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jeffreymutchnik.com";

  // Static pages
  const staticPages = [
    "",
    "/resume",
    "/skills",
    "/projects",
    "/case-studies",
    "/blog",
    "/creative-work",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Case study pages
  const caseStudyPages = getAllCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages];
}
