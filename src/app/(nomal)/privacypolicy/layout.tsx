import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full gap-5 p-16 max-sm:flex-col max-sm:px-5 max-sm:py-12">
      {children}
    </div>
  );
};

export default Layout;
