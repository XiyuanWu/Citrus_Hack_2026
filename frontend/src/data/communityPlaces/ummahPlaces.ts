/**
 * Ummah map data (imported from team spreadsheet).
 * Category keys and labels match the Latino belonging map (`PlaceCategory` / `placeCategoryLabels`).
 * Coordinates are approximate; verify with Google Maps or Geocoding API.
 */

import type { PlaceCategory } from "../communityMapPlaces";
import { placeCategoryLabels } from "../communityMapPlaces";

/** Same union as the Latino / Asian community maps — keeps filter tabs consistent. */
export type UmmahCategoryId = PlaceCategory;

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
    label: placeCategoryLabels[id],
  }));

export type UmmahPlace = {
  id: string;
  categoryId: PlaceCategory;
  name: string;
  address: string;
  lat: number;
  lng: number;
  description: string;
  photos: string[];
  website?: string;
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
    photos: [
      "https://picsum.photos/seed/ummah-org-msa-a/640/400",
      "https://picsum.photos/seed/ummah-org-msa-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-org-mesc-a/640/400",
      "https://picsum.photos/seed/ummah-org-mesc-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-org-mas-a/640/400",
      "https://picsum.photos/seed/ummah-org-mas-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-org-reverts-a/640/400",
      "https://picsum.photos/seed/ummah-org-reverts-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-org-sahaba-a/640/400",
      "https://picsum.photos/seed/ummah-org-sahaba-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-org-manara-a/640/400",
      "https://picsum.photos/seed/ummah-org-manara-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-org-irusa-a/640/400",
      "https://picsum.photos/seed/ummah-org-irusa-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-res-costo-a/640/400",
      "https://picsum.photos/seed/ummah-res-costo-b/640/400",
    ],
  },
  {
    id: "res-faith-hub",
    categoryId: "support_services",
    name: "HUB (meditation / prayer room)",
    address: "Highlander Union Building, UC Riverside, Riverside, CA 92521",
    lat: 33.9752,
    lng: -117.3269,
    description: "Quick salah between classes.",
    photos: [
      "https://picsum.photos/seed/ummah-res-hub-a/640/400",
      "https://picsum.photos/seed/ummah-res-hub-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-mas-iscn-a/640/400",
      "https://picsum.photos/seed/ummah-mas-iscn-b/640/400",
    ],
  },
  {
    id: "food-halal-shack",
    categoryId: "food",
    name: "The Halal Shack",
    address: "HUB Plaza, UC Riverside, Riverside, CA 92521",
    lat: 33.9752,
    lng: -117.3267,
    description: "NYC-style halal bowls, wraps, falafel, and more.",
    photos: [
      "https://picsum.photos/seed/ummah-food-shack-a/640/400",
      "https://picsum.photos/seed/ummah-food-shack-b/640/400",
    ],
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
    googleMapLink:
      "https://www.google.com/maps/dir/?api=1&destination=1201+University+Ave+STE+102,+Riverside,+CA+92507",
    photos: [
      "https://picsum.photos/seed/ummah-food-halalg-a/640/400",
      "https://picsum.photos/seed/ummah-food-halalg-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-food-lab-a/640/400",
      "https://picsum.photos/seed/ummah-food-lab-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-food-qam-a/640/400",
      "https://picsum.photos/seed/ummah-food-qam-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-food-mandi-a/640/400",
      "https://picsum.photos/seed/ummah-food-mandi-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-food-urban-a/640/400",
      "https://picsum.photos/seed/ummah-food-urban-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-food-fufu-a/640/400",
      "https://picsum.photos/seed/ummah-food-fufu-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-mkt-hala-a/640/400",
      "https://picsum.photos/seed/ummah-mkt-hala-b/640/400",
    ],
  },
  {
    id: "mkt-glen-mor",
    categoryId: "markets",
    name: "Market at Glen Mor",
    address: "400 W Big Springs Rd, Riverside, CA 92507",
    lat: 33.9778,
    lng: -117.325,
    description: "Campus-area market; halal-certified chicken and beef options (confirm in store).",
    photos: [
      "https://picsum.photos/seed/ummah-mkt-glen-a/640/400",
      "https://picsum.photos/seed/ummah-mkt-glen-b/640/400",
    ],
  },
  {
    id: "mkt-little-dubai",
    categoryId: "markets",
    name: "Little Dubai Market",
    address: "3511 Madison St Suite B, Riverside, CA 92504",
    lat: 33.9221,
    lng: -117.4405,
    description: "Neighborhood grocery.",
    photos: [
      "https://picsum.photos/seed/ummah-mkt-dubai-a/640/400",
      "https://picsum.photos/seed/ummah-mkt-dubai-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-mkt-kings-a/640/400",
      "https://picsum.photos/seed/ummah-mkt-kings-b/640/400",
    ],
  },
  {
    id: "mkt-day-st",
    categoryId: "markets",
    name: "Day Street Market",
    address: "12125 Day St F301, Moreno Valley, CA 92557",
    lat: 33.9371,
    lng: -117.2285,
    description: "Produce, butcher, halal products.",
    photos: [
      "https://picsum.photos/seed/ummah-mkt-day-a/640/400",
      "https://picsum.photos/seed/ummah-mkt-day-b/640/400",
    ],
  },
  {
    id: "mkt-madinah",
    categoryId: "markets",
    name: "Madinah Halal Market",
    address: "9439 Magnolia Ave, Riverside, CA 92503",
    lat: 33.9155,
    lng: -117.4188,
    description: "Fresh Afghan bread Thursdays — call to confirm.",
    photos: [
      "https://picsum.photos/seed/ummah-mkt-madinah-a/640/400",
      "https://picsum.photos/seed/ummah-mkt-madinah-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-sup-food-a/640/400",
      "https://picsum.photos/seed/ummah-sup-food-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-fin-em-a/640/400",
      "https://picsum.photos/seed/ummah-fin-em-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-sup-ref-a/640/400",
      "https://picsum.photos/seed/ummah-sup-ref-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-sup-exp-a/640/400",
      "https://picsum.photos/seed/ummah-sup-exp-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-sup-edu-a/640/400",
      "https://picsum.photos/seed/ummah-sup-edu-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-sup-mh-a/640/400",
      "https://picsum.photos/seed/ummah-sup-mh-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-evt-ret-a/640/400",
      "https://picsum.photos/seed/ummah-evt-ret-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-evt-youth-a/640/400",
      "https://picsum.photos/seed/ummah-evt-youth-b/640/400",
    ],
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
    photos: [
      "https://picsum.photos/seed/ummah-res-career-a/640/400",
      "https://picsum.photos/seed/ummah-res-career-b/640/400",
    ],
  },
];

export function getDirectionsUrl(place: UmmahPlace) {
  const raw = place.address?.trim();
  if (raw) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(raw.replace(/\n/g, ", "))}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
}

export function placesForCategory(categoryId: UmmahCategoryId) {
  return ummahPlaces.filter((p) => p.categoryId === categoryId);
}
