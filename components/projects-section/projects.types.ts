export type PerformanceDecision = {
  title: string;
  text: string;
  stat: string;
};

export type Project = {
  id: string;
  posterImage: string;
  images: string[];
  title: string;
  cardTitle: string;
  sub: string;
  what: string;
  problem: string;
  learned: string;
  preview: string;
  topLabel: string;
  tags: string[];
  cardTags: string[];
  demo: string;
  github: string;
  slides: number;
  featured?: boolean;
  live?: boolean;
  performanceDecisions: PerformanceDecision[];
};
