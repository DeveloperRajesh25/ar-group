/**
 * Seed Sanity with the static venture & partner data from lib/data.ts.
 *
 * Usage:
 *   1. Create an Editor-permission API token in https://sanity.io/manage → API → Tokens
 *   2. Add it to .env.local as:
 *        SANITY_API_WRITE_TOKEN=sk...
 *   3. Run:
 *        npm run seed
 *
 * Re-runs are idempotent — documents use deterministic IDs (createOrReplace),
 * but image assets are re-uploaded each run (Sanity dedupes by content hash).
 */

import { createClient } from '@sanity/client';
import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { VENTURES, PARTNERS } from '../lib/data';

// ---------- Load .env.local manually (no dotenv dep) ----------
async function loadEnv() {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    const content = await readFile(envPath, 'utf-8');
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {
    // .env.local missing — keep going, will error below if vars are unset
  }
}

let client: ReturnType<typeof createClient>;
let projectId = '';
let dataset = 'production';

async function initClient() {
  await loadEnv();
  projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
  dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  const token = process.env.SANITY_API_WRITE_TOKEN;

  if (!projectId) {
    console.error('✗ NEXT_PUBLIC_SANITY_PROJECT_ID missing in .env.local');
    process.exit(1);
  }
  if (!token) {
    console.error('✗ SANITY_API_WRITE_TOKEN missing in .env.local');
    console.error('  Create one at https://sanity.io/manage → API → Tokens (permissions: Editor)');
    process.exit(1);
  }

  client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  });
}

// ---------- Helpers ----------

type SanityImageRef = { _type: 'image'; asset: { _type: 'reference'; _ref: string } };
type SanityFileRef = { _type: 'file'; asset: { _type: 'reference'; _ref: string } };

const imageCache = new Map<string, SanityImageRef>();
const fileCache = new Map<string, SanityFileRef>();

async function loadFromSrc(src: string): Promise<{ buffer: Buffer; filename: string }> {
  if (src.startsWith('http://') || src.startsWith('https://')) {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`Fetch failed (${res.status}) for ${src}`);
    const arr = await res.arrayBuffer();
    const u = new URL(src);
    const filename = path.basename(u.pathname) || 'remote-asset';
    return { buffer: Buffer.from(arr), filename };
  }
  // Local — resolve against /public
  const decoded = decodeURIComponent(src).replace(/^\//, '');
  const localPath = path.join(process.cwd(), 'public', decoded);
  const buffer = await readFile(localPath);
  return { buffer, filename: path.basename(localPath) };
}

async function uploadImage(src: string | undefined): Promise<SanityImageRef | undefined> {
  if (!src) return undefined;
  if (imageCache.has(src)) return imageCache.get(src);
  try {
    const { buffer, filename } = await loadFromSrc(src);
    const asset = await client.assets.upload('image', buffer, { filename });
    const ref: SanityImageRef = {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    };
    imageCache.set(src, ref);
    process.stdout.write('.');
    return ref;
  } catch (err) {
    console.warn(`\n  ! Skipped image: ${src} — ${(err as Error).message}`);
    return undefined;
  }
}

async function uploadFile(src: string | undefined): Promise<SanityFileRef | undefined> {
  if (!src) return undefined;
  if (fileCache.has(src)) return fileCache.get(src);
  try {
    const { buffer, filename } = await loadFromSrc(src);
    const asset = await client.assets.upload('file', buffer, { filename });
    const ref: SanityFileRef = {
      _type: 'file',
      asset: { _type: 'reference', _ref: asset._id },
    };
    fileCache.set(src, ref);
    return ref;
  } catch (err) {
    console.warn(`\n  ! Skipped file: ${src} — ${(err as Error).message}`);
    return undefined;
  }
}

function key(prefix: string, idx: number, suffix = '') {
  return `${prefix}-${idx}${suffix ? `-${suffix}` : ''}`.replace(/[^a-z0-9-]/gi, '');
}

// ---------- Seed ventures ----------

