import { client } from "@/libs/microcms";

type ctxType = {
  params: { id: string };
};

// 動的なメタデータを作成
export async function generateMetadata(ctx: ctxType) {
  const id = ctx.params.id;

  type dataType = {
    title: string;
    eyecatch: { url: string; height: number; width: number };
  };

  const data: dataType = await client.get({ endpoint: "blogs", contentId: id });

  return {
    title: `[Blog] ${data.title}`,
    openGraph: {
      images: data.eyecatch.url,
    },
  };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;