import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className="text-nomal-color">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