async function seedVentures() {
  console.log(`\n→ Seeding ${VENTURES.length} ventures...`);

  for (const v of VENTURES) {
    process.stdout.write(`  · ${v.name} `);

    const [coverImage, listingImage, clubhouseImage] = await Promise.all([
      uploadImage(v.coverImage),
      uploadImage(v.listingImage),
      uploadImage(v.clubhouseImage),
    ]);

    const gallery = (
      await Promise.all((v.gallery || []).map((src) => uploadImage(src)))
    )
      .filter((r): r is SanityImageRef => Boolean(r))
      .map((ref, i) => ({ ...ref, _key: key('gal', i) }));

    const floorPlanImages = (
      await Promise.all((v.floorPlanImages || []).map((src) => uploadImage(src)))
    )
      .filter((r): r is SanityImageRef => Boolean(r))
      .map((ref, i) => ({ ...ref, _key: key('fp', i) }));

    const floorPlanGroups = v.floorPlanGroups
      ? await Promise.all(
          v.floorPlanGroups.map(async (g, gi) => ({
            _type: 'floorPlanGroup',
            _key: key('fpg', gi),
            title: g.title,
            images: (
              await Promise.all(
                g.images.map(async (img, ii) => {
                  const image = await uploadImage(img.src);
                  if (!image) return null;
                  return {
                    _type: 'floorPlanImage',
                    _key: key('fpi', gi * 100 + ii),
                    label: img.label,
                    image,
                  };
                }),
              )
            ).filter(Boolean),
          })),
        )
      : undefined;

    const amenities = (v.amenities || []).map((a, i) => ({
      _type: 'amenity',
      _key: key('am', i),
      name: a.name,
      icon: a.icon,
    }));

    const amenityGroups = v.amenityGroups
      ? await Promise.all(
          v.amenityGroups.map(async (g, gi) => ({
            _type: 'amenityGroup',
            _key: key('amg', gi),
            title: g.title,
            image: await uploadImage(g.image),
            items: g.items,
          })),
        )
      : undefined;

    const specifications = v.specifications?.map((g, gi) => ({
      _type: 'specGroup',
      _key: key('spec', gi),
      title: g.title,
      items: g.items,
    }));

    const brochurePdf = await uploadFile(v.brochurePdf);

    const doc: Record<string, unknown> = {
      _id: `venture-${v.slug}`,
      _type: 'venture',
      name: v.name,
      slug: { _type: 'slug', current: v.slug },
      tagline: v.tagline,
      status: v.status,
      order: v.order,
      coverImage,
      listingImage,
      clubhouseImage,
      gallery,
      floorPlanImages,
      floorPlanGroups,
      propertyType: v.propertyType,
      location: v.location,
      size: v.size,
      configurations: v.configurations,
      possessionDate: v.possessionDate,
      reraNumber: v.reraNumber,
      developerWebsite: v.developerWebsite,
      about: v.about,
      features: v.features,
      amenities,
      amenityGroups,
      specifications,
      locationAdvantages: v.locationAdvantages,
      googleMapsEmbed: v.googleMapsEmbed,
      brochurePdf,
      seoTitle: v.seoTitle,
      seoDescription: v.seoDescription,
    };

    // Strip undefined fields so Sanity doesn't store nulls
    for (const k of Object.keys(doc)) {
      if (doc[k] === undefined) delete doc[k];
    }

    await client.createOrReplace(doc as never);
    console.log(' ✓');
  }
}

// ---------- Seed partners ----------

async function seedPartners() {
  console.log(`\n→ Seeding ${PARTNERS.length} managing partners...`);

  for (const p of PARTNERS) {
    process.stdout.write(`  · ${p.name} `);

    const photo = await uploadImage(p.photo);

    const doc: Record<string, unknown> = {
      _id: `partner-${p.slug}`,
      _type: 'partner',
      name: p.name,
      slug: { _type: 'slug', current: p.slug },
      designation: p.designation,
      photo,
      order: p.order,
      shortBio: p.shortBio,
      fullBio: p.fullBio,
      visionOrMission: p.visionOrMission,
    };

    for (const k of Object.keys(doc)) {
      if (doc[k] === undefined) delete doc[k];
    }

    await client.createOrReplace(doc as never);
    console.log(' ✓');
  }
}

// ---------- Run ----------

(async () => {
  await initClient();
  console.log(`Project: ${projectId}   Dataset: ${dataset}`);
  try {
    await seedVentures();
    await seedPartners();
    console.log('\n✓ Seed complete. Open /studio to view documents.');
  } catch (err) {
    console.error('\n✗ Seed failed:', err);
    process.exit(1);
  }
})();
