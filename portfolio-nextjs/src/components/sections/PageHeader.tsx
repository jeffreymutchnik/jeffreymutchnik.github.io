"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface PageHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  overline,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="bg-[var(--color-bg-subtle)] section-py">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {overline && (
            <span className="text-overline block mb-3">{overline}</span>
          )}
          <h1 className="text-h1 mb-4">{title}</h1>
          {description && (
            <p className="text-lead mb-6">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default PageHeader;
