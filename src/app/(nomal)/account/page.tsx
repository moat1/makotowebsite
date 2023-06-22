"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

export default function Account() {
  const ACCOUNT = [
    {
      href: "https://twitter.com/Km7G0svt4Jlvwxm",
      bgclass:
        "flex h-[200px] content-center justify-center w-full rounded-tl-xl rounded-tr-xl border-b-[1px] bg-gradient-to-b from-sky-500 to-sky-200",
      icon: <TwitterIcon className="m-auto h-20 w-20 text-white" />,
      title: "Twitter",
      description: "私が所有しているアカウントの一覧をまとめています。",
    },
    {
      href: "https://github.com/moat1",
      bgclass:
        "flex h-[200px] content-center justify-center rounded-tl-xl rounded-tr-xl border-b-[1px] bg-gradient-to-b from-black to-gray-500",
      icon: <GitHubIcon className="m-auto h-20 w-20 text-white" />,
      title: "GitHub",
      description: "私が所有しているアカウントの一覧をまとめています。",
    },
  ];
  return (
    <main className="m-auto text-gray-800">
      <div className="px-20 max-sm:px-5">
        <h1 className="flex justify-center p-3 text-xl font-bold text-black">Account</h1>
        <div className="p-10 max-sm:px-5">
          <h2 className="flex justify-center py-5 font-bold">概要</h2>
          <p>このページでは私が所有しているアカウントの一覧をまとめています。</p>
          <br></br>
          <p>下のカードをクリックするとアカウントのリンクへ飛ぶことが出来ます。</p>
        </div>
      </div>

      <div className="my-20 flex flex-wrap justify-center gap-10">
        {ACCOUNT.map((data) => {
          return (
            <div
              key={data.href}
              className="w-72 rounded-xl border bg-white shadow-xl hover:border-gray-400 hover:shadow-2xl"
            >
              <Link href={data.href}>
                <div className={data.bgclass}>{data.icon}</div>
                <div className="p-2">
                  <h1 className="flex justify-center p-2 font-bold">{data.title}</h1>
                  <div className="px-2 text-sm">{data.description}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
