export function TopProfileInfo() {
  const PERSONAL_DATA = [
    { attribute: "年齢", data: "21" },
    { attribute: "職業", data: "学生" },
    { attribute: "出身", data: "大阪府" },
    { attribute: "居住", data: "奈良県" },
  ];
  return (
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
  );
}
