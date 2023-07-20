import Moment from 'moment';
import Votes from './ArticleVotes';

const CommentCard = ({comment}) => {
    return (
        <div className="comment-card">
            <p><strong>{comment.author}</strong>: {comment.body}</p>
            <p style={{textAlign:'right'}}>
                <i>Posted on
                <time dateTime={comment.created_at}> {Moment(comment.created_at).format('yyyy-MM-DD HH:mm')}</time>
            </i></p>
            <div>
                <button aria-label="like comment">&#128077;</button>
                <button aria-label="unlike comment">&#128078;</button>
                votes: {comment.votes}
            </div>
        </div>
    )
}

export default CommentCard