import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { getContents } from "@/libs/client";

export default async function Blog() {
  const data = await getContents();
  const contents = data.contents;
  const totalCount = data.totalCount;

  return (
    <div>
      <div>
        <div className="p-5">
          <h2 className="border-b-[2px] p-3 text-2xl text-strong-color">NEW ARTICLE</h2>
          <p className="p-3 text-sub-color">取得件数：{totalCount} 件</p>
          <div className="flex flex-wrap justify-center gap-x-5 py-3">
            {contents.map((item) => {
              return (
                <li
                  className="my-5 w-96 list-none rounded-xl border shadow-xl hover:opacity-50 max-sm:w-[245px]"
                  key={item.id}
                >
                  <Link href={`/blog/${item.id}`}>
                    <Image
                      src={`${item.eyecatch.url}`}
                      width={400}
                      height={400}
                      alt="photo"
                      className="h-52 w-full rounded-tl-xl rounded-tr-xl max-sm:h-[150px] max-sm:w-[245px]"
                    ></Image>
                    <div className="p-3">
                      <div className="text-[12px] text-sub-color">
                        {dayjs(item.publishedAt).format("YYYY/MM/DD")}
                      </div>
                      <div className="truncate py-3 text-xl text-strong-color">
                        {item.title}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
