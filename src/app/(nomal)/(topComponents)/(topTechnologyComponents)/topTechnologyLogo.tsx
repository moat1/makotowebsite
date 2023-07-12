import Image from "next/image";

export function TopTechnologyLogo() {
  const TECH_LOGO = [
    { src: "/ts-logo-128.svg", url: "https://www.typescriptlang.org/" },
    {
      src: "/react-logo.svg",
      url: "https://ja.react.dev/blog/2023/03/16/introducing-react-dev",
    },
    { src: "/next.svg", url: "https://nextjs.org/" },
    {
      src: "/vercel.svg",
      url: "https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=home",
    },
    { src: "/github-mark.svg", url: "https://github.com/" },
    { src: "/Slack-logo-RGB.svg", url: "https://slack.com/intl/ja-jp" },
    { src: "/tailwindcss-logotype.svg", url: "https://tailwindcss.com/" },
  ];

  return (
    <div className="flex w-1/2 flex-wrap content-center justify-center gap-5 bg-white px-28 py-10 max-lg:w-full max-sm:hidden">
      {TECH_LOGO.map((data) => {
        return (
          <a
            key={data.src}
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50"
          >
            <Image
              src={data.src}
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
