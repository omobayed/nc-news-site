import { useEffect, useState } from 'react'
import { getArticleById } from "../api"
import { useParams } from "react-router-dom";

import Moment from 'moment';
import Comments from './Comments';
import Votes from './Votes';

const Article = () => {
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const { article_id } = useParams()

    useEffect(() => {
        setIsError(false);

        getArticleById(article_id)
        .then((article) => {
            setIsLoading(false);
            setIsError(false);
            setArticle(article);
        })
        .catch((error) => {
            setIsLoading(false);
            setIsError(true);
            console.log('Load article error: ', error)
        })
    }, [article_id])

    if (isLoading)
        return <article className="article"><p>Loading article...</p></article>

    if (isError)
        return <article className="article"><p>Error while loading the Article...</p></article>

    return (
        <>
            <article className="article">
                <h3>{article.title}</h3>
                <p>[{article.topic}]</p>
                <img src={article.article_img_url} alt='image related to the article title' />
                <p className='body'>{article.body}</p>
                <footer>
                    <i><p>Posted on
                    <time dateTime={article.created_at}> {Moment(article.created_at).format('yyyy-MM-DD')} </time>
                    by {article.author}.</p></i>
                </footer>
                <Votes votes_count={article.votes} />
            </article>
            <Comments article_id={article_id} />
        </>
    )
}

export default Article