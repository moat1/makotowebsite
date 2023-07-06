const siteName = "サイトマップ";
const description = "本サイトの主要リンクへアクセスできます";
const url = `${process.env.SITE_DOMAIN}/sitemap`;

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

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
