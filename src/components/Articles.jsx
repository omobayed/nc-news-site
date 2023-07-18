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
            {articles.map((article) => {
                return (
                    <ArticleCard key={article.article_id} article={article} />
                )
            })}
            </article>
    )
}

export default Articles