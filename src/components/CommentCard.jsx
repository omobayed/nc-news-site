import Moment from 'moment';
import Votes from './Votes';

const CommentCard = ({comment}) => {
    return (
        <div className="comment-card">
            <p><strong>{comment.author}</strong>: {comment.body}</p>
            <p style={{textAlign:'right'}}><i>Posted on
                <time dateTime={comment.created_at}> {Moment(comment.created_at).format('yyyy-MM-DD HH:mm')}</time>
            </i></p>
            <Votes votes_count={comment.votes} />
        </div>
    )
}

export default CommentCard