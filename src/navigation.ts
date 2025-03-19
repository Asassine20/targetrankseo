import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'SEO',
          href: getPermalink('services/seo'),
        },
        {
          text: 'PPC (Google Ads)',
          href: getPermalink('services/ppc'),
        },
        {
          text: 'Website Design & Development',
          href: getPermalink('services/website-design-development'),
        },
        {
          text: 'Content Creation',
          href: getPermalink('services/content-creation'),
        },
        {
          text: 'Social Media Management',
          href: getPermalink('services/social-media-management'),
        },
        {
          text: 'Mobile App Development',
          href: getPermalink('services/mobile-app-development'),
        },
        {
          text: 'Custom Software',
          href: getPermalink('services/custom-software'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/#features'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Reviews',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Case Studies',
      href: '#',
    },
    /*
    {
      text: 'Landing Pages',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    */
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'SEO', href: '#' },
        { text: 'PPC (Google Ads)', href: '#' },
        { text: 'Website Design & Development', href: '#' },
        { text: 'Content Creation', href: '#' },
        { text: 'Social Media Management', href: '#' },
        { text: 'Mobile App Development', href: '#' },
        { text: 'Custom Software', href: '#' },
      ],
    },

    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Reviews', href: '#' },
        { text: 'Case Studies', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
 All rights reserved.
  `,
};
