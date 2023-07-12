// import dayjs from "dayjs";
// import Image from "next/image";
// import Link from "next/link";

import { BlogCard } from "@/components/blogCard";
import { getContents } from "@/libs/microcms";

export default async function Blog() {
  const data = await getContents();
  // const contents = data.contents;
  const totalCount = data.totalCount;
  const length = data.contents.length;

  return (
    <div>
      <div>
        <div className="p-5">
          <h2 className="border-b-[2px] p-3 text-2xl text-strong-color">NEW ARTICLE</h2>
          <p className="p-3 text-sub-color">取得件数：{totalCount} 件</p>
          <div className="flex flex-wrap justify-center gap-x-5 py-3">
            <BlogCard length={length} />
          </div>
        </div>
      </div>
    </div>
  );
}
