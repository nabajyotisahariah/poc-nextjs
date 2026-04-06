export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json() as Promise<Post[]>;
}

export async function getPost(id: string | number): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch post ${id}`);
  return res.json() as Promise<Post>;
}
