import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "このページでは私が所有しているアカウントの一覧をまとめています。",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full gap-5 p-16 max-sm:flex-col max-sm:px-5 max-sm:py-12">
      {children}
    </div>
  );
};

export default Layout;
