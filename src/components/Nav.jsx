import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllTopics } from "../api";

const Nav = () => {
    const [topics, setAllTopics] = useState([])
    useEffect(() => {
        getAllTopics()
            .then((topics) => {
                setAllTopics(topics)
            })
    }, [])

    return (
        <nav className="nav">
            <Link className="nav-item" to='/'>Home</Link>
            {topics.map((topic) => {
                return (
                    <Link className="nav-item" to={`/articles/${topic.slug}`}>{topic.slug}</Link>
                )
            })}
        </nav>
    )
}

export default Nav