import data from "../../config/data";
import { useInView } from "../../hooks/useInView";
import SectionTitle from "../ui/SectionTitle";
import TechChip from "../ui/TechChip";

/** Tech stack section — dynamically iterates categories */
export default function Stack() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 md:py-32 px-6" id="stack">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Tech Stack</SectionTitle>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          style={{
            gridTemplateColumns: `repeat(${Math.min(Object.keys(data.stack).length, 4)}, minmax(0, 1fr))`,
          }}
        >
          {Object.entries(data.stack).map(([category, techs], catIdx) => (
            <div
              key={category}
              className={`transition-all duration-700 ${
                visible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${catIdx * 150}ms` }}
            >
              <h3 className="font-code text-sm font-semibold text-violet-400 uppercase tracking-wider mb-5">
                {category}
              </h3>
              <div className={`stagger-children flex flex-wrap gap-3 ${visible ? "visible" : ""}`}>
                {techs.map((tech) => (
                  <TechChip key={tech.name} name={tech.name} color={tech.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
