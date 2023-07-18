import { useEffect, useState } from 'react'
import { getArticleById } from "../api"
import { useParams } from "react-router-dom";

import Moment from 'moment';

const Article = () => {
    const [article, setArticle] = useState([])
    
  

    const { article_id } = useParams()

    useEffect(() => {
        getArticleById(article_id)
        .then((article) => {
            
            setArticle(article);
        })
       
    }, [article_id])

    return (
        <article className="article">
            <h3>{article.title}</h3>
            <p>[{article.topic}]</p>
            <img src={article.article_img_url} />
            <p className='body'>{article.body}</p>
            <footer>
                <i><p>Posted on
                <time dateTime={article.created_at}> {Moment(article.created_at).format('yyyy-MM-DD')} </time>
                by {article.author}.</p></i>
            </footer>
        </article>
    )
}

export default Article 