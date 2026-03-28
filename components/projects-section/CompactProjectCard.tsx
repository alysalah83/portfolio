import Link from "next/link";
import { FADE_UP_CLASS } from "../portfolio/portfolio.constants";
import { TagPill } from "../portfolio/ui/TagPill";
import { projects } from "./projects.const";
import Image from "next/image";
import ProjectNavButtons from "./ProjectNavButtons";

type CompactProjectCardProps = {
  index: number;
};

export function CompactProjectCard({ index }: CompactProjectCardProps) {
  const project = projects[index];

  return (
    <Link href={project.id}>
      <div
        data-fade-up
        className={`group border-border bg-surface3 hover:border-border-hover flex cursor-pointer flex-col overflow-hidden rounded-xl border text-left hover:-translate-y-1 ${FADE_UP_CLASS}`}
      >
        <div className="border-border bg-surface2 text-muted border-b font-mono text-xs">
          <div
            className={`relative flex max-h-44 min-h-38 items-center ${project.live ? "justify-between" : "justify-center"}`}
          >
            <Image
              fill={true}
              sizes="(max-width: 768px) 40vw, (max-width: 1200px) 35vw, 600px"
              objectFit="cover"
              src={project.posterImage}
              alt={`${project.id} image`}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="text-text mb-1 font-mono text-sm font-medium">
            {project.cardTitle}
          </div>
          <p className="text-muted-text mb-3 line-clamp-2 flex-1 text-xs leading-relaxed">
            {project.preview}
          </p>

          <div className="mb-3 flex flex-wrap gap-1">
            {project.cardTags.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>

          <div className="border-border flex items-center justify-between border-t pt-3">
            <div className="flex items-center gap-2">
              <ProjectNavButtons label="GitHub →" goToHref={project.github} />
              <ProjectNavButtons label="Demo →" goToHref={project.demo} />
            </div>

            <span className="border-border text-muted-text group-hover:border-accent group-hover:text-accent rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-200">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
