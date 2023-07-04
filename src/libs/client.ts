import { createClient, MicroCMSListResponse } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export async function getContents() {
  type BlogType = {
    title: string;
    body: string;
    eyecatch: {
      url: string;
      height: number;
      width: number;
    };
  };

  const response: MicroCMSListResponse<BlogType> = await client.getList({
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
    endpoint: "blogs",
  });
  return response;
}
