"use client";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
    <div className="flex w-full gap-5 p-16 max-sm:flex-col max-sm:px-5 max-sm:py-12">
      <div className="flex h-screen w-56 rounded-3xl bg-gray-100 px-10 py-10 max-sm:h-[250px] max-sm:w-full max-sm:overflow-auto">
        <ul className="w-full">
          <h1 className="m-3 flex justify-center text-xl font-bold">Navigation</h1>
          <p className="flex justify-center text-sm">下にスクロールできます</p>
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
      <div className="w-full px-10 py-5">
        <h1 className="flex justify-center p-5 text-2xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
