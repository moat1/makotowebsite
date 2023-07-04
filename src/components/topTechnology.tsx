import Image from "next/image";
import Link from "next/link";

export function TopTechnology() {
  const ABOUT_DATA = [
    { attribute: "専門", data: "Webフロントエンド" },
    { attribute: "言語", data: "JavaScript/TypeScript" },
    { attribute: "ライブラリ", data: "React" },
    { attribute: "フレームワーク", data: "Next.js" },
  ];

  const TECH_LOGO = [
    "/js.png",
    "/ts-logo-128.svg",
    "/react-logo.svg",
    "/next.svg",
    "/vercel.svg",
    "/github-mark.svg",
    "/Slack-logo-RGB.svg",
    "/tailwindcss-logotype.svg",
  ];
  return (
    <div className="flex min-h-[30vh] border-y px-20 max-lg:flex-col max-lg:px-10 max-sm:px-0">
      <div className="flex w-1/2 flex-col py-10 max-lg:w-full  max-sm:p-10">
        <h1 className="flex justify-center px-10 text-3xl font-light text-strong-color max-sm:px-0">
          Technology
        </h1>
        <div className="flex flex-col items-center">
          <div className=" p-10 max-sm:px-0">
            {ABOUT_DATA.map((value) => {
              return (
                <div key={value.attribute} className="flex pb-3 max-lg:flex-col">
                  <div className="inline w-32 pb-3 font-bold">{value.attribute}</div>
                  <div>{value.data}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center px-10">
          <Link
            href={"/tech-introduction"}
            className="border-2 border-black bg-black px-10 py-3 text-white hover:bg-white hover:text-black"
          >
            MORE
          </Link>
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap content-center justify-center gap-5 bg-white px-28 py-10 max-lg:w-full max-sm:hidden">
        {TECH_LOGO.map((data) => {
          return (
            <Image
              key={data}
              src={data}
              width={120}
              height={80}
              alt="foto"
              className="h-16 w-16"
              priority={true}
            ></Image>
          );
        })}
      </div>
    </div>
  );
}
