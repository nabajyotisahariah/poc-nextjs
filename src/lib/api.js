const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch post ${id}`);
  return res.json();
}
