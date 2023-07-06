const siteName = "プライバシーポリシー";
const description =
  "本ウェブサイト上で提供するサービスにおける，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシーを定めます。";
const url = `${process.env.SITE_DOMAIN}/privacypolicy`;

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
