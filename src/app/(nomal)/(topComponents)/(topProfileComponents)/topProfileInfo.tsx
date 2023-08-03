export function TopProfileInfo() {
  // PERSONAL_DATAは現在、ハードコーディングしているが値の変更の可能性があるため、管理画面作成後に管理画面から値を変更できるようにする。
  const PERSONAL_DATA = [
    { id: crypto.randomUUID(), personalAttribute: "年齢", personalAttributeValue: "21" },
    {
      id: crypto.randomUUID(),
      personalAttribute: "職業",
      personalAttributeValue: "学生",
    },
    {
      id: crypto.randomUUID(),
      personalAttribute: "出身",
      personalAttributeValue: "大阪府",
    },
    {
      id: crypto.randomUUID(),
      personalAttribute: "居住",
      personalAttributeValue: "奈良県",
    },
  ];

  return (
    <div className="flex w-1/4 flex-col items-center  p-10 max-lg:w-full max-lg:border-none max-lg:py-0 max-sm:min-w-[240px]">
      <h1 className="flex justify-center py-5 text-3xl font-light text-strong-color">
        Makoto
      </h1>
      <ul>
        {PERSONAL_DATA.map((value) => {
          return (
            <li key={value.id} className="pb-3">
              <span className="mr-10 font-bold">{value.personalAttribute}</span>
              {value.personalAttributeValue}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
