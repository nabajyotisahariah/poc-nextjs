'use client';

import { useEffect, useState } from "react";
import type { Post } from "@/lib/api";

interface SingleBlogProps {
  params: { id: string };
}

const SingleBlog = ({ params }: SingleBlogProps) => {
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = (await res.json()) as Post;
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <article className="article-page">
      <span className="article-badge">Post #{post.id}</span>
      <h1>{post.title}</h1>
      <p className="article-meta">By User {post.userId}</p>
      <div className="article-body">
        <p>{post.body}</p>
      </div>
    </article>
  );
};

export default SingleBlog;