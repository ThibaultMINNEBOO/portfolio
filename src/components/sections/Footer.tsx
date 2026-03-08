import data from "../../config/data";

/** Footer with copyright and tech credits */
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-code text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
        </p>
        <p className="font-code text-xs text-neutral-600">
          Built with{" "}
          <span className="text-violet-400">React</span> +{" "}
          <span className="text-cyan-400">TailwindCSS</span>
        </p>
      </div>
    </footer>
  );
}
