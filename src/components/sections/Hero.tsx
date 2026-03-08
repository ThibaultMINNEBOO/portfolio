import data, { allTechs } from "../../config/data";
import TechChip from "../ui/TechChip";

/** Full-screen hero with animated blobs, availability badge, CTA buttons */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob absolute -top-32 -left-32 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-violet-600/20 blur-[80px] sm:blur-[120px]" />
        <div className="animate-blob-delay absolute top-1/3 -right-32 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-cyan-500/15 blur-[80px] sm:blur-[120px]" />
        <div className="animate-blob-delay-2 absolute -bottom-32 left-1/3 h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] rounded-full bg-violet-500/10 blur-[60px] sm:blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 pt-20 sm:pt-0 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 mb-8">
          <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-code text-xs text-emerald-400">
            Disponible pour de nouveaux projets
          </span>
        </div>

        {/* Name */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none mb-6">
          {data.name}
        </h1>

        {/* Title */}
        <p className="font-code text-lg sm:text-xl text-violet-400 mb-6">
          {`<${data.title} />`}
        </p>

        {/* Bio */}
        <p className="mx-auto max-w-xl text-neutral-400 text-base sm:text-lg leading-relaxed mb-10">
          {data.bio}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center rounded-xl bg-violet-600 px-8 py-3.5 font-heading font-bold text-white transition-all duration-300 hover:bg-violet-500 glow-violet"
          >
            Voir mes projets
          </a>
          <a
            href={`mailto:${data.email}`}
            className="w-full sm:w-auto text-center rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-8 py-3.5 font-heading font-bold text-neutral-200 transition-all duration-300 hover:bg-white/10 hover:border-white/25"
          >
            Me contacter
          </a>
        </div>

        {/* Hero tech preview */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {allTechs.slice(0, 8).map((tech) => (
            <TechChip key={tech.name} name={tech.name} color={tech.color} size="sm" />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-neutral-600">
          <span className="font-code text-xs">scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
