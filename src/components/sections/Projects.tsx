import { useState } from "react";
import data from "../../config/data";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ProjectCard";

/** Projects section with dynamic tech filters */
export default function Projects() {
  const allProjectTechs = Array.from(
    new Set(data.projects.flatMap((p) => p.stack)),
  );

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? data.projects.filter((p) => p.stack.includes(activeFilter))
    : data.projects;

  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6" id="projects">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Projets</SectionTitle>

        {/* Filters */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-x-visible scrollbar-none">
          <button
            onClick={() => setActiveFilter(null)}
            className={`rounded-full px-4 py-2 font-code text-xs font-medium border transition-all duration-300 whitespace-nowrap shrink-0
              ${
                activeFilter === null
                  ? "bg-violet-600/20 border-violet-500/40 text-violet-300"
                  : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/20 hover:text-neutral-200"
              }`}
          >
            Tous
          </button>
          {allProjectTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(activeFilter === tech ? null : tech)}
              className={`rounded-full px-4 py-2 font-code text-xs font-medium border transition-all duration-300 whitespace-nowrap shrink-0
                ${
                  activeFilter === tech
                    ? "bg-violet-600/20 border-violet-500/40 text-violet-300"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/20 hover:text-neutral-200"
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* See more on GitHub */}
        <div className="mt-12 text-center">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 sm:px-8 py-3.5 font-heading font-bold text-neutral-200 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 w-full sm:w-auto"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Voir plus de projets
          </a>
        </div>
      </div>
    </section>
  );
}
