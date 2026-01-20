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
  {
    slug: "lead-scoring-healthcare",
    title: "The Lead Scoring Framework That Drove 44% of Pipeline",
    description:
      "How we built a lead scoring model at PatientIQ that aligned sales and marketing, prioritized the right accounts, and generated nearly half of company pipeline.",
    tags: ["Lead Scoring", "Healthcare", "ABM"],
    featured: true,
    publishedAt: "2024-04-22",
    readingTime: "7 min read",
    content: `
## Why Most Lead Scoring Fails

Most lead scoring models fail for the same reason: they're built by marketers who've never carried a quota. The result is a system that optimizes for marketing activity rather than sales outcomes.

At PatientIQ, we took a different approach. Instead of scoring based on what marketing thought mattered, we reverse-engineered our scoring model from closed-won deals.

### The Discovery Process

We started by analyzing our last 50 closed deals and asking:
- What job titles were involved in the buying committee?
- What content did they consume before requesting a demo?
- How many people from the same account engaged?
- What was the typical timeline from first touch to closed-won?

The findings surprised us. Traditional "high-value" actions like downloading whitepapers had almost zero correlation with closed deals. But attending a webinar with a colleague from the same account? That was gold.

### The Framework

Our lead scoring model had three components:

**1. Fit Score (0-50 points)**
- Job title match to ICP: 0-20 points
- Company size: 0-10 points
- Industry vertical: 0-10 points
- Technology stack signals: 0-10 points

**2. Engagement Score (0-50 points)**
- Multi-stakeholder engagement: 0-20 points
- High-intent actions (demo request, pricing page): 0-15 points
- Content engagement depth: 0-10 points
- Recency multiplier: 0.5x to 2x

**3. Intent Score (0-30 points)**
- 6Sense intent signals: 0-15 points
- G2 category research: 0-10 points
- Competitor research signals: 0-5 points

### The Multi-Stakeholder Multiplier

The biggest insight was the power of multi-stakeholder engagement. When two or more people from the same account engaged within a 30-day window, the account score increased by 50%.

This single change transformed our conversion rates. Sales stopped chasing individual leads and started pursuing engaged accounts.

### Sales Alignment

The key to adoption was involving sales from day one. We held weekly calibration sessions where sales reps could challenge scores:

- "This lead is scored 85 but they're not decision-makers"
- "This account only scored 45 but they're clearly in a buying cycle"

Each exception became a learning opportunity. We'd investigate why the model missed and adjust accordingly.

### The Results

After six months of iteration:
- Marketing-sourced pipeline increased from 30% to 44%
- Sales accepted 73% of MQLs (up from 45%)
- Average deal cycle decreased by 23 days
- Win rates on scored opportunities increased by 18%

### Implementation Tips

**Start simple.** Our initial model had only 8 scoring criteria. We added complexity only when we had data to support it.

**Score accounts, not leads.** B2B buying is a team sport. Individual lead scores are less meaningful than account-level engagement.

**Build in decay.** A whitepaper download from 6 months ago isn't relevant. We decayed engagement scores by 10% per month after 90 days.

**Make it visible.** Sales should see the score and why it's that number. Transparency builds trust in the system.

### Common Mistakes to Avoid

**Over-weighting content downloads.** We initially gave 15 points for any whitepaper download. Turns out, most downloaders were students or competitors.

**Ignoring negative signals.** Free email addresses, competitor domains, and certain job titles should subtract points.

**Static scoring.** Your ICP evolves. Revisit your scoring model quarterly.

---

*Want to see the actual scoring rubric we used? [Reach out](/contact) and I'll share the template.*
    `,
  },
  {
    slug: "abm-health-systems",
    title: "The ABM Playbook for Enterprise Health Systems",
    description:
      "Enterprise health system sales cycles are long and complex. Here's the account-based marketing playbook that helped us close deals with some of the largest IDNs in the country.",
    tags: ["ABM", "Enterprise Sales", "Healthcare"],
    featured: false,
    publishedAt: "2024-05-10",
    readingTime: "9 min read",
    content: `
## Why Health Systems Are Different

Selling to enterprise health systems isn't like selling to other enterprises. The buying committee is larger (often 10+ stakeholders), the compliance requirements are stricter, and the decision timelines stretch to 12-18 months.

Traditional demand generation doesn't work here. You need ABM.

### The Account Selection Process

At PatientIQ, we started with a universe of ~400 potential health system targets. We narrowed this to 100 accounts using:

**Fit Criteria:**
- Orthopedic service line size (our sweet spot)
- Existing outcomes tracking (or lack thereof)
- Technology infrastructure (Epic vs. other EHRs)
- Geographic proximity to existing customers

**Intent Signals:**
- 6Sense intent scores for "patient outcomes" and "PRO software"
- Job postings for quality or outcomes roles
- Conference attendance patterns
- Recent press releases about quality initiatives

**Relationship Mapping:**
- Existing connections through investors or advisors
- Alumni networks (our CEO was a former health system exec)
- Shared customers with integration partners

### The Tiered Approach

We organized our 100 target accounts into three tiers:

**Tier 1 (10 accounts): White Glove**
- Named account owners (1 AE per 2-3 accounts)
- Custom content and research
- Executive-level outreach
- Event-based engagement

**Tier 2 (30 accounts): High Touch**
- Personalized email sequences
- Industry-specific case studies
- Targeted LinkedIn advertising
- Regional event invitations

**Tier 3 (60 accounts): Programmatic**
- Automated nurture sequences
- Industry webinars
- Retargeting campaigns
- Intent-triggered outreach

### The Multi-Threading Strategy

Health system deals die when your champion leaves or gets overruled. We developed a systematic approach to building multiple relationships within each account.

**Persona Mapping:**
We identified 6 key personas in every health system deal:
1. Clinical Champion (usually a surgeon or department head)
2. IT Decision Maker (CMIO or VP of Applications)
3. Quality/Outcomes Leader
4. Finance Stakeholder
5. Executive Sponsor (C-suite)
6. Implementation Owner

**Content by Persona:**
Each persona received different content:
- Clinical: Peer-reviewed research, clinical outcomes data
- IT: Integration documentation, security certifications
- Quality: Benchmarking reports, compliance information
- Finance: ROI calculators, case study economics
- Executive: Strategic vision pieces, industry trends

### The Conference Strategy

AAOS (American Academy of Orthopaedic Surgeons) was our Super Bowl. Here's how we maximized it:

**3 Months Before:**
- Identified all target account attendees through the registration list
- Created personalized pre-show outreach sequences
- Booked dinner reservations at top restaurants near the venue

**At the Conference:**
- Hosted a private dinner for 20 clinical champions from Tier 1 accounts
- Ran targeted ads geofenced to the convention center
- Had customer speakers in our booth sessions

**Post-Conference:**
- Immediate follow-up within 24 hours
- Custom recap content for each conversation
- Fast-tracked demo scheduling for hot leads

### The Customer Reference Network

Our biggest competitive advantage was our customer reference network. Health systems talk to each other. A positive reference from a peer institution is worth more than any marketing content.

We built a formal reference program:
- Identified "super-fans" at each customer site
- Created incentives for successful reference calls
- Tracked reference activity in HubSpot
- Matched references by geography, size, and specialty

### Measuring ABM Success

Traditional metrics don't capture ABM value. We tracked:

**Engagement Metrics:**
- Account engagement score (composite of all stakeholder activity)
- Multi-stakeholder engagement rate
- Persona coverage (% of key personas engaged)

**Pipeline Metrics:**
- Target account conversion rate
- Average deal size (Tier 1 vs. Tier 2 vs. Tier 3)
- Sales cycle length by tier
- Win rate by engagement score

**Efficiency Metrics:**
- Cost per engaged account
- Marketing-influenced pipeline by tier
- Reference utilization rate

### Results

Over 18 months:
- Closed deals with 4 of our top 10 target accounts
- Average deal size for ABM accounts was 2.3x larger than inbound
- Win rate on Tier 1 accounts was 40% (vs. 15% company average)
- 44% of total pipeline came from ABM programs

### Key Learnings

**1. Patience is mandatory.** Our shortest Tier 1 deal was 9 months. Most were 14-16 months. Budget for the long game.

**2. Sales and marketing must be one team.** Weekly ABM standups, shared account plans, and joint QBRs are non-negotiable.

**3. Content quality > quantity.** One exceptional case study from a marquee health system outperformed 50 blog posts.

**4. Relationships compound.** An engaged contact who moves to a new health system brings you with them. Play the long game on relationships.

---

*Running ABM for healthcare? I've got templates for account plans, persona mapping, and conference strategies. [Let's connect](/contact).*
    `,
  },
  {
    slug: "technical-skills-marketing-leaders",
    title: "Technical Skills Every Marketing Leader Should Have in 2024",
    description:
      "The gap between marketing and engineering is closing. Here are the technical skills that have made me more effective as a marketing leader—and how to develop them.",
    tags: ["Leadership", "Technical Skills", "Career"],
    featured: false,
    publishedAt: "2024-06-05",
    readingTime: "6 min read",
    content: `
## The Changing Role of Marketing Leadership

When I started in marketing, "technical skills" meant knowing how to use Excel pivot tables. Today, the most effective marketing leaders I know can write SQL queries, understand APIs, and have at least conversational fluency in how software works.

This isn't about becoming an engineer. It's about removing bottlenecks, making better decisions, and earning credibility with technical teams.

### The Skills That Actually Matter

After years of building marketing technology stacks, here are the skills that have paid the highest dividends:

### 1. SQL (Time investment: 20 hours to useful)

SQL is the lingua franca of data. If you can write basic queries, you can:
- Pull your own reports without waiting for analysts
- Validate data in your CRM
- Build custom audience segments
- Debug attribution issues

**Where I use it:**
At AASM, I discovered our webinar registration numbers were wrong because a SQL query revealed duplicate entries our reports were missing. That 5-minute query saved us from making decisions based on inflated metrics.

**How to learn:**
Start with [Mode's SQL Tutorial](https://mode.com/sql-tutorial/). Practice on your own CRM data. You don't need to master joins and subqueries—just SELECT, WHERE, and GROUP BY will take you far.

### 2. API Fundamentals (Time investment: 10 hours to useful)

Understanding APIs unlocks a world of integrations. You don't need to write code—just understand how data flows between systems.

**Where I use it:**
When evaluating martech tools, I can assess their API documentation and understand integration complexity. This has saved us from buying tools that don't play well with our stack.

**Practical application:**
Use Postman to make test API calls to your CRM. See how data is structured. Understand rate limits and authentication. This knowledge transforms conversations with developers.

### 3. HTML/CSS (Time investment: 15 hours to useful)

You don't need to build websites, but understanding how web pages work helps with:
- Email template customization
- Landing page optimization
- Debugging tracking issues
- Communicating with developers

**Where I use it:**
When our email templates break in Outlook, I can diagnose and fix the issue in minutes instead of filing a ticket.

### 4. JavaScript Basics (Time investment: 25 hours to useful)

Google Tag Manager, tracking pixels, and most marketing tools run on JavaScript. Basic understanding helps with:
- Setting up custom tracking
- Debugging tag fires
- Understanding event-based analytics
- Evaluating tool implementations

**Where I use it:**
At PatientIQ, I set up custom event tracking in GTM that let us measure engagement depth on our case studies. This data informed our content strategy.

### 5. Version Control Concepts (Time investment: 5 hours to useful)

If you work with developers or manage a website, understanding Git basics helps you:
- Participate in technical discussions
- Understand deployment processes
- Review changes before they go live
- Recover from mistakes

**Where I use it:**
When reviewing website changes, I can look at pull requests and understand what's changing. This catches issues before they affect production.

### How to Build These Skills

**Start with a real problem.** Don't learn SQL in the abstract—use it to answer a question you actually have about your data.

**Pair with technical teammates.** Ask an engineer to explain something they're working on. Most are happy to share knowledge.

**Build something small.** Create a personal website. Set up a database. The hands-on experience is invaluable.

**Allocate learning time.** Block 2 hours per week for technical learning. Treat it as non-negotiable.

### The Credibility Factor

Technical skills change how engineering teams see you. When I can speak their language—even at a basic level—I get:
- Faster response times on requests
- Earlier involvement in technical decisions
- More honest assessments of feasibility
- Better collaboration on data projects

### What Not to Waste Time On

**Deep programming languages.** You don't need to learn Python unless you're doing data science. Focus on breadth over depth.

**Infrastructure and DevOps.** Interesting but rarely relevant to marketing decisions.

**Cutting-edge frameworks.** Let the engineers worry about whether to use React or Vue.

### The Mindset Shift

The goal isn't to replace technical specialists. It's to be a better partner to them and a more autonomous operator yourself.

When you can answer your own data questions, debug your own tracking, and understand how your systems connect, you spend less time waiting and more time doing.

That's the real value of technical skills for marketing leaders.

---

*Want recommendations for specific learning resources? [Get in touch](/contact) and I'll share my complete learning path.*
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
