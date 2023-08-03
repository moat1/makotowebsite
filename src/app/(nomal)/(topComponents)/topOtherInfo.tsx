import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/util/pageLink";

export function TopOtherInfo() {
  const OTHER_INFO = [
    {
      id: crypto.randomUUID(),
      href: LINKS.portfolio,
      title: "Portfolio",
      imageSrc: "/portfolio-image.png",
      description: "私がこれまでに作成した制作物をまとめています。",
    },
    {
      id: crypto.randomUUID(),
      href: LINKS.account,
      title: "Account",
      imageSrc: "/account-image.png",
      description: "私が所有しているアカウントがまとめられています。",
    },
  ];

  return (
    <div className="flex min-h-[30vh] flex-col content-center justify-center px-32 py-10">
      <h1 className="flex justify-center text-3xl font-light text-strong-color">
        Other Information
      </h1>
      <div className="flex flex-wrap justify-around gap-5 py-10">
        {OTHER_INFO.map((value) => {
          return (
            <div
              key={value.id}
              className="flex h-full w-72 flex-col rounded-xl bg-white  shadow-xl  hover:opacity-50 max-sm:w-60"
            >
              <Link href={value.href}>
                <Image
                  src={value.imageSrc}
                  width={400}
                  height={600}
                  alt="Tech-logo"
                  className="rounded-t-xl"
                  priority={true}
                ></Image>
                <div className="min-h-32 h-32 w-72 p-2 max-sm:w-60">
                  <h1 className="flex justify-center p-2 font-bold text-strong-color">
                    {value.title}
                  </h1>
                  <div className="px-2 text-sm">{value.description}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
