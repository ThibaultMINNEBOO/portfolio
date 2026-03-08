import type { Project } from "../types";
import { getTechColor } from "../config/data";
import { useInView } from "../hooks/useInView";
import TechChip from "./ui/TechChip";

interface ProjectCardProps {
  project: Project;
}

/** Project card with gradient header, glow hover and tech badges */
export default function ProjectCard({ project }: ProjectCardProps) {
  const { ref, visible } = useInView<HTMLDivElement>();

  const firstColor = getTechColor(project.stack[0]);
  const secondColor = getTechColor(project.stack[1]);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm
        transition-all duration-500 hover:scale-[1.02] hover:border-white/20
        ${visible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
      style={{ boxShadow: "0 0 0 0 transparent" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${firstColor}25`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
      }}
    >
      {/* Gradient bar */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${firstColor}, ${secondColor})` }}
      />

      <div className="p-5 sm:p-6 md:p-8">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-5">
          {project.desc}
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((techName) => (
            <TechChip
              key={techName}
              name={techName}
              color={getTechColor(techName)}
              size="sm"
            />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-violet-600/20 border border-violet-500/30 px-4 py-2 text-sm font-medium text-violet-300
                transition-all duration-300 hover:bg-violet-600/30 hover:border-violet-400/50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" />
              </svg>
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-neutral-300
                transition-all duration-300 hover:bg-white/5 hover:border-white/20"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
