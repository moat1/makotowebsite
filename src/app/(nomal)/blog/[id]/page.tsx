import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { client, getContents } from "@/libs/client";

type ctxType = {
  params: { id: string };
};

export default async function BlogId(ctx: ctxType) {
  const abc = await getContents();
  const contents = abc.contents.slice(0, 5);

  const id = ctx.params.id;

  type dataType = {
    publishedAt: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    body: string;
    eyecatch: { url: string; height: number; width: number };
  };

  const data: dataType = await client.get({ endpoint: "blogs", contentId: id });

  return (
    <div className="w-full">
      <div className="flex max-lg:flex-col">
        {/* 記事部分 */}
        <div className="w-full">
          <h1 className="m-0 flex h-auto items-end border-b-[1px] p-5 text-2xl font-extralight">
            {data.title}
          </h1>
          <time className="m-5 inline-block rounded-3xl bg-green-100 px-5 py-2 text-gray-500">
            公開：{dayjs(data.publishedAt).format("YYYY/MM/DD")}
          </time>
          <div
            className="prose px-5 py-10"
            dangerouslySetInnerHTML={{ __html: data.body }}
          ></div>
          <div className="m-auto flex justify-center p-10">
            <Link
              className="border-2 border-black bg-black p-5 text-white hover:border-black hover:bg-white hover:text-black"
              href={"/blog"}
            >
              BLOGトップ
            </Link>
          </div>
        </div>
        {/* サイド部分 */}
        <div className="w-[450px] py-20 max-lg:m-0 max-lg:w-full">
          {/* プロフィール */}
          <div className="flex flex-col justify-center p-5 max-lg:justify-start">
            <Image
              src="/profile-image.jpg"
              width={400}
              height={500}
              alt="foto"
              className="h-[300px] w-[200px]"
              priority={true}
            ></Image>
            <div className="py-5">
              <h2 className="text-xl">Makoto</h2>
              <ul className="pt-2">
                <li>大阪府出身</li>
                <li>21歳</li>
              </ul>
            </div>
          </div>
          {/* 新着記事 */}
          <div className="w-full p-5">
            <h2 className="border-b-[1px] text-xl">New Article</h2>
            <ul className="w-full pt-2">
              {contents.map((item) => {
                return (
                  <li
                    className="my-10 h-28 list-none shadow-2xl hover:opacity-50"
                    key={item.id}
                  >
                    <Link className="flex" href={`/blog/${item.id}`}>
                      <Image
                        src={`${item.eyecatch.url}`}
                        width={400}
                        height={400}
                        alt="photo"
                        className="h-28 w-28"
                      ></Image>
                      <div className="w-auto p-3">
                        <div className="text-[12px] text-sub-color">
                          {dayjs(item.publishedAt).format("YYYY/MM/DD")}
                        </div>
                        <div className="w-[140px] truncate py-3 text-base text-strong-color">
                          {item.title}
                        </div>
                        <p className="text-sm">Makoto</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
