// A Beautiful Life - Demo Website Configuration
// NOT affiliated with real business - placeholder data only

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "A Beautiful Life",
    tagline: "KOSMETIK INSTITUT · DEMO",
    motto: "Demo Website",
    description: "Demo website for portfolio purposes only. Not affiliated with any real business.",
    foundingYear: 2010,
    yearsExperience: 15,
    yearsInCenter: 15,
    satisfiedClients: "1000+",
    productBrands: ["Babor", "Premium Aesthetic"],
  },

  // ============================================
  // CONTACT INFORMATION (PLACEHOLDER)
  // ============================================
  contact: {
    phone: "0123 4567890",
    phoneLink: "tel:+491234567890",
    email: "demo@example.com",
    whatsapp: "+49 123 4567890",
    whatsappLink: "https://wa.me/491234567890",
    address: {
      street: "Musterstraße 1",
      city: "Musterstadt",
      district: "Zentrum",
      zip: "12345",
    },
    googleMapsEmbed: "",
    googleMapsLink: "",
  },

  // ============================================
  // SOCIAL MEDIA (PLACEHOLDER)
  // ============================================
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 10:00-18:00",
    saturday: "Sa 10:00-15:00",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung",
    display: "Mo-Sa nach Vereinbarung",
  },

  // ============================================
  // BOOKING (PLACEHOLDER)
  // ============================================
  booking: {
    url: "#",
  },

  // ============================================
  // GOOGLE REVIEWS (PLACEHOLDER)
  // ============================================
  reviews: {
    rating: 4.9,
    count: "50+",
    googleReviewLink: "#",
  },

  // ============================================
  // OWNER / ABOUT SECTION (PLACEHOLDER)
  // ============================================
  owner: {
    name: "Maria Muster",
    fullName: "Maria Muster",
    image: "/beauty/face.jpg",
    bio: [
      "Willkommen in unserem Kosmetik Institut. Mit Leidenschaft und Expertise verwöhne ich Sie mit erstklassigen Beauty-Treatments.",
      "In meinem Institut können Sie ruhige Momente verbringen, sich vom stressigen Alltag erholen und sich eine verdiente Auszeit gönnen.",
      "Ob Gesichtsbehandlung, Permanent Make-up oder Wimpernverlängerung: Bei mir sind Sie in besten Händen.",
    ],
    certifications: [
      { label: "Permanent Make-up Expertin", icon: "award" },
      { label: "Wimpern Spezialistin", icon: "star" },
      { label: "Babor Partner Institut", icon: "check" },
      { label: "15 Jahre Erfahrung", icon: "shield" },
    ],
  },

  // ============================================
  // TESTIMONIALS (PLACEHOLDER)
  // ============================================
  testimonials: [
    {
      name: "Kundin",
      rating: 5,
      text: "Tolle Beratung und ein super Ergebnis zu einem fairen Preis!",
      service: "Permanent Make-up",
      date: "Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Sehr professionelle Behandlung und ein wunderbares Ambiente.",
      service: "Gesichtsbehandlung",
      date: "Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Kompetente Beratung und hervorragende Ergebnisse.",
      service: "Wimpernverlängerung",
      date: "Bewertung",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Gesichtsbehandlungen",
      description: "Luxuriöse Gesichtsbehandlungen mit hochwertigen Produkten. Green Peel, Microneedling, Aqua Facial und mehr für strahlende Haut.",
      price: "ab 70€",
      image: "/beauty/face.jpg",
      benefits: ["Tiefenreinigung", "Anti-Aging"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Augenbrauen, Lidstrich oder Lippen, jeden Tag. Professionelle Mikropigmentation für natürliche Ergebnisse.",
      price: "ab 250€",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Langanhaltend", "Natürlich"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Traumhaft volle Wimpern für einen verführerischen Blick. Xtreme Lashes, 2D, 3D oder Volume nach Ihren Wünschen.",
      price: "ab 150€",
      image: "/beauty/wimpern.png",
      benefits: ["Natürlich", "Langanhaltend"],
    },
    {
      title: "Maniküre & Pediküre",
      description: "Professionelle Nagelpflege mit Lack oder Shellac. Nagelmodellage und Gelnägel für perfekt gepflegte Hände und Füße.",
      price: "ab 45€",
      image: "/beauty/maniküre 3.png",
      benefits: ["Gepflegt", "Langanhaltend"],
    },
    {
      title: "Haarentfernung",
      description: "Sanfte Haarentfernung mit Waxing oder Sugaring für glatte Haut. Für Gesicht, Körper und Intimbereich.",
      price: "ab 15€",
      image: "/beauty/face2.jpg",
      benefits: ["Sanft", "Langanhaltend"],
    },
    {
      title: "Weitere Behandlungen",
      description: "Moderne Technologien für Körperformung und Hautverjüngung. Individuelle Beratung für Ihre Wünsche.",
      price: "auf Anfrage",
      image: "/beauty/behandlung 3.png",
      benefits: ["Effektiv", "Nicht-invasiv"],
    },
  ],

  // ============================================
  // SCHULUNGEN (Training Section) - Not applicable
  // ============================================
  schulungen: {
    headline: "",
    description: "",
    subtext: "",
    courses: [],
    cta: {
      text: "",
      link: "",
    },
  },

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Basis Behandlung (60 Min)", price: "70€" },
        { name: "Intensiv Behandlung (90 Min)", price: "90€" },
        { name: "Exklusiv Behandlung (90 Min)", price: "95€" },
        { name: "Aqua Facial", price: "150€" },
        { name: "Aqua Facial + Ultraschall", price: "180€" },
        { name: "Microneedling", price: "149€" },
        { name: "Green Peel", price: "295€" },
        { name: "Augenbrauen zupfen", price: "15€" },
        { name: "Augenbrauen färben", price: "15€" },
        { name: "Wimpern färben", price: "15€" },
      ],
    },
    {
      category: "Permanent Make-up",
      items: [
        { name: "Augenbrauen Vollschattierung", price: "450€" },
        { name: "Augenbrauen Microblading", price: "450€" },
        { name: "Lidstrich", price: "250€" },
        { name: "Wimpernkranzverdichtung", price: "250€" },
        { name: "Lippenkontur", price: "450€" },
        { name: "Lippen mit Ausschattierung", price: "650€" },
        { name: "Schönheitsfleck", price: "40€" },
        { name: "Auffrischung", price: "halber Preis" },
      ],
    },
    {
      category: "Wimpernverlängerung",
      items: [
        { name: "Xtreme Lashes Neuanlage", price: "150€" },
        { name: "Xtreme Lashes Auffüllung (3 Wochen)", price: "60€" },
        { name: "3D/Volume Neuanlage", price: "200€" },
        { name: "2D Neuanlage", price: "175€" },
        { name: "Lash Lifting", price: "65€" },
        { name: "Wimpern Entfernung", price: "30€" },
      ],
    },
    {
      category: "Maniküre",
      items: [
        { name: "Maniküre mit Lack", price: "45€" },
        { name: "Maniküre mit Shellac", price: "55€" },
        { name: "Spezial Maniküre mit Lack", price: "55€" },
        { name: "Spezial Maniküre mit Shellac", price: "65€" },
        { name: "Nagelmodellage Neuanlage", price: "80€" },
        { name: "Gelnägel Auffüllung", price: "65€" },
      ],
    },
    {
      category: "Pediküre",
      items: [
        { name: "Fußpflege Standard", price: "50€" },
        { name: "Fußpflege mit Lack", price: "60€" },
        { name: "Fußpflege mit Shellac", price: "65€" },
        { name: "Fußnägel lackieren", price: "25€" },
      ],
    },
    {
      category: "Haarentfernung (Waxing/Sugaring)",
      items: [
        { name: "Gesicht", price: "ab 15€" },
        { name: "Achseln", price: "ab 30€" },
        { name: "Arme", price: "ab 40€" },
        { name: "Brust & Rücken", price: "ab 50€" },
        { name: "Beine bis Knie", price: "ab 40€" },
        { name: "Ganze Beine", price: "ab 65€" },
        { name: "Bikinizone", price: "ab 40€" },
        { name: "Brazilian", price: "ab 55€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "Kosmetik Institut Demo",
    hygiene: "/beauty/behandlung 3.png",
    gallery: [
      { url: "/beauty/face.jpg", category: "Gesichtsbehandlung" },
      { url: "/beauty/eyebrow-after.png", category: "Permanent Make-up" },
      { url: "/beauty/maniküre 3.png", category: "Nageldesign" },
      { url: "/beauty/wimpern.png", category: "Wimpern" },
      { url: "/beauty/face2.jpg", category: "Behandlung" },
      { url: "/beauty/behandlung 3.png", category: "Behandlung" },
      { url: "/beauty/microneedling.jpg", category: "Microneedling" },
      { url: "/beauty/frau.jpg", category: "Behandlung" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Elegant Gold/Champagne
  // ============================================
  colors: {
    primary: "#C9A962",
    primaryRgb: "201, 169, 98",
    dark: "#1A1A1A",
    light: "#FAF8F5",
    lightAlt: "#F5F2ED",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Premium Beauty Erlebnis",
    description: "In unserem Kosmetik Institut erwartet Sie ein entspannendes Ambiente mit modernster Ausstattung.",
    features: [
      {
        icon: "shield",
        title: "Höchste Hygiene",
        description: "Wir arbeiten steril und sauber. Ihre Gesundheit liegt uns am Herzen.",
      },
      {
        icon: "star",
        title: "15 Jahre Erfahrung",
        description: "Professionelle Behandlungen durch erfahrene Kosmetikerinnen.",
      },
      {
        icon: "award",
        title: "Premium Produkte",
        description: "Wir verwenden ausschließlich hochwertige Markenprodukte.",
      },
      {
        icon: "check",
        title: "Zentrale Lage",
        description: "Gut erreichbar im Stadtzentrum.",
      },
    ],
  },
};

export type Config = typeof config;
