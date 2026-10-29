/**
 * Static content for the landing page.
 * All copy lives here so sections can be edited without touching layout code.
 * Echoleaf and every company and person named below are fictional.
 */

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

/* Fictional customer logos. `shape` picks a simple glyph in LogoStrip. */
export const COMPANIES = [
  { name: 'Quillstack', shape: 'circle' },
  { name: 'Brightharbor', shape: 'square' },
  { name: 'Orbitfield', shape: 'ring' },
  { name: 'Tessellate', shape: 'triangle' },
  { name: 'Canopy & Co', shape: 'leaf' },
  { name: 'Halcyon', shape: 'diamond' },
];

export const STATS = [
  { value: 12000, suffix: '+', label: 'product teams onboarded' },
  { value: 4.8, decimals: 1, suffix: 'M', label: 'feedback items organized' },
  { value: 38, suffix: '%', label: 'faster roadmap decisions' },
];

export const FEATURES = [
  {
    icon: 'inbox',
    title: 'One unified inbox',
    description: 'Collect feedback from your widget, email, surveys and support chats in a single, searchable place.',
  },
  {
    icon: 'sparkles',
    title: 'AI theme detection',
    description: 'Similar requests are grouped automatically, so you see clear patterns instead of hundreds of loose notes.',
  },
  {
    icon: 'chart',
    title: 'Sentiment insights',
    description: 'Track how customers feel about each area of your product and spot problems before they grow.',
  },
  {
    icon: 'flag',
    title: 'Public roadmap',
    description: 'Share what is planned, in progress and shipped. Customers vote on and follow the ideas they care about.',
  },
  {
    icon: 'bell',
    title: 'Close the loop',
    description: 'Notify every customer who asked for a feature the moment it ships, with a single click.',
  },
  {
    icon: 'shield',
    title: 'Privacy by default',
    description: 'Role-based access, single sign-on on Business plans and data stored in the region you choose.',
  },
];

/* Alternating detail blocks. `visual` maps to a component in FeatureVisuals.jsx. */
export const FEATURE_DETAILS = [
  {
    visual: 'channels',
    eyebrow: 'Collect',
    title: 'Every channel, one calm inbox',
    description:
      'Stop copying feedback between tools. Echoleaf pulls requests from every place your customers talk to you and keeps the original context attached.',
    points: ['Embeddable feedback widget', 'Email forwarding and CSV import', 'Customer and account details on every item'],
    visualLabel: 'An inbox with four new feedback items from the widget, email, a survey and support.',
  },
  {
    visual: 'themes',
    eyebrow: 'Understand',
    title: 'See the patterns, not the noise',
    description:
      'Echoleaf reads every message, merges duplicates and ranks themes by how many customers ask and how much revenue they represent.',
    points: ['Automatic grouping you can refine', 'Rank by votes, revenue or sentiment', 'Weekly digest for the whole team'],
    visualLabel: 'Four detected themes ranked by number of requests, with Bulk export at the top.',
  },
  {
    visual: 'loop',
    eyebrow: 'Act',
    title: 'Ship it, then tell everyone who asked',
    description:
      'Link themes to roadmap items. When you ship, Echoleaf sends a personal update to every customer who requested the change.',
    points: ['Public roadmap with voting', 'One-click release notifications', 'Hosted changelog page included'],
    visualLabel: 'A shipped feature card and a notice that 142 customers who asked for it were notified.',
  },
];

export const STEPS = [
  {
    title: 'Connect your channels',
    description: 'Add the widget, forward your support inbox or import a CSV. Most teams are set up in about ten minutes.',
  },
  {
    title: 'Let Echoleaf sort it',
    description: 'AI tags every item, merges duplicates and scores each theme by votes, revenue and sentiment.',
  },
  {
    title: 'Decide and ship',
    description: 'Move top themes to your roadmap, ship with confidence and notify every customer who asked.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'We used to lose great ideas in chat threads. Now every request lands in Echoleaf, and our planning meetings take half the time.',
    name: 'Priya Raman',
    role: 'Head of Product',
    company: 'Orbitfield',
  },
  {
    quote:
      'The theme detection is impressively accurate. It turned two years of support tickets into twelve clear themes in one afternoon.',
    name: 'Daniel Okafor',
    role: 'Customer Experience Lead',
    company: 'Brightharbor',
  },
  {
    quote:
      'Closing the loop changed how customers see us. People reply to our release updates just to say thank you.',
    name: 'Mei Lin Torres',
    role: 'Co-founder',
    company: 'Quillstack',
  },
];

export const FAQS = [
  {
    question: 'How does the free trial work?',
    answer:
      'You get 14 days of every Pro feature with no credit card required. At the end of the trial you can pick a plan, or your workspace switches to read-only until you do.',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      'Yes. Upgrades take effect immediately and are prorated. Downgrades apply at the start of your next billing period.',
  },
  {
    question: 'Where can Echoleaf collect feedback from?',
    answer:
      'From the embeddable website widget, email forwarding, in-app surveys and CSV imports, plus integrations with popular chat, support and issue-tracking tools.',
  },
  {
    question: 'How accurate is the AI theme detection?',
    answer:
      'It groups similar requests even when customers use different words. You can merge, split or rename any theme, and the model learns from your corrections.',
  },
  {
    question: 'Is my customer data secure?',
    answer:
      'All data is encrypted in transit and at rest. You choose the hosting region, control access with roles, and Business plans add single sign-on and audit logs.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer:
      'Yes. Startups with fewer than ten people and registered nonprofits get 50% off the Pro plan for the first year.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer:
      'You can export everything as CSV or JSON at any time. After you cancel, your data is kept for 30 days and then permanently deleted.',
  },
];

/* Links to pages that do not exist in this demo lead to the custom 404 page. */
export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: 'mailto:hello@echoleaf.example' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
];

/* Replace these with your own profile URLs. */
export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'X', href: 'https://x.com/' },
];
