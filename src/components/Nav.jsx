import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to='/'><p>Home</p></Link>
            <Link to='/topics'><p>Topics</p></Link>
        </div>
    )
}

export default Nav