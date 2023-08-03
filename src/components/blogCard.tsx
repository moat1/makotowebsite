import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { getContents } from "@/libs/microcms";

type Props = {
  length: number;
};

export async function BlogCard({ length }: Props) {
  // ブログの全データを取得
  const allBlogData = await getContents();

  if (typeof length === undefined) {
    Number(length);
  }

  // ブログの全データから表示する分だけにブログ数を制限
  const limitNumberBlogs = allBlogData.contents.slice(0, length);

  return (
    <div>
      {limitNumberBlogs.map((value) => {
        return (
          <li
            className="my-10 w-96 list-none rounded-xl border shadow-2xl hover:opacity-50 max-sm:w-[245px] "
            key={value.id}
          >
            <Link href={`/blog/${value.id}`}>
              <Image
                src={`${value.eyecatch.url}`}
                width={400}
                height={400}
                alt="photo"
                className="h-52 w-full rounded-tl-xl rounded-tr-xl max-sm:h-[150px] "
              ></Image>
              <div className="p-3">
                <div className="text-[12px] text-sub-color">
                  {dayjs(value.publishedAt).format("YYYY/MM/DD")}
                </div>
                <div className="truncate py-3 text-xl text-strong-color max-sm:w-[230px] max-sm:text-lg">
                  {value.title}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </div>
  );
}
