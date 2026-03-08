import type { Experience } from "../types";
import { getTechColor } from "../config/data";
import { useInView } from "../hooks/useInView";
import TechChip from "./ui/TechChip";

interface TimelineItemProps {
  exp: Experience;
  index: number;
}

/** Timeline item for an experience entry */
export default function TimelineItem({ exp, index }: TimelineItemProps) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-12 pb-12 last:pb-0 transition-all duration-700
        ${visible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Vertical line */}
      <div className="absolute left-0 md:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 to-transparent" />

      {/* Dot */}
      <div
        className="absolute left-[-5px] md:left-[3px] top-1.5 h-3 w-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20"
        style={{ boxShadow: "0 0 12px rgba(139, 92, 246, 0.6)" }}
      />

      {/* Card */}
      <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/80">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              {exp.role}
            </h3>
            <p className="font-code text-sm text-violet-400">{exp.company}</p>
          </div>
          <span className="font-code text-xs text-neutral-500 whitespace-nowrap">
            {exp.period}
          </span>
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          {exp.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {exp.stack.map((techName) => (
            <TechChip
              key={techName}
              name={techName}
              color={getTechColor(techName)}
              size="sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
