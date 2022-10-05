import { useState } from 'react';

import React from 'react'
import ArticleList from './ArticleList';

const Home = () => {

    const [articles, setArticle] = useState(
        [{ title: 'Article 1', body: 'A body of article 1', author: 'A', id: 1 },
        { title: 'Article 2', body: 'A body of article 2', author: 'B', id: 2 },
        { title: 'Article 3', body: 'A body of article 3', author: 'A', id: 3 },
        ]);

    return (
        <div className="home">
            <ArticleList articles={articles}/>
        </div>
    )
}

export default Home;