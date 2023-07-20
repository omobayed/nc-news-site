import { useState } from "react";
import { updateArticleVotes } from "../api"

const ArticleVotes = ({ article_id, votes_count }) => {
    const [userVotes, setUserVotes] = useState(0);
    const [isError, setIsError] = useState(false)

    const handleClick = (event, increase) => {
        setIsError(false)
        event.preventDefault();

        setUserVotes((currentUserVote) => {
            return currentUserVote + increase;
        })

        updateArticleVotes(article_id, increase)
            .catch((error) => {
                setIsError(true)
                setUserVotes((currentUserVote) => {
                    return currentUserVote - increase;
                })
            })

    }

    return (
       <section>
            <button aria-label="vote for article" onClick={e => handleClick(e, 1)} disabled={userVotes > 0}>&#128077;</button>
            <button aria-label="vote for article" onClick={e => handleClick(e, -1)} disabled={userVotes < 0}>&#128078;</button>
            {isError ? <span style={{color:'red'}}>something went wrong! </span> : null}
            votes: {votes_count + userVotes}
        </section>
    );
}

export default ArticleVotes