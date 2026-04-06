interface NewsDetailProps {
  params: { slug: string[] };
  searchParams: { t?: string | string[] };
}

const NewsDetail = ({ params, searchParams }: NewsDetailProps) => {
  const { slug } = params;
  const tParam = searchParams.t;
  const t = Array.isArray(tParam) ? tParam[0] : tParam;

  const category = slug[0] ?? "news";
  const title = slug[slug.length - 1]?.replace(/-/g, " ") ?? "Article";

  return (
    <article className="article-page">
      <span className="article-badge">{category}</span>
      <h1>{title}</h1>
      <p className="article-meta">
        {slug.join(" / ")}
        {t ? ` · ${t}` : ""}
      </p>
      <div className="article-body">
        <p>
          This is the article content for <strong>{title}</strong>.
          Full story content will appear here once connected to a data source.
        </p>
      </div>
    </article>
  );
};

export default NewsDetail;

