import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Makoto Website";
const description =
  "私は文系学部に在籍している大学生で、独学でWebアプリケーション開発（主にフロントエンド）を行っています。";
const url = process.env.SITE_DOMAIN;

export const metadata = {
  title: siteName,
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@MakotoScript",
    creator: "@MakotoScript",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className="text-nomal-color">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
