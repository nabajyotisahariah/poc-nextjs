import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="hero">
        <h1>News &amp; Stories,<br />Delivered Fast.</h1>
        <p>
          Stay informed with the latest in politics, tech, and more.
          Curated stories updated around the clock.
        </p>
        <Link href="/news" className="hero-btn">Browse News &rarr;</Link>
      </section>

      <section className="cards-section">
        <h2>Explore Topics</h2>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">🗞️</div>
            <h3>Politics</h3>
            <p>In-depth coverage of domestic and international political events.</p>
          </div>
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>Technology</h3>
            <p>The latest breakthroughs in AI, software, and hardware.</p>
          </div>
          <div className="card">
            <div className="card-icon">🌍</div>
            <h3>World</h3>
            <p>Global news and stories that shape our world every day.</p>
          </div>
          <div className="card">
            <div className="card-icon">📝</div>
            <h3>Blogs</h3>
            <p>Opinion pieces and long-form writing from expert contributors.</p>
          </div>
        </div>
      </section>
    </>
  );
}