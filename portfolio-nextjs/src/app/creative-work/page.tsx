"use client";

import { useState, useMemo } from "react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Lightbox, WorkCard, CategoryFilter } from "@/components/gallery";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import {
  workItems,
  getCategories,
  getCompanies,
  getFeaturedWork,
  type WorkItem,
  type WorkCategory,
  type Company,
} from "@/data/creative-work";

export default function CreativeWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | "All">("All");
  const [selectedCompany, setSelectedCompany] = useState<Company | "All">("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<WorkItem | null>(null);

  const categories = getCategories();
  const companies = getCompanies();
  const featuredItems = getFeaturedWork();

  // Filter items based on selection
  const filteredItems = useMemo(() => {
    return workItems.filter((item) => {
      const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
      const companyMatch = selectedCompany === "All" || item.company === selectedCompany;
      return categoryMatch && companyMatch;
    });
  }, [selectedCategory, selectedCompany]);

  // Group items by category for display
  const groupedItems = useMemo(() => {
    const groups: Record<string, WorkItem[]> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  // Lightbox navigation
  const currentIndex = currentItem
    ? filteredItems.findIndex((item) => item.id === currentItem.id)
    : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < filteredItems.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      setCurrentItem(filteredItems[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setCurrentItem(filteredItems[currentIndex + 1]);
    }
  };

  const openLightbox = (item: WorkItem) => {
    setCurrentItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
  };

  // Stats
  const pdfCount = workItems.filter((i) => i.type === "pdf").length;
  const imageCount = workItems.filter((i) => i.type === "image").length;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <PageHeader
          overline="Visual Portfolio"
          title="Creative Work"
          description="A curated selection of marketing collateral, brand design, and campaign creative from my career in B2B healthcare marketing."
        />

        {/* Stats */}
        <section className="bg-[var(--color-bg-subtle)] section-py">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <span className="text-metric block">{workItems.length}</span>
                <span className="text-body-sm text-[var(--color-text-soft)]">
                  Total Projects
                </span>
              </div>
              <div>
                <span className="text-metric block">{pdfCount}</span>
                <span className="text-body-sm text-[var(--color-text-soft)]">
                  Documents
                </span>
              </div>
              <div>
                <span className="text-metric block">{imageCount}</span>
                <span className="text-body-sm text-[var(--color-text-soft)]">
                  Graphics
                </span>
              </div>
              <div>
                <span className="text-metric block">{companies.length}</span>
                <span className="text-body-sm text-[var(--color-text-soft)]">
                  Companies
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                Highlights
              </span>
              <h2 className="text-h2">Featured Work</h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {featuredItems.map((item) => (
                <StaggerItem key={item.id}>
                  <WorkCard item={item} onClick={() => openLightbox(item)} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-y border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <CategoryFilter
                categories={categories}
                companies={companies}
                selectedCategory={selectedCategory}
                selectedCompany={selectedCompany}
                onCategoryChange={setSelectedCategory}
                onCompanyChange={setSelectedCompany}
              />
            </div>
          </div>
        </section>

        {/* Work Grid */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Results count */}
              <ScrollReveal className="mb-8">
                <p className="text-body-md text-[var(--color-text-soft)]">
                  Showing {filteredItems.length} of {workItems.length} projects
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {selectedCompany !== "All" && ` from ${selectedCompany}`}
                </p>
              </ScrollReveal>

              {/* Grouped by category or flat list */}
              {selectedCategory === "All" ? (
                // Show grouped by category
                <div className="space-y-16">
                  {Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category}>
                      <ScrollReveal>
                        <h3 className="text-h3 mb-6 pb-3 border-b border-[var(--color-border)]">
                          {category}
                          <span className="text-body-md text-[var(--color-text-soft)] ml-3">
                            ({items.length})
                          </span>
                        </h3>
                      </ScrollReveal>
                      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item) => (
                          <StaggerItem key={item.id}>
                            <WorkCard item={item} onClick={() => openLightbox(item)} />
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  ))}
                </div>
              ) : (
                // Show flat filtered list
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <StaggerItem key={item.id}>
                      <WorkCard item={item} onClick={() => openLightbox(item)} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}

              {filteredItems.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-body-lg text-[var(--color-text-soft)]">
                    No projects match your current filters.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedCompany("All");
                    }}
                    className="mt-4 text-[var(--color-crimson-500)] hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py bg-[var(--color-cool-900)] text-white">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-h2 text-white mb-4">Want to see more?</h2>
              <p className="text-body-lg text-white/80 mb-8 max-w-2xl mx-auto">
                This is a curated selection of my work. I&apos;d be happy to walk
                through specific projects or discuss how I approach creative
                challenges.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-crimson-500)] text-white px-8 py-3 rounded-lg font-medium hover:bg-[var(--color-crimson-600)] transition-colors"
              >
                Get in Touch
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {currentItem && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          type={currentItem.type}
          src={currentItem.file}
          title={currentItem.title}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      )}
    </>
  );
}
