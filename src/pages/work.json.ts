import { getCollection } from "astro:content";

async function getProjects() {
  const projects = (await getCollection("work")).sort(
    (a, b) => a.data.publishDate.valueOf() - b.data.publishDate.valueOf()
  );
  // return projects;
  return projects.map((project) => ({
    slug: project.slug,
    title: project.data.title,
    description: project.data.description,
    date: project.data.publishDate,
    img: project.data.img,
    imgAlt: project.data.imgAlt,
    link: project.data.link,
    repo: project.data.repo,
    tags: project.data.tags,
  }));
}

export async function GET({}) {
  return new Response(JSON.stringify(await getProjects()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
