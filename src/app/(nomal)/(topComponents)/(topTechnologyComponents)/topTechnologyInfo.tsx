import { Btn } from "@/components/Btn";

export function TopTechnologyInfo() {
  // ABOUT_DATAは現在、ハードコーディングしているが値の変更の可能性があるため、管理画面作成後に管理画面から値を変更できるようにする。
  const ABOUT_DATA = [
    {
      id: crypto.randomUUID(),
      personalAttribute: "専門",
      ersonalAttributeValue: "Webフロントエンド",
    },
    {
      id: crypto.randomUUID(),
      personalAttribute: "言語",
      ersonalAttributeValue: "JavaScript/TypeScript",
    },
    {
      id: crypto.randomUUID(),
      personalAttribute: "ライブラリ",
      ersonalAttributeValue: "React",
    },
    {
      id: crypto.randomUUID(),
      personalAttribute: "フレームワーク",
      ersonalAttributeValue: "Next.js",
    },
  ];
  return (
    <div className="flex w-1/2 flex-col py-10 max-lg:w-full  max-sm:p-10">
      <h1 className="flex justify-center px-10 text-3xl font-light text-strong-color max-sm:px-0">
        Technology
      </h1>
      <div className="flex flex-col items-center">
        <div className=" p-10 max-sm:px-0">
          {ABOUT_DATA.map((value) => {
            return (
              <div key={value.id} className="flex pb-3 max-lg:flex-col">
                <div className="inline w-32 pb-3 font-bold">
                  {value.personalAttribute}
                </div>
                <div>{value.ersonalAttributeValue}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Btn href={"/tech"} name={"MORE"} />
    </div>
  );
}
