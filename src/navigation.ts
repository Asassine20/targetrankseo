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
          href: getPermalink('/about-us'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Testimonials',
          href: getPermalink('/testimonials'),
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
        { text: 'SEO', href: '/seo' },
        { text: 'PPC (Google Ads)', href: '/ppc' },
        { text: 'Website Design & Development', href: '/website-design-development' },
        { text: 'Content Creation', href: '/content-creation' },
        { text: 'Social Media Management', href: '/social-media-management' },
        { text: 'Mobile App Development', href: '/mobile-app-development' },
        { text: 'Custom Software', href: '/custom-software' },
      ],
    },

    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about-us' },
        { text: 'Blog', href: '/blog' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Testimonials', href: '/testimonials' },
        { text: 'Case Studies', href: '/case-studies' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/targetrankseo/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61573018960763' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@targetrankseo' },
  ],
  footNote: `
 All rights reserved.
  `,
};
