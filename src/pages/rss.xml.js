import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const posts = await getCollection("tips");
  rss({
    title: "AstroBuild.tips",
    description: "My firts Page",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/post/${post.slug}/`,
    })),
  });
}
