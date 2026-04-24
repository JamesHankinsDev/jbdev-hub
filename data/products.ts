export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url?: string;
  emoji: string;
  gradient: string;
  accent: string;
  status: "live" | "beta" | "soon";
  categoryLabel?: string;
  cannyUrl?: string;
  linearUrl?: string;
};

export type Category = {
  id: string;
  title: string;
  blurb: string;
  emoji: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "sports-fantasy",
    title: "Sports & Fantasy",
    blurb: "Leagues, tours, and games built for competitive friend groups.",
    emoji: "🏆",
    products: [
      {
        slug: "survivor-fantasy-league",
        name: "Survivor Fantasy League",
        tagline: "Draft, lock, and sweat every tribal council.",
        description:
          "A full fantasy-sports experience built around the TV show Survivor. Roster locks, weekly scoring, and a league dashboard that keeps your group chat on fire.",
        url: "https://survivor-fantasy-league.vercel.app/dashboard",
        emoji: "🏝️",
        gradient: "from-amber-400 via-orange-500 to-rose-500",
        accent: "bg-orange-500",
        status: "live",
      },
      {
        slug: "pity-tour",
        name: "The Pity Tour",
        tagline: "The amateur golf tour your group deserves.",
        description:
          "Season-long standings, event sign-ups, handicaps, and the kind of light-hearted trophies your Sunday foursome actually wants to chase.",
        url: "https://thepitytour.vercel.app/",
        emoji: "⛳️",
        gradient: "from-lime-400 via-emerald-500 to-teal-600",
        accent: "bg-emerald-500",
        status: "live",
      },
    ],
  },
  {
    id: "content-media",
    title: "Content & Media",
    blurb: "Publications with voice — and a little attitude.",
    emoji: "📝",
    products: [
      {
        slug: "the-un-official",
        name: "The Un-Official",
        tagline: "Serious fans, un-serious takes.",
        description:
          "An NBA analytics blog with a chip on its shoulder. Data-backed opinions, long-form breakdowns, and a publishing stack built for fast writes.",
        url: "https://the-un-official.com",
        emoji: "🏀",
        gradient: "from-fuchsia-500 via-purple-600 to-indigo-600",
        accent: "bg-purple-600",
        status: "live",
      },
    ],
  },
  {
    id: "finance-trading",
    title: "Finance & Trading",
    blurb: "Bots and dashboards that move while you sleep.",
    emoji: "💹",
    products: [
      {
        slug: "apex-trader",
        name: "Apex Trader",
        tagline: "A 24/7 crypto bot with a live dashboard.",
        description:
          "A Node.js trading engine running RSI, momentum, and volume strategies around the clock — paired with a Next.js dashboard for real-time monitoring.",
        url: "https://apex-trader-gilt.vercel.app/",
        emoji: "🤖",
        gradient: "from-cyan-400 via-sky-500 to-blue-600",
        accent: "bg-sky-500",
        status: "live",
      },
    ],
  },
  {
    id: "lifestyle-learning",
    title: "Lifestyle & Learning",
    blurb: "Track the hobbies, level up the skills.",
    emoji: "🛹",
    products: [
      {
        slug: "late-push",
        name: "Late Push",
        tagline: "Learn to skate. Find your people.",
        description:
          "A structured learning path and social hub for skateboarders — from first push to first trick. Progression tracking, spots, and a community that actually rolls.",
        url: "https://late-push.vercel.app/",
        emoji: "🛹",
        gradient: "from-pink-400 via-red-500 to-orange-500",
        accent: "bg-red-500",
        status: "live",
      },
      {
        slug: "guinness-passport",
        name: "Guinness Passport",
        tagline: "Log every pint. Around the world.",
        description:
          "A tracker and mini-game for logging Guinness pulls across the globe. Pub diary, scoring, and the perfect souvenir for a well-poured pint.",
        url: "https://guinnesspassport.vercel.app/diary",
        emoji: "🍺",
        gradient: "from-yellow-300 via-amber-500 to-stone-800",
        accent: "bg-amber-600",
        status: "live",
      },
    ],
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    blurb: "Drop-in pieces that make shipping faster.",
    emoji: "🛠️",
    products: [
      {
        slug: "feedback-kit",
        name: "Feedback Kit",
        tagline: "Drop-in feedback + bug reporting for React apps.",
        description:
          "A single widget that routes feature ideas to Canny and bugs straight into Linear — so your users' feedback shows up where your team already works.",
        url: "https://james-hankins.com",
        emoji: "💬",
        gradient: "from-violet-500 via-indigo-500 to-blue-500",
        accent: "bg-indigo-500",
        status: "live",
      },
    ],
  },
];

export const allProducts: Product[] = categories.flatMap((c) => c.products);

export const upcomingProducts: Product[] = [
  {
    slug: "my-gm",
    name: "My GM",
    tagline: "Home-brew fantasy basketball league.",
    description:
      "Build the league you actually want to play in — your draft rules, your salary cap, your scoring. Fantasy basketball with the dials turned all the way up.",
    emoji: "📋",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    accent: "bg-blue-600",
    status: "soon",
    categoryLabel: "Sports & Fantasy",
  },
  {
    slug: "for-the-love-of-beer",
    name: "For the Love of Beer",
    tagline: "A brewery passport with a brewer's data layer.",
    description:
      "Track the breweries you've been to and the beers you've tried — with a back-end that speaks the brewer's language: hops, grain bill, IBU, ABV, and more.",
    emoji: "🍻",
    gradient: "from-amber-600 via-orange-700 to-rose-800",
    accent: "bg-orange-700",
    status: "soon",
    categoryLabel: "Lifestyle & Learning",
  },
  {
    slug: "integrity-index",
    name: "Integrity Index",
    tagline: "Congressional fidelity, graded.",
    description:
      "A public-interest database that scores members of Congress on financial disclosures, voting records, and promises kept vs. broken.",
    emoji: "🏛️",
    gradient: "from-slate-600 via-blue-700 to-indigo-800",
    accent: "bg-blue-700",
    status: "soon",
    categoryLabel: "Civic & Public Interest",
  },
  {
    slug: "castle-siege",
    name: "Castle Siege",
    tagline: "A 2D web game. Take down your opponent's castle.",
    description:
      "Stock your army, fortify your walls, and crash your opponent's gate before they crash yours. Browser-native, no installs.",
    emoji: "🏰",
    gradient: "from-indigo-600 via-purple-700 to-rose-700",
    accent: "bg-purple-700",
    status: "soon",
    categoryLabel: "Games",
  },
];
