const siteName = "利用規約";
const description =
  "この利用規約は，当サイトが提供するサービスの利用条件を定めるものです。当サイトをご利用の皆さまには，本規約に従って，本サービスをご利用いただきます。";
const url = `${process.env.SITE_DOMAIN}/code`;

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
    <div className="flex w-full gap-5 p-16 max-sm:flex-col max-sm:px-5 max-sm:py-12">
      {children}
    </div>
  );
};

export default Layout;
