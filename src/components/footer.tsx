"use client";

import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/util/pageLink";

export default function Footer() {
  const BASIC = [
    { id: crypto.randomUUID(), href: LINKS.tech, linkName: "技術" },
    {
      id: crypto.randomUUID(),
      href: LINKS.portfolio,
      linkName: "ポートフォリオ",
    },
    {
      id: crypto.randomUUID(),
      href: LINKS.blog,
      linkName: "ブログ",
    },
    {
      id: crypto.randomUUID(),
      href: LINKS.account,
      linkName: "アカウント",
    },
  ];
  const ACCOUNT = [
    {
      id: crypto.randomUUID(),
      href: process.env.NEXT_PUBLIC_TWITTER,
      linkName: "Twitter",
    },
    {
      id: crypto.randomUUID(),
      href: process.env.NEXT_PUBLIC_GITHUB,
      linkName: "GitHub",
    },
  ];
  const OTHER = [
    {
      id: crypto.randomUUID(),
      href: LINKS.privacypolicy,
      linkName: "プライバシーポリシー",
    },
    {
      id: crypto.randomUUID(),
      href: LINKS.code,
      linkName: "利用規約",
    },
    {
      id: crypto.randomUUID(),
      href: LINKS.sitemap,
      linkName: "サイトマップ",
    },
  ];
  return (
    <footer className="flex flex-col border-t-[1px]">
      <div className="m-auto flex max-xl:flex-col max-xl:py-10 max-sm:m-0">
        {/* フッターロゴ */}
        <div className="mx-10 my-auto flex justify-center">
          <Link href={LINKS.top}>
            <Image
              src="/sitelogo.png"
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
            <li className="pb-3 text-xl text-strong-color">Basic</li>
            {BASIC.map((value) => {
              return (
                <li
                  key={value.id}
                  className="text-md whitespace-nowrap py-2  text-header-footer-link hover:text-black hover:underline"
                >
                  <Link href={value.href}>{value.linkName}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="mx-7 my-10 max-xl:mt-0 max-sm:my-3">
            <li className="pb-3 text-xl text-strong-color">Account</li>
            {ACCOUNT.map((value) => {
              return (
                <li
                  key={value.id}
                  className="text-md whitespace-nowrap py-2 text-header-footer-link hover:text-black hover:underline"
                >
                  <a href={value.href} target="_blank" rel="noopener noreferrer">
                    {value.linkName}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="mx-7 my-10 max-xl:mt-0 max-sm:my-3">
            <li className="pb-3 text-xl text-strong-color">Other</li>
            {OTHER.map((value) => {
              return (
                <li
                  key={value.id}
                  className="text-md whitespace-nowrap py-2 text-header-footer-link hover:text-black hover:underline"
                >
                  <Link href={value.href}>{value.linkName}</Link>
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
