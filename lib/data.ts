/**
 * Static fallback data — used when Sanity is not configured.
 * Schemas in lib/sanity/schemas mirror this shape.
 */

export type VentureStatus = 'Live' | 'Upcoming' | 'Coming Soon' | 'Sold Out';

export interface Amenity {
  name: string;
  icon: string; // lucide-react icon name
}

export interface AmenityGroup {
  title: string;
  image?: string;
  items: string[];
}

export interface FloorPlanGroup {
  title: string;
  images: { label: string; src: string }[];
}

export interface SpecGroup {
  title: string;
  items: string[];
}

export interface Venture {
  slug: string;
  name: string;
  tagline: string;
  status: VentureStatus;
  order: number;
  listingImage?: string; // image shown on the /ventures listing card (clubhouse front, etc.)
  coverImage: string;
  clubhouseImage?: string;
  gallery: string[];
  floorPlanImages: string[];
  floorPlanGroups?: FloorPlanGroup[];
  propertyType: string;
  location: string;
  size: string;
  configurations: string;
  possessionDate: string;
  reraNumber: string;
  developerWebsite?: string;
  about: string[];
  features: string[];
  amenities: Amenity[];
  amenityGroups?: AmenityGroup[];
  specifications?: SpecGroup[];
  locationAdvantages: string[];
  googleMapsEmbed: string;
  brochurePdf?: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Partner {
  slug: string;
  name: string;
  designation: string;
  photo: string;
  order: number;
  shortBio: string;
  fullBio: string[];
  visionOrMission: {
    label: 'Vision' | 'Mission';
    content: string;
  };
}

export const VENTURES: Venture[] = [
  {
    slug: 'kamadhenu-pearls',
    name: 'Kamadhenu Pearls',
    tagline:
      'The first integrated township in the Amaravati Capital Region — Spanish & French themed luxury villas across 19 acres beside Gundimeda, Guntur District.',
    status: 'Live',
    order: 1,
    brochurePdf: '/kamadhenu%20pearls%20_final%20draft_/Kamadhenu%20Pearls%20eBrochure%20-%203.pdf',
    listingImage: '/kamadhenu%20pearls%20_final%20draft_/Gallery/when%20clicked%20on%20kamadhenu%20pearls%20this%20shall%20be%20the%20opening%20picture.%20.png',
    coverImage: '/kamadhenu%20pearls%20_final%20draft_/Gallery/when%20clicked%20on%20kamadhenu%20pearls%20this%20shall%20be%20the%20opening%20picture.%20.png',
    clubhouseImage: '/kamadhenu%20pearls%20_final%20draft_/club%20house/clubhouse%20.png',
    gallery: [
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/when%20clicked%20on%20kamadhenu%20pearls%20this%20shall%20be%20the%20opening%20picture.%20.png',
      '/kamadhenu%20pearls%20_final%20draft_/club%20house/clubhouse%20.png',
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/1.png',
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/2.png',
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/4.png',
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/5.png',
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/6.png',
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/7.png',
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/8.png',
      '/kamadhenu%20pearls%20_final%20draft_/Gallery/9.png',
      '/kamadhenu%20pearls%20_final%20draft_/senior%20citizen%20park.png',
    ],
    floorPlanImages: [
      '/kamadhenu%20pearls%20_final%20draft_/EAST%20FACING%20FLOOR%20PLAN/Ground%20floor%20.jpeg',
      '/kamadhenu%20pearls%20_final%20draft_/EAST%20FACING%20FLOOR%20PLAN/1st%20floor.jpeg',
      '/kamadhenu%20pearls%20_final%20draft_/EAST%20FACING%20FLOOR%20PLAN/2nd%20floor.png',
      '/kamadhenu%20pearls%20_final%20draft_/WEST%20FACING%20FLOOR%20PLAN/ground%20floor.png',
      '/kamadhenu%20pearls%20_final%20draft_/WEST%20FACING%20FLOOR%20PLAN/1st%20floor.png',
      '/kamadhenu%20pearls%20_final%20draft_/WEST%20FACING%20FLOOR%20PLAN/2nd%20floor.png',
    ],
    floorPlanGroups: [
      {
        title: 'East Facing Villa — 2,345 sft',
        images: [
          { label: 'Ground Floor (1,060 sft)', src: '/kamadhenu%20pearls%20_final%20draft_/EAST%20FACING%20FLOOR%20PLAN/Ground%20floor%20.jpeg' },
          { label: 'First Floor (895 sft)', src: '/kamadhenu%20pearls%20_final%20draft_/EAST%20FACING%20FLOOR%20PLAN/1st%20floor.jpeg' },
          { label: 'Second Floor (390 sft)', src: '/kamadhenu%20pearls%20_final%20draft_/EAST%20FACING%20FLOOR%20PLAN/2nd%20floor.png' },
        ],
      },
      {
        title: 'West Facing Villa — 2,345 sft',
        images: [
          { label: 'Ground Floor (1,060 sft)', src: '/kamadhenu%20pearls%20_final%20draft_/WEST%20FACING%20FLOOR%20PLAN/ground%20floor.png' },
          { label: 'First Floor (895 sft)', src: '/kamadhenu%20pearls%20_final%20draft_/WEST%20FACING%20FLOOR%20PLAN/1st%20floor.png' },
          { label: 'Second Floor (390 sft)', src: '/kamadhenu%20pearls%20_final%20draft_/WEST%20FACING%20FLOOR%20PLAN/2nd%20floor.png' },
        ],
      },
    ],
    propertyType: 'Integrated Township — 4 BHK Villas & Plots',
    location: 'Beside Gundimeda Village, Amaravati Capital Region, Guntur District',
    size: '19 acres • 258 villa plots (155 – 1,000 sq. yards)',
    configurations: '4 BHK Villas (2,345 sft) — East & West Facing',
    possessionDate: 'Ready to Occupy',
    reraNumber: 'L.P.No.: 25/2026/1143/TDP/DPMS',
    developerWebsite: 'https://www.kamadhenuinfra.com/projects/villas',
    about: [
      'Kamadhenu Pearls rises from the fertile soil beside Gundimeda Village as the first and largest integrated township in the Amaravati Capital Region — a transformational blueprint for Andhra Pradesh, conceived under the jurisdiction of APCRDA. Spread across 19 acres with 258 villa plots, the township brings together Spanish and French themed luxury villas, modern infrastructure, and a community designed for generations.',
      'Set in the heart of Amaravati\'s green belt, the project sits just 10 minutes from Vijayawada, 15 minutes from the Amaravati Secretariat, and within excellent highway connectivity. Residents enjoy 12m and 9m wide concrete roads, avenue plantation and green belts, the region\'s largest clubhouse with 50+ amenities, themed kids and senior citizen parks, and 24×7 smart security.',
      'Backed by the Kamadhenu Group — a name synonymous with growth and trust across infrastructure, dairy, packaging, commodities, steel and cement trading — Kamadhenu Pearls is built on a legacy as strong as the land itself.',
    ],
    features: [
      '19 acres integrated township with grand entrance arch',
      'Spanish & French themed luxury villas',
      '258 villa plots — 155 to 1,000 sq. yards',
      '4 BHK villas with 2,345 sft built-up area',
      '12m and 9m wide concrete roads',
      'Avenue plantation & green belts',
      "Region's largest clubhouse with 50+ amenities",
      'Yoga & meditation zone, jogging & cycling tracks',
      'Open-air amphitheatre & convenience stores',
      'LED street lighting, 24×7 security',
      'Underground EB, water and sewerage provision',
    ],
    amenities: [
      { name: 'Clubhouse', icon: 'Building2' },
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Multi Purpose Hall', icon: 'Utensils' },
      { name: "Kids Play Area", icon: 'Baby' },
      { name: 'Landscaped Avenues', icon: 'Trees' },
      { name: 'Walkway & Jogging Track', icon: 'Footprints' },
      { name: 'Yoga / Aerobics', icon: 'Activity' },
      { name: 'Mini Theatre', icon: 'Clapperboard' },
      { name: '24/7 Smart Security', icon: 'Shield' },
    ],
    amenityGroups: [
      {
        title: 'Clubhouse Amenities',
        image: '/kamadhenu%20pearls%20_final%20draft_/club%20house/clubhouse%20.png',
        items: [
          'Swimming Pool',
          'Kids Play Area',
          'Multi Purpose Hall',
          'Outdoor Deck',
          'Party Lawn',
          'Yoga / Aerobics',
          'Mini Theatre',
          'Gymnasium',
          'Terrace Party Area',
        ],
      },
      {
        title: 'Kids Themed Park',
        image: '/kamadhenu%20pearls%20_final%20draft_/kids-park.png',
        items: [
          'Kids Play Area',
          'Kids Jungle Gym',
          'Trampoline',
          'Slam Dunk Basketball',
          'Box Cricket',
          'Skating Area',
          'Kids Cycling Track',
          'Running Zone',
          'Snake and Ladder Zone',
          'Kabaddi Zone',
          'Sand Pit',
          'Kids Hammock',
          'Outdoor Badminton Court',
          'Rock Climbing Wall',
          'Mini Golf Putting',
        ],
      },
      {
        title: 'Senior Citizen Park',
        image: '/kamadhenu%20pearls%20_final%20draft_/senior%20citizen%20park.png',
        items: [
          'Walkway & Jogging Track',
          'Acupuncture Pathway',
          'Gardening Zone',
          'Amphitheater / Seating Area',
          'Yoga Zone',
          'Meditation Zone',
          'Reflexology Pathway',
          'Outdoor Gym',
          'Coffee Zone',
          'Reading Zone',
          'Outdoor Chess Play Area',
          'Hydration Station',
          'Star Gazing Zone',
          'Bio Pond and Fountain',
        ],
      },
    ],
    specifications: [
      {
        title: 'Structure',
        items: [
          'RCC framed structure with M25 grade concrete as per structural drawings',
          'TMT steel for all reinforcement works',
          'River sand with standard mixing proportions',
          'Light-weight red brick masonry — 9″ external, 4″ internal walls',
          'SS railing for balconies and staircases where required',
        ],
      },
      {
        title: 'Flooring',
        items: [
          '2′×2′ double-charged vitrified tiles in living and bedrooms',
          'Shabad stone in parking and building periphery',
          'Anti-skid / matt-finish vitrified tiles in sitout, balcony, utility and lobby',
          'Granite slab treads & risers for staircases',
          'Anti-skid tiles in utility & toilets (300×450 mm or 300×300 mm)',
          '300×600 mm wall tiles in utility & toilets',
        ],
      },
      {
        title: 'Doors, Windows & Ventilators',
        items: [
          'Main door: first-quality wood frame with solid wooden shutter, PU polished',
          'Internal flush doors with laminate finish in first-quality wood frames',
          'UPVC sliding windows with mosquito mesh and MS grills',
          'French doors opening to balconies / decks',
        ],
      },
      {
        title: 'Electrical',
        items: [
          '3-phase concealed copper wiring in conduits, reputed brand',
          'Provision for generator and UPS',
          'Power sockets for cooking range, microwave, refrigerator, mixer, aqua guard',
          'Power provision for TV, DVD/VCD and desktop',
          'MCB & ELCB at every distribution board',
          'GM / Anchor Roma modular switches and sockets',
          'Conduit for broadband, dish and telephone at multiple points',
          'Adequate earthing pits as required',
        ],
      },
      {
        title: 'Plumbing & Sanitary',
        items: [
          'CPVC water lines with ISI mark (Aashirvad SDR-11)',
          'Sewerage lines with FOAM CORE pipes, ISI mark (Sudhakar make)',
          'Jaguar make sanitary and plumbing fittings',
          'Floor-mounted single-piece EWC',
          '2-in-1 wall mixer / diverter with overhead shower and health faucet',
          'Half-pedestal wash basin with basin tap in each toilet',
        ],
      },
      {
        title: 'Painting & Finishes',
        items: [
          'External: Asian Paints exterior texture & Ultima finish',
          'Internal: 2 coats of putty, 1 coat primer, 2 coats Tractor Emulsion (Asian Paints)',
          'Roller finish, colour as per selection',
          '2-coat cement plastering inside and outside',
        ],
      },
      {
        title: 'Water-proofing & Elevation',
        items: [
          'Water-proofing in every bathroom with proper slope to drain water',
          'Terrace water-proofing with slope to north-east corner',
          'Elevation as per architect\'s final details and specifications',
        ],
      },
    ],
    locationAdvantages: [
      '2 mins — NH-16 Chennai–Kolkata Highway',
      '2 mins — D-Mart, Ratnadeep Super Market, KL University',
      '2 mins — AIMEE International School, Gitanjali School',
      '2 mins — Manipal Hospital',
      '6 mins — AIIMS Hospital',
      '7 mins — Central Bus Stand',
      '10 mins — Vijayawada Railway Station, Mangalagiri IT Park',
      '10 mins — NRI Medical College',
      '12 mins — NRI Hospital',
      '15 mins — Amaravati Secretariat',
      '20 mins — Amaravati, SRM & VIT Universities',
      '25 mins — Vijayawada International Airport',
    ],
    googleMapsEmbed:
      'https://www.google.com/maps?q=16.4414978,80.6367278&z=15&output=embed',
    seoTitle:
      'Kamadhenu Pearls | First Integrated Township in Amaravati Capital Region | RERA Approved | AL Group',
    seoDescription:
      'Kamadhenu Pearls — Spanish & French themed luxury villas in a 19-acre integrated township at Gundimeda, Amaravati Capital Region. Ready to occupy. 258 plots, 50+ amenities. Book your visit with AL Group.',
  },
  {
    slug: 'bliss-valley',
    name: 'Bliss Valley',
    tagline:
      'A destination for cherished dreams — luxury villa plots at Gundimeda, Tadepalli, where nature\'s peace meets urban joy.',
    status: 'Live',
    order: 2,
    brochurePdf: '/BLISS%20Valley/Brochure_Bliss%20Valley%20final%20final%20draft%20(1).pdf',
    listingImage: '/BLISS%20Valley/gallery/page-03.jpg',
    coverImage: '/BLISS%20Valley/gallery/page-03.jpg',
    clubhouseImage: '/BLISS%20Valley/gallery/page-14.jpg',
    gallery: [
      '/BLISS%20Valley/gallery/page-03.jpg',
      '/BLISS%20Valley/gallery/page-08.jpg',
      '/BLISS%20Valley/gallery/page-09.jpg',
      '/BLISS%20Valley/gallery/page-10.jpg',
      '/BLISS%20Valley/gallery/page-11.jpg',
      '/BLISS%20Valley/gallery/page-12.jpg',
      '/BLISS%20Valley/gallery/page-13.jpg',
      '/BLISS%20Valley/gallery/page-14.jpg',
    ],
    floorPlanImages: [
      '/BLISS%20Valley/gallery/page-04.jpg',
      '/BLISS%20Valley/gallery/page-08.jpg',
    ],
    floorPlanGroups: [
      {
        title: 'Master Layout Plan',
        images: [
          { label: 'Layout Plan — APCRDA & AP RERA Approved', src: '/BLISS%20Valley/gallery/page-04.jpg' },
          { label: 'Master Plan — Aerial View', src: '/BLISS%20Valley/gallery/page-08.jpg' },
        ],
      },
    ],
    propertyType: 'Luxury Villa Plots',
    location: 'Gundimeda Village, Tadepalli, Guntur District (A.P.)',
    size: 'Multiple plot sizes available',
    configurations: 'Residential Villa Plots',
    possessionDate: 'Ready to Register',
    reraNumber: 'AP RERA & APCRDA Approved',
    developerWebsite: 'https://www.kamadhenuinfra.com/projects/villas',
    about: [
      'Bliss Valley is a thoughtfully designed layout blending countryside calm with urban convenience. With ultra-modern amenities and seamless access to everyday comforts, it offers the best of both worlds. Located close to the urban heart of Tadepalli, part of the fast-growing Mangalagiri–Tadepalli corridor, it stands as a destination where beauty and peace converge into one perfect address.',
      'Designed for families who value space, privacy and refined leisure, Bliss Valley\'s clubhouse is a haven of curated comfort. It\'s where convenience meets elegance — whether for guests or residents, it\'s a space that brings people together in style and ease.',
    ],
    features: [
      'Luxury villa plots',
      'Grand entrance with arch',
      '40 & 30 Ft. internal CC roads',
      '24×7 security services',
      'Luxury clubhouse',
      'Serene plantation',
      'Underground electricity',
      'Designer street lights',
      'Underground drainage',
      'Water tank',
      "Children's play area",
      'Water supply to each plot',
      'Open gymnasium',
      'All-around compound wall',
    ],
    amenities: [
      { name: 'Luxury Clubhouse', icon: 'Building2' },
      { name: 'Grand Entrance Pergola', icon: 'DoorOpen' },
      { name: 'Indoor Games', icon: 'Gamepad2' },
      { name: 'AC Gymnasium', icon: 'Dumbbell' },
      { name: 'Yoga / Meditation', icon: 'Activity' },
      { name: 'Banquet Hall', icon: 'Utensils' },
      { name: 'Luxury Guest Rooms', icon: 'BedDouble' },
      { name: 'Landscaped Park', icon: 'Trees' },
      { name: "Children's Play Area", icon: 'Baby' },
      { name: 'Jogging & Cycling Track', icon: 'Footprints' },
      { name: 'Amphitheater', icon: 'Mic2' },
      { name: 'Multi Purpose Courts', icon: 'Trophy' },
      { name: 'Butterfly Garden', icon: 'Flower' },
      { name: 'Reflexology Pathway', icon: 'Route' },
      { name: '24×7 Security', icon: 'Shield' },
    ],
    amenityGroups: [
      {
        title: 'Club Amenities',
        image: '/BLISS%20Valley/gallery/page-14.jpg',
        items: [
          'Reception Lobby',
          'Maintenance Office',
          'AC Gymnasium',
          'Indoor Games',
          'Banquet Hall',
          'Yoga / Meditation',
          'Luxury Guest Rooms',
          'Landscaped Park',
        ],
      },
      {
        title: 'Landscape Amenities',
        image: '/BLISS%20Valley/gallery/page-09.jpg',
        items: [
          'Cricket Net Practice',
          'Children Play Area',
          'Outdoor Fitness Station',
          'Jogging Track',
          'Cycling Track',
          'Pathway',
          'Amphitheater',
          'Elderly Seating Areas',
          'Grand Entrance Pergolas',
          'Party Lawn',
          'Casual Seating Areas',
          'Street Plantation with Lighting',
          'Miyawaki Plantation in Park Areas',
          'Seating Alcoves',
          'Meditation / Nirvana Zone',
          'Volley Ball Court',
          'Butterfly Garden',
          'Reflexology Pathway',
          'Pet Park',
          '8 Shaped Merged Garden',
          'Security Cabin',
          'Half Basket Ball Court',
          'Pickleball Court',
          'Badminton Court',
        ],
      },
    ],
    locationAdvantages: [
      '02 min — KLU Engineering College',
      '04 min — D-Mart',
      '05 min — Outer Ring Road',
      '10 min — Tirupati / Tirupathi Junction',
      '10 min — Kanaka Durga Temple',
      '10 min — Police Head Quarters',
      '10 min — Vijayawada Bus Stand & Railway Station',
      '12 min — AIIMS Hospital',
      '18 min — Nagarjuna University',
      '20 min — Amaravati Capital Zone',
    ],
    googleMapsEmbed:
      'https://www.google.com/maps?q=16.4414978,80.6367278&z=16&output=embed',
    seoTitle:
      'Bliss Valley | Luxury Villa Plots @ Gundimeda, Tadepalli | APCRDA & AP RERA Approved | AL Group',
    seoDescription:
      'Bliss Valley — luxury villa plots at Gundimeda, Tadepalli. APCRDA and AP RERA approved. Clubhouse, landscape amenities and excellent connectivity. Visit with AL Group.',
  },
  {
    slug: 'sridevis-srinivasam',
    name: "Sreedevi's Srinivasam-1",
    tagline:
      'Creating connections between you and your dream home — VMRDA-approved residential plots at Akkivaram, Bhogapuram.',
    status: 'Live',
    order: 3,
    brochurePdf: '/sreedevi_s%20srinivasam/Srinivasam%20-%201%20(1).pdf',
    listingImage: '/sreedevi_s%20srinivasam/front%20page%20of%20website%20%26gallerhy.png',
    coverImage: '/sreedevi_s%20srinivasam/front%20page%20of%20website%20%26gallerhy.png',
    gallery: [
      '/sreedevi_s%20srinivasam/front%20page%20of%20website%20%26gallerhy.png',
      '/sreedevi_s%20srinivasam/gallery.png',
      '/sreedevi_s%20srinivasam/layout%20gallery.png',
      '/sreedevi_s%20srinivasam/pages/page-01.jpg',
      '/sreedevi_s%20srinivasam/pages/page-02.jpg',
      '/sreedevi_s%20srinivasam/pages/page-03.jpg',
    ],
    floorPlanImages: [
      '/sreedevi_s%20srinivasam/layout%20gallery.png',
      '/sreedevi_s%20srinivasam/pages/page-02.jpg',
    ],
    floorPlanGroups: [
      {
        title: 'Layout Plan',
        images: [
          { label: 'Proposed Layout — Akkivaram Village', src: '/sreedevi_s%20srinivasam/layout%20gallery.png' },
          { label: 'Master Layout with Project Highlights', src: '/sreedevi_s%20srinivasam/pages/page-02.jpg' },
        ],
      },
    ],
    propertyType: 'VMRDA-Approved Residential Plots',
    location: 'Akkivaram Village, Denkada Mandal, Vizianagaram District',
    size: 'Sy. Nos: 38/P, 42/P and 43/P',
    configurations: 'Residential Plots (100% Vaastu Compliant)',
    possessionDate: 'Ready to Construct',
    reraNumber: 'VMRDA Approved',
    developerWebsite: undefined,
    about: [
      "Sreedevi's Srinivasam-1, presented by Sree Devi Builders (SDB) and marketed by AL Group, is a VMRDA-approved residential venture at Akkivaram Village, Bhogapuram — one of Andhra Pradesh's fastest-growing real estate belts. The proposed layout sits across Sy. Nos 38/P, 42/P and 43/P in Denkada Mandal, Vizianagaram District.",
      'Designed for a worthy life — Sreedevi\'s Srinivasam-1 brings together class-apart entertainment, futuristic infrastructure, assured security, source-led sustainability, and the self-sufficiency of a township-style community. Every plot is 100% Vaastu compliant with clear title and bank loan facility available.',
      'The venture is just 10 minutes from the upcoming Bhogapuram International Airport, with direct access to NH-16 (AH-45, Chennai–Kolkata National Highway), and close to IT/SEZ hubs at Gambheeram and Rushikonda, the upcoming Knowledge City and Google AI Data Centre, the VZM RTC Complex, Railway Station, beach, coastal corridor and APIIC Industrial Park.',
    ],
    features: [
      '100% Vaastu Compliant',
      'Clear Title & Bank Loan Facility Available',
      'Beautiful Entrance Gate with Arch',
      '40 & 30 Ft. Internal BT Roads',
      'Avenue Plantation',
      'All-Around Compound Wall',
      'Footpath with KERB Stones',
      'Water Harvesting',
      'Elegant Street Lights',
      'Electricity',
      'UGD & Underground Water Supply',
      "Children's Park",
    ],
    amenities: [
      { name: 'Beautiful Entrance Gate', icon: 'DoorOpen' },
      { name: '40 & 30 Ft. BT Roads', icon: 'Route' },
      { name: 'Avenue Plantation', icon: 'Trees' },
      { name: 'Compound Wall', icon: 'Shield' },
      { name: 'Footpath with KERB', icon: 'Footprints' },
      { name: 'Water Harvesting', icon: 'CloudRain' },
      { name: 'Elegant Street Lights', icon: 'Lamp' },
      { name: 'Electricity', icon: 'Zap' },
      { name: 'UGD & Water Supply', icon: 'Waves' },
      { name: "Children's Park", icon: 'Baby' },
    ],
    amenityGroups: [
      {
        title: 'Lifestyle & Living',
        image: '/sreedevi_s%20srinivasam/gallery.png',
        items: [
          'Class-apart Entertainment',
          "Children's Park",
          'Avenue Plantation',
          'Beautiful Entrance Gate with Arch',
          'Elegant Street Lights',
        ],
      },
      {
        title: 'Infrastructure & Connectivity',
        image: '/sreedevi_s%20srinivasam/layout%20gallery.png',
        items: [
          'Futuristic Infrastructure',
          '40 & 30 Ft. Internal BT Roads',
          'Footpath with KERB Stones',
          'UGD & Underground Water Supply',
          'Electricity',
        ],
      },
      {
        title: 'Security & Sustainability',
        image: '/sreedevi_s%20srinivasam/pages/page-01.jpg',
        items: [
          'Assuredly Secured',
          'All-Around Compound Wall',
          'Sourcefully Sustainable',
          'Water Harvesting',
          '100% Vaastu Compliant',
          'Clear Title & Bank Loan Facility',
        ],
      },
    ],
    locationAdvantages: [
      'Ready to Construction',
      'Direct access to NH-16 (AH-45) Chennai–Kolkata National Highway',
      'Just 10 minutes drive to Bhogapuram International Airport',
      'Close to IT, SEZ in Gambheeram, Rushikonda IT SEZ',
      'Upcoming Knowledge City & Google AI Data Centre',
      'Close proximity to VZM RTC Complex and Railway Station',
      'Short drive to the beach',
      'Very near to Coastal Corridor and APIIC Industrial Park',
      'Near Avanthi, Maharaja, LENDI, Raghu Engineering College',
      'Near Oakridge School and many more',
    ],
    googleMapsEmbed:
      'https://www.google.com/maps?q=18.0226667,83.4694167&z=16&output=embed',
    seoTitle:
      "Sreedevi's Srinivasam-1 | VMRDA Approved Plots @ Akkivaram, Bhogapuram | AL Group",
    seoDescription:
      "Sreedevi's Srinivasam-1 — VMRDA approved residential plots at Akkivaram, Bhogapuram. 100% Vaastu compliant, clear title, bank loan facility. 10 mins from Bhogapuram International Airport. Marketed by AL Group.",
  },
  {
    slug: 'vasudha-nivas',
    name: 'Vasudha Nivas',
    tagline:
      'A new premium plotted development launching soon — peaceful, well-connected and future-ready.',
    status: 'Coming Soon',
    order: 4,
    coverImage:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1531219432768-9f540ef07307?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1600&q=80',
    ],
    floorPlanImages: [
      'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=1200&q=80',
    ],
    propertyType: 'Plotted Development',
    location: 'Vizianagaram Region, Andhra Pradesh',
    size: 'Multiple sizes available',
    configurations: 'Residential Plots',
    possessionDate: 'TBA',
    reraNumber: 'Coming Soon',
    about: [
      'Vasudha Nivas is the newest addition to the AL Group venture portfolio — a premium plotted development designed to bring together careful planning, quality infrastructure, and an attractive investment opportunity.',
      'Details for this venture will be unveiled shortly. Register early to receive exclusive pre-launch information, plot availability, and pricing.',
    ],
    features: [
      'Premium master-planned layout',
      'Wide internal roads',
      'Clear title and documentation',
      'Underground utilities planned',
      'Community amenities',
      'Strong locational fundamentals',
    ],
    amenities: [
      { name: 'Landscaped Avenues', icon: 'Trees' },
      { name: 'Parks & Greens', icon: 'TreePine' },
      { name: 'Wide Roads', icon: 'Route' },
      { name: 'Compound Wall', icon: 'Shield' },
      { name: 'Street Lighting', icon: 'Lamp' },
    ],
    locationAdvantages: [
      'Well-connected to major arterial roads',
      'Reputed schools and hospitals nearby',
      'Strong appreciation potential',
      'Peaceful, low-density neighborhood',
    ],
    googleMapsEmbed:
      'https://www.google.com/maps?q=18.066316,83.366946&z=15&output=embed',
    seoTitle:
      'Vasudha Nivas | Upcoming Plotted Development | AL Group',
    seoDescription:
      'New premium plotted development launching soon. Register your interest for pre-launch updates, pricing, and plot availability with AL Group.',
  },
];

