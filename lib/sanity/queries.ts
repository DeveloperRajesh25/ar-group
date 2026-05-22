import { groq } from 'next-sanity';
import { sanityClient, isSanityConfigured } from './client';
import { VENTURES, PARTNERS, type Venture, type Partner } from '../data';
import { SITE, CONTACT, SOCIALS } from '../constants';

// =====================================================================
// VENTURES
// =====================================================================

const ventureProjection = groq`{
  "slug": slug.current,
  name,
  tagline,
  status,
  order,
  "coverImage": coverImage.asset->url,
  "listingImage": listingImage.asset->url,
  "clubhouseImage": clubhouseImage.asset->url,
  "gallery": gallery[].asset->url,
  "floorPlanImages": floorPlanImages[].asset->url,
  "floorPlanGroups": floorPlanGroups[]{
    title,
    "images": images[]{ label, "src": image.asset->url }
  },
  propertyType,
  location,
  size,
  configurations,
  possessionDate,
  reraNumber,
  developerWebsite,
  about,
  features,
  amenities,
  "amenityGroups": amenityGroups[]{
    title,
    "image": image.asset->url,
    items
  },
  specifications,
  locationAdvantages,
  googleMapsEmbed,
  "brochurePdf": brochurePdf.asset->url,
  seoTitle,
  seoDescription
}`;

const venturesQuery = groq`*[_type == "venture"] | order(order asc) ${ventureProjection}`;
const ventureBySlugQuery = groq`*[_type == "venture" && slug.current == $slug][0] ${ventureProjection}`;

export async function getVentures(): Promise<Venture[]> {
  if (!isSanityConfigured || !sanityClient) return VENTURES;
  try {
    const data = await sanityClient.fetch<Venture[]>(venturesQuery);
    return data?.length ? data : VENTURES;
  } catch (err) {
    console.error('Sanity fetch error (ventures):', err);
    return VENTURES;
  }
}

export async function getVentureBySlug(slug: string): Promise<Venture | undefined> {
  if (!isSanityConfigured || !sanityClient) {
    return VENTURES.find((v) => v.slug === slug);
  }
  try {
    const data = await sanityClient.fetch<Venture>(ventureBySlugQuery, { slug });
    return data ?? VENTURES.find((v) => v.slug === slug);
  } catch (err) {
    console.error('Sanity fetch error (venture by slug):', err);
    return VENTURES.find((v) => v.slug === slug);
  }
}

// =====================================================================
// PARTNERS
// =====================================================================

const partnersQuery = groq`*[_type == "partner"] | order(order asc) {
  "slug": slug.current,
  name,
  designation,
  "photo": photo.asset->url,
  order,
  shortBio,
  fullBio,
  visionOrMission
}`;

export async function getPartners(): Promise<Partner[]> {
  if (!isSanityConfigured || !sanityClient) return PARTNERS;
  try {
    const data = await sanityClient.fetch<Partner[]>(partnersQuery);
    return data?.length ? data : PARTNERS;
  } catch (err) {
    console.error('Sanity fetch error (partners):', err);
    return PARTNERS;
  }
}

// =====================================================================
// SITE SETTINGS — contact info + brand basics
// =====================================================================

export interface SiteSettings {
  companyName: string;
  logo?: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  address: string;
  workingHours: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  socials: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  companyName,
  "logo": logo.asset->url,
  phone,
  email,
  whatsappNumber,
  address,
  workingHours,
  googleMapsUrl,
  googleMapsEmbed,
  socials
}`;

const SITE_SETTINGS_FALLBACK: SiteSettings = {
  companyName: SITE.name,
  phone: CONTACT.phone,
  email: CONTACT.email,
  whatsappNumber: CONTACT.whatsapp,
  address: CONTACT.address,
  workingHours: CONTACT.workingHours,
  googleMapsUrl: CONTACT.googleMapsUrl,
  googleMapsEmbed: CONTACT.googleMapsEmbed,
  socials: SOCIALS,
};

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured || !sanityClient) return SITE_SETTINGS_FALLBACK;
  try {
    const data = await sanityClient.fetch<Partial<SiteSettings> | null>(siteSettingsQuery);
    if (!data) return SITE_SETTINGS_FALLBACK;
    return {
      ...SITE_SETTINGS_FALLBACK,
      ...data,
      socials: { ...SITE_SETTINGS_FALLBACK.socials, ...(data.socials || {}) },
    };
  } catch (err) {
    console.error('Sanity fetch error (siteSettings):', err);
    return SITE_SETTINGS_FALLBACK;
  }
}

// =====================================================================
// PAGE IMAGES — hero & section images across the site
// =====================================================================

export interface PageImages {
  homeHeroBackground?: string;
  homeAboutImage?: string;
  homeCtaBackground?: string;
  aboutHeroBackground?: string;
  aboutStoryImage?: string;
  contactHeroBackground?: string;
  venturesHeroBackground?: string;
  partnersHeroBackground?: string;
}

const pageImagesQuery = groq`*[_type == "pageImages"][0]{
  "homeHeroBackground": homeHeroBackground.asset->url,
  "homeAboutImage": homeAboutImage.asset->url,
  "homeCtaBackground": homeCtaBackground.asset->url,
  "aboutHeroBackground": aboutHeroBackground.asset->url,
  "aboutStoryImage": aboutStoryImage.asset->url,
  "contactHeroBackground": contactHeroBackground.asset->url,
  "venturesHeroBackground": venturesHeroBackground.asset->url,
  "partnersHeroBackground": partnersHeroBackground.asset->url
}`;

export async function getPageImages(): Promise<PageImages> {
  if (!isSanityConfigured || !sanityClient) return {};
  try {
    const data = await sanityClient.fetch<PageImages | null>(pageImagesQuery);
    return data ?? {};
  } catch (err) {
    console.error('Sanity fetch error (pageImages):', err);
    return {};
  }
}
