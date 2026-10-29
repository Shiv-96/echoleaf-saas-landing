/**
 * Pricing data. Edit prices, features and labels here only;
 * the Pricing section renders everything from this object.
 *
 * price.monthly = price per month when billed monthly.
 * price.yearly  = price per month when billed yearly (the yearly total is price.yearly * 12).
 */
export const PRICING = {
  currency: 'USD',
  yearlyDiscountLabel: 'Save 20%',
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'For small teams collecting their first customer feedback.',
      price: { monthly: 15, yearly: 12 },
      cta: 'Start free trial',
      highlighted: false,
      features: ['Up to 3 team members', '500 feedback items per month', 'Feedback widget and email inbox', 'Public roadmap'],
    },
    {
      id: 'pro',
      name: 'Pro',
      badge: 'Most popular',
      description: 'For growing product teams that need AI insights.',
      price: { monthly: 30, yearly: 24 },
      cta: 'Start free trial',
      highlighted: true,
      features: [
        'Up to 15 team members',
        'Unlimited feedback items',
        'AI theme detection and sentiment',
        'Release notifications',
        'Integrations with chat and support tools',
      ],
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For larger companies with security and scale needs.',
      price: { monthly: 80, yearly: 64 },
      cta: 'Start free trial',
      highlighted: false,
      features: [
        'Unlimited team members',
        'Everything in Pro',
        'Single sign-on and audit logs',
        'Choice of data region',
        'Priority support',
      ],
    },
  ],
};
