"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import {
  mobileMenuItems,
  mobileMenuItem,
} from "@/lib/animations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHomepage = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--color-cool-900)]/95 backdrop-blur-md shadow-sm border-b border-white/10"
          : isHomepage
          ? "bg-transparent"
          : "bg-[var(--color-cool-900)]"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl md:text-2xl font-semibold text-white transition-colors"
          >
            Jeffrey Mutchnik
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActiveLink(item.href) ? "page" : undefined}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActiveLink(item.href)
                    ? "text-white bg-white/25 font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/15"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <DarkModeToggle variant="header" />
            <Button
              asChild
              variant="secondary"
              className="bg-white text-[var(--color-cool-900)] hover:bg-white/90"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <DarkModeToggle variant="header" />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
              <motion.div
                className="flex flex-col h-full"
                variants={mobileMenuItems}
                initial="hidden"
                animate="visible"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)] dark:border-white/10">
                  <span className="font-display text-xl font-semibold dark:text-white">
                    Menu
                  </span>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex-1 py-6">
                  <ul className="space-y-1 px-4">
                    {mainNavItems.map((item) => (
                      <motion.li key={item.href} variants={mobileMenuItem}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          aria-current={isActiveLink(item.href) ? "page" : undefined}
                          className={cn(
                            "flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                            isActiveLink(item.href)
                              ? "text-[var(--color-crimson-500)] bg-[var(--color-crimson-100)] dark:bg-[var(--color-crimson-500)]/20 dark:text-[var(--color-crimson-400)]"
                              : "text-[var(--color-text-soft)] hover:text-[var(--color-text)] hover:bg-[var(--color-warm-100)] dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-[var(--color-border)] dark:border-white/10">
                  <Button asChild className="w-full" size="lg">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-crimson-500)] origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}

export default Header;
