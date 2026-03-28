// import PortfolioPage from "@/components/portfolio/PortfolioPage";

import AboutSection from "@/components/about-section/AboutSection";

import HeroSection from "@/components/hero-section/HeroSection";
import ProjectSection from "@/components/projects-section/ProjectSection";
import RevailFadeUp from "@/components/RevailFadeUp";
import SkillsSection from "@/components/skills-section/SkillsSection";
import { Metadata } from "next";

export const meta: Metadata = {
  title: "AlySalah - Front-end Engineer",
};

export default function Home() {
  return (
    <main className="animate-[fade-in_0.2s_ease] pt-[60px] font-sans">
      <RevailFadeUp />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
