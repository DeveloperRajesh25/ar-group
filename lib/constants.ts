export const SITE = {
  name: 'AL Group',
  legalName: 'AL Group',
  tagline: "Your Family's Trusted Real Estate Partner",
  slogan: 'Envision | Invest | Grow',
  description:
    'AL Group promotes RERA, VMRDA & CRDA approved villas and plotted developments across Vizag and Bhogapuram. Your family\'s trusted real estate partner.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://alashtalakshmigroup.com',
  ogImage: '/og-image.jpg',
  locale: 'en_IN',
};

export const CONTACT = {
  phone: '+91 7416011507',
  phoneRaw: '+917416011507',
  whatsapp: '917416011507',
  email: 'ashtalakshmigroups@gmail.com',
  address: 'Visalakshi Nagar, Visakhapatnam, Andhra Pradesh',
  workingHours: 'Mon - Sat, 9:30 AM - 7:00 PM',
  googleMapsUrl: 'https://maps.app.goo.gl/DuTJXKciT4Vn8xoNA?g_st=iw',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.234567890!2d83.21!3d17.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzQ4LjAiTiA4M8KwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const SOCIALS = {
  instagram: 'https://instagram.com/algroup',
  facebook: 'https://facebook.com/algroup',
  linkedin: 'https://linkedin.com/company/algroup',
  youtube: 'https://youtube.com/@algroup',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Ventures', href: '/ventures' },
  { label: 'Managing Partners', href: '/managing-partners' },
  { label: 'Contact', href: '/contact' },
];

export const FORM_IDS = {
  contact: process.env.NEXT_PUBLIC_CONTACT_FORM_ID || 'YOUR_CONTACT_FORM_ID',
  visit: process.env.NEXT_PUBLIC_VISIT_FORM_ID || 'YOUR_VISIT_FORM_ID',
};

export const APPROVALS = [
  { name: 'RERA Approved', short: 'RERA', description: 'Real Estate Regulatory Authority' },
  { name: 'VMRDA Approved', short: 'VMRDA', description: 'Visakhapatnam Metropolitan Region Development Authority' },
  { name: 'CRDA Approved', short: 'CRDA', description: 'Capital Region Development Authority' },
];
