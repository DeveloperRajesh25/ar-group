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
      'Spanish & French themed luxury villas in an 18-acre integrated township — a community built for generations.',
    status: 'Live',
    order: 1,
    listingImage: '/kamadhenu-infra-1/Gallery/cover.png',
    coverImage: '/kamadhenu-infra-1/Gallery/cover.png',
    clubhouseImage: '/kamadhenu-infra-1/Gallery/2.png',
    gallery: [
      '/kamadhenu-infra-1/Gallery/1.png',
      '/kamadhenu-infra-1/Gallery/2.png',
      '/kamadhenu-infra-1/Gallery/4.png',
      '/kamadhenu-infra-1/Gallery/5.webp',
      '/kamadhenu-infra-1/Gallery/6.png',
      '/kamadhenu-infra-1/Gallery/cover.png',
    ],
    floorPlanImages: [
      '/kamadhenu-infra-1/EAST FACING FLOOR PLAN/Ground floor .jpeg',
      '/kamadhenu-infra-1/EAST FACING FLOOR PLAN/1st floor.jpeg',
      '/kamadhenu-infra-1/EAST FACING FLOOR PLAN/2nd floor.png',
      '/kamadhenu-infra-1/WEST FACING FLOOR PLAN/ground floor.png',
      '/kamadhenu-infra-1/WEST FACING FLOOR PLAN/1st floor.png',
      '/kamadhenu-infra-1/WEST FACING FLOOR PLAN/2nd floor.png',
    ],
    floorPlanGroups: [
      {
        title: 'East Facing Villa',
        images: [
          { label: 'Ground Floor', src: '/kamadhenu-infra-1/EAST FACING FLOOR PLAN/Ground floor .jpeg' },
          { label: 'First Floor', src: '/kamadhenu-infra-1/EAST FACING FLOOR PLAN/1st floor.jpeg' },
          { label: 'Second Floor', src: '/kamadhenu-infra-1/EAST FACING FLOOR PLAN/2nd floor.png' },
        ],
      },
      {
        title: 'West Facing Villa',
        images: [
          { label: 'Ground Floor', src: '/kamadhenu-infra-1/WEST FACING FLOOR PLAN/ground floor.png' },
          { label: 'First Floor', src: '/kamadhenu-infra-1/WEST FACING FLOOR PLAN/1st floor.png' },
          { label: 'Second Floor', src: '/kamadhenu-infra-1/WEST FACING FLOOR PLAN/2nd floor.png' },
        ],
      },
    ],
    propertyType: 'Premium Themed Villas',
    location: 'Gundimeda, Vijayawada–Amaravati Corridor',
    size: '18-acre integrated township',
    configurations: 'East & West Facing Villas',
    possessionDate: 'Ready to Occupy',
    reraNumber: 'P02400005821',
    developerWebsite: 'https://www.kamadhenuinfra.com/projects/villas',
    about: [
      'Kamadhenu Pearls is a Spanish & French themed luxury villa community set within an 18-acre integrated township on the rapidly growing Vijayawada–Amaravati corridor. Every villa is finished with arched elements, clean lines, warm tones and classic facades — built ready-to-occupy for families who value privacy, character and long-term value.',
      'Residents enjoy access to the region\'s largest clubhouse, three themed amenity zones (Kids Park, Senior Citizen Park and Clubhouse), and 24/7 smart-infrastructure security — all wrapped in landscaped tree-lined avenues and private gardens.',
    ],
    features: [
      '18-acre integrated township',
      'Spanish & French themed luxury villas',
      'Ready-to-occupy premium homes',
      "Access to the region's largest clubhouse",
      '24/7 security with smart infrastructure',
      'Landscaped avenues & private gardens',
      'East and West facing villa options',
      'RCC framed structure with quality finishes',
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
        image: '/kamadhenu-infra-1/Gallery/2.png',
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
        image: '/kamadhenu-infra-1/Gallery/1.png',
        items: [
          'Kids Play Area',
          'Kids Jungle Gym',
          'Running Zone',
          'Kids Cycling Track',
          'Amphi Theatre',
          'Khabbadi Zone',
          'Box Cricket',
          'Outdoor Badminton Court',
          'Kids Hammock',
          'Sand Pit',
          'Reading Zone',
          'Skating Area',
          'Trampoline Zone',
        ],
      },
      {
        title: 'Senior Citizen Park',
        image: '/kamadhenu-infra-1/Gallery/4.png',
        items: [
          'Walkway & Jogging Track',
          'Acupuncture Pathway',
          'Yoga Zone',
          'Reflexology Pathway',
          'Meditation Zone',
          'Outdoor Gym',
          'Outdoor Chess Play Area',
          'Hydration Station',
          'Gardening Zone',
          'Star Gazing Zone',
          'Rock Climbing Wall',
        ],
      },
    ],
    specifications: [
      {
        title: 'Structure',
        items: [
          'RCC framed structure designed for seismic safety',
          'High-grade sand and cement composition',
          'External walls in solid block masonry',
        ],
      },
      {
        title: 'Flooring & Painting',
        items: [
          'Vitrified / premium tile flooring in living and bedrooms',
          'Anti-skid tiles in toilets and balconies',
          'Internal walls finished with putty + emulsion paint',
          'Exterior in textured weather-proof finish',
        ],
      },
      {
        title: 'Doors, Windows & Ventilators',
        items: [
          'Designer main door with quality hardware',
          'Internal flush doors with laminated finish',
          'UPVC / aluminium windows with mosquito mesh',
          'French doors opening to balconies / decks',
        ],
      },
      {
        title: 'Electrical',
        items: [
          'Concealed copper wiring of reputed make',
          'Modular switches and protected MCB distribution',
          'Provisions for AC, geyser, chimney and hob',
          'Adequate light, power and data points throughout',
        ],
      },
      {
        title: 'Plumbing & Water-proofing',
        items: [
          'CPVC / UPVC plumbing of reputed brands',
          'Premium sanitary ware and CP fittings',
          'Treated water supply to every villa',
          'Comprehensive water-proofing for terraces and wet areas',
        ],
      },
    ],
    locationAdvantages: [
      'Located in the Vijayawada–Amaravati growth corridor',
      'Strong connectivity to NH-16 and core city',
      'Reputed schools, colleges and hospitals nearby',
      'Walking distance from upcoming commercial hubs',
      'Strong long-term appreciation potential',
      'Peaceful, gated 18-acre township setting',
    ],
    googleMapsEmbed:
      'https://www.google.com/maps?q=Kamadhenu+Pearls+Gundimeda&output=embed',
    seoTitle:
      'Kamadhenu Pearls | Premium Themed Villas in Vijayawada | RERA Approved | AL Group',
    seoDescription:
      'Kamadhenu Pearls — Spanish & French themed luxury villas in an 18-acre integrated township at Gundimeda, Vijayawada. RERA approved, ready-to-occupy. Book your visit with AL Group.',
  },
  {
    slug: 'bliss-valley',
    name: 'Bliss Valley',
    tagline:
      'Luxury plotted development offering peaceful surroundings and future-ready growth opportunities.',
    status: 'Live',
    order: 2,
    brochurePdf: '/Brochure_Bliss%20Valley.pdf',
    coverImage:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
    ],
    floorPlanImages: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
    ],
    propertyType: 'Plotted Development',
    location: 'Outskirts of Visakhapatnam',
    size: '200 - 500 sq yards',
    configurations: 'Residential Plots',
    possessionDate: 'Ready to Register',
    reraNumber: 'P02400005934',
    about: [
      'Bliss Valley is an expansive plotted development offering pristine, future-ready plots in a peaceful, landscaped environment. The layout is designed for families who want to build their dream home on their own terms — at their own pace.',
      'Every plot at Bliss Valley is VMRDA approved, with planned internal roads, underground utilities, landscaped avenues, and clear titles. The location offers excellent connectivity while maintaining the calm of suburban living.',
    ],
    features: [
      'VMRDA approved residential plots',
      'Clear title with full legal documentation',
      'Wide blacktop internal roads',
      'Underground electrical and water supply',
      'Avenue planting and landscaped community zones',
      'Compound wall and security gates',
      'Dedicated children\'s play area and parks',
      'Multiple plot sizes for flexible budget',
    ],
    amenities: [
      { name: 'Landscaped Avenues', icon: 'Trees' },
      { name: 'Parks & Open Spaces', icon: 'TreePine' },
      { name: 'Wide Roads', icon: 'Route' },
      { name: 'Children\'s Play Area', icon: 'Baby' },
      { name: 'Walking Track', icon: 'Footprints' },
      { name: '24/7 Security', icon: 'Shield' },
      { name: 'Street Lighting', icon: 'Lamp' },
      { name: 'Underground Drainage', icon: 'Waves' },
    ],
    locationAdvantages: [
      'Excellent connectivity to Vizag city center',
      'Quick access to NH-16',
      'Schools, hospitals, and shopping within easy reach',
      'Upcoming IT and industrial hubs nearby',
      'Strong year-on-year appreciation in the corridor',
      'Peaceful, low-density neighborhood',
    ],
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.5!2d83.21!3d17.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sVisakhapatnam!5e0!3m2!1sen!2sin!4v1700000000000',
    seoTitle:
      'Bliss Valley | Premium VMRDA Plots near Vizag | AL Group',
    seoDescription:
      'Luxury plotted development with VMRDA approved plots, wide roads, and serene surroundings. Build your dream home with secure investment. Visit with AL Group.',
  },
  {
    slug: 'sridevis-srinivasam',
    name: "Sridevi's Srinivasam",
    tagline:
      'Upcoming premium venture near Bhogapuram designed for modern living and secure investment.',
    status: 'Upcoming',
    order: 3,
    coverImage:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472556-e636c2acda88?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=1600&q=80',
    ],
    floorPlanImages: [
      'https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&w=1200&q=80',
    ],
    propertyType: 'Premium Plotted Venture',
    location: 'Bhogapuram corridor, Andhra Pradesh',
    size: '150 - 400 sq yards',
    configurations: 'Residential Plots',
    possessionDate: 'Q3 2026',
    reraNumber: 'Application Filed',
    about: [
      'Sridevi\'s Srinivasam is an upcoming premium plotted venture in the Bhogapuram corridor — one of Andhra Pradesh\'s fastest-growing real estate belts. The project promises a refined community lifestyle, planned infrastructure, and significant appreciation potential.',
      'Designed with families and forward-looking investors in mind, the venture offers a curated selection of plot sizes, premium amenities, and a thoughtful master plan. Pre-launch enquiries are now open.',
    ],
    features: [
      'Master-planned plotted community',
      'Multiple plot configurations',
      'Tree-lined avenues',
      'Underground utilities',
      'Community-focused amenity zones',
      'Clear approvals and documentation',
    ],
    amenities: [
      { name: 'Community Clubhouse', icon: 'Building2' },
      { name: 'Landscaped Parks', icon: 'Trees' },
      { name: 'Wide Internal Roads', icon: 'Route' },
      { name: 'Walking & Jogging Track', icon: 'Footprints' },
      { name: 'Children\'s Play Area', icon: 'Baby' },
      { name: '24/7 Security', icon: 'Shield' },
    ],
    locationAdvantages: [
      'Proximity to the upcoming Bhogapuram International Airport',
      'Direct connectivity to Vizag via NH-16',
      'Excellent schools and educational institutions nearby',
      'Future commercial and IT growth zone',
      'Beach drive and tourism corridor close by',
    ],
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.5!2d83.21!3d17.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sBhogapuram!5e0!3m2!1sen!2sin!4v1700000000000',
    seoTitle:
      "Sridevi's Srinivasam | Upcoming Premium Venture near Bhogapuram | AL Group",
    seoDescription:
      'Upcoming premium plotted venture in the Bhogapuram corridor. Modern community, planned infrastructure, and high appreciation potential. Pre-launch enquiries open.',
  },
  {
    slug: 'vasudha-nivas',
    name: 'Vasudha Nivas',
    tagline:
      'New premium plotted development launching soon — peaceful, well-connected, and future-ready.',
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
    location: 'Andhra Pradesh',
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
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.5!2d83.21!3d17.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sAndhraPradesh!5e0!3m2!1sen!2sin!4v1700000000000',
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
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
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
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
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
    title: 'RERA, VMRDA & CRDA Approved',
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
  'We are a real estate marketing company specializing in promoting developers\' ventures and plotted developments. We concentrate on strategic promotion, lead generation, and sales support to help our projects reach the right audience. All projects we work with are RERA approved and approved by relevant urban development authorities (VMRDA & CRDA), ensuring reliable and secure investment opportunities for buyers.',
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
