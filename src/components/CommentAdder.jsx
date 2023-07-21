import { useState } from "react"
import { addNewComment } from "../api";

const CommentAdder = ({ article_id, setComments }) => {
    const [newComment, setNewComment] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (event) => {
        setIsLoading(true);
        event.preventDefault();

        addNewComment(article_id, "grumpy19", newComment)
            .then((postedComment) => {
                setIsLoading(false);
                setIsError(false)
                setComments((currentComments) => {
                    return [postedComment, ...currentComments];
                })
            }).catch((error) => {
                setIsLoading(false);
                setIsError(true);
            })

        setNewComment("");
    }

    return (
        <section className="new-comment">
            {
                isLoading
                    ? <p>Posting comment...</p>
                    : <>
                        {isError ? <p style={{ color: 'red' }}>Error while posting the comment...</p> : null}
                        <label htmlFor="comment_body">Add new comment:</label>
                        <form className="comment-adder" onSubmit={handleSubmit}>
                            <textarea id="comment_body" value={newComment}
                                onInvalid="alert('You must fill out the form!');"
                                required
                                onChange={(event) => {
                                    setNewComment(event.target.value)
                                }}
                            />
                            <button>Submit</button>
                        </form>
                    </>
            }
        </section>
    )
}

export default CommentAdder
