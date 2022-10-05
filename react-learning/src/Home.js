import { useState } from 'react';

import React from 'react'
import ArticleList from './ArticleList';

const Home = () => {

    const [articles, setArticle] = useState(
        [{ title: 'Article 1', body: 'A body of article 1', author: 'A', id: 1 },
        { title: 'Article 2', body: 'A body of article 2', author: 'B', id: 2 },
        { title: 'Article 3', body: 'A body of article 3', author: 'A', id: 3 },
        ]);

    const handleDelete = (id) => {
        const newArticles = articles.filter(article => article.id !== id)
        setArticle(newArticles);
    }


    return (
        <div className="home">
            <ArticleList articles={articles} handleDelete={handleDelete} />
            <ArticleList articles={articles.filter((article) => article.author === "A")} />
        </div>
    )
}

export default Home;