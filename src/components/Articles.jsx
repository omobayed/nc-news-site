import { useEffect, useState } from 'react'
import { getArticles } from '../api'
import ArticleCard from './ArticleCard'

const Articles = () => {    
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
        .then((articles) => {
          setArticles(articles)
        })
      }, [])

    return (
        <div className="articles-cards">
            <ul>
                {articles.map((article) => {
                    return (
                        <li key={article.article_id}>
                            <ArticleCard article={article} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Articles