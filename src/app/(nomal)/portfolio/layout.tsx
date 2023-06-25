import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "ポートフォリオページです。このページでは私がこれまでに作成した制作物（主にWebアプリケーション）の一覧を見ることが出来ます。",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full gap-5 p-16 max-sm:flex-col max-sm:px-5 max-sm:py-12">
      {children}
    </div>
  );
};

export default Layout;
