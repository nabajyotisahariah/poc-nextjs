import React from 'react'

export default function NewsListing() {

  const newsItems = [
    { id: 1, seokey: 'news/sports/news-item-1', title: 'News Item 1' },
    { id: 2, seokey: 'news/politics/political-item-2', title: 'Political Item 2' },
    { id: 3, seokey: 'news/technology/tech-item-3', title: 'Tech Item 3' },
  ];  

  return (
    <div>
      News Listing
      {newsItems.map(item => (
        <div key={item.id}>
          <h2><a href={`/${item.seokey}`}>{item.title}</a></h2>
          <p>SEO Key: {item.seokey}</p>
        </div>
      ))} 
    </div>
  )
}
