"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search, SlidersHorizontal, ChevronDown, X, FileText, Eye, Calendar, Building2, Grid3X3 } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { Lightbox } from "@/components/gallery";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { cn } from "@/lib/utils";
import {
  workItems,
  getCategories,
  getCompanies,
  getFeaturedWork,
  type WorkItem,
  type WorkCategory,
  type Company,
} from "@/data/creative-work";

type SortOption = "newest" | "oldest" | "company" | "category";

// Hero Featured Card - Large version
function HeroWorkCard({ item, onClick }: { item: WorkItem; onClick: () => void }) {
  const isPDF = item.type === "pdf";
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="h-full"
    >
      <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-2xl border-2 hover:border-[var(--color-crimson-500)]">
        <button
          type="button"
          onClick={onClick}
          className="w-full h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson-500)] focus-visible:ring-offset-2"
          aria-label={`View ${item.title}`}
        >
          <div className="relative aspect-[16/10] bg-[var(--color-warm-100)] dark:bg-[var(--color-surface)] overflow-hidden">
            {isPDF ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-cool-900)] text-white p-8">
                <FileText className="h-20 w-20 mb-6 opacity-80" />
                <span className="text-lg font-medium text-center line-clamp-2 opacity-90">
                  {item.title}
                </span>
              </div>
            ) : (
              <>
                {isLoading && (
                  <div className="absolute inset-0 bg-[var(--color-warm-200)] dark:bg-[var(--color-surface-2)] overflow-hidden">
                    {!shouldReduceMotion && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </div>
                )}
                <Image
                  src={item.file}
                  alt={item.title}
                  fill
                  className={cn(
                    "object-cover transition-all duration-500 group-hover:scale-105",
                    isLoading ? "opacity-0" : "opacity-100"
                  )}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setIsLoading(false)}
                  priority
                />
              </>
            )}

            {/* View indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <div className="bg-white/90 dark:bg-black/90 rounded-full p-3 shadow-lg">
                <Eye className="h-5 w-5 text-[var(--color-text)] dark:text-white" />
              </div>
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="accent" className="bg-[var(--color-crimson-500)]">
                Featured
              </Badge>
            </div>
          </div>

          {/* Content below image */}
          <div className="p-6">
            <h3 className="text-h4 mb-2 group-hover:text-[var(--color-crimson-500)] transition-colors line-clamp-2">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-body-md text-[var(--color-text-soft)] mb-4 line-clamp-2">
                {item.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 text-body-sm text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                {item.company}
              </span>
              <span className="flex items-center gap-1.5">
                <Grid3X3 className="h-3.5 w-3.5" />
                {item.category}
              </span>
              {item.date && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </span>
              )}
            </div>
          </div>
        </button>
      </Card>
    </motion.div>
  );
}

// Standard Work Card with metadata visible
function WorkCardWithMeta({ item, onClick }: { item: WorkItem; onClick: () => void }) {
  const isPDF = item.type === "pdf";
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
        <button
          type="button"
          onClick={onClick}
          className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson-500)] focus-visible:ring-offset-2"
          aria-label={`View ${item.title}`}
        >
          <div className="relative aspect-[4/3] bg-[var(--color-warm-100)] dark:bg-[var(--color-surface)] overflow-hidden">
            {isPDF ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-cool-900)] text-white p-6">
                <FileText className="h-12 w-12 mb-3 opacity-80" />
                <span className="text-sm font-medium text-center line-clamp-2 opacity-90">
                  {item.title}
                </span>
              </div>
            ) : (
              <>
                {isLoading && (
                  <div className="absolute inset-0 bg-[var(--color-warm-200)] dark:bg-[var(--color-surface-2)] overflow-hidden">
                    {!shouldReduceMotion && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </div>
                )}
                <Image
                  src={item.file}
                  alt={item.title}
                  fill
                  className={cn(
                    "object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90",
                    isLoading ? "opacity-0" : "opacity-100"
                  )}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoad={() => setIsLoading(false)}
                />
              </>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                <div className="bg-white/90 dark:bg-black/90 rounded-full p-2.5 shadow-lg">
                  <Eye className="h-4 w-4 text-[var(--color-text)] dark:text-white" />
                </div>
              </div>
            </div>

            {/* Featured badge */}
            {item.featured && (
              <div className="absolute top-3 left-3">
                <Badge variant="accent" className="bg-[var(--color-crimson-500)] text-xs">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Metadata below image - always visible */}
          <div className="p-4">
            <h3 className="text-body-md font-semibold mb-1.5 group-hover:text-[var(--color-crimson-500)] transition-colors line-clamp-2">
              {item.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-body-xs text-[var(--color-text-muted)]">
              <span>{item.company}</span>
              <span className="text-[var(--color-border)]">•</span>
              <span>{item.category}</span>
              {item.date && (
                <>
                  <span className="text-[var(--color-border)]">•</span>
                  <span>{item.date}</span>
                </>
              )}
            </div>
          </div>
        </button>
      </Card>
    </motion.div>
  );
}

// Collapsible Filter Section
function CollapsibleFilter({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 text-body-sm font-medium text-[var(--color-text)] hover:text-[var(--color-crimson-500)] transition-colors"
        aria-expanded={isOpen}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Filter Button
function FilterButton({
  isSelected,
  onClick,
  children,
}: {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson-500)] focus-visible:ring-offset-1",
        isSelected
          ? "bg-[var(--color-crimson-500)] text-white"
          : "bg-[var(--color-warm-100)] text-[var(--color-text-soft)] hover:bg-[var(--color-warm-200)] dark:bg-[var(--color-surface)] dark:hover:bg-[var(--color-surface-2)]"
      )}
    >
      {children}
    </button>
  );
}

