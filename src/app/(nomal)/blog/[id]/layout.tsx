import { client } from "@/libs/microcms";

type ctxType = {
  params: { id: string };
};

// 動的なメタデータを作成
export async function generateMetadata(ctx: ctxType) {
  const id = ctx.params.id;

  type dataType = {
    title: string;
    body: string;
    eyecatch: { url: string; height: number; width: number };
  };

  const data: dataType = await client.get({ endpoint: "blogs", contentId: id });

  return {
    // metadataBase: new URL(`${process.env.SITE_DOMAIN}`),
    title: `[Blog] ${data.title}`,
    description: `${data.body}`,
    openGraph: {
      images: "/og-image.png",
    },
  };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
