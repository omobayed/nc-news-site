import { useState } from "react";
import { updateArticleVotes } from "../api"

const ArticleVotes = ({ article_id, votes_count }) => {
    const [userVotes, setUserVotes] = useState(0);
    const [isError, setIsError] = useState(false)

    const handleLikeClick = (event) => {
        setIsError(false)
        event.preventDefault();

        setUserVotes((currentUserVote) => {
            return currentUserVote + 1;
        })

        updateArticleVotes(article_id, 1)
            .catch((error) => {
                setIsError(true)
                setUserVotes((currentUserVote) => {
                    return currentUserVote - 1;
                })
            })

    }

    const handleUnlikeClick = (event) => {
        setIsError(false)
        event.preventDefault();

        setUserVotes((currentUserVote) => {
            return currentUserVote - 1;
        })
        updateArticleVotes(article_id, -1)
            .catch((error) => {
                setIsError(true)
                setUserVotes((currentUserVote) => {
                    return currentUserVote + 1;
                })
            })
    }

    return (
        <div>
            <button aria-label="vote for article" onClick={handleLikeClick} disabled={userVotes > 0}>&#128077;</button>
            <button aria-label="vote for article" onClick={handleUnlikeClick} disabled={userVotes < 0}>&#128078;</button>
            {isError ? <span style={{color:'red'}}>something went wrong! </span> : null}
            votes: {votes_count + userVotes}
        </div>
    );
}

export default ArticleVotes