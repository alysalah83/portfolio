import { Project } from "./projects.types";

export const projects: Project[] = [
  {
    id: "clickup",
    title: "ClickUp — Workspace Management SaaS",
    cardTitle: "ClickUp — Workspace Management",
    sub: "Full-stack SaaS · Solo · Jun – Aug 2025",
    posterImage: "/clickup/board.png",
    images: [
      "/clickup/board.png",
      "/clickup/table1.png",
      "/clickup/calendar1.png",
      "/clickup/list.png",
      "/clickup/dashboard.png",
      "/clickup/multistep-form.png",
      "/clickup/whitebaord.png",
      "/clickup/iconpicker.png",
      "/clickup/table2.png",
      "/clickup/calendar2.png",
      "/clickup/calendar3.png",
      "/clickup/white-theme.png",
      "/clickup/list-overview.png",
      "/clickup/homePage1.png",
      "/clickup/homePage2.png",
      "/clickup/homePage3.png",
      "/clickup/login.png",
    ],
    topLabel: "[ Screenshot — ClickUp ]",
    featured: true,
    demo: "https://click-up-clone-two.vercel.app/",
    github: "https://github.com/alysalah83/Click-up-clone-front-end",
    slides: 15,

    preview:
      "A production-scale SaaS built entirely solo. Four task views — Board, List, Table, Calendar — each with its own interaction model, all sharing one data layer with optimistic updates on every mutation. A 100% custom compound component system. No external UI library.",

    what: "A full workspace management SaaS built solo from scratch. The data model follows a Workspace → List → Status Group → Task hierarchy where status groups are fully user-defined — not hardcoded. Four distinct task views each with their own interaction model: Kanban drag-and-drop in Board via dnd-kit, bulk operations across selected tasks in Table, a calendar grid engine in Calendar built without any calendar library, and a compact grouped layout in List. Every mutation across all four views fires optimistically through TanStack Query. Guest and authenticated flows run in parallel — guest sessions are isolated in cookies and merged into the user account on login without data loss. A collaborative whiteboard is built in via Excalidraw. Analytics dashboard built with Recharts. Test coverage added with Vitest and React Testing Library after a full architectural refactor.",

    problem:
      "The core front-end challenge was building four views that share one data layer without leaking state between them. Sort preferences, selection state, and UI mode are all view-local — stored in per-view Zustand slices — so switching views never resets your work, and a mutation in Board never triggers a re-render in Table. The second hard problem was the compound component system: every component — Menu, Modal, Tooltip, Dropdown, Date Picker, Icon Picker, Color Picker — needed to work in both controlled and uncontrolled modes with clean consumer APIs and zero prop drilling. Solved by giving each component a context-driven parent that owns shared state and exposes it through slots. The optimistic update system was the third layer: high-mutation features like drag-and-drop status changes and inline renames all update the UI instantly, roll back cleanly on error, and stay consistent across concurrent view renders.",

    learned:
      "Building a compound component library from scratch clarified where abstraction earns its cost and where it doesn't — a lesson that's hard to get from reading about it. The guest/auth session merge was the most edge-case-heavy feature I've shipped: every combination of guest-has-data, user-has-data, both-have-data, and user-declines-merge had to be handled without data loss on either side. Adding Vitest and RTL coverage post-refactor was the first time I felt a test suite pay off immediately — it caught three regressions before they left my machine.",

    performanceDecisions: [
      {
        title: "Server-side prefetch with TanStack Hydration",
        text: "Tasks and statuses were fetched client-side to support optimistic updates, but the initial load was slow. I moved the first fetch to a server component using TanStack Query's prefetch API, then hydrated the client cache on mount — so the UI renders with real data immediately and optimistic updates take over from there.",
        stat: "Significantly faster initial render with no client-fetch waterfall",
      },
      {
        title: "Icon picker virtualisation",
        text: "The icon picker mounted 150+ DOM nodes every time it opened, blocking the UI thread for roughly a second. Replaced the full render with TanStack Virtualizer — only visible icons are in the DOM at any point.",
        stat: "~80% faster open time",
      },
      {
        title: "useDeferredValue for search",
        text: "Filtering workspace items on every keystroke was blocking the input thread when lists were large. Wrapped the filter computation in useDeferredValue so typing stays instant and results update in the background without layout pressure.",
        stat: "Eliminated typing lag entirely",
      },
      {
        title: "Per-view sort state isolation",
        text: "Sort preferences are stored in independent Zustand slices per view — not in a shared global store. Switching views never resets sort state, and updating one view's sort never causes other views to re-render.",
        stat: "Zero cross-view state leakage",
      },
    ],

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "TanStack Virtualizer",
      "Zustand",
      "dnd-kit",
      "Motion",
      "React Hook Form",
      "Zod",
      "Vitest",
      "React Testing Library",
      "Axios",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Excalidraw",
      "Recharts",
    ],
    cardTags: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "dnd-kit",
    ],
  },

  {
    id: "digitalShop",
    title: "Digital Shop — E-Commerce Platform",
    cardTitle: "Digital Shop — E-Commerce",
    sub: "Full-stack e-commerce · Solo · Apr – May 2025",
    posterImage: "/digitalShop/digitalshop1.png",
    images: [
      "/digitalShop/digitalshop1.png",
      "/digitalShop/digitalshop2.png",
      "/digitalShop/digitalshop3.png",
      "/digitalShop/digitalshop4.png",
      "/digitalShop/digitalshop5.png",
      "/digitalShop/digitalshop6.png",
      "/digitalShop/digitalshop7.png",
      "/digitalShop/digitalshop8.png",
      "/digitalShop/digitalshop9.png",
      "/digitalShop/digtalshop9.png",
      "/digitalShop/digitalshop10.png",
      "/digitalShop/digitalshop11.png",
      "/digitalShop/digitalshop12.png",
      "/digitalShop/digitalshop13.png",
    ],
    topLabel: "[ Screenshot — Digital Shop ]",
    featured: true,
    demo: "https://digital-shop-sigma.vercel.app/",
    github: "https://github.com/alysalah83/Digital-shop",
    slides: 12,

    preview:
      "Production-grade e-commerce platform with a dual-session cart architecture — guests and authenticated users share identical flows, with automatic conflict-resolved merge on login. Stripe-integrated checkout with webhook-confirmed payment and post-purchase cart clearing. Built Server Components-first for minimal bundle size, fast Core Web Vitals, and clean SEO.",

    what: "A full e-commerce platform built with Next.js App Router. Product listings support multi-criteria filtering by category, price range, and sort order with pagination. Product detail pages include an image gallery and a star-rated review system. Authenticated users get a full product management dashboard — create, edit, delete, and image upload — with server-validated ownership so users can only touch their own products. Checkout is powered by Stripe: a server action builds the session from live cart data, redirects to Stripe's hosted page, and a webhook confirms payment and clears the cart atomically. A reusable compound Slider component built from scratch in Tailwind is shared across the landing page hero and the price range filter.",
    learned:
      "Storing guest cart state in PostgreSQL instead of localStorage made the merge-on-login logic clean — one source of truth, no reconciliation between storage layers, and easy to test. The same thinking applied to Stripe: confirming payment via webhook instead of the success redirect means the cart only clears after funds are actually confirmed server-side. Both decisions came down to the same thing — don't trust the client for state that actually matters.",
    problem:
      "Two problems defined the architecture. The first was building a cart that behaves identically for guests and logged-in users, then merges without data loss on login. Guest sessions get a unique cookie-assigned ID on first visit — their cart and wishlist live in PostgreSQL, not localStorage, so they survive tab closes, refreshes, and device switches. On login, the guest cart merges into the user account with per-item conflict resolution for duplicates. The second was search UX: fetching on every keystroke hammered the database and caused a visible blank flash mid-type. Debouncing cut the request volume; useDeferredValue kept the previous results visible while new data loaded — the UI never goes empty. The third was payment integrity: using Stripe's webhook instead of the success redirect URL to confirm payment means the cart only clears after funds are actually confirmed, not just after the user lands on the success page.",

    performanceDecisions: [
      {
        title: "Server Components as the default",
        text: "Landing page, shop listing, product pages, cart, wishlist, and the dashboard all use Server Components. Client components are opted into only where user interaction requires it — filters, cart panel, image gallery. This keeps the client JS bundle minimal, which matters for e-commerce where initial load speed directly affects conversion.",
        stat: "Lower client bundle size · better Core Web Vitals · improved SEO",
      },
      {
        title: "Debounced search + useDeferredValue",
        text: "Search without debouncing created a database call on every keystroke. Debouncing reduced requests significantly. Combined with useDeferredValue, the previous results stay visible while new data loads — no empty flash, no input lag.",
        stat: "Fewer DB calls · stale-while-revalidate UX · no typing lag",
      },
      {
        title: "Database-backed cart (not localStorage)",
        text: "Guest and user carts are stored in PostgreSQL via Prisma. This makes the cart durable across sessions and devices, simplifies the merge-on-login logic to a single source of truth, and removes any sync complexity between client storage and server state.",
        stat: "Zero cart data loss on login, refresh, or device switch",
      },
    ],

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Prisma ORM",
      "PostgreSQL",
      "NextAuth.js",
      "React Hook Form",
      "Zod",
      "Stripe (in progress)",
    ],
    cardTags: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack Query",
      "NextAuth.js",
      "Prisma",
    ],
  },

  {
    id: "printManager",
    title: "Print Manager — Business Tool",
    cardTitle: "Print Manager",
    sub: "Client project · Live in production · 2025",
    posterImage: "/printHouse/printHouse2.png",
    images: [
      "/printHouse/printHouse2.png",
      "/printHouse/printHouse3.png",
      "/printHouse/printHouse4.png",
      "/printHouse/printHouse5.png",
      "/printHouse/printHouse1.png",
    ],
    topLabel: "Print Manager",
    live: true,
    demo: "https://print-house-eta.vercel.app/",
    github: "https://github.com/alysalah83/Print-house",
    slides: 5,

    preview:
      "A real client app in daily production use. Orders, client records, a business metrics dashboard, and staff account management — built for a non-technical user who depends on it every day.",

    what: "A business management tool built for a real print shop client. Multi-page Next.js app with a client and orders table, order creation forms, a business dashboard with live metrics, and a settings section for managing business constants and creating staff accounts. Built for a non-technical user who had never used a web app for their business before.",

    problem:
      "The challenge was not technical — it was designing for a real non-technical person who depends on this daily. Every form state, error message, and empty state had to communicate clearly without any technical language. Ambiguous UI states that a developer would read past were blockers for this user. Feedback from real usage changed implementation decisions mid-build in ways a spec never would have.",

    learned:
      "Shipping for a real client is a different discipline from shipping for a portfolio. The user defines what 'working' means, not the spec. Features that seemed complete broke under real usage patterns. That feedback loop — and the responsibility of someone's business depending on your code — changes how carefully you think about edge cases and error states.",

    performanceDecisions: [],

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma ORM",
      "Tailwind CSS",
      "Shadcn/ui",
      "JWT",
    ],
    cardTags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },

  {
    id: "findMyShow",
    title: "Find My Show — TV Discovery App",
    cardTitle: "Find My Show",
    sub: "Vanilla JavaScript · MVC · 2024",
    posterImage: "/findMyShow/findMyShow2.png",
    images: ["/findMyShow/findMyShow1.png", "/findMyShow/findMyShow2.png"],
    topLabel: "JS / MVC",
    demo: "https://findmyshoow.netlify.app/",
    github: "https://github.com/alysalah83/FindMyShow",
    slides: 1,

    preview:
      "TV show discovery app in pure Vanilla JS — MVC from scratch, custom pub/sub state sync, async REST API consumption. No frameworks, no build tools, no shortcuts.",

    what: "A TV show discovery app built in pure JavaScript with no frameworks and no build tools. Implements the MVC pattern from scratch with a custom lightweight pub/sub observer for propagating model state to views. Consumes an external REST API asynchronously for search and show data. Multiple views stay in sync through subscriptions — search results updating never touches the favourites panel, and vice versa.",

    problem:
      "The challenge was keeping multiple views in sync with shared model state without a reactive framework. Built a pub/sub layer where views subscribe to specific model events rather than observing global state — so each view only re-renders when its own data changes. A single delegated listener on the root container handles all DOM interaction, which kept the event layer clean and leak-free across view transitions.",

    learned:
      "Building MVC manually teaches you exactly what React abstracts: the update cycle, the diffing problem, why unidirectional data flow matters, and what breaks without it. After this project, hooks and the component lifecycle clicked immediately — not as syntax, but as solutions to problems I'd already solved manually.",

    performanceDecisions: [],

    tags: ["JavaScript", "MVC", "HTML", "CSS", "REST APIs"],
    cardTags: ["JavaScript", "MVC", "REST APIs"],
  },

  {
    id: "mathDual",
    posterImage: "/mathDual/mathdual2.png",
    title: "Math Duel — Multiplayer Math Game",
    cardTitle: "Math Duel",
    sub: "Vanilla JavaScript · MVC · 2024",
    images: ["/mathDual/mathdual1.png", "/mathDual/mathdual2.png"],
    topLabel: "JS / MVC",
    demo: "https://mathduel.netlify.app/",
    github: "https://github.com/alysalah83/Math-Duel-game",
    slides: 2,

    preview:
      "Real-time multiplayer math game in pure Vanilla JS. MVC architecture, event delegation throughout, and clean view transitions — focused on DOM efficiency and zero memory leaks.",

    what: "A two-player math game built in pure JavaScript with MVC architecture. Focused on DOM efficiency — event delegation on a root container instead of individual elements, a cleanup pattern on view transitions to prevent listener accumulation, and batched DOM writes to avoid layout thrash.",

    problem:
      "A game UI with multiple interactive elements and rapid state changes is a stress test for naive DOM management. Attaching listeners to individual elements meant duplicates on re-render and growing memory usage over a session. Moved all interaction to a single delegated root listener and built an explicit cleanup step into every view transition — the listener count stays flat regardless of how long the game runs.",

    learned:
      "DOM performance fundamentals: why batching writes matters, what forces a layout recalculation, and how event delegation keeps the interaction layer simple. This is where I understood why virtual DOM abstractions exist — not as magic, but as a systematic solution to the exact problems I was solving manually.",

    performanceDecisions: [],

    tags: ["JavaScript", "MVC", "HTML", "SCSS"],
    cardTags: ["JavaScript", "SCSS", "MVC"],
  },
] as const;
