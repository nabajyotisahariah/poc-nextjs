import Link from "next/link";
import { getPosts } from "@/lib/api";

export default async function Blog() {
  const blogPosts = await getPosts();

  return (
    <div className="cards-section">
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Blog</h1>
      <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
        Welcome to our blog. Here you'll find the latest news and updates.
      </p>
      <div className="cards-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="card">
            <div className="card-icon">📝</div>
            <h3>
              <Link href={`/blogs/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}