import { getCollection } from "astro:content";

async function getPosts() {
  const posts = await getCollection("blog");
  // return posts;
  return posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    tags: post.data.tags,
    image: post.data.image,
  }));
}

export async function get({}) {
  return new Response(JSON.stringify(await getPosts()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
