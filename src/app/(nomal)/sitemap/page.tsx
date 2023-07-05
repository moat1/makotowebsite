import Link from "next/link";

export default function Sitemap() {
  const PAGE = [
    { pageName: "トップページ", path: "/" },
    { pageName: "技術ページ", path: "/tech-introduction" },
    { pageName: "ポートフォリオページ", path: "/portfolio" },
    { pageName: "ブログページ", path: "/blog" },
    { pageName: "アカウントページ", path: "/account" },
    { pageName: "プライバシーポリシーページ", path: "/privacypolicy" },
    { pageName: "利用規約ページ", path: "/code" },
    { pageName: "サイトマップページ", path: "/sitemap" },
  ];

  return (
    <main>
      <h1 className="flex justify-center border-b p-10 text-xl text-strong-color">
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
