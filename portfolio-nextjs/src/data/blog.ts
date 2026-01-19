export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  featured?: boolean;
  publishedAt: string;
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hubspot-lessons",
    title: "What I Learned from 4 HubSpot Implementations",
    description:
      "After leading HubSpot implementations at PatientIQ, AASM, Ambience Healthcare, and cliexa, I've developed a framework for successful CRM deployments.",
    tags: ["HubSpot", "CRM", "Marketing Technology"],
    featured: true,
    publishedAt: "2024-03-15",
    readingTime: "8 min read",
    content: `
## The Pattern Behind Successful CRM Implementations

After leading four HubSpot implementations across different company sizes and industries, I've noticed distinct patterns that separate successful deployments from troubled ones. Here's what I've learned.

### 1. Start with Attribution, Not Features

The most common mistake I see is teams rushing to enable every HubSpot feature on day one. Instead, I recommend starting with a simple question: **How will we know if marketing is working?**

At PatientIQ, we built our attribution model before importing a single contact. This meant:
- Defining UTM conventions across all campaigns
- Creating custom properties for source, medium, and campaign tracking
- Setting up lifecycle stage definitions that sales and marketing agreed on
- Building dashboards that showed pipeline influence by source

This foundation made it possible to demonstrate marketing's $6M ARR contribution to the business.

### 2. Data Quality is Non-Negotiable

Every implementation I've done has revealed data quality issues. At AASM, we discovered:
- 15% duplicate contact records
- Inconsistent naming conventions for companies
- Missing email addresses on 20% of records
- Outdated job titles and company information

**My rule**: Never migrate dirty data. Spend the time upfront to deduplicate, standardize, and enrich your data. The cost of cleaning data after migration is 10x higher than doing it beforehand.

### 3. Build for Adoption, Not Perfection

The best CRM implementation is the one people actually use. I've seen teams build elaborate systems that sales reps immediately work around because they're too complex.

At Ambience Healthcare, we had 30 days to implement HubSpot. Instead of building the perfect system, we:
- Focused on the 3 workflows that would have the highest impact
- Created simple training documentation with screenshots
- Set up Slack notifications for key CRM events
- Scheduled weekly "office hours" for questions

The result? 100% CRM adoption within the first week.

### 4. Integrate Early, Integrate Often

Siloed systems create friction. Every implementation should include:
- **Email integration** (Gmail/Outlook) from day one
- **Calendar sync** for meeting booking
- **Slack/Teams integration** for real-time notifications
- **Intent data tools** (like ZoomInfo or 6Sense) for enrichment

At PatientIQ, integrating 6Sense intent data into HubSpot allowed us to prioritize accounts showing buying signals, increasing our meeting-to-opportunity conversion by 40%.

### 5. Document Everything

Future-you (or your successor) will thank present-you. I create documentation for:
- **Property definitions**: What each custom property means and when to use it
- **Workflow logic**: Why each automation exists and what triggers it
- **Lifecycle stages**: Exact criteria for moving contacts between stages
- **Reporting definitions**: How each metric is calculated

This documentation has saved countless hours when onboarding new team members or troubleshooting issues months later.

## The Framework

Based on these experiences, here's my recommended implementation framework:

**Week 1-2: Foundation**
- Define attribution model and UTM conventions
- Set lifecycle stage definitions with sales alignment
- Clean and prepare data for migration

**Week 3-4: Core Setup**
- Import contacts with proper tagging
- Configure essential integrations
- Build 2-3 critical workflows
- Create core reporting dashboards

**Week 5-6: Enablement**
- Train all users with role-specific guidance
- Document all customizations
- Set up ongoing data hygiene processes
- Establish feedback loops for continuous improvement

## Final Thoughts

HubSpot is a powerful tool, but it's only as good as the strategy behind it. The technology should serve your go-to-market motion, not the other way around.

If you're planning a HubSpot implementation and want to discuss strategy, [reach out](/contact). I'm always happy to share more detailed playbooks from my experience.
    `,
  },
  {
    slug: "first-marketing-hire",
    title: "Building Marketing as the First Hire at 3 Startups",
    description:
      "Being the first marketing hire is equal parts terrifying and exhilarating. Here's what I wish someone had told me about building marketing from scratch.",
    tags: ["Startups", "Leadership"],
    featured: false,
    publishedAt: "2024-02-28",
    readingTime: "6 min read",
    content: `
## The First Marketing Hire Playbook

I've been the first marketing hire at three startups: PatientIQ, cliexa, and as a consultant at Ambience Healthcare. Each experience taught me something different about building marketing from zero.

### What They Don't Tell You

**1. You're not just doing marketing**

As the first hire, you'll touch everything: sales enablement, customer success content, product positioning, investor materials, even recruiting collateral. Budget for 40% of your time going to "other duties as assigned."

**2. You need to show value fast**

Startups don't have patience for long-term brand building exercises. You need quick wins that demonstrate marketing's value to the business. At PatientIQ, my first win was creating a sales deck that helped close a major health system deal within my first month.

**3. Nobody knows what they want**

The job description said "demand generation" but the CEO actually wanted brand positioning. The sales team wanted collateral. The product team wanted launch support. Learn to triangulate between stated needs and actual priorities.

### The 90-Day Framework

Here's the approach I now use when joining a startup as the first marketing hire:

**Days 1-30: Listen and Quick Wins**
- Interview every customer-facing team member
- Sit in on sales calls and customer success meetings
- Audit all existing content and materials
- Identify the one thing that's causing the most pain
- Deliver a quick win that solves that pain

**Days 31-60: Foundation Building**
- Implement basic marketing infrastructure (CRM, email, analytics)
- Create foundational content (pitch deck, one-pager, case studies)
- Define your ideal customer profile with sales
- Set up attribution tracking

**Days 61-90: Scaling Experiments**
- Launch 2-3 demand generation experiments
- Build repeatable processes for content creation
- Create a hiring plan for your first direct report
- Present a 6-month marketing plan to leadership

### The Mistakes I Made

**Trying to do everything at once**

At cliexa, I simultaneously tried to launch a new website, start a content program, run paid campaigns, and build email nurtures. Nothing got done well. Focus on one thing, nail it, then move on.

**Not aligning with sales early enough**

My first quarter at PatientIQ, marketing and sales had different definitions of "qualified lead." This led to finger-pointing about lead quality. Now I start every role by defining qualification criteria with sales on day one.

**Underestimating the importance of internal marketing**

Your colleagues are your first audience. If the sales team doesn't understand or value what marketing does, you'll constantly fight for resources and respect. I now spend significant time educating internal stakeholders about marketing's role.

### What Actually Matters

After doing this three times, here's what I've learned actually moves the needle:

1. **One great case study** is worth more than ten blog posts
2. **Sales alignment** determines whether marketing succeeds or fails
3. **Attribution** is the only way to prove your value
4. **Quick wins** buy you time for long-term initiatives
5. **Documentation** saves your future self

### The Reward

Despite the chaos, there's nothing quite like building something from nothing. Seeing the marketing engine you built generate millions in pipeline, contribute to fundraising rounds, and help a company scale is incredibly rewarding.

If you're considering being a first marketing hire, go for it. Just go in with realistic expectations and a framework for success.

---

*Thinking about your first marketing hire? I'd be happy to share more detailed playbooks and templates. [Get in touch](/contact).*
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
