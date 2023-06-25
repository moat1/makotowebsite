import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech JavaScript",
  description: "JavaScriptがどのくらい使えるのかが分かります。",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full gap-5 max-sm:flex-col">{children}</div>;
};

export default Layout;
