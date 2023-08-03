import { BlogCard } from "@/components/blogCard";
import { Btn } from "@/components/Btn";
import { LINKS } from "@/util/pageLink";

export function TopBlog() {
  return (
    <div className="flex min-h-[30vh] flex-col items-center justify-center border-b px-32 py-10">
      <h1 className="flex justify-center text-3xl font-light text-strong-color">Blog</h1>
      <BlogCard length={3} />
      <Btn href={LINKS.blog} name={"MORE"} />
    </div>
  );
}
