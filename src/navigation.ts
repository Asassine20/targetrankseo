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
      text: 'Tools',
      links: [
        {
          text: 'Google Trends Analyzer',
          href: getPermalink('/tools/google-trends'),
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
    
    /*
    {
      text: 'Case Studies',
      href: '#',
    },
    */

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
      href: getBlogPermalink()
    }
  

  ],
  actions: [{ text: 'Contact Us', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'SEO', href: '/services/seo' },
        { text: 'PPC (Google Ads)', href: '/services/ppc' },
        { text: 'Website Design & Development', href: '/services/website-design-development' },
        { text: 'Content Creation', href: '/services/content-creation' },
        { text: 'Social Media Management', href: '/services/social-media-management' },
        { text: 'Mobile App Development', href: '/services/mobile-app-development' },
        { text: 'Custom Software', href: '/services/custom-software' },
      ],
    },

    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about-us' },
        { text: 'Blog', href: '/blog' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Testimonials', href: '/testimonials' },
        /*{ text: 'Case Studies', href: '#' },*/
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
