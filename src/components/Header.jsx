import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <header className="header">
            <h1>NC News</h1>
            <h2>Welcome to Our Nc News</h2>
            <p>Logged in User: {user}</p>
        </header>
    )
}

export default Header;