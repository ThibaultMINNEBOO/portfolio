interface TechChipProps {
  name: string;
  color?: string;
  size?: "sm" | "md";
}

/** Tech chip / badge with brand color dot and glow on hover */
export default function TechChip({ name, color, size = "md" }: TechChipProps) {
  const dotColor = color ?? "#a78bfa";
  const isSmall = size === "sm";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
        transition-all duration-300 hover:scale-105 hover:border-white/20 cursor-default
        ${isSmall ? "px-2.5 py-1 text-xs" : "px-4 py-2 text-sm"}`}
      style={{ boxShadow: `0 0 0 0 ${dotColor}00` }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${dotColor}40`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${dotColor}00`;
      }}
    >
      <span
        className={`rounded-full ${isSmall ? "h-2 w-2" : "h-2.5 w-2.5"}`}
        style={{ backgroundColor: dotColor }}
      />
      <span className="font-code font-medium text-neutral-200">{name}</span>
    </span>
  );
}
