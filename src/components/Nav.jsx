import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <Link className="nav-item" to='/'>Home</Link>
            <Link className="nav-item" to='/topics'>Topics</Link>
        </nav>
    )
}

export default Nav