"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
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
      <header className="fixed z-20 flex w-full justify-between border-b-[1px] bg-white px-10 py-5 opacity-95 max-sm:px-5">
        {/* ロゴ */}
        <div className="">
          {hamburger === false ? (
            <Link href="/">
              <Image
                src="/pagelogo.png"
                width={120}
                height={80}
                alt="logo"
                className="h-auto w-auto"
                priority={true}
              />
            </Link>
          ) : (
            <Link href="/" onClick={toggle}>
              <Image
                src="/pagelogo.png"
                width={120}
                height={80}
                alt="logo"
                className="h-auto w-auto"
                priority={true}
              />
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
        <div className="visible hpc:hidden" onClick={toggle}>
          {hamburger ? (
            <CloseIcon className="m-auto mx-2 h-10 w-10 rounded-3xl px-2 hover:bg-gray-200" />
          ) : (
            <MenuIcon className="m-auto mx-2 h-10 w-10 rounded-3xl px-2 hover:bg-gray-200" />
          )}
        </div>
      </header>
      {hamburger ? (
        <nav className="fixed z-10 h-screen w-full bg-gray-200 pt-[81px] hpc:hidden">
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
    </>
  );
}
