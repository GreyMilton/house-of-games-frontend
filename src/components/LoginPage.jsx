import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import { useContext } from "react";

function LoginPage () {
  const { currentUser, setCurrentUser, mostRecentUser, setMostRecentUser } = useContext(UserContext)

  function handleLogInClick() {
    if (mostRecentUser) {
      setCurrentUser(mostRecentUser);
    } else {
      
    }
  }

  function handleNewUserClick() {
    setMostRecentUser();
  }

  function handleLogOutClick() {
    setMostRecentUser(currentUser);
    setCurrentUser();
  }

  return (
    <section className="login-page">
      { currentUser ?
        <>
          <p>You are currently logged in as {currentUser}</p>
          <button onClick={handleLogOutClick}>Log Out</button>
        </>
        :
        <>
          { mostRecentUser ?
          <>
            <p>Welcome back {mostRecentUser}! Would you like to log in?</p>
            <Link to="/" onClick={handleLogInClick}>Log In</Link>
            <br />
            <button onClick={handleNewUserClick}>New User</button>
          </>
          :
          <>
            <p>Please log in with a valid username</p>
            <form>
              <Link to="/" onClick={handleLogInClick}>Log In</Link>
            </form>
          </>
          }
        </>
      }
    </section>);
}

export default LoginPage ;