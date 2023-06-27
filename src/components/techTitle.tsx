"use client";

import { usePathname } from "next/navigation";

export default function TechTitle() {
  const TECH_NAME = [
    { href: "/tech-introduction", title: "Introduction" },
    { href: "/html-page", title: "HTML5" },
    { href: "/css-page", title: "CSS3" },
    { href: "/javascript-page", title: "JavaScript(ES6)" },
    { href: "/typescript-page", title: "TypeScript" },
    { href: "/react-page", title: "React" },
    { href: "/nextjs-page", title: "Next.js" },
    { href: "/tailwindcss-page", title: "TailwindCSS" },
    { href: "/sass-page", title: "Sass" },
    { href: "/cssmodules-page", title: "CSS Modules" },
    { href: "/vscode-page", title: "VSCode" },
    { href: "/github-page", title: "GitHub" },
    { href: "/npmyarn-page", title: "npm/yarn" },
    { href: "/vercel-page", title: "Vercel" },
    { href: "/slack-page", title: "Slack" },
  ];

  const pathname = usePathname();
  const title = TECH_NAME.find((data) => data.href.includes(pathname))?.title;
  return <h1 className="flex justify-center p-5 text-3xl">{title}</h1>;
}
