export const approachCards = [
  {
    title: "01 — Design the API first",
    body: "I separate server state from UI state before writing a single component. TanStack Query handles async, Zustand handles local — they don't mix.",
  },
  {
    title: "02 — Every state has one owner",
    body: "Server state, local UI state, form state, each has a clear owner and they don't bleed into each other. Leaking state is the root of most React bugs.",
  },
  {
    title: "03 — Profile, then fix",
    body: "I don't guess at performance. I open React DevTools Profiler, find the actual bottleneck, then fix it with the lightest solution that works.",
  },
] as const;

export const timeline = [
  {
    label: "2024",
    body: "Built three Pure Vanilla JS apps with MVC from scratch, event delegation, zero frameworks. Understood the DOM at a level most developers skip.",
  },
  {
    label: "2025",
    body: "Learned React and Next.js, then shipped ClickUp and Digital Shop as full-stack solo projects",
  },
  {
    label: "Now",
    body: "Deepening my understanding of testing, performance, and front-end architecture while refining both projects. Looking for a role where I can contribute and keep growing fast",
  },
] as const;

export const aboutHighlights = [
  {
    title: "Complex UI",
    body: "Multi-view applications, dynamic interactions, and interfaces that stay predictable as they grow in complexity.",
  },
  {
    title: "State Management",
    body: "Handling deeply nested and shared state without re-render issues across large component trees.",
  },
  {
    title: "Performance",
    body: "Solving real bottlenecks in rendering, large lists, and user interactions — not just building features.",
  },
  {
    title: "Full-Stack Support",
    body: "Able to design APIs, manage database schema, and deliver complete features when the product requires it.",
  },
] as const;
