import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/util/pageLink";

export function PortfolioCard() {
  const PORTFOLIO = [
    {
      href: LINKS.top,
      image: "/sitelogo.png",
      title: "Makoto Website",
      description:
        "私のホームページです。どのような技術を扱うことができるのかやその他の情報を知ることが出来ます。",
    },
  ];
  return (
    <div className="my-20 flex flex-wrap justify-center gap-10">
      {PORTFOLIO.map((data) => {
        return (
          <div
            key={data.href}
            className="w-72 rounded-xl bg-white  shadow-xl hover:opacity-50  max-sm:w-60"
          >
            <Link href={data.href}>
              <div className="flex h-[200px] content-center rounded-tl-xl rounded-tr-xl border-b-[1px] bg-gradient-to-b from-gray-300 to-white ">
                <Image
                  src={data.image}
                  alt="logo"
                  width={120}
                  height={80}
                  className="m-auto h-auto w-auto opacity-95"
                  priority={true}
                ></Image>
              </div>
              <div className="p-2">
                <h1 className="flex justify-center p-2 font-bold text-strong-color">
                  {data.title}
                </h1>
                <div className="px-2 text-sm">{data.description}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
