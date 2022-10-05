import { useState } from 'react';

import React from 'react'

const Home = () => {

    const [articles, setArticle] = useState(
        [{title: 'Article 1', body: 'A body of article 1', author: 'A', id: 1},
        {title: 'Article 2', body: 'A body of article 2', author: 'B', id: 2},
        {title: 'Article 3', body: 'A body of article 3', author: 'A', id: 3},
        ]);

  return (
    <div className="home">
        {articles.map((article) => (
            <div className="article-preview" key={article.id}>
                <h3>{article.title}</h3>
                <p>Author: {article.author}</p>
            </div>
        ))}
    </div>
  )
}

export default Home;