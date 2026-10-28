import type { IconName } from "../components/ui";

export const CONTACT = {
  primaryPhone: "07530 193852",
  primaryTel: "tel:07530193852",
  jamesPhone: "07921 189865",
  jamesTel: "tel:07921189865",
  nickPhone: "07530 193852",
  email: "info@northwestvehiclesecurity.co.uk",
  mailto: "mailto:info@northwestvehiclesecurity.co.uk",
  support: "0203 835 3234",
  supportTel: "tel:02038353234",
  hours: "Mon–Sat, 8am–6pm",
  emergency: "24/7 emergency support",
};

export const NAV_LINKS = [
  { label: "Protection", href: "#products" },
  { label: "Why us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

export type Product = {
  id: string;
  tab: string;
  icon: IconName;
  eyebrow: string;
  name: string;
  headline: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  image: string;
  imageAlt: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "ghost",
    tab: "Ghost Immobiliser",
    icon: "lock",
    eyebrow: "Invisible immobiliser",
    name: "Autowatch Ghost 2",
    headline: "A secret only you know.",
    description:
      "The world's first aftermarket CAN bus immobiliser. No fob, no signal, no giveaway LED — just your own PIN, entered on the car's factory buttons, before the engine will start.",
    features: [
      "Defeats key cloning & relay theft",
      "Undetectable to diagnostic tools",
      "No monthly subscription, ever",
      "TASSA-approved installation",
    ],
    price: "£499",
    priceNote: "supplied & fitted, inc VAT",
    image:
      "https://images.pexels.com/photos/7662128/pexels-photo-7662128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    imageAlt:
      "Close-up of a luxury car centre console and key fob in carbon fibre and chrome",
    badge: "Most fitted",
  },
  {
    id: "tracker",
    tab: "GPS Tracker",
    icon: "satellite",
    eyebrow: "Insurance-approved tracking",
    name: "Thatcham & Scorpion",
    headline: "Always know where it is.",
    description:
      "Thatcham-approved S5 and S7 options with 24/7 control-room monitoring, instant movement and tow alerts, and full journey history in one clear app.",
    features: [
      "Thatcham S5 & S7 approved options",
      "Instant movement & tow-away alerts",
      "Live app with journey history",
      "Potentially lower insurance premiums",
    ],
    price: "from £199",
    priceNote: "supplied & fitted, inc VAT",
    image:
      "https://images.pexels.com/photos/15394303/pexels-photo-15394303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    imageAlt:
      "Illuminated modern car dashboard and dials photographed at night",
  },
  {
    id: "dashcam",
    tab: "Smart Dash Cam",
    icon: "camera",
    eyebrow: "Evidence, on the record",
    name: "Front & Rear Dash Cams",
    headline: "See exactly what happened.",
    description:
      "Discreetly hardwired front and rear cameras with parking-mode protection, looped recording and instant clips sent straight to your phone. No dangling cables.",
    features: [
      "Front & rear HD/4K options",
      "Parking-mode impact recording",
      "App access to saved footage",
      "Factory-look hardwired fitting",
    ],
    price: "from £199",
    priceNote: "supplied & fitted, inc VAT",
    image: "/images/dash-cam.jpg",
    imageAlt:
      "Discreetly mounted dash camera fitted neatly behind a luxury car's rear-view mirror",
  },
  {
    id: "fleet",
    tab: "Fleet Tracking",
    icon: "van",
    eyebrow: "Built for business",
    name: "Track Manager Fleet",
    headline: "Every van, one clear view.",
    description:
      "A single dashboard for vehicle locations, driver behaviour, geofencing and maintenance reminders — scalable from one vehicle to a hundred-plus.",
    features: [
      "Live location & route replay",
      "Driver behaviour scorecards",
      "Geofencing & out-of-hours alerts",
      "Maintenance, MOT & service reminders",
    ],
    price: "from £12",
    priceNote: "per vehicle / month",
    image:
      "https://images.pexels.com/photos/4391469/pexels-photo-4391469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    imageAlt: "A white delivery van parked outside a modern business building",
  },
  {
    id: "locksmith",
    tab: "Auto Locksmith",
    icon: "key",
    eyebrow: "Lost, stolen or locked in",
    name: "24/7 Auto Locksmith",
    headline: "Back on the road, fast.",
    description:
      "Lost your only key or locked them inside? Our certified auto locksmiths replace, cut and code keys on site, with non-destructive entry and full module recoding.",
    features: [
      "Lost & stolen key replacement",
      "Non-destructive vehicle opening",
      "Key cutting & module recoding",
      "Diagnostics & spare keys",
    ],
    price: "from £99",
    priceNote: "callout & diagnosis",
    image:
      "https://images.pexels.com/photos/10566895/pexels-photo-10566895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    imageAlt: "A luxury car key fob resting on a textured leather surface",
  },
];

export type Package = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  finance?: string;
  features: string[];
  highlight?: boolean;
  cta: string;
  badge?: string;
};

