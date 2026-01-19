export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Creative Work", href: "/creative-work" },
  { label: "Blog", href: "/blog" },
];

export const footerNavItems = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Skills", href: "/skills" },
  ],
  more: [
    { label: "Projects", href: "/projects" },
    { label: "Creative Work", href: "/creative-work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "jmutchnik21@gmail.com",
    phone: "(847) 767-9719",
    linkedin: "https://linkedin.com/in/jeffrey-mutchnik",
    location: "Chicago, IL",
  },
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jeffrey-mutchnik",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:jmutchnik21@gmail.com",
    icon: "mail",
  },
];
