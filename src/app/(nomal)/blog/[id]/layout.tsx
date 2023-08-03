import { client } from "@/libs/microcms";

type ctxType = {
  params: { id: string };
};

// 動的なメタデータを作成
export async function generateMetadata(ctx: ctxType) {
  const id = ctx.params.id;

  type articleStructureType = {
    title: string;
    body: string;
    eyecatch: { url: string; height: number; width: number };
  };

  const articleStructure: articleStructureType = await client.get({
    endpoint: "blogs",
    contentId: id,
  });

  return {
    title: `[Blog] ${articleStructure.title}`,
    description: `${articleStructure.body}`,
    openGraph: {
      images: "/og-image.png",
    },
  };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
