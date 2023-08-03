"use client";

import Image from "next/image";

export default function AccountCard() {
  // ACCOUNTは現在、ハードコーディングしているが値の変更の可能性があるため、管理画面作成後に管理画面から値を変更できるようにする。
  const ACCOUNT = [
    {
      href: process.env.NEXT_PUBLIC_TWITTER,
      className:
        "flex content-center justify-center h-[250px] w-full rounded-tl-xl rounded-tr-xl border-b-[1px] bg-sky-200",
      snsImage: "/twitter-logo.svg",
      title: "Twitter",
      description: "私のTwitterアカウントです。",
    },
    {
      href: process.env.NEXT_PUBLIC_GITHUB,
      className:
        "flex content-center justify-center h-[250px] rounded-tl-xl rounded-tr-xl border-b-[1px] bg-gray-200",
      snsImage: "/github-mark.svg",
      title: "GitHub",
      description:
        "私のGitHubアカウントです。ポートフォリオのソースコードを見ることが出来ます。",
    },
  ];

  return (
    <div className="my-20 flex flex-wrap justify-center gap-10">
      {ACCOUNT.map((value) => {
        return (
          <div
            key={value.href}
            className="flex h-full w-72 flex-col rounded-xl bg-white  shadow-xl  hover:bg-slate-50 hover:shadow-2xl max-sm:w-60"
          >
            <a href={value.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={value.snsImage}
                width={400}
                height={600}
                alt="Tech-logo"
                className={value.className}
                priority={true}
              ></Image>
              <div className="min-h-32 h-32 w-72 p-2 max-sm:w-60">
                <h1 className="flex justify-center p-2 font-bold text-strong-color">
                  {value.title}
                </h1>
                <div className="px-2 text-sm">{value.description}</div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
