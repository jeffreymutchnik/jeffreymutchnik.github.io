import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Jeffrey Mutchnik's thoughts on marketing technology, B2B healthcare, and professional growth.",
};

const blogPosts = [
  {
    slug: "hubspot-lessons",
    title: "What I Learned from 4 HubSpot Implementations",
    description:
      "After leading HubSpot implementations at PatientIQ, AASM, Ambience Healthcare, and cliexa, I've developed a framework for successful CRM deployments.",
    tags: ["HubSpot", "CRM", "Marketing Technology"],
    featured: true,
  },
  {
    slug: "first-marketing-hire",
    title: "Building Marketing as the First Hire at 3 Startups",
    description:
      "Being the first marketing hire is equal parts terrifying and exhilarating. Here's what I wish someone had told me about building marketing from scratch.",
    tags: ["Startups", "Leadership"],
  },
];

const topics = [
  { icon: "🔧", title: "Marketing Technology", description: "CRM architecture, marketing automation, and building effective martech stacks" },
  { icon: "📈", title: "B2B Demand Gen", description: "ABM strategies, lead scoring, and pipeline generation tactics" },
  { icon: "🏥", title: "Healthcare Marketing", description: "Marketing to health systems, providers, and medical organizations" },
  { icon: "🚀", title: "Startup Growth", description: "Building marketing from scratch and scaling early-stage companies" },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <PageHeader
          overline="Insights & Articles"
          title="Blog"
          description="Thoughts on marketing technology, B2B healthcare, and lessons learned from building marketing at startups."
        />

        <section className="section-py">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Featured Post */}
              {blogPosts.filter(p => p.featured).map((post) => (
                <ScrollReveal key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <Card className="transition-all duration-300 hover:shadow-xl hover:border-[var(--color-border-strong)] border-[var(--color-crimson-500)]/30">
                      <CardHeader>
                        <Badge variant="accent" className="w-fit mb-2">
                          Featured
                        </Badge>
                        <CardTitle className="text-h3 group-hover:text-[var(--color-crimson-500)] transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-body-lg leading-relaxed">
                          {post.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-[var(--color-crimson-500)] flex items-center gap-1 text-body-sm font-medium group-hover:gap-2 transition-all">
                          Read Article
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}

              {/* Other Posts */}
              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                {blogPosts.filter(p => !p.featured).map((post) => (
                  <StaggerItem key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="block h-full group">
                      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-[var(--color-border-strong)]">
                        <CardHeader>
                          <CardTitle className="text-h4 group-hover:text-[var(--color-crimson-500)] transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-body-md leading-relaxed">
                            {post.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}

                {/* Coming Soon */}
                <StaggerItem>
                  <Card className="h-full bg-[var(--color-bg-subtle)] dark:bg-[var(--color-surface-2)] border-0 flex flex-col items-center justify-center text-center p-8">
                    <span className="text-4xl mb-4">✏️</span>
                    <h3 className="text-h4 text-[var(--color-text-soft)] mb-2">More Coming Soon</h3>
                    <p className="text-body-sm text-[var(--color-text-soft)]">
                      I'm working on content covering ABM strategies, healthcare marketing best practices, and CRM migration checklists.
                    </p>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="section-py bg-[var(--color-bg-subtle)]">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <span className="text-overline block mb-3">Areas of Expertise</span>
              <h2 className="text-h2">Topics I Write About</h2>
            </ScrollReveal>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {topics.map((topic, index) => (
                <StaggerItem key={index}>
                  <Card className="text-center h-full border-0">
                    <CardContent className="pt-6">
                      <span className="text-4xl mb-4 block">{topic.icon}</span>
                      <h3 className="text-h5 mb-2">{topic.title}</h3>
                      <p className="text-body-sm text-[var(--color-text-soft)]">
                        {topic.description}
                      </p>
                    </CardContent>
                  </Card>
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
