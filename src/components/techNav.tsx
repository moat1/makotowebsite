"use client";

import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TechNav() {
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

  return (
    <>
      <div className="flex h-[100vh] min-w-[250px] overflow-auto rounded-3xl bg-gray-100 px-10 py-10 max-sm:h-[250px] max-sm:w-full">
        <ul className="w-full">
          <h1 className="m-3 flex justify-center text-xl font-bold">Navigation</h1>
          <p className="flex justify-center pb-5 text-sm">下にスクロールできます</p>
          {TECH_NAME.map((data) => {
            return (
              <li
                key={data.href}
                className="border-b-[1px] py-3 text-gray-600 hover:text-blue-500"
              >
                <Link href={data.href}>
                  {title === data.title ? (
                    <span className="font-bold text-black">
                      {<CircleIcon className="mr-2 h-5 w-5" />}
                      {data.title}
                    </span>
                  ) : (
                    <span>{data.title}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
