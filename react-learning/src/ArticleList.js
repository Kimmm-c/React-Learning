import React from 'react'

const ArticleList = ({articles, handleDelete}) => {

    // const articles = props.articles; //another way to access articles is to destructure props directly by using {articles} as function argument instead of props.

    return (
        <div className="article-list">
            {articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>Author: {article.author}</p>
                    <button onClick = {() => handleDelete(article.id)}>Delete article</button>
                </div>
            ))}
        </div>
    )
}

export default ArticleList