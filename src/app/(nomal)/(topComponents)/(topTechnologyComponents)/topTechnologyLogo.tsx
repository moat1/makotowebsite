import Image from "next/image";

export function TopTechnologyLogo() {
  // TECH_LOGOは現在、ハードコーディングしているが値の変更の可能性があるため、管理画面作成後に管理画面から値を変更できるようにする。
  const TECH_LOGO = [
    {
      id: crypto.randomUUID(),
      logoImageSrc: "/ts-logo-128.svg",
      techSiteLink: "https://www.typescriptlang.org/",
    },
    {
      id: crypto.randomUUID(),
      logoImageSrc: "/react-logo.svg",
      techSiteLink: "https://ja.react.dev/blog/2023/03/16/introducing-react-dev",
    },
    {
      id: crypto.randomUUID(),
      logoImageSrc: "/next.svg",
      techSiteLink: "https://nextjs.org/",
    },
    {
      id: crypto.randomUUID(),
      logoImageSrc: "/vercel.svg",
      techSiteLink:
        "https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=home",
    },
    {
      id: crypto.randomUUID(),
      logoImageSrc: "/github-mark.svg",
      techSiteLink: "https://github.com/",
    },
    {
      id: crypto.randomUUID(),
      logoImageSrc: "/Slack-logo-RGB.svg",
      techSiteLink: "https://slack.com/intl/ja-jp",
    },
    {
      id: crypto.randomUUID(),
      logoImageSrc: "/tailwindcss-logotype.svg",
      techSiteLink: "https://tailwindcss.com/",
    },
  ];

  return (
    <div className="flex w-1/2 flex-wrap content-center justify-center gap-5 bg-white px-28 py-10 max-lg:w-full max-sm:hidden">
      {TECH_LOGO.map((data) => {
        return (
          <a
            key={data.id}
            href={data.techSiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50"
          >
            <Image
              src={data.logoImageSrc}
              width={120}
              height={80}
              alt="foto"
              className="h-16 w-16"
              priority={true}
            ></Image>
          </a>
        );
      })}
    </div>
  );
}
