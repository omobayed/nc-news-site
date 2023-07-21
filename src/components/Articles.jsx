import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getArticles } from '../api'
import ArticleCard from './ArticleCard'

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const { topic } = useParams()

    useEffect(() => {
        setIsError(false);

        getArticles(topic)
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
    }, [topic])

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