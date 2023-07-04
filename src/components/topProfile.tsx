import Image from "next/image";

export function TopProfile() {
  const PERSONAL_DATA = [
    { attribute: "年齢", data: "21" },
    { attribute: "職業", data: "学生" },
    { attribute: "出身", data: "大阪府" },
    { attribute: "居住", data: "奈良県" },
  ];
  return (
    <div className="flex min-h-[30vh] justify-around px-10 max-lg:flex-col max-sm:px-0">
      <div className="flex w-2/4 justify-center p-10 max-lg:w-full max-lg:pb-0">
        <Image
          src="/profile-image.jpg"
          width={400}
          height={500}
          alt="photo"
          className="h-[600px] w-auto min-w-[249px] py-5"
          priority={true}
        ></Image>
      </div>
      <div className="flex w-1/4 flex-col items-center  p-10 max-lg:w-full max-lg:border-none max-lg:py-0 max-sm:min-w-[240px]">
        <h1 className="flex justify-center py-5 text-3xl font-light text-strong-color">
          Makoto
        </h1>
        <ul className="">
          {PERSONAL_DATA.map((value) => {
            return (
              <li key={value.attribute} className="pb-3">
                <span className="mr-10 font-bold">{value.attribute}</span>
                {value.data}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-1/4 p-10 max-lg:w-full">
        <h1 className="flex justify-center p-5 text-xl">
          <span className="text-strong-color">MESSAGE</span>
        </h1>
        <p>本サイトへお越しいただきありがとうございます！</p>
        <br />
        <p>
          Makotoと申します。文系学部に在籍している大学生で、独学でWebアプリケーション開発（主にフロントエンド）を行っています。
        </p>
        <br />
        <p>
          Next.jsを用いた開発を得意としており、モダンなWebアプリケーション開発に興味があります。
        </p>
        <br />
        <p>ぜひ、色々なページを訪れてみてください！</p>
      </div>
    </div>
  );
}