export default function CreativeWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | "All">("All");
  const [selectedCompany, setSelectedCompany] = useState<Company | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<WorkItem | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categoryFilterOpen, setCategoryFilterOpen] = useState(true);
  const [companyFilterOpen, setCompanyFilterOpen] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const categories = getCategories();
  const companies = getCompanies();
  const featuredItems = getFeaturedWork();

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let items = workItems.filter((item) => {
      const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
      const companyMatch = selectedCompany === "All" || item.company === selectedCompany;
      const searchMatch = searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && companyMatch && searchMatch;
    });

    // Sort items
    switch (sortBy) {
      case "newest":
        items = [...items].sort((a, b) => {
          if (!a.date) return 1;
          if (!b.date) return -1;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        break;
      case "oldest":
        items = [...items].sort((a, b) => {
          if (!a.date) return 1;
          if (!b.date) return -1;
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        break;
      case "company":
        items = [...items].sort((a, b) => a.company.localeCompare(b.company));
        break;
      case "category":
        items = [...items].sort((a, b) => a.category.localeCompare(b.category));
        break;
    }

    return items;
  }, [selectedCategory, selectedCompany, searchQuery, sortBy]);

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

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedCompany("All");
    setSearchQuery("");
    setSortBy("newest");
  };

  const hasActiveFilters = selectedCategory !== "All" || selectedCompany !== "All" || searchQuery !== "";

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
        >
          {/* Inline Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-6">
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-[var(--color-crimson-500)]">{workItems.length}</span>
              <span className="text-body-sm text-[var(--color-text-soft)] block">Projects</span>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-[var(--color-crimson-500)]">{pdfCount}</span>
              <span className="text-body-sm text-[var(--color-text-soft)] block">Documents</span>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-[var(--color-crimson-500)]">{imageCount}</span>
              <span className="text-body-sm text-[var(--color-text-soft)] block">Graphics</span>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-[var(--color-crimson-500)]">{companies.length}</span>
              <span className="text-body-sm text-[var(--color-text-soft)] block">Companies</span>
            </div>
          </div>
        </PageHeader>

        {/* Hero Featured Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-10">
              <span className="text-overline block mb-3 text-[var(--color-crimson-500)]">
                Highlights
              </span>
              <h2 className="text-h2">Featured Work</h2>
            </ScrollReveal>

            {/* Hero Layout: 1 large + 3 smaller */}
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Hero item - large */}
                {featuredItems[0] && (
                  <StaggerContainer>
                    <StaggerItem>
                      <HeroWorkCard item={featuredItems[0]} onClick={() => openLightbox(featuredItems[0])} />
                    </StaggerItem>
                  </StaggerContainer>
                )}

                {/* 3 smaller items stacked */}
                <StaggerContainer className="grid gap-4">
                  {featuredItems.slice(1, 4).map((item) => (
                    <StaggerItem key={item.id}>
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[var(--color-crimson-500)]">
                          <button
                            type="button"
                            onClick={() => openLightbox(item)}
                            className="w-full text-left focus:outline-none flex items-center gap-4 p-4"
                            aria-label={`View ${item.title}`}
                          >
                            {/* Thumbnail */}
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-[var(--color-warm-100)] dark:bg-[var(--color-surface)]">
                              {item.type === "pdf" ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-cool-900)]">
                                  <FileText className="h-8 w-8 text-white/80" />
                                </div>
                              ) : (
                                <Image
                                  src={item.file}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                  sizes="80px"
                                />
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <Badge variant="accent" className="bg-[var(--color-crimson-500)] text-xs mb-2">
                                Featured
                              </Badge>
                              <h3 className="text-body-md font-semibold group-hover:text-[var(--color-crimson-500)] transition-colors line-clamp-1">
                                {item.title}
                              </h3>
                              <p className="text-body-xs text-[var(--color-text-muted)] mt-0.5">
                                {item.company} • {item.category}
                              </p>
                            </div>

                            {/* Arrow */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <Eye className="h-5 w-5 text-[var(--color-crimson-500)]" />
                            </div>
                          </button>
                        </Card>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters Bar */}
        <section className="py-6 border-y border-[var(--color-border)] bg-[var(--color-bg-subtle)] sticky top-20 z-30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search portfolio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[var(--color-border)] bg-white dark:bg-[var(--color-surface)] text-body-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson-500)] focus:border-transparent"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-body-sm text-[var(--color-text-soft)] whitespace-nowrap">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-3 py-2.5 rounded-lg border border-[var(--color-border)] bg-white dark:bg-[var(--color-surface)] text-body-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson-500)] focus:border-transparent cursor-pointer"
                  >
                    <option value="newest">Date (Newest)</option>
                    <option value="oldest">Date (Oldest)</option>
                    <option value="company">Company (A-Z)</option>
                    <option value="category">Category</option>
                  </select>
                </div>

                {/* Filter toggle (mobile) */}
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="md:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-white dark:bg-[var(--color-surface)] text-body-sm font-medium"
                  aria-expanded={filtersOpen}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-2 h-2 rounded-full bg-[var(--color-crimson-500)]" />
                  )}
                </button>
              </div>

              {/* Desktop filters */}
              <div className="hidden md:block mt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-body-sm text-[var(--color-text-soft)] mr-2">Type:</span>
                  <FilterButton
                    isSelected={selectedCategory === "All"}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </FilterButton>
                  {categories.map((category) => (
                    <FilterButton
                      key={category}
                      isSelected={selectedCategory === category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </FilterButton>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-body-sm text-[var(--color-text-soft)] mr-2">Company:</span>
                  <FilterButton
                    isSelected={selectedCompany === "All"}
                    onClick={() => setSelectedCompany("All")}
                  >
                    All
                  </FilterButton>
                  {companies.map((company) => (
                    <FilterButton
                      key={company}
                      isSelected={selectedCompany === company}
                      onClick={() => setSelectedCompany(company)}
                    >
                      {company}
                    </FilterButton>
                  ))}
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="ml-2 text-body-xs text-[var(--color-crimson-500)] hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile filters (collapsible) */}
              <AnimatePresence>
                {filtersOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                    className="md:hidden overflow-hidden"
                  >
                    <div className="pt-4 border-t border-[var(--color-border)] mt-4">
                      <CollapsibleFilter
                        title="Filter by Type"
                        isOpen={categoryFilterOpen}
                        onToggle={() => setCategoryFilterOpen(!categoryFilterOpen)}
                      >
                        <div className="flex flex-wrap gap-2">
                          <FilterButton
                            isSelected={selectedCategory === "All"}
                            onClick={() => setSelectedCategory("All")}
                          >
                            All Types
                          </FilterButton>
                          {categories.map((category) => (
                            <FilterButton
                              key={category}
                              isSelected={selectedCategory === category}
                              onClick={() => setSelectedCategory(category)}
                            >
                              {category}
                            </FilterButton>
                          ))}
                        </div>
                      </CollapsibleFilter>

                      <CollapsibleFilter
                        title="Filter by Company"
                        isOpen={companyFilterOpen}
                        onToggle={() => setCompanyFilterOpen(!companyFilterOpen)}
                      >
                        <div className="flex flex-wrap gap-2">
                          <FilterButton
                            isSelected={selectedCompany === "All"}
                            onClick={() => setSelectedCompany("All")}
                          >
                            All Companies
                          </FilterButton>
                          {companies.map((company) => (
                            <FilterButton
                              key={company}
                              isSelected={selectedCompany === company}
                              onClick={() => setSelectedCompany(company)}
                            >
                              {company}
                            </FilterButton>
                          ))}
                        </div>
                      </CollapsibleFilter>

                      {hasActiveFilters && (
                        <button
                          onClick={clearFilters}
                          className="w-full py-2 mt-2 text-body-sm text-[var(--color-crimson-500)] hover:underline text-center"
                        >
                          Clear all filters
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Work Grid */}
        <section className="section-py">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Results count */}
              <div className="mb-8 flex items-center justify-between">
                <p className="text-body-md text-[var(--color-text-soft)]">
                  Showing {filteredItems.length} of {workItems.length} projects
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {selectedCompany !== "All" && ` from ${selectedCompany}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Grid */}
              {filteredItems.length > 0 ? (
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <StaggerItem key={item.id}>
                      <WorkCardWithMeta item={item} onClick={() => openLightbox(item)} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              ) : (
                <div className="text-center py-16">
                  <p className="text-body-lg text-[var(--color-text-soft)]">
                    No projects match your current filters.
                  </p>
                  <button
                    onClick={clearFilters}
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
