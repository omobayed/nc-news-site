import Moment from 'moment';

const CommentCard = ({comment}) => {
    return (
        <div className="comment-card">
            <p><strong>{comment.author}</strong>: {comment.body}</p>
            <p style={{textAlign:'right'}}><i>Posted on<time dateTime={comment.created_at}> {Moment(comment.created_at).format('yyyy-MM-DD HH:mm')}</time></i></p>
        </div>
    )
}

export default CommentCard