import { Btn } from "@/components/Btn";

export function TopTechnologyInfo() {
  const ABOUT_DATA = [
    { attribute: "専門", data: "Webフロントエンド" },
    { attribute: "言語", data: "JavaScript/TypeScript" },
    { attribute: "ライブラリ", data: "React" },
    { attribute: "フレームワーク", data: "Next.js" },
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
              <div key={value.attribute} className="flex pb-3 max-lg:flex-col">
                <div className="inline w-32 pb-3 font-bold">{value.attribute}</div>
                <div>{value.data}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Btn href={"/tech"} name={"MORE"} />
    </div>
  );
}
