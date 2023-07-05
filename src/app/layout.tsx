import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Makoto Website",
  description:
    "私は文系学部に在籍している大学生で、独学でWebアプリケーション開発（主にフロントエンド）を行っています。",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className="text-nomal-color">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
