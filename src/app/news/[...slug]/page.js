import React from 'react'


const NewsDetail = async ({ params, searchParams }) => {

  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const resolvedSearchParams = await searchParams;
  const { t } = resolvedSearchParams; // e.g. "promotion" from ?t=promotion

  console.log(slug, " slug ", resolvedSearchParams, " searchParams ");

  const category = slug[0] ?? "news";
  const title = slug[slug.length - 1]?.replace(/-/g, " ") ?? "Article";

  return (
    <article className="article-page">
      <span className="article-badge">{category}</span>
      <h1>{title}</h1>
      <p className="article-meta">
        {slug.join(" / ")}{t ? ` · ${t}` : ""}
      </p>
      <div className="article-body">
        <p>
          This is the article content for <strong>{title}</strong>.
          Full story content will appear here once connected to a data source.
        </p>
      </div>
    </article>
  )
}

export default NewsDetail;

