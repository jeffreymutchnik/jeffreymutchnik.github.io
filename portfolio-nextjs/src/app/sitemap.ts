import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";

// Required for static export
export const dynamic = "force-static";

const baseUrl = "https://jeffreymutchnik.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    "",
    "/about",
    "/resume",
    "/projects",
    "/case-studies",
    "/skills",
    "/creative-work",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Case studies
  const caseStudyPages = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...caseStudyPages];
}
