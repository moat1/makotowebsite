"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import GavelIcon from "@mui/icons-material/Gavel";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WorkIcon from "@mui/icons-material/Work";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const BASIC = [
    { id: 1, href: "/tech-introduction", icon: <CodeIcon />, linkName: "技術" },
    { id: 2, href: "/portfolio", icon: <WorkIcon />, linkName: "ポートフォリオ" },
    { id: 3, href: "/blog", icon: <ArticleIcon />, linkName: "ブログ" },
    { id: 4, href: "/account", icon: <AccountCircleIcon />, linkName: "アカウント" },
  ];
  const ACCOUNT = [
    { id: 1, href: "https://twitter.com/", icon: <TwitterIcon />, linkName: "Twitter" },
    {
      id: 2,
      href: "https://github.com/moat1/makotowebsite",
      icon: <GitHubIcon />,
      linkName: "GitHub",
    },
  ];
  const OTHER = [
    {
      id: 1,
      href: "/privacypolicy",
      icon: <VerifiedUserIcon />,
      linkName: "プライバシーポリシー",
    },
    { id: 2, href: "/code", icon: <GavelIcon />, linkName: "利用規約" },
    { id: 3, href: "/sitemap", icon: <AccountTreeIcon />, linkName: "サイトマップ" },
  ];
  return (
    <footer className="flex flex-col border-t-[1px]">
      <div className="m-auto flex max-xl:flex-col max-xl:py-10 max-sm:m-0">
        {/* フッターロゴ */}
        <div className="mx-10 my-auto flex justify-center">
          <Link href="/">
            <Image
              src="/pagelogo.png"
              width={100}
              height={50}
              alt="logo"
              className="my-10 h-auto w-auto max-xl:my-5"
              priority={true}
            />
          </Link>
        </div>

        {/* フッターリンク */}
        <div className="flex justify-start py-10 max-xl:py-0 max-sm:mx-auto max-sm:flex-col">
          <ul className="mx-7 my-10 max-xl:my-0 max-sm:my-3">
            <li className="pb-3 font-bold">Basic</li>
            {BASIC.map((data) => {
              return (
                <li
                  key={data.id}
                  className="whitespace-nowrap py-2 text-sm text-gray-600 hover:text-blue-500"
                >
                  <Link href={data.href}>
                    {data.icon} {data.linkName}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mx-7 my-10 max-xl:mt-0 max-sm:my-3">
            <li className="pb-3 font-bold">Account</li>
            {ACCOUNT.map((data) => {
              return (
                <li
                  key={data.id}
                  className="whitespace-nowrap py-2 text-sm text-gray-600 hover:text-blue-500"
                >
                  <a href={data.href}>
                    {data.icon} {data.linkName}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="mx-7 my-10 max-xl:mt-0 max-sm:my-3">
            <li className="pb-3 font-bold">Other</li>
            {OTHER.map((data) => {
              return (
                <li
                  key={data.id}
                  className="whitespace-nowrap py-2 text-sm text-gray-600 hover:text-blue-500"
                >
                  <Link href={data.href}>
                    {data.icon} {data.linkName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* コピーライト */}
      <small className="flex w-full justify-center border-t-[1px] py-5">
        ©︎ 2023 makoto
      </small>
    </footer>
  );
}
