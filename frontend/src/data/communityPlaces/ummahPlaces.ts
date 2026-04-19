/**
 * Ummah map data (imported from team spreadsheet).
 * Category keys match the Latino / Asian maps (`PlaceCategory`). Labels mirror `placeCategoryLabels`
 * in `communityMapPlaces.ts` (duplicated here to avoid a runtime import cycle).
 * Coordinates are approximate; verify with Google Maps or Geocoding API.
 */

import type { PlaceCategory } from "../communityMapPlaces";

/** Same pattern as `asianMapPlaces.ts` — Google Maps “search” URLs. */
function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Same union as the Latino / Asian community maps — keeps filter tabs consistent. */
export type UmmahCategoryId = PlaceCategory;

const PLACE_CATEGORY_LABELS: Record<PlaceCategory, string> = {
  community_clubs: "Community & Clubs",
  faith: "Faith",
  food: "Food",
  markets: "Markets",
  support_services: "Support Services",
  events: "Events",
  career_support: "Career Support",
};

const UMMAH_CATEGORY_ORDER: PlaceCategory[] = [
  "community_clubs",
  "faith",
  "food",
  "markets",
  "support_services",
  "events",
  "career_support",
];

export const UMMAH_CATEGORIES: { id: PlaceCategory; label: string }[] =
  UMMAH_CATEGORY_ORDER.map((id) => ({
    id,
    label: PLACE_CATEGORY_LABELS[id],
  }));

export type UmmahPlace = {
  id: string;
  categoryId: PlaceCategory;
  name: string;
  address: string;
  lat: number;
  lng: number;
  description: string;
  website?: string;
  /** Optional override; otherwise `getDirectionsUrl` uses address or lat,lng like other map data files. */
  googleMapLink?: string;
};

