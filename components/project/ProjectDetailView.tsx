import { notFound } from "next/navigation";
import { TagPill } from "../portfolio/ui/TagPill";
import { projects } from "../projects-section/projects.const";
import { ProductImageSlider } from "./ProductImageSlider";
import Link from "next/link";

type ProjectDetailViewProps = {
  projectName: string;
};

export function ProjectDetailView({ projectName }: ProjectDetailViewProps) {
  const project = projects.find((project) => project.id === projectName);
  if (!project) return notFound();

  return (
    <section className="relative mx-auto max-w-5xl animate-[fade-in_0.2s_ease] px-5 py-8 pb-16 sm:px-8 md:px-10 md:py-10 md:pb-20">
      <Link
        href="/"
        className="group text-muted-text hover:text-text mb-8 flex items-center gap-2 font-mono text-xs transition-colors duration-200"
      >
        <svg
          className="transition-transform duration-200 group-hover:-translate-x-1"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to projects
      </Link>

      <ProductImageSlider projectName={projectName} />

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1fr_260px]">
        <div>
          <h1 className="text-text mb-1 font-mono text-2xl font-medium">
            {project.title}
          </h1>
          <p className="text-muted-text mb-8 text-sm">{project.sub}</p>

          <div className="mb-7">
            <div className="text-accent mb-3 font-mono text-xs tracking-widest uppercase">
              What I built
            </div>
            <p className="text-muted-text text-sm leading-[1.85] font-light">
              {project.what}
            </p>
          </div>

          <div className="mb-7">
            <div className="text-accent mb-3 font-mono text-xs tracking-widest uppercase">
              Problem I solved
            </div>
            <p className="text-muted-text text-sm leading-[1.85] font-light">
              {project.problem}
            </p>
          </div>

          {project.performanceDecisions.length > 0 ? (
            <div className="mb-7">
              <div className="text-accent mb-3 font-mono text-xs tracking-widest uppercase">
                Performance decisions
              </div>
              <div>
                {project.performanceDecisions.map((decision) => (
                  <div
                    key={decision.title}
                    className="bg-surface3 mb-3 rounded-lg border border-[rgba(203,255,71,.15)] p-4"
                  >
                    <div className="text-text mb-2 font-mono text-xs font-medium">
                      {decision.title}
                    </div>
                    <p className="text-muted-text mb-2 text-sm leading-relaxed">
                      {decision.text}
                    </p>
                    <div className="text-accent font-mono text-xs before:mr-1 before:text-xs before:content-['▲']">
                      {decision.stat}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mb-7">
            <div className="text-accent mb-3 font-mono text-xs tracking-widest uppercase">
              What I learned
            </div>
            <p className="text-muted-text text-sm leading-[1.85] font-light">
              {project.learned}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="border-border bg-surface rounded-lg border p-5">
            <div className="text-muted-text mb-4 font-mono text-xs tracking-widest uppercase">
              Full Tech Stack
            </div>
            <div className="flex flex-wrap gap-[6px]">
              {project.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
          </div>

          <div className="border-border bg-surface rounded-lg border p-5 md:sticky md:top-18">
            <div className="text-muted-text mb-4 font-mono text-xs tracking-widest uppercase">
              Links
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-text hover:text-accent flex items-center gap-3 font-mono text-xs transition-colors duration-200"
              >
                <span className="border-border bg-surface2 flex h-7 w-7 items-center justify-center rounded-lg border text-sm">
                  ↗
                </span>
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-text hover:text-accent flex items-center gap-3 font-mono text-xs transition-colors duration-200"
              >
                <span className="border-border bg-surface2 flex h-7 w-7 items-center justify-center rounded-lg border">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </span>
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
