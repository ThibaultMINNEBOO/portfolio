import type { PortfolioData } from "../types";

// ═══════════════════════════════════════════════════════════
// ✏️ CONFIGURATION — Modifie uniquement ce fichier pour
// personnaliser ton portfolio. Tout le reste se met à jour
// automatiquement.
// ═══════════════════════════════════════════════════════════

const data: PortfolioData = {
  // ──────────────── Infos personnelles ────────────────
  // ✏️ EDITABLE
  name: "Thibault MINNEBOO",
  title: "Développeur Full-Stack",
  bio: "Développeur passionné, je conçois des applications web modernes, performantes et élégantes. J'aime transformer des idées complexes en interfaces fluides et intuitives.",
  email: "thibault.minneboo.pro@gmail.com",
  github: "https://github.com/ThibaultMINNEBOO",
  linkedin: "https://www.linkedin.com/in/thibault-minneboo/",

  // ──────────────── Tech stack ────────────────────────
  // ✏️ EDITABLE — Ajouter une catégorie = ajouter une clé.
  //               Ajouter une techno   = ajouter un objet.
  stack: {
    Frontend: [
      { name: "React", color: "#61DAFB" },
      { name: "TailwindCSS", color: "#06B6D4" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Next.js", color: "#FFFFFF" },
    ],
    Backend: [
      { name: "Node.js", color: "#339933" },
      { name: "NestJS", color: "#E0234E" },
      { name: "Symfony", color: "#ddd86a" },
      { name: "Express", color: "#FFFFFF" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Prisma", color: "#2D3748" },
    ],
    "DevOps & Tools": [
      { name: "Docker", color: "#2496ED" },
      { name: "Git", color: "#F05032" },
      { name: "GitHub Actions", color: "#2088FF" },
    ],
  },

  // ──────────────── Projets ───────────────────────────
  // ✏️ EDITABLE — Ajouter un objet = nouvelle carte projet
  projects: [
    {
      title: "CelcatWeb",
      desc: "Plateforme de visualisation d'emploi du temps universitaire avec filtres avancés.",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "DaisyUI", "Prisma"],
      link: null,
      github: "https://github.com/ThibaultMINNEBOO/celcatweb",
    },
    {
      title: "Codemouv",
      desc: "Plateforme de formation en ligne spécialisée dans l'informatique",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      link: null,
      github: "https://github.com/ThibaultMINNEBOO/codemouv",
    },
    {
      title: "PoppyAlert",
      desc: "Contribution au projet avec le créateur de PoppyAlert, une plateforme qui aide à retrouver les animaux perdus en mobilisant une communauté locale grâce à des alertes en temps réel et à la géolocalisation.",
      stack: ["Symfony", "Bootstrap", "PHP", "PostgreSQL", "JQuery"],
      link: "https://www.poppyalert.fr/",
      github: null,
    },
    {
      title: "La française des développeuses",
      desc: "Refonte globale du site de la Française des développeuses, une plateforme de partage de portfolio destiné aux développeuses pour mettre en valeur leurs projets et compétences.",
      stack: ["React", "Next.js", "TailwindCSS", "Prisma"],
      link: null,
      github: "https://github.com/ThibaultMINNEBOO/francaise-des-developpeuses",
    },
  ],

  // ──────────────── Expériences ───────────────────────
  // ✏️ EDITABLE — Ajouter un objet = nouvelle entrée timeline
  experiences: [
    {
      role: "Freelance - Développement full-stack",
      company: "Mately — Reims",
      period: "Juin 2025 — Décembre 2025",
      desc: "Développement de la fonctionnalité premium et de l'espace publicitaire. Résolution de divers bugs applicatifs et API. Développement de nouvelles fonctionnalités pour le module vidéos.",
      stack: ["React Native", "Node.js", "MongoDB", "React", "Express"],
    },
    {
      role: "Stagiaire - Développement full-stack",
      company: "Mately — Reims",
      period: "Janvier 2025 — Avril 2025",
      desc: "Refonte du backoffice et mise en place de nouvelles KPIs. Correction de bugs sur l'application et le backend. Refonte du modèle de données concernant les jeux.",
      stack: ["React Native", "Node.js", "MongoDB", "React", "Express"],
    },
    {
      role: "Stagiaire - Analyste programmeur",
      company: "JVS Mairistem — Saint-Martin-sur-le-Pré",
      period: "Avril 2024 — Juin 2024",
      desc: "Création de composants et de pages en Next.js avec ChakraUI en TypeScript. Développement d'un module de génération de fichiers CSV à partir de données en base. Mise en place de branchements API entre le frontend et le backend. Méthodologie agile SCRUM.",
      stack: ["Next.js", "TypeScript", "Node.js", "ChakraUI", "NestJS"],
    },
  ],

  // ──────────────── Navigation ────────────────────────
  // ✏️ EDITABLE — Ajouter/renommer les liens de la navbar
  navLinks: [
    { label: "Stack", href: "#stack" },
    { label: "Projets", href: "#projects" },
    { label: "Expérience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export default data;

// ── Helpers ──────────────────────────────────────────────
// Flat array of all techs (for color lookups in components)
export const allTechs = Object.values(data.stack).flat();

/** Find a tech's brand color by name, with fallback */
export function getTechColor(name: string): string {
  return allTechs.find((t) => t.name === name)?.color ?? "#a78bfa";
}
