import React from 'react'

const ArticleList = (props) => {

    const articles = props.articles; //another way to access articles is to destructure props directly by using {articles} as function argument instead of props.

    return (
        <div className="article-list">
            {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>Author: {article.author}</p>
                </div>
            ))}
        </div>
    )
}

export default ArticleList