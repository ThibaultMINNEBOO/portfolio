// ═══════════════════════════════════════════════════════════
// Types — Portfolio
// ═══════════════════════════════════════════════════════════

/** A single technology (e.g. React, Docker…) */
export interface Tech {
  name: string;
  color: string;
}

/** A portfolio project */
export interface Project {
  title: string;
  desc: string;
  stack: string[];
  link: string | null;
  github: string | null;
}

/** A work experience entry */
export interface Experience {
  role: string;
  company: string;
  period: string;
  desc: string;
  stack: string[];
}

/** A nav link */
export interface NavLink {
  label: string;
  href: string;
}

/** The complete portfolio data shape */
export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  stack: Record<string, Tech[]>;
  projects: Project[];
  experiences: Experience[];
  navLinks: NavLink[];
}