/** Spreadsheet rows mapped into Latino-map categories. */
export const ummahPlaces: UmmahPlace[] = [
  {
    id: "org-msa-hub",
    categoryId: "community_clubs",
    name: "Muslim Student Association (MSA) — HUB 355",
    address: "900 University Avenue, Riverside, CA 92507",
    lat: 33.9738,
    lng: -117.3292,
    description:
      "Social events, religious talks, community service, Ramadan iftars. Meetings Tuesdays at 5pm in HUB 355.",
    website: "https://www.instagram.com/msaucr/",
  },
  {
    id: "org-mesc",
    categoryId: "community_clubs",
    name: "MESC (Middle Eastern Student Center)",
    address: "Costo Hall 111, UC Riverside, Riverside, CA 92521",
    lat: 33.9729,
    lng: -117.3274,
    description:
      "Community space, free printing, coffee, support, cultural and Muslim-related programming.",
    website: "https://mesc.ucr.edu/",
  },
  {
    id: "org-mas-corona",
    categoryId: "community_clubs",
    name: "MAS Corona Center",
    address: "4234 Green River Rd, Corona, CA 92880",
    lat: 33.8807,
    lng: -117.5754,
    description:
      "Programs for families: tutoring, martial arts, Qur’an memorization, youth initiatives, and community connection.",
    website: "https://masgreaterla.org/mas-corona-center-home/",
  },
  {
    id: "org-mas-reverts",
    categoryId: "community_clubs",
    name: "MAS Corona Center — Reverts Reconnect",
    address: "4234 Green River Rd, Corona, CA 92880",
    lat: 33.88075,
    lng: -117.57545,
    description:
      "Supportive community for new Muslims: relationships, learning, and faith alongside peers.",
    website: "https://masgreaterla.org/mas-corona-center-home/",
  },
  {
    id: "org-sahaba-initiative",
    categoryId: "community_clubs",
    name: "Sahaba Initiative",
    address: "1887 Business Center Dr, Suite 3, San Bernardino, CA 92408",
    lat: 34.1048,
    lng: -117.2933,
    description:
      "Housing, hunger, economic stability, and well-being for families in crisis.",
    website: "https://www.sahabainitiative.org/about-us/",
  },
  {
    id: "org-manara-west",
    categoryId: "community_clubs",
    name: "Manara West",
    address: "2854 N Santiago Blvd Suite 203, Orange, CA 92867",
    lat: 33.7874,
    lng: -117.8531,
    description:
      "Leadership and professional development, spiritual and mental wellness resources, rapid response, and community consultation.",
    website: "https://manarawest.org/programs/",
  },
  {
    id: "org-islamic-relief",
    categoryId: "community_clubs",
    name: "Islamic Relief USA",
    address: "6131 Orangethorpe Ave Ste 280, Buena Park, CA 90620",
    lat: 33.8589,
    lng: -117.9894,
    description:
      "Relief and development worldwide; empowering communities and lifting voices.",
    website: "https://irusa.org",
  },
  {
    id: "res-faith-costo",
    categoryId: "support_services",
    name: "Costo Hall (commonly Room 228)",
    address: "900 University Ave, Riverside, CA 92521",
    lat: 33.9729,
    lng: -117.3274,
    description:
      "Prayer mats, Qurans, informal jama’ah with other Muslim students.",
  },
  {
    id: "res-faith-hub",
    categoryId: "support_services",
    name: "HUB (meditation / prayer room)",
    address: "Highlander Union Building, UC Riverside, Riverside, CA 92521",
    lat: 33.9752,
    lng: -117.3269,
    description: "Quick salah between classes.",
  },
  {
    id: "masjid-iscn",
    categoryId: "faith",
    name: "ISCN",
    address: "465 Santana Way, Corona, CA 92881",
    lat: 33.8419,
    lng: -117.5482,
    description:
      "Daily prayers; Friday Jumu’ah (large attendance) 1:00–1:30 PM; Ramadan and youth programs.",
  },
  {
    id: "food-halal-shack",
    categoryId: "food",
    name: "The Halal Shack",
    address: "HUB Plaza, UC Riverside, Riverside, CA 92521",
    lat: 33.9752,
    lng: -117.3267,
    description: "NYC-style halal bowls, wraps, falafel, and more.",
  },
  {
    id: "food-halal-guys",
    categoryId: "food",
    name: "Halal Guys",
    address: "1201 University Ave STE 102, Riverside, CA 92507",
    lat: 33.9754,
    lng: -117.3255,
    description: "American halal street-style platters and sandwiches.",
    website: "https://thehalalguys.com/locations/1201-university-ave-riverside/",
    googleMapLink: mapsSearchUrl(
      "1201 University Ave STE 102, Riverside, CA 92507",
    ),
  },
  {
    id: "food-lab",
    categoryId: "food",
    name: "Food Lab",
    address: "3605 Market St, Riverside, CA 92501",
    lat: 33.9818,
    lng: -117.3754,
    description:
      "Inland Empire food hall with many local eateries (including halal-friendly options — confirm at stalls).",
    website: "https://www.riversidefoodlab.com",
  },
  {
    id: "food-qamaria",
    categoryId: "food",
    name: "Qamaria Yemeni Coffee Co.",
    address: "1201 University Ave #109A, Riverside, CA 92507",
    lat: 33.97535,
    lng: -117.3254,
    description: "Yemeni coffee, teas, and pastries.",
    website: "https://www.qamariacoffee.com",
  },
  {
    id: "food-mandi",
    categoryId: "food",
    name: "Mandi Xpress Yemeni Restaurant and Coffee",
    address: "3940 University Ave, Riverside, CA 92501",
    lat: 33.9812,
    lng: -117.3588,
    description: "Yemeni mandi, coffee, and tea in a family-friendly setting.",
    website: "https://mandixpress.co",
  },
  {
    id: "food-urban-skillet",
    categoryId: "food",
    name: "Urban Skillet Riverside",
    address: "1223 University Ave STE 150, Riverside, CA 92507",
    lat: 33.9756,
    lng: -117.3253,
    description: "Burgers, fries, and shakes.",
    website: "https://urbanskilletcd.square.site/",
  },
  {
    id: "food-fufu",
    categoryId: "food",
    name: "Fufu's Mideast Grill",
    address: "3605 Market St, Riverside, CA 92501",
    lat: 33.98185,
    lng: -117.37535,
    description: "Middle Eastern kebabs, pita sandwiches, and grills.",
    website: "https://fufusgrill.com",
  },
  {
    id: "mkt-hala",
    categoryId: "markets",
    name: "Hala Produce & Market",
    address: "3375 Iowa Ave # N, Riverside, CA 92507",
    lat: 33.9718,
    lng: -117.2598,
    description:
      "Middle Eastern, Arabic, Persian, Turkish, and Pakistani groceries.",
  },
  {
    id: "mkt-glen-mor",
    categoryId: "markets",
    name: "Market at Glen Mor",
    address: "400 W Big Springs Rd, Riverside, CA 92507",
    lat: 33.9778,
    lng: -117.325,
    description: "Campus-area market; halal-certified chicken and beef options (confirm in store).",
  },
  {
    id: "mkt-little-dubai",
    categoryId: "markets",
    name: "Little Dubai Market",
    address: "3511 Madison St Suite B, Riverside, CA 92504",
    lat: 33.9221,
    lng: -117.4405,
    description: "Neighborhood grocery.",
  },
  {
    id: "mkt-kings",
    categoryId: "markets",
    name: "King's Market",
    address: "10218 Indiana Ave, Riverside, CA 92503",
    lat: 33.9488,
    lng: -117.3918,
    description: "Middle Eastern groceries, deli, spices, and baked goods.",
    website: "https://www.kingsfoodmarkets.com",
  },
  {
    id: "mkt-day-st",
    categoryId: "markets",
    name: "Day Street Market",
    address: "12125 Day St F301, Moreno Valley, CA 92557",
    lat: 33.9371,
    lng: -117.2285,
    description: "Produce, butcher, halal products.",
  },
  {
    id: "mkt-madinah",
    categoryId: "markets",
    name: "Madinah Halal Market",
    address: "9439 Magnolia Ave, Riverside, CA 92503",
    lat: 33.9155,
    lng: -117.4188,
    description: "Fresh Afghan bread Thursdays — call to confirm.",
  },
  {
    id: "sup-sahaba-food",
    categoryId: "support_services",
    name: "Sahaba Food and Wellness Center",
    address: "1694 N D St, San Bernardino, CA 92405",
    lat: 34.115,
    lng: -117.288,
    description:
      "Saturdays 11 AM — food support for families facing food insecurity. Contact Sahaba for details.",
    website: "https://www.sahabainitiative.org/about-us/",
  },
  {
    id: "fin-sahaba-emergency",
    categoryId: "support_services",
    name: "Sahaba Emergency Financial Assistance",
    address: "1694 N D St, San Bernardino, CA 92405",
    lat: 34.11505,
    lng: -117.28805,
    description:
      "Help with housing, employment, and utilities — contact Sahaba for eligibility.",
    website: "https://www.sahabainitiative.org/about-us/",
  },
  {
    id: "sup-sahaba-refugee",
    categoryId: "support_services",
    name: "Sahaba Refugee Support Services",
    address: "1694 N D St, San Bernardino, CA 92405",
    lat: 34.1151,
    lng: -117.2881,
    description:
      "Housing, employment, school, transportation, and systems navigation for refugee families.",
    website:
      "https://www.sahabainitiative.org/programs-services/refugee-support-services/",
  },
  {
    id: "sup-sahaba-expunge",
    categoryId: "support_services",
    name: "Sahaba Fresh Start — Expungement Clinics",
    address: "1695 N D St, San Bernardino, CA 92405",
    lat: 34.1152,
    lng: -117.2882,
    description:
      "Reducing barriers to employment for people with records seeking work.",
    website:
      "https://www.sahabainitiative.org/programs-services/fresh-start-expungement-clinics/",
  },
  {
    id: "sup-sahaba-edu",
    categoryId: "support_services",
    name: "Sahaba Community Education & Events",
    address: "1696 N D St, San Bernardino, CA 92405",
    lat: 34.1153,
    lng: -117.2883,
    description: "Workshops and classes led by experienced instructors.",
    website:
      "https://www.sahabainitiative.org/programs-services/community-education-events/",
  },
  {
    id: "sup-sahaba-mh",
    categoryId: "support_services",
    name: "Sahaba Mental Health Services",
    address: "1696 N D St, San Bernardino, CA 92405",
    lat: 34.11535,
    lng: -117.28835,
    description:
      "Individual, couples, and family therapy and support groups — contact for rates.",
    website:
      "https://www.sahabainitiative.org/programs-services/mental-health-services/",
  },
  {
    id: "evt-sisters-retreat",
    categoryId: "events",
    name: "MAS GLA Sisters Retreat 2026",
    address: "4234 Green River Rd, Corona, CA 92880",
    lat: 33.88065,
    lng: -117.57535,
    description: "Friday May 8 – Sunday May 10. Sisterhood, rest, and action.",
    website: "https://masgreaterla.org/events/mas-gla-sisters-retreat-2026/",
  },
  {
    id: "evt-youth-prophet",
    categoryId: "events",
    name: "MAS GLA — Why We Love Our Prophet (middle school youth)",
    address: "Online / MAS Corona Center, 4234 Green River Rd, Corona, CA 92880",
    lat: 33.8806,
    lng: -117.5753,
    description:
      "Weekly Wednesdays 6:00–7:30 PM for middle school boys and girls (confirm online vs in-person).",
    website: "https://masgreaterla.org/mas-corona-center-home/",
  },
  {
    id: "res-manara-career",
    categoryId: "career_support",
    name: "Manara West — Leadership opportunity",
    address: "2854 N Santiago Blvd Suite 203, Orange, CA 92867",
    lat: 33.78745,
    lng: -117.85305,
    description:
      "Leadership and professional development, wellness resources, rapid response, and consultation.",
    website: "https://manarawest.org/programs/",
  },
];

/** Same URL shape as `asianMapPlaces` / `latinoMapPlaces` (`/maps/search/?api=1&query=…`). */
export function getDirectionsUrl(place: UmmahPlace) {
  const explicit = place.googleMapLink?.trim();
  if (explicit) return explicit;
  const raw = place.address?.trim();
  if (raw) {
    return mapsSearchUrl(raw.replace(/\n/g, ", "));
  }
  return mapsSearchUrl(`${place.lat},${place.lng}`);
}

export function placesForCategory(categoryId: UmmahCategoryId) {
  return ummahPlaces.filter((p) => p.categoryId === categoryId);
}
