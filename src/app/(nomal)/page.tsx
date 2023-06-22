"use client";
import "/src/app/globals.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import WorkIcon from "@mui/icons-material/Work";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const TECH_LOGO = [
    "/js.png",
    "/ts-logo-128.svg",
    "/react-logo.svg",
    "/next.svg",
    "/vercel.svg",
    "/github-mark.svg",
    "/Slack-logo-RGB.svg",
    "/tailwindcss-logotype.svg",
  ];

  const OTHER_INFO = [
    {
      href: "./tech-introduction",
      title: "Technology",
      icon: <CodeIcon className="m-auto flex h-full w-40 animate-pulse text-white" />,
      description: "私が使用できる技術や知っている知識について、具体的に説明しています。",
    },
    {
      href: "/portfolio",
      title: "Portfolio",
      icon: <WorkIcon className="m-auto flex h-full w-40 animate-pulse text-white" />,
      description: "私が使用できる技術や知っている知識について、具体的に説明しています。",
    },
    {
      href: "/blog",
      title: "Blog",
      icon: <ArticleIcon className="m-auto flex h-full w-40 animate-pulse text-white" />,
      description: "私が使用できる技術や知っている知識について、具体的に説明しています。",
    },
    {
      href: "/account",
      title: "Account",
      icon: (
        <AccountCircleIcon className="m-auto flex h-full w-40 animate-pulse text-white" />
      ),
      description: "私が使用できる技術や知っている知識について、具体的に説明しています。",
    },
    {
      href: "/contact",
      title: "Contact",
      icon: (
        <ContactSupportIcon className="m-auto flex h-full w-40 animate-pulse text-white" />
      ),
      description: "私が使用できる技術や知っている知識について、具体的に説明しています。",
    },
  ];

  return (
    <div>
      <div className="flex min-h-[30vh] content-center justify-around bg-gray-50  px-10 py-20 max-sm:flex-col">
        <div className="my-auto flex  max-sm:mb-10">
          <div className="flex h-32 w-32 justify-center rounded-full border bg-green-200 max-sm:m-auto">
            <Image
              src="/profile-icon.png"
              width={120}
              height={80}
              alt="logo"
              className="h-32 w-32 rounded-full"
              priority={true}
            ></Image>
          </div>
        </div>
        <div className="my-auto flex flex-col max-sm:m-auto">
          <h1 className="flex justify-center pb-4 text-2xl font-bold">MAKOTO</h1>
          <ul>
            <li>Age: 21</li>
            <li>Job: 学生</li>
            <li>Hoby: プログラミング</li>
          </ul>
        </div>
      </div>
      <div className="flex min-h-[30vh] py-20 max-sm:flex-col-reverse">
        <div className="m-auto flex w-1/2 flex-col justify-center py-16 max-sm:mx-auto max-sm:px-0 max-sm:py-0">
          <h1 className="flex justify-center pb-4 text-2xl font-bold">About</h1>
          <ul className="m-auto mt-0 w-fit px-10">
            <li>専門: フロントエンド</li>
            <li>言語: JavaScript, TypeScript</li>
            <li>ライブラリ/フレームワーク: React, Next.js</li>
          </ul>
        </div>
        <div className="flex w-1/2 flex-wrap justify-center gap-5 p-10 max-sm:w-full">
          {TECH_LOGO.map((data) => {
            return (
              <Image
                key={data}
                src={data}
                width="80"
                height="80"
                alt="Tech-logo"
                className="h-28 w-28"
                priority={true}
              ></Image>
            );
          })}
        </div>
      </div>
      <div className="flex min-h-[30vh] flex-col content-center justify-center bg-gray-50 p-10 py-20">
        <h1 className="flex justify-center pb-8 text-2xl font-bold">Other Information</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {OTHER_INFO.map((data) => {
            return (
              <div
                key={data.href}
                className="w-72 rounded-xl border bg-white  shadow-xl hover:border-gray-400 hover:shadow-2xl"
              >
                <Link href={data.href}>
                  <div className="h-[200px] rounded-tl-xl rounded-tr-xl border-b-[1px] bg-gradient-to-b from-black via-gray-500 to-black">
                    {data.icon}
                  </div>
                  <div className="p-2">
                    <h1 className="flex justify-center p-2 font-bold">{data.title}</h1>
                    <div className="px-2 text-sm">{data.description}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
