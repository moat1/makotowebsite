"use client";

import Image from "next/image";

export default function AccountCard() {
  const TWITTER_URL = String(process.env.NEXT_PUBLIC_TWITTER);
  const GITHUB_URL = String(process.env.NEXT_PUBLIC_GITHUB);

  const ACCOUNT = [
    {
      href: TWITTER_URL,
      className:
        "flex content-center justify-center h-[250px] w-full rounded-tl-xl rounded-tr-xl border-b-[1px] bg-sky-200",
      src: "/twitter-logo.svg",
      title: "Twitter",
      description: "私のTwitterアカウントです。",
    },
    {
      href: GITHUB_URL,
      className:
        "flex content-center justify-center h-[250px] rounded-tl-xl rounded-tr-xl border-b-[1px] bg-gray-200",
      src: "/github-mark.svg",
      title: "GitHub",
      description:
        "私のGitHubアカウントです。ポートフォリオのソースコードを見ることが出来ます。",
    },
  ];

  return (
    <div className="my-20 flex flex-wrap justify-center gap-10">
      {ACCOUNT.map((data) => {
        return (
          <div
            key={data.href}
            className="flex h-full w-72 flex-col rounded-xl bg-white  shadow-xl  hover:bg-slate-50 hover:shadow-2xl max-sm:w-60"
          >
            <a href={data.href}>
              <Image
                src={data.src}
                width={400}
                height={600}
                alt="Tech-logo"
                className={data.className}
                priority={true}
              ></Image>
              <div className="min-h-32 h-32 w-72 p-2 max-sm:w-60">
                <h1 className="flex justify-center p-2 font-bold">{data.title}</h1>
                <div className="px-2 text-sm">{data.description}</div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
