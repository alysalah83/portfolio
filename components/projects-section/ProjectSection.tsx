import { SectionHeading } from "../portfolio/ui/SectionHeading";
import { CompactProjectCard } from "./CompactProjectCard";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

function ProjectSection() {
  return (
    <section id="projects" className="border-border border-t py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 md:px-10">
        <SectionHeading>projects</SectionHeading>

        <div className="mb-4 grid gap-4 md:grid-cols-[0.55fr_0.45fr]">
          {Array.from({ length: 2 }, (_v, i) => i).map((index) => (
            <FeaturedProjectCard index={index} key={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }, (_v, i) => i + 2).map((index) => (
            <CompactProjectCard key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
