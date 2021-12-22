import { Link } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../contexts/user-context"

function Header () {

  const { currentUser, setCurrentUser, setMostRecentUser } = useContext(UserContext)

  function logOut () {
    setMostRecentUser(currentUser);
    setCurrentUser(null);
  }

  return (
    <header id="header">
      <Link to="/"><h1>Grey's House of Games</h1></Link>
      <section id="user-section">
        {currentUser ? <p className="username-display">Hi {currentUser}!</p> : null}
        <Link to="/login"><button onClick={logOut}>{currentUser ? "Log out" : "Log in"}</button></Link>
      </section>
    </header>);
}

export default Header;