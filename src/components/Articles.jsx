import { useEffect, useState } from 'react'
import { getArticles } from '../api'
import ArticleCard from './ArticleCard'

const Articles = () => {    
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles()
        .then((articles) => {
            setIsLoading(false)
          setArticles(articles)

        })
      }, [])
      if(isLoading) return <p>loading...</p>
    return (
       <article className="articles-cards">
            <ul>
                {articles.map((article) => {
                    return (
                        <li key={article.article_id}>
                            <ArticleCard article={article} />
                        </li>
                    )
                })}
            </ul>
            </article>
    )
}

export default Articles