import { groq } from 'next-sanity';
import { sanityClient, isSanityConfigured } from './client';
import { VENTURES, PARTNERS, type Venture, type Partner } from '../data';

const venturesQuery = groq`*[_type == "venture"] | order(order asc) {
  "slug": slug.current,
  name,
  tagline,
  status,
  order,
  "coverImage": coverImage.asset->url,
  "gallery": gallery[].asset->url,
  "floorPlanImages": floorPlanImages[].asset->url,
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
  locationAdvantages,
  googleMapsEmbed,
  "brochurePdf": brochurePdf.asset->url,
  seoTitle,
  seoDescription
}`;

const ventureBySlugQuery = groq`*[_type == "venture" && slug.current == $slug][0] {
  "slug": slug.current,
  name,
  tagline,
  status,
  order,
  "coverImage": coverImage.asset->url,
  "gallery": gallery[].asset->url,
  "floorPlanImages": floorPlanImages[].asset->url,
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
  locationAdvantages,
  googleMapsEmbed,
  "brochurePdf": brochurePdf.asset->url,
  seoTitle,
  seoDescription
}`;

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
