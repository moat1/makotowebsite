import Link from "next/link";

import { LINKS } from "@/util/pageLink";

export default function Sitemap() {
  const PAGE = [
    { pageName: "トップページ", path: LINKS.top },
    { pageName: "技術ページ", path: LINKS.tech },
    { pageName: "ポートフォリオページ", path: LINKS.portfolio },
    { pageName: "ブログページ", path: LINKS.blog },
    { pageName: "アカウントページ", path: LINKS.account },
    { pageName: "プライバシーポリシーページ", path: LINKS.privacypolicy },
    { pageName: "利用規約ページ", path: LINKS.code },
    { pageName: "サイトマップページ", path: LINKS.sitemap },
  ];

  return (
    <main>
      <h1 className="flex justify-center border-b p-5 text-xl text-strong-color">
        サイトマップ
      </h1>
      <div className="flex flex-col gap-5 p-20">
        {PAGE.map((item) => {
          return (
            <Link
              key={item.path}
              href={item.path}
              className="hover:text-black hover:underline"
            >
              {item.pageName}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
