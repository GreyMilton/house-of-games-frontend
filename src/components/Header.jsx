import { Link, useNavigate } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../contexts/user-context"

function Header () {

  const { currentUser, setCurrentUser, mostRecentUser, setMostRecentUser } = useContext(UserContext)

  const navigate = useNavigate();

  function logOut () {
    setMostRecentUser(currentUser);
    setCurrentUser(null);
  }

  function logIn() {
    if (mostRecentUser) {
      setCurrentUser(mostRecentUser);
      navigate('/');
    } else {
      navigate('/login');
    }
  }

  return (
    <header id="header">
      <Link to="/"><h1>Grey's House of Games</h1></Link>
      <section id="user-section">
        {currentUser ? 
            <>
              <p className="username-display">Hi {currentUser}!</p>
              <Link to="/login"><button onClick={logOut}>Log out</button></Link>
            </>
          :
            <>
              {mostRecentUser && <p className="username-display">Hi {mostRecentUser}!</p>}
              <button onClick={logIn}>Log in</button>
            </>
        }
      </section>
    </header>);
}

export default Header;