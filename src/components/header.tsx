"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LINKS } from "@/util/pageLink";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);

  // ハンバーガーメニューの状態切り替え関数
  const toggleHamburgerMenuState = () => {
    return setHamburger((prevState) => !prevState);
  };

  // ヘッダーリンクのデータ型
  type HeaderLinkType = {
    id: string;
    href: string;
    icon: JSX.Element;
    pageName: string;
  }[];

  const HEADER_LINK: HeaderLinkType = [
    {
      id: crypto.randomUUID(),
      href: LINKS.tech,
      icon: <CodeIcon />,
      pageName: "Tech",
    },
    {
      id: crypto.randomUUID(),
      href: LINKS.portfolio,
      icon: <WorkIcon />,
      pageName: "Portfolio",
    },
    {
      id: crypto.randomUUID(),
      href: LINKS.blog,
      icon: <ArticleIcon />,
      pageName: "Blog",
    },
    {
      id: crypto.randomUUID(),
      href: LINKS.account,
      icon: <AccountCircleIcon />,
      pageName: "Account",
    },
  ];

  return (
    <>
      <header className="fixed z-20 flex w-full justify-between border-b-[1px] bg-white/75 px-10 py-2 backdrop-blur-xl max-sm:px-5">
        {/* サイトのロゴ */}
        <div>
          {hamburger === false ? (
            <Link href={LINKS.top}>
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
            <Link href={LINKS.top} onClick={toggleHamburgerMenuState}>
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
            {HEADER_LINK.map((value) => {
              return (
                <li key={value.id}>
                  <Link href={value.href}>
                    <div className="text-header-footer-value mx-2 box-border h-[42px] w-full py-2 hover:border-b-2 hover:border-black hover:text-black">
                      {value.icon} {value.pageName}
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
          onClick={toggleHamburgerMenuState}
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

      {/* ハンバーガーメニューの状態がtrue（押されている状態）の時のレイアウト */}
      {hamburger ? (
        <nav className="fixed z-10 h-screen w-full bg-white pt-[81px] hpc:hidden">
          <ul className="flex h-full flex-col p-[10vh] text-xl text-header-footer-link">
            {HEADER_LINK.map((value) => {
              return (
                <li key={value.id} className="m-auto hover:text-black hover:underline">
                  <Link href={value.href} onClick={toggleHamburgerMenuState}>
                    {value.pageName}
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
