"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);

  // メニュー状態切り替え関数
  const toggle = () => {
    return setHamburger((prevState) => !prevState);
  };

  // ヘッダーリンクのデータ
  type Props = {
    href: string;
    icon: JSX.Element;
    pageName: string;
  }[];

  const HEADER_LINK: Props = [
    { href: "/tech-introduction", icon: <CodeIcon />, pageName: "Tech" },
    { href: "/portfolio", icon: <WorkIcon />, pageName: "Portfolio" },
    { href: "/blog", icon: <ArticleIcon />, pageName: "Blog" },
    { href: "/account", icon: <AccountCircleIcon />, pageName: "Account" },
  ];
  return (
    <>
      <header className="fixed z-20 flex w-full justify-between border-b-[1px] bg-white/75 px-10 py-2 backdrop-blur-xl max-sm:px-5">
        {/* ロゴ */}
        <div className="">
          {hamburger === false ? (
            <Link href="/">
              <Image
                src="/sitelogo.png"
                width={120}
                height={80}
                alt="logo"
                className="h-[50px] w-auto"
                priority={true}
              />
            </Link>
          ) : (
            <Link href="/" onClick={toggle}>
              <Image
                src="/sitelogo.png"
                width={120}
                height={80}
                alt="logo"
                className="h-[50px] w-auto"
                priority={true}
              />
            </Link>
          )}
        </div>

        {/* 画面が920px以上の場合、ヘッダーにメニューを表示 */}
        <div className="mx-20 flex max-hpc:hidden">
          <ul className="m-auto flex gap-3">
            {HEADER_LINK.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href}>
                    <div className="mx-2 box-border h-[42px] w-full py-2 text-header-footer-link hover:border-b-2 hover:border-black hover:text-black">
                      {link.icon} {link.pageName}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 画面が920px未満の場合、ハンバーガーメニューを表示 */}
        <div
          className="visible m-0 flex content-center justify-center hpc:hidden"
          onClick={toggle}
        >
          {hamburger ? (
            <div className="m-auto flex h-8 w-8 flex-col items-center justify-center rounded-full p-5 hover:bg-gray-200">
              <span className="w-[24px] -rotate-[45deg] border-b-[1.5px] border-gray-700"></span>
              <span className="w-[24px] rotate-[45deg] border-b-[1.5px] border-gray-700"></span>
            </div>
          ) : (
            <div className="m-auto flex h-8 w-8 flex-col items-center justify-center rounded-full p-5 hover:bg-gray-200">
              <span className="m-[4px] w-6  border-b-[1.5px] border-gray-700"></span>
              <span className="m-[4px] w-6  border-b-[1.5px] border-gray-700"></span>
            </div>
          )}
        </div>
      </header>
      {hamburger ? (
        <nav className="fixed z-10 h-screen w-full bg-white pt-[81px] hpc:hidden">
          <ul className="flex h-full flex-col p-[10vh] text-xl text-header-footer-link">
            {HEADER_LINK.map((link) => {
              return (
                <li key={link.href} className="m-auto hover:text-black hover:underline">
                  <Link href={link.href} onClick={toggle}>
                    {link.pageName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
