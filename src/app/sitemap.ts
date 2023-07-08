import { MetadataRoute } from "next";

import { getContents } from "@/libs/microcms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getContents();
  const contents = data.contents;

  const domain = process.env.SITE_DOMAIN;
  const lastModified = new Date();

  const staticPaths = [
    {
      url: `${domain}`,
      lastModified,
    },
    {
      url: `${domain}/tech-introduction`,
      lastModified,
    },
    {
      url: `${domain}/about`,
      lastModified,
    },
    {
      url: `${domain}/blog`,
      lastModified,
    },
    {
      url: `${domain}/account`,
      lastModified,
    },
    {
      url: `${domain}/privacypolicy`,
      lastModified,
    },
    {
      url: `${domain}/code`,
      lastModified,
    },
  ];

  const dynamicPaths = contents.map((item) => {
    return {
      url: `${domain}/${item.id}`,
      lastModified,
    };
  });
  return [...staticPaths, ...dynamicPaths];
}
