import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { Btn } from "@/components/Btn";
import { client, getContents } from "@/libs/microcms";
import { LINKS } from "@/util/pageLink";

type paramsType = { params: { id: string } };

// 静的にルートを生成
export async function generateStaticParams() {
  const getContentsData = await getContents();

  return getContentsData.contents.map((data) => ({
    id: data.id,
  }));
}

export default async function BlogId({ params }: paramsType) {
  const { id } = params;

  const getContentsData = await getContents();
  const contents = getContentsData.contents.slice(0, 5);

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
          {/* パンくずリスト */}
          <div className="flex flex-wrap gap-2 p-5 text-sm">
            <Link
              href={LINKS.top}
              className="text-link-color hover:text-link-hover-color hover:underline"
            >
              トップ
            </Link>
            <p>{`>`}</p>
            <Link
              href={LINKS.blog}
              className="text-link-color hover:text-link-hover-color hover:underline"
            >
              ブログ
            </Link>
            <p>{`>`}</p>
            <p>{data.title}</p>
          </div>
          {/* ブログタイトル */}
          <h1 className="m-0 flex h-auto items-end border-b-[1px] p-5 text-2xl font-extralight">
            {data.title}
          </h1>
          {/* ブログ公開日 */}
          <time className="m-5 inline-block rounded-3xl bg-green-100 px-5 py-2 text-gray-500">
            公開：{dayjs(data.publishedAt).format("YYYY/MM/DD")}
          </time>
          {/* ブログ本文 */}
          <div
            className="prose px-5 py-10"
            dangerouslySetInnerHTML={{ __html: data.body }}
          ></div>
          <Btn href={LINKS.blog} name={"BLOG TOP"} />
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
            <div className="pt-2">
              {contents.map((item) => {
                return (
                  <div
                    className="my-10 h-28 list-none rounded-xl border shadow-xl hover:opacity-50"
                    key={item.id}
                  >
                    <Link className="flex" href={`/blog/${item.id}`}>
                      <Image
                        src={`${item.eyecatch.url}`}
                        width={400}
                        height={400}
                        alt="photo"
                        className="m-2 block h-24 w-24 max-sm:my-4 max-sm:h-20 max-sm:w-20  lg:m-4 lg:h-20 lg:w-20"
                      ></Image>
                      <div className="overflow-hidden p-3 ">
                        <div className="pl-3 text-[12px] text-sub-color max-sm:text-xs lg:text-xs">
                          {dayjs(item.publishedAt).format("YYYY/MM/DD")}
                        </div>
                        <div className="truncate p-3 text-base text-strong-color max-sm:text-sm lg:text-sm">
                          {item.title}
                        </div>
                        <p className="pl-3 text-sm max-sm:text-xs lg:text-xs">Makoto</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
