import { useEffect, useState } from 'react'
import { getArticles } from '../api'
import ArticleCard from './ArticleCard'

const Articles = () => {    
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        getArticles()
        .then((articles) => {
            setIsLoading(false);
            setIsError(false);
            setArticles(articles)
        })
        .catch((error) => {
            setIsLoading(false);
            setIsError(true);
            console.log('Load articles error: ', error)
        })
    }, [])

    if (isLoading)
        return <article className="articles-cards"><p>Loading articles...</p></article>

    if (isError)
        return <article className="articles-cards"><p>Error while loading all articles...</p></article>

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