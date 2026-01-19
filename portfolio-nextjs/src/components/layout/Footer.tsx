import Link from "next/link";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { footerNavItems, socialLinks } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-cool-900)] text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-semibold text-white hover:text-[var(--color-crimson-400)] transition-colors"
            >
              Jeffrey Mutchnik
            </Link>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Marketing Technology Manager with 8+ years of experience in B2B
              healthcare technology. Specializing in HubSpot, Salesforce, and
              marketing automation.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavItems.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              More
            </h3>
            <ul className="space-y-3">
              {footerNavItems.more.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${footerNavItems.contact.email}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerNavItems.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>{footerNavItems.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={footerNavItems.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4" />
                <span>{footerNavItems.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Jeffrey Mutchnik. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={footerNavItems.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-[var(--color-crimson-500)] hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${footerNavItems.contact.email}`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-[var(--color-crimson-500)] hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