export const PARTNERS: Partner[] = [
  {
    slug: 'indu-mohini-bogi',
    name: 'Indu Mohini Bogi',
    designation: 'Managing Partner',
    photo: '/indu-bogi.png',
    order: 1,
    shortBio:
      'Brings strategic vision, market insight, and customer-focused leadership to AL Group.',
    fullBio: [
      'Indu Mohini Bogi brings strategic vision, market insight, and customer-focused leadership to AL Group. With strong experience in real estate operations, venture promotions, and relationship management, she plays a key role in building trusted partnerships and helping clients identify secure, future-ready investment opportunities.',
      'Driven by integrity and long-term value creation, she is committed to strengthening AL Group\'s reputation as a trusted name in real estate marketing.',
    ],
    visionOrMission: {
      label: 'Vision',
      content:
        "To establish AL Group as one of Andhra Pradesh's most trusted real estate marketing and venture promotion companies through integrity, innovation, and customer success.",
    },
  },
  {
    slug: 'lokesh-bogi',
    name: 'Lokesh Bogi',
    designation: 'Managing Partner',
    photo: '/lokesh-bogi.png',
    order: 2,
    shortBio:
      'Plays a vital role in customer relations, business coordination, and project development support.',
    fullBio: [
      'Lokesh Bogi plays a vital role in customer relations, business coordination, and project development support at AL Group. Known for his transparent approach and personalized guidance, he works closely with clients to ensure a smooth and confident real estate investment experience.',
      'His focus on trust, communication, and long-term relationships helps clients make informed property decisions with confidence.',
    ],
    visionOrMission: {
      label: 'Mission',
      content:
        'To deliver transparent, reliable, and growth-oriented real estate opportunities while building lasting relationships with every customer.',
    },
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Transparency',
    description: 'Honest dealings, every step of the way.',
    icon: 'ShieldCheck',
  },
  {
    title: 'RERA, VMRDA & APCRDA Approved',
    description: 'Every project legally cleared.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Trusted Developer Partnerships',
    description: "Working with the region's best builders.",
    icon: 'Handshake',
  },
  {
    title: 'Expert Sales & Marketing Support',
    description: 'Strategic promotion that delivers.',
    icon: 'TrendingUp',
  },
  {
    title: 'Strong Digital Promotion Network',
    description: 'Modern outreach, maximum visibility.',
    icon: 'Wifi',
  },
  {
    title: 'Long-Term Client Relationships',
    description: 'Family-first, decade after decade.',
    icon: 'Heart',
  },
];

export const ABOUT_PARAGRAPHS = [
  'We are a real estate marketing company specializing in promoting developers\' ventures and plotted developments. We concentrate on strategic promotion, lead generation, and sales support to help our projects reach the right audience. All projects we work with are RERA approved and approved by relevant urban development authorities (VMRDA & APCRDA), ensuring reliable and secure investment opportunities for buyers.',
  'AL Group operates with a relationship-first philosophy — treating every client like family while helping them make emotionally and financially confident real estate decisions.',
  'We believe real estate is more than just land — it is about building futures, creating security, and helping families grow with confidence.',
];

export const HIGHLIGHT_QUOTE =
  'AL Group operates with a relationship-first philosophy — treating every client like family while helping them make emotionally and financially confident real estate decisions.';

export function getVentureBySlug(slug: string): Venture | undefined {
  return VENTURES.find((v) => v.slug === slug);
}

export function getAllVentureSlugs(): string[] {
  return VENTURES.map((v) => v.slug);
}
