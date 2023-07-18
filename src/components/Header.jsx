import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <header className="header">
            <div className="logged-in-user">Logged in User: {user}</div>
            <h1>NC News</h1>
            <h2>Welcome to our news website</h2>
        </header>
    )
}

export default Header;