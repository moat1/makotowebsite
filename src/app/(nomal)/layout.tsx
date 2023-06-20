"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import GavelIcon from "@mui/icons-material/Gavel";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WorkIcon from "@mui/icons-material/Work";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [hamburger, setHamburger] = useState(false);

  // メニュー状態切り替え関数
  const toggle = () => {
    setHamburger((prevState) => !prevState);
  };

  // ヘッダーリンクのデータ
  type Props = {
    href: string;
    icon: JSX.Element;
    pageName: string;
  }[];

  const HEADER_LINK: Props = [
    { href: "tech", icon: <CodeIcon />, pageName: "Tech" },
    { href: "portfolio", icon: <WorkIcon />, pageName: "Portfolio" },
    { href: "blog", icon: <ArticleIcon />, pageName: "Blog" },
    { href: "account", icon: <AccountCircleIcon />, pageName: "Account" },
    { href: "contact", icon: <ContactSupportIcon />, pageName: "Contact" },
  ];

  // フッターリンクのデータ
  const BASIC = [
    { id: 1, href: "/tech", icon: <CodeIcon />, linkName: "技術" },
    { id: 2, href: "/portfolio", icon: <WorkIcon />, linkName: "ポートフォリオ" },
    { id: 3, href: "/blog", icon: <ArticleIcon />, linkName: "ブログ" },
    { id: 4, href: "/account", icon: <AccountCircleIcon />, linkName: "アカウント" },
    { id: 5, href: "/contact", icon: <ContactSupportIcon />, linkName: "コンタクト" },
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
    <div>
      {/* ヘッダー */}
      <header className="fixed left-0 top-0 z-20 flex w-full justify-between border-b-[1px] bg-white py-5 pl-5 pr-3 opacity-95">
        {/* ロゴ */}
        <div className="flex">
          {hamburger === false ? (
            <Link href="/">
              <Image src="/pagelogo.png" width={120} height={80} alt="logo" />
            </Link>
          ) : (
            <Link href="/" onClick={toggle}>
              <Image src="/pagelogo.png" width={120} height={80} alt="logo" />
            </Link>
          )}
        </div>

        {/* 画面が920px以上の場合、ヘッダーにメニューを表示 */}
        <div className="mx-20 flex max-hpc:hidden">
          <ul className="m-auto flex">
            {HEADER_LINK.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    <div className="mx-2 p-2 text-gray-600 hover:text-blue-500 ">
                      {link.icon} {link.pageName}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 画面が920px未満の場合、ハンバーガーメニューを表示 */}
        <div className="visible flex hpc:hidden" onClick={toggle}>
          {hamburger ? (
            <CloseIcon className="m-auto mx-2 h-10 w-10 rounded-3xl px-2 hover:bg-gray-200" />
          ) : (
            <MenuIcon className="m-auto mx-2 h-10 w-10 rounded-3xl px-2 hover:bg-gray-200" />
          )}
        </div>
      </header>

      <div className="h-[81px]"></div>

      {/* ハンバーガーメニュークリック時に表示されるメニュー */}
      {hamburger ? (
        <nav className="fixed top-0 z-10 h-full w-full bg-gray-200 pt-[81px] hpc:hidden">
          <ul className="flex h-full flex-col p-[10vh] text-xl text-gray-700">
            {HEADER_LINK.map((link) => {
              return (
                <li key={link.href} className="m-auto hover:text-blue-500">
                  <Link href={link.href} onClick={toggle}>
                    {link.icon} {link.pageName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}

      {children}
      <div className="h-[70vh]"></div>

      {/* フッター */}
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
                className="my-10 max-xl:my-5"
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
                    <Link href={data.href}>
                      {data.icon} {data.linkName}
                    </Link>
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
    </div>
  );
};

export default RootLayout;
