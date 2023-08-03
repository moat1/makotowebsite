import { BlogCard } from "@/components/blogCard";
import { getContents } from "@/libs/microcms";

export default async function Blog() {
  const allBlogData = await getContents();
  const numberFetchedBlogs = allBlogData.totalCount;

  return (
    <div className="p-5">
      <h2 className="border-b-[2px] p-3 text-2xl text-strong-color">NEW ARTICLE</h2>
      <p className="p-3 text-sub-color">取得件数：{numberFetchedBlogs} 件</p>
      <div className="flex flex-wrap justify-center gap-x-5 py-3">
        <BlogCard length={numberFetchedBlogs} />
      </div>
    </div>
  );
}
