const siteName = "Tech";
const description =
  "技術ページです。このページでは私が利用することができる技術の一覧を見ることが出来ます。";
const url = `${process.env.SITE_DOMAIN}/tech`;

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
  return (
    <div className="flex w-full gap-5 p-16 max-sm:flex-col max-sm:px-0 max-sm:py-12">
      {children}
    </div>
  );
};

export default Layout;
