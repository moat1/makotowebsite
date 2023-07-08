import { createClient, MicroCMSListResponse } from "microcms-js-sdk";

// 初期化コード
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// コンテンツを取得
export async function getContents() {
  // 取得する情報の型
  type BlogType = {
    title: string;
    body: string;
    eyecatch: {
      url: string;
      height: number;
      width: number;
    };
  };

  // 取得する情報のキャッシュとエンドポイントの指定
  const response: MicroCMSListResponse<BlogType> = await client.getList({
    customRequestInit: {
      next: {
        revalidate: 10,
      },
    },
    endpoint: "blogs",
  });
  return response;
}
