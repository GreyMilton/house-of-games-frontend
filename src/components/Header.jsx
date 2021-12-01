import { Link } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../contexts/user-context"

function Header () {

  const { currentUser, setCurrentUser } = useContext(UserContext)

  function logOut () {
    setCurrentUser(null);
  }

  return (
    <header id="header">
      <Link to="/"><h1>Grey's House of Games</h1></Link>
      {currentUser ? <p className="username-display">Hi {currentUser}!</p> : null}
      <Link to="/login"><button onClick={logOut}>{currentUser ? "Log out" : "Log in"}</button></Link>
    </header>);
}

export default Header;