import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { getBlogPost, getAllBlogSlugs, blogPosts } from "@/data/blog";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

// Simple markdown-like rendering for content
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = () => {
    if (currentList.length > 0 && listType) {
      const ListTag = listType;
      elements.push(
        <ListTag
          key={elements.length}
          className={`${listType === "ul" ? "list-disc" : "list-decimal"} pl-6 mb-6 space-y-2 text-body-md text-[var(--color-text-soft)]`}
        >
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ListTag>
      );
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Empty line
    if (!trimmedLine) {
      flushList();
      return;
    }

    // H2
    if (trimmedLine.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={index} className="text-h2 mt-12 mb-6">
          {trimmedLine.slice(3)}
        </h2>
      );
      return;
    }

    // H3
    if (trimmedLine.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={index} className="text-h3 mt-8 mb-4">
          {trimmedLine.slice(4)}
        </h3>
      );
      return;
    }

    // H4
    if (trimmedLine.startsWith("#### ")) {
      flushList();
      elements.push(
        <h4 key={index} className="text-h4 mt-6 mb-3">
          {trimmedLine.slice(5)}
        </h4>
      );
      return;
    }

    // Unordered list item
    if (trimmedLine.startsWith("- ")) {
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      currentList.push(trimmedLine.slice(2));
      return;
    }

    // Ordered list item
    if (/^\d+\.\s/.test(trimmedLine)) {
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      currentList.push(trimmedLine.replace(/^\d+\.\s/, ""));
      return;
    }

    // Horizontal rule
    if (trimmedLine === "---") {
      flushList();
      elements.push(<hr key={index} className="my-12 border-[var(--color-border)]" />);
      return;
    }

    // Bold text replacement and link processing
    flushList();
    let processedLine = trimmedLine;

    // Process bold text
    processedLine = processedLine.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // Process links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(processedLine)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(
          <span
            key={`text-${lastIndex}`}
            dangerouslySetInnerHTML={{ __html: processedLine.slice(lastIndex, match.index) }}
          />
        );
      }
      // Add the link
      parts.push(
        <Link
          key={`link-${match.index}`}
          href={match[2]}
          className="text-[var(--color-teal-500)] hover:underline"
        >
          {match[1]}
        </Link>
      );
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < processedLine.length) {
      parts.push(
        <span
          key={`text-end`}
          dangerouslySetInnerHTML={{ __html: processedLine.slice(lastIndex) }}
        />
      );
    }

    // Italic text (single line)
    if (trimmedLine.startsWith("*") && trimmedLine.endsWith("*") && !trimmedLine.startsWith("**")) {
      elements.push(
        <p key={index} className="text-body-md text-[var(--color-text-soft)] italic mb-6">
          {trimmedLine.slice(1, -1)}
        </p>
      );
      return;
    }

    elements.push(
      <p key={index} className="text-body-lg text-[var(--color-text-soft)] mb-6 leading-relaxed">
        {parts.length > 0 ? parts : <span dangerouslySetInnerHTML={{ __html: processedLine }} />}
      </p>
    );
  });

  flushList();
  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get prev/next posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Format date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="section-py border-b border-[var(--color-border)]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[var(--color-teal-500)] hover:text-[var(--color-teal-600)] transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-display-sm md:text-display-md mb-6">{post.title}</h1>

                <p className="text-lead text-[var(--color-text-soft)] mb-6">
                  {post.description}
                </p>

                <div className="flex items-center gap-6 text-body-sm text-[var(--color-text-soft)]">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readingTime}
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <article className="max-w-3xl mx-auto prose-custom">
              <ScrollReveal>{renderContent(post.content)}</ScrollReveal>
            </article>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-[var(--color-border)]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto flex justify-between items-center">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group max-w-[45%]">
                  <span className="text-body-sm text-[var(--color-text-soft)] block mb-1">
                    Previous Article
                  </span>
                  <span className="flex items-center gap-2 text-h5 group-hover:text-[var(--color-crimson-500)] transition-colors line-clamp-1">
                    <ArrowLeft className="h-4 w-4 flex-shrink-0" />
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="group text-right max-w-[45%]">
                  <span className="text-body-sm text-[var(--color-text-soft)] block mb-1">
                    Next Article
                  </span>
                  <span className="flex items-center justify-end gap-2 text-h5 group-hover:text-[var(--color-crimson-500)] transition-colors line-clamp-1">
                    {nextPost.title}
                    <ArrowLeft className="h-4 w-4 flex-shrink-0 rotate-180" />
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-py bg-[var(--color-bg-subtle)]">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-h2 mb-4">Want to discuss this topic?</h2>
              <p className="text-body-lg text-[var(--color-text-soft)] mb-8 max-w-2xl mx-auto">
                I'm always happy to chat about marketing technology, B2B healthcare, or startup growth strategies.
              </p>
              <Button asChild size="lg" variant="default">
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
