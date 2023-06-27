"use client";

import "/src/app/globals.css";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const PERSONAL_DATA = [
    { attribute: "年齢", data: "21" },
    { attribute: "職業", data: "学生" },
    { attribute: "出身", data: "大阪府" },
    { attribute: "居住", data: "奈良県" },
  ];

  const ABOUT_DATA = [
    { attribute: "専門", data: "フロントエンド" },
    { attribute: "言語", data: "JavaScript/TypeScript" },
    { attribute: "ライブラリ", data: "React" },
    { attribute: "フレームワーク", data: "Next.js" },
  ];

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
      href: "/tech-introduction",
      title: "Technology",
      src: "/tech-image.png",
      description: "私が使用できる技術や知っている知識について、具体的に説明しています。",
    },
    {
      href: "/portfolio",
      title: "Portfolio",
      src: "/portfolio-image.png",
      description: "私がこれまでに作成した制作物をまとめています。",
    },
    {
      href: "/blog",
      title: "Blog",
      src: "/blog-image.png",
      description: "主に技術に関する記事を中心に投稿しています。",
    },
    {
      href: "/account",
      title: "Account",
      src: "/account-image.png",
      description: "私が所有しているアカウントがまとめられています。",
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex min-h-[30vh] justify-around p-10 max-lg:flex-col max-sm:px-0">
        <div className="flex w-2/4 items-center justify-center max-lg:w-full">
          <Image
            src="/profile-photo.png"
            width={400}
            height={500}
            alt="foto"
            className="max-sm:minh-[400px]  h-[500px] w-[400px] max-sm:h-[400px] max-sm:w-[240px] max-sm:min-w-[240px]"
            priority={true}
          ></Image>
        </div>
        <div className="w-1/4 border-r border-gray-400 p-10 max-lg:w-full max-lg:border-none max-sm:min-w-[240px]">
          <h1 className="py-5 text-3xl">MAKOTO</h1>
          <ul className="text-gray-700">
            {PERSONAL_DATA.map((value) => {
              return (
                <li key={value.attribute} className="pb-3">
                  <span className="mr-10 text-sky-400">{value.attribute}</span>
                  {value.data}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/4 p-10 max-lg:w-full">
          <h1 className="flex justify-center p-5 text-xl">
            <span className="border-b-4 border-sky-400 pb-3">MESSAGE</span>
          </h1>
          <p>本サイトへお越しいただきありがとうございます！</p>
          <br />
          <p>
            Makotoと申します。文系学部に在籍している大学生で、独学でWebアプリケーション開発（主にフロントエンド）を行っています。
          </p>
          <br />
          <p>
            Next.jsを用いた開発を得意としており、モダンなWebアプリケーション開発に興味があります。
          </p>
          <br />
          <p>ぜひ、色々なページを訪れてみてください！</p>
        </div>
      </div>

      <div className="flex min-h-[30vh] bg-slate-50 px-20 max-lg:flex-col max-lg:px-10 max-sm:px-0">
        <div className="flex w-1/2 flex-col py-10 max-lg:w-full  max-sm:p-10">
          <h1 className="px-10 text-3xl max-sm:px-0">About</h1>

          <div className="text-gray-700">
            <div className="p-10 max-sm:px-0">
              {ABOUT_DATA.map((value) => {
                return (
                  <div key={value.attribute} className="flex pb-3 max-lg:flex-col">
                    <div className="inline w-32 pb-3 text-sky-400">{value.attribute}</div>
                    <div>{value.data}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="m-auto mx-auto flex w-1/2 gap-5 overflow-x-auto rounded-xl bg-white px-28 py-10 shadow-xl max-lg:my-10 max-lg:w-2/3 max-sm:hidden">
          {TECH_LOGO.map((data) => {
            return (
              <Image
                key={data}
                src={data}
                width={120}
                height={80}
                alt="foto"
                className="h-32 w-32 max-sm:h-24 max-sm:w-24"
                priority={true}
              ></Image>
            );
          })}
        </div>
      </div>
      <div className="flex min-h-[30vh] flex-col content-center justify-center px-32 py-10">
        <h1 className="flex justify-center text-3xl">Other Information</h1>
        <div className="flex flex-wrap justify-around gap-5 py-10">
          {OTHER_INFO.map((data) => {
            return (
              <div
                key={data.href}
                className="flex h-full w-72 flex-col rounded-xl bg-white  shadow-xl  hover:bg-slate-50 hover:shadow-2xl max-sm:w-60"
              >
                <Link href={data.href}>
                  <Image
                    src={data.src}
                    width={400}
                    height={600}
                    alt="Tech-logo"
                    className="rounded-t-xl"
                    priority={true}
                  ></Image>
                  <div className="min-h-32 h-32 w-72 p-2 max-sm:w-60">
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
