import Image from "next/image";
import Link from "next/link";

export function TopOtherInfo() {
  const OTHER_INFO = [
    {
      href: "/portfolio",
      title: "Portfolio",
      src: "/portfolio-image.png",
      description: "私がこれまでに作成した制作物をまとめています。",
    },
    {
      href: "/account",
      title: "Account",
      src: "/account-image.png",
      description: "私が所有しているアカウントがまとめられています。",
    },
  ];
  return (
    <div className="flex min-h-[30vh] flex-col content-center justify-center px-32 py-10">
      <h1 className="flex justify-center text-3xl font-light text-strong-color">
        Other Information
      </h1>
      <div className="flex flex-wrap justify-around gap-5 py-10">
        {OTHER_INFO.map((data) => {
          return (
            <div
              key={data.href}
              className="flex h-full w-72 flex-col rounded-xl bg-white  shadow-xl  hover:opacity-50 max-sm:w-60"
            >
              <Link href={data.href}>
                <Image
                  src={data.src}
                  width={400}
                  height={600}
                  alt="Tech-logo"
                  className="rounded-t-xl"
                  priority={true}
                ></Image>
                <div className="min-h-32 h-32 w-72 p-2 max-sm:w-60">
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
    </div>
  );
}
