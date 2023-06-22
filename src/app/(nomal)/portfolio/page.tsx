import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const PORTFOLIO = [
    {
      href: "./",
      image: "/pagelogo.png",
      title: "Makoto Website",
      description:
        "私のホームページです。どのような技術を扱うことができるのかや私と連絡を取ることが出来ます。",
    },
  ];
  return (
    <main className="m-auto text-gray-800">
      <div className="px-20 max-sm:px-5">
        <h1 className="flex justify-center p-3 text-xl font-bold text-black">
          Portfolio
        </h1>
        <div className="p-10 max-sm:px-5">
          <h2 className="flex justify-center py-5 font-bold">概要</h2>
          <p>
            このページでは私がこれまでに作成した制作物（主にWebアプリケーション）の一覧を見ることが出来ます。
          </p>
          <br></br>
          <p>下のカードをクリックするとリンクへ飛ぶことが出来ます。</p>
        </div>
      </div>

      <div className="my-20 flex flex-wrap justify-center gap-10">
        {PORTFOLIO.map((data) => {
          return (
            <div
              key={data.href}
              className="w-72 rounded-xl border bg-white  shadow-xl hover:border-gray-400 hover:shadow-2xl"
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
                  <h1 className="flex justify-center p-2 font-bold">{data.title}</h1>
                  <div className="px-2 text-sm">{data.description}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
