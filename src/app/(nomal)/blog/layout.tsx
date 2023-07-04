import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ",
  description: "ブログページです。",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-5 px-16 pt-0 max-sm:flex-col max-sm:px-0">
      <h1 className="flex justify-center border-b-[1px] p-5 text-3xl font-light text-strong-color">
        BLOG
      </h1>
      {children}
    </div>
  );
};

export default Layout;