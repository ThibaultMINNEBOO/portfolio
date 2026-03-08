import { useInView } from "../../hooks/useInView";

interface SectionTitleProps {
  children: React.ReactNode;
  id?: string;
}

/** Section title with decorative gradient accent line */
export default function SectionTitle({ children, id }: SectionTitleProps) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id={id}
      className={`mb-16 transition-all duration-700 ${
        visible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        {children}
      </h2>
      <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
    </div>
  );
}
