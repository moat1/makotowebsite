import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Makoto Web Page",
  description:
    "MakotoのWebページです。どのような技術を扱うことができるのかや私と連絡を取ることが出来ます。",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