export const PACKAGES: Package[] = [
  {
    id: "tracker",
    name: "Tracker",
    tagline: "Recovery-ready protection with a live view of your vehicle.",
    price: "from £199",
    priceNote: "fitted, inc VAT",
    features: [
      "Insurance-approved tracker options",
      "Instant movement & tow alerts",
      "Live app + journey history",
      "Fitting & setup walkthrough",
      "Fitted at home or work",
    ],
    cta: "Ask about trackers",
  },
  {
    id: "ghost",
    name: "Ghost Immobiliser",
    tagline: "Our most requested upgrade — the car simply won't start without you.",
    price: "£499",
    priceNote: "fitted, inc VAT",
    highlight: true,
    badge: "Most popular",
    features: [
      "Autowatch Ghost 2, fully fitted",
      "Custom PIN on factory buttons",
      "No ongoing subscription",
      "Stops relay, cloning & OBD theft",
      "Installation certificate supplied",
      "Free GPS tracker on selected deals",
      "Lifetime installer support",
    ],
    cta: "Book a Ghost fitting",
  },
  {
    id: "total",
    name: "Total Shield",
    tagline: "Layer prevention and recovery. The closest thing to theft-proof.",
    price: "from £749",
    priceNote: "fitted, inc VAT",
    features: [
      "Ghost 2 immobiliser",
      "Scorpion GPS tracker with app",
      "Dash cam ready or add on",
      "Priority 24/7 support line",
      "Single visit, one certificate pack",
      "12-month check-up included",
    ],
    cta: "Build my package",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  initials: string;
  service: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Nick fitted my Ghost 2 on the drive in under two hours. Neat, completely invisible, and the car simply won't start without the sequence. Genuine peace of mind.",
    name: "James R.",
    detail: "Range Rover Sport · Bolton",
    initials: "JR",
    service: "Ghost Immobiliser",
  },
  {
    quote:
      "My insurer wanted a Thatcham S5 by Friday. Northwest had it fitted at my work and the certificate in my inbox the next afternoon. Faultless.",
    name: "Priya S.",
    detail: "Audi RS4 · Manchester",
    initials: "PS",
    service: "Scorpion S5 Tracker",
  },
  {
    quote:
      "Lost my only key at midnight outside the house. They were with me inside the hour and had a brand-new key coded on the spot. Lifesavers.",
    name: "Dan W.",
    detail: "VW Transporter · Wigan",
    initials: "DW",
    service: "Auto Locksmith",
  },
  {
    quote:
      "We run 38 vans for a living. The Track Manager dashboard has already sharpened our driving, cut idling and stopped unauthorised evening trips.",
    name: "Mark H.",
    detail: "Operations Director · Leyland",
    initials: "MH",
    service: "Fleet Tracking",
  },
];

export const FAQS = [
  {
    q: "Do you come to me to fit the system?",
    a: "Yes. We're a mobile installation team covering Bolton, Manchester, Preston, Wigan, Warrington, Liverpool, Lancashire and Cheshire. We'll fit your vehicle at home or at work — just make sure there's safe, level off-street parking with room to work.",
  },
  {
    q: "Will a Ghost immobiliser affect my warranty or insurance?",
    a: "Fitting a Ghost does not invalidate your manufacturer warranty when installed by an approved technician, and it doesn't touch the factory alarm or ECU mapping. Many insurers look favourably on a Ghost or an approved tracker — we supply an installation certificate for your insurer.",
  },
  {
    q: "What happens if I forget my PIN?",
    a: "Your PIN is unique to you and can be reset by our technicians. We can also fit a key tag or smartphone app option for easier everyday use, and we'll walk you through the whole system before we leave — however long it takes.",
  },
  {
    q: "Is a tracker the same as an immobiliser?",
    a: "No — and that's why they work so well together. An immobiliser prevents your vehicle from being driven away. A tracker helps locate and recover it if it is towed or moved. A Ghost plus tracker package gives you prevention and recovery in one.",
  },
  {
    q: "How long does fitting take?",
    a: "A Ghost immobiliser usually takes around two hours. A tracker is often under an hour, dash cams around 90 minutes. Multiple products can be fitted in a single visit — we'll book a time window and keep you updated.",
  },
  {
    q: "Which vehicles can you cover?",
    a: "We install across most petrol, diesel, hybrid and many electric vehicles from mainstream to performance marques. Send us your registration or make, model and year and we'll confirm compatibility the same working day.",
  },
  {
    q: "Can you help with fleet vehicles?",
    a: "Absolutely. We supply and fit fleet tracking, immobilisers and dash cams for businesses across the North West, from single vans to 100+ vehicle operations, with a dedicated account contact and installation planned around your schedule.",
  },
  {
    q: "How do I pay and can I spread the cost?",
    a: "We accept card and bank transfer, with payment due on completion. There are no hidden extras: the price we quote includes VAT and standard fitting, and we’ll always show you the most cost-effective route for your vehicle. Prefer a package? Ask us to bundle a Ghost and tracker into one visit.",
  },
];

export const AREAS = [
  "Bolton",
  "Manchester",
  "Preston",
  "Wigan",
  "Warrington",
  "Liverpool",
  "Stockport",
  "Bury",
  "Rochdale",
  "Blackburn",
  "Blackpool",
  "Chorley",
  "Salford",
  "Oldham",
  "Leyland",
  "Cheshire",
];

export const SERVICE_OPTIONS = [
  "Ghost immobiliser",
  "GPS tracker",
  "Dash cam",
  "Fleet tracking",
  "Auto locksmith",
  "Complete protection bundle",
  "Not sure yet — advise me",
];

export const TRUST_LOGOS = [
  { name: "autowatch", note: "Ghost" },
  { name: "THATCHAM", note: "Research" },
  { name: "SCORPION", note: "Trackers" },
  { name: "TASSA", note: "Approved" },
  { name: "trackmanager", note: "Fleet" },
  { name: "S5 · S7", note: "Insurance rated" },
];
