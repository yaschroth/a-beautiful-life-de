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
      title: "Kryolipolyse & Laser",
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
    {
      category: "Kryolipolyse",
      items: [
        { name: "Behandlung", price: "auf Anfrage" },
      ],
    },
    {
      category: "Laserbehandlungen",
      items: [
        { name: "Behandlung", price: "auf Anfrage" },
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
