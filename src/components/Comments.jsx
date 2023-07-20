import { useEffect, useState } from 'react'
import { getArticleComments } from '../api'
import CommentCard from './CommentCard'
import CommentAdder from './CommentAdder'

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsError(false);

        getArticleComments(article_id)
            .then((comments) => {
                setIsLoading(false);
                setIsError(false);
                setComments(comments)
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log('Load comments error: ', error)
            })
    }, [article_id])

    if (isLoading)
        return <div className="comments-list"><p>Loading comments...</p></div>

    if (isError)
        return <div className="comments-list"><p>Error while loading article's comments...</p></div>

    if (comments.length === 0) {
        return <div className="comments-list"><p>No comments on this article...</p></div>
    }

    return (
        <div className='comments-list'>
            <h2 style={{marginLeft:20}}>Comments</h2>
            {comments.map((comment) => {
                return (
                    <CommentCard key={comment.comment_id} comment={comment} />
                )
            })}
            <CommentAdder article_id={article_id} setComments={setComments} />
        </div>
    )
}

export default Comments