import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { getContents } from "@/libs/microcms";

export async function TopBlog() {
  const data = await getContents();
  const contents = data.contents.slice(0, 3);

  return (
    <div className="flex min-h-[30vh] flex-col items-center justify-center border-b px-32 py-10">
      <h1 className="flex justify-center text-3xl font-light text-strong-color">Blog</h1>
      <div>
        {contents.map((item) => {
          return (
            <li
              className="my-10 w-96 list-none rounded-xl border shadow-2xl hover:opacity-50 max-sm:w-[245px] "
              key={item.id}
            >
              <Link href={`/blog/${item.id}`}>
                <Image
                  src={`${item.eyecatch.url}`}
                  width={400}
                  height={400}
                  alt="photo"
                  className="h-52 w-full rounded-tl-xl rounded-tr-xl max-sm:h-[150px] "
                ></Image>
                <div className="p-3">
                  <div className="text-[12px] text-sub-color">
                    {dayjs(item.publishedAt).format("YYYY/MM/DD")}
                  </div>
                  <div className="truncate py-3 text-xl text-strong-color max-sm:w-[245px] max-sm:text-lg">
                    {item.title}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </div>
      <div className="flex justify-center p-10">
        <Link
          href={"/blog"}
          className="border-2 border-black bg-black px-10 py-3 text-white hover:bg-white hover:text-black"
        >
          MORE
        </Link>
      </div>
    </div>
  );
}
