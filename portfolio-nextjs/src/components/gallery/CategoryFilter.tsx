"use client";

import { cn } from "@/lib/utils";
import type { WorkCategory, Company } from "@/data/creative-work";

interface FilterButtonProps {
  isSelected: boolean;
  onClick: () => void;
  variant?: "default" | "accent";
  children: React.ReactNode;
}

function FilterButton({
  isSelected,
  onClick,
  variant = "default",
  children,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-crimson-500)] focus-visible:ring-offset-2",
        variant === "default" &&
          isSelected &&
          "bg-[var(--color-cool-500)] text-white",
        variant === "default" &&
          !isSelected &&
          "bg-[var(--color-warm-100)] text-[var(--color-text-soft)] hover:bg-[var(--color-warm-200)]",
        variant === "accent" &&
          isSelected &&
          "bg-[var(--color-crimson-500)] text-white",
        variant === "accent" &&
          !isSelected &&
          "border border-[var(--color-border)] bg-transparent text-[var(--color-text-soft)] hover:bg-[var(--color-warm-100)]"
      )}
    >
      {children}
    </button>
  );
}

interface CategoryFilterProps {
  categories: WorkCategory[];
  companies: Company[];
  selectedCategory: WorkCategory | "All";
  selectedCompany: Company | "All";
  onCategoryChange: (category: WorkCategory | "All") => void;
  onCompanyChange: (company: Company | "All") => void;
}

export function CategoryFilter({
  categories,
  companies,
  selectedCategory,
  selectedCompany,
  onCategoryChange,
  onCompanyChange,
}: CategoryFilterProps) {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h4 className="text-body-sm font-semibold text-[var(--color-text-soft)] uppercase tracking-wider mb-3">
          Filter by Type
        </h4>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
          <FilterButton
            isSelected={selectedCategory === "All"}
            onClick={() => onCategoryChange("All")}
          >
            All Types
          </FilterButton>
          {categories.map((category) => (
            <FilterButton
              key={category}
              isSelected={selectedCategory === category}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>
      </div>

      {/* Company Filter */}
      <div>
        <h4 className="text-body-sm font-semibold text-[var(--color-text-soft)] uppercase tracking-wider mb-3">
          Filter by Company
        </h4>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by company">
          <FilterButton
            isSelected={selectedCompany === "All"}
            onClick={() => onCompanyChange("All")}
            variant="accent"
          >
            All Companies
          </FilterButton>
          {companies.map((company) => (
            <FilterButton
              key={company}
              isSelected={selectedCompany === company}
              onClick={() => onCompanyChange(company)}
              variant="accent"
            >
              {company}
            </FilterButton>
          ))}
        </div>
      </div>
    </div>
  );
}
