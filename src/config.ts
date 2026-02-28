// A Beautiful Life - Kosmetik Institut Freiburg Configuration

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "A Beautiful Life",
    tagline: "KOSMETIK INSTITUT · FREIBURG",
    motto: "Professionelle Kosmetik, Permanent Make-up & Wellness in Freiburg",
    description: "Ihr Kosmetik Institut in Freiburg. Gesichtsbehandlungen, Permanent Make-up, Kryolipolyse, Laserbehandlungen, Nageldesign und vieles mehr. Wir verwöhnen Sie mit hochwertigen Behandlungen.",
    foundingYear: 2010,
    yearsExperience: 15,
    yearsInCenter: 15,
    satisfiedClients: "1000+",
    productBrands: ["Babor", "Premium Aesthetic"],
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "0761 5958813",
    phoneLink: "tel:+497615958813",
    email: "info@a-beautiful-life.de",
    whatsapp: "+49 761 5958813",
    whatsappLink: "https://wa.me/497615958813",
    address: {
      street: "Leopoldring 1, 2. OG",
      city: "Freiburg im Breisgau",
      district: "Altstadt",
      zip: "79098",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.5!2d7.8485!3d47.9970!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9e9e9e9e9e%3A0x0!2sLeopoldring%201%2C%2079098%20Freiburg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Leopoldring+1,+79098+Freiburg",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/a_beautiful_life_freiburg/",
    facebook: "https://www.facebook.com/A-Beautiful-Life-Kosmetikinstitut-Freiburg-183001055055225/",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo 09:00-20:00, Di-Fr 10:00-18:00",
    saturday: "Sa 10:00-15:00",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung",
    display: "Mo-Sa nach Vereinbarung",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "https://wa.me/497615958813?text=Hallo,%20ich%20möchte%20gerne%20einen%20Termin%20vereinbaren.",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 4.9,
    count: "50+",
    googleReviewLink: "https://www.google.com/maps/place/A+Beautiful+Life",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Eleonora Schmidt",
    fullName: "Eleonora Schmidt",
    image: "/beauty/face.jpg",
    bio: [
      "Willkommen bei A Beautiful Life: Ihr Kosmetik Institut für professionelle Behandlungen in Freiburg. Mit Leidenschaft und Expertise verwöhne ich Sie mit erstklassigen Beauty-Treatments.",
      "In meinem Institut können Sie ruhige Momente verbringen, sich vom stressigen Alltag erholen und sich eine verdiente Auszeit gönnen. Ich arbeite mit hochwertigen Produkten von Babor und modernster Premium Aesthetic Technologie.",
      "Ob Gesichtsbehandlung, Permanent Make-up, Kryolipolyse oder Laserbehandlung: Bei mir sind Sie in besten Händen. Besuchen Sie mich und erleben Sie Schönheitspflege auf höchstem Niveau.",
    ],
    certifications: [
      { label: "Permanent Make-up Expertin", icon: "award" },
      { label: "Kryolipolyse Spezialistin", icon: "star" },
      { label: "Babor Partner Institut", icon: "check" },
      { label: "15 Jahre Erfahrung", icon: "shield" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Google Rezension",
      rating: 5,
      text: "Tolle Beratung und ein super Ergebnis zu einem fairen Preis. Das Permanent Make-up ist wunderschön geworden!",
      service: "Permanent Make-up",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Sehr professionelle Behandlung und ein wunderbares Ambiente. Ich komme immer wieder gerne!",
      service: "Gesichtsbehandlung",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Die Kryolipolyse-Behandlung war sehr effektiv. Sichtbare Ergebnisse nach wenigen Wochen. Absolut empfehlenswert!",
      service: "Kryolipolyse",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Kompetente Beratung und hervorragende Ergebnisse. Frau Schmidt ist super freundlich und nimmt sich Zeit für jeden Kunden.",
      service: "Laserbehandlung",
      date: "Google Bewertung",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Kryolipolyse",
      description: "Fettreduktion ohne Operation. Mit modernster Technologie werden Fettzellen gezielt behandelt und nachhaltig reduziert.",
      price: "ab 149€",
      image: "/beauty/behandlung 3.png",
      benefits: ["Nicht-invasiv", "Effektiv"],
    },
    {
      title: "Gesichtsbehandlungen",
      description: "Luxuriöse Gesichtsbehandlungen mit Babor Produkten. Green Peel, Microneedling, Aqua Facial und mehr für strahlende Haut.",
      price: "ab 79€",
      image: "/beauty/face.jpg",
      benefits: ["Tiefenreinigung", "Anti-Aging"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Augenbrauen, Lidstrich oder Lippen, jeden Tag. Professionelle Mikropigmentation für natürliche Ergebnisse.",
      price: "ab 199€",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Langanhaltend", "Natürlich"],
    },
    {
      title: "Laserbehandlungen",
      description: "Moderne Laserbehandlungen für Hautverjüngung, Pigmentflecken und dauerhafte Haarentfernung.",
      price: "ab 89€",
      image: "/beauty/face2.jpg",
      benefits: ["Präzise", "Effektiv"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Traumhaft volle Wimpern für einen verführerischen Blick. Classic, Volume oder Mega Volume nach Ihren Wünschen.",
      price: "ab 89€",
      image: "/beauty/wimpern.png",
      benefits: ["Natürlich", "Langanhaltend"],
    },
    {
      title: "Zahnaufhellung",
      description: "Professionelles Bleaching für ein strahlendes Lächeln. Schonende und effektive Zahnaufhellung.",
      price: "ab 199€",
      image: "/beauty/frau.jpg",
      benefits: ["Schmerzfrei", "Sofort sichtbar"],
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
        { name: "Babor Classic Treatment", price: "79€" },
        { name: "Babor Intensiv Treatment", price: "99€" },
        { name: "Green Peel Fresh Up", price: "95€" },
        { name: "Green Peel Energy", price: "139€" },
        { name: "Microneedling", price: "149€" },
        { name: "Aqua Facial", price: "119€" },
        { name: "Carbon Peeling", price: "129€" },
        { name: "Plasma Lifting", price: "179€" },
      ],
    },
    {
      category: "Kryolipolyse",
      items: [
        { name: "1 Zone", price: "149€" },
        { name: "2 Zonen", price: "249€" },
        { name: "4 Zonen", price: "449€" },
        { name: "Ganzkörper Paket", price: "auf Anfrage" },
      ],
    },
    {
      category: "Permanent Make-up",
      items: [
        { name: "Augenbrauen", price: "349€" },
        { name: "Lidstrich oben", price: "249€" },
        { name: "Lidstrich unten", price: "199€" },
        { name: "Lippen Kontur", price: "349€" },
        { name: "Lippen Vollschattierung", price: "449€" },
        { name: "Nachbehandlung", price: "99€" },
      ],
    },
    {
      category: "Laserbehandlungen",
      items: [
        { name: "Gesicht", price: "89€" },
        { name: "Hals & Dekolleté", price: "119€" },
        { name: "Pigmentflecken Behandlung", price: "99€" },
        { name: "Hautverjüngung", price: "149€" },
      ],
    },
    {
      category: "Haarentfernung (SHR Laser)",
      items: [
        { name: "Oberlippe", price: "29€" },
        { name: "Kinn", price: "35€" },
        { name: "Achseln", price: "49€" },
        { name: "Bikinizone", price: "69€" },
        { name: "Unterschenkel", price: "99€" },
        { name: "Ganze Beine", price: "179€" },
      ],
    },
    {
      category: "Maniküre & Pediküre",
      items: [
        { name: "Maniküre Classic", price: "35€" },
        { name: "Maniküre mit Gel-Lack", price: "49€" },
        { name: "Pediküre Classic", price: "45€" },
        { name: "SPA Pediküre", price: "65€" },
      ],
    },
    {
      category: "Wimpern",
      items: [
        { name: "Wimpernverlängerung Classic", price: "89€" },
        { name: "Wimpernverlängerung Volume", price: "129€" },
        { name: "Wimpern Auffüllung", price: "49€" },
        { name: "Wimpernlifting", price: "69€" },
      ],
    },
    {
      category: "Zahnaufhellung",
      items: [
        { name: "Bleaching Standard", price: "199€" },
        { name: "Bleaching Premium", price: "299€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "A Beautiful Life | Kosmetik Institut Freiburg",
    hygiene: "/beauty/behandlung 3.png",
    gallery: [
      { url: "/beauty/face.jpg", category: "Gesichtsbehandlung" },
      { url: "/beauty/eyebrow-after.png", category: "Permanent Make-up" },
      { url: "/beauty/maniküre 3.png", category: "Nageldesign" },
      { url: "/beauty/wimpern.png", category: "Wimpern" },
      { url: "/beauty/face2.jpg", category: "Laserbehandlung" },
      { url: "/beauty/behandlung 3.png", category: "Kryolipolyse" },
      { url: "/beauty/microneedling.jpg", category: "Microneedling" },
      { url: "/beauty/frau.jpg", category: "Zahnaufhellung" },
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
    description: "In meinem Kosmetik Institut in Freiburg erwartet Sie ein entspannendes Ambiente mit modernster Ausstattung. Ich arbeite mit hochwertigen Babor Produkten und innovativer Premium Aesthetic Technologie.",
    features: [
      {
        icon: "shield",
        title: "Höchste Hygiene",
        description: "Ich arbeite steril und sauber. Ihre Gesundheit liegt mir am Herzen.",
      },
      {
        icon: "star",
        title: "15 Jahre Erfahrung",
        description: "Professionelle Behandlungen durch erfahrene Kosmetikerin.",
      },
      {
        icon: "award",
        title: "Babor Partner",
        description: "Ich verwende ausschließlich hochwertige Markenprodukte.",
      },
      {
        icon: "check",
        title: "Zentrale Lage",
        description: "Gut erreichbar am Leopoldring in der Freiburger Altstadt.",
      },
    ],
  },
};

export type Config = typeof config;
