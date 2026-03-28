import Link from "next/link";
import { TagPill } from "../portfolio/ui/TagPill";
import { projects } from "./projects.const";
import ProjectNavButtons from "./ProjectNavButtons";
import Image from "next/image";

type FeaturedProjectCardProps = {
  index: number;
};

export function FeaturedProjectCard({ index }: FeaturedProjectCardProps) {
  const project = projects[index];
  const isPrimary = index === 0;

  return (
    <Link href={`/${project.id}`}>
      <div
        className={`group border-border bg-surface3 hover:border-border-hover flex cursor-pointer flex-col overflow-hidden rounded-xl border text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_0_1px_var(--color-border-hover),0_10px_40px_rgba(0,0,0,.5),0_0_20px_rgba(203,255,71,.08)] ${isPrimary ? "border-l-accent border-l-2" : ""} `}
      >
        <div className="border-border bg-surface2 relative aspect-video overflow-hidden border-b">
          <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <Image
              fill={true}
              sizes="(max-width: 768px) 40vw, (max-width: 1200px) 35vw, 600px"
              objectFit="cover"
              src={project.posterImage}
              alt={`${project.id} image`}
            />
          </div>
          <span className="bg-accent text-accent-text absolute top-3 left-3 rounded px-3 py-1 font-mono text-xs font-medium">
            {isPrimary ? "Featured ★" : "Featured"}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div
            className={`text-text mb-2 font-mono font-medium ${isPrimary ? "text-base" : "text-sm"} `}
          >
            {project.cardTitle}
          </div>
          <p className="text-muted-text mb-4 flex-1 text-sm leading-relaxed">
            {project.preview}
          </p>

          <div className="mb-4 flex flex-wrap gap-1">
            {project.cardTags.map((tag) => (
              <TagPill key={tag} label={tag} interactive />
            ))}
          </div>

          <div className="border-border flex items-center justify-between border-t pt-4">
            <div className="flex gap-4">
              <ProjectNavButtons label="Demo →" goToHref={project.demo} />
              <ProjectNavButtons label="GitHub →" goToHref={project.github} />
            </div>

            <span className="border-border text-muted-text group-hover:border-accent group-hover:text-accent rounded-full border px-3 py-1 font-mono text-[11px] transition-colors duration-200">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
