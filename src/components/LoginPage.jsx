import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import { useContext, useState } from "react";

function LoginPage () {
  const { currentUser, setCurrentUser, mostRecentUser, setMostRecentUser } = useContext(UserContext)
  const navigate = useNavigate();
  const [usernameDraft, setUsernameDraft] = useState();
  const validUsernames = ['tickle122', 'grumpy19', 'happyamy2016', 'cooljmessy', 'weegembump', 'jessjelly'];
  const [usernameIsValid, setUsernameIsValid] = useState(true);

  const trackUsername = (event) => {
    setUsernameDraft(event.target.value);
  }

  const submitUsernameForLogin = (event) => {
    event.preventDefault();
    if (validUsernames.includes(usernameDraft)) {
      setUsernameIsValid(true);
      setCurrentUser(usernameDraft);
      setUsernameDraft();
      event.target.reset();
      navigate('/')
    } else {
      setUsernameIsValid(false);
    }
  }

  function handleLogInClick() {
    if (mostRecentUser) {
      setCurrentUser(mostRecentUser);
      navigate('/')
    } else {
      navigate('/login')
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
          <button className="log-in-page-button" onClick={handleLogOutClick}>Log out</button>
        </>
        :
        <>
          { mostRecentUser ?
          <>
            <p>Welcome back {mostRecentUser}! Would you like to log in?</p>
            <button className="log-in-page-button" onClick={handleLogInClick}>Log in</button>
            <br />
            <p>Or would you like to log in with a different account?</p>
            <button className="log-in-page-button" onClick={handleNewUserClick}>Log in with a different account</button>
          </>
          :
          <>
            <p>Please enter your username below</p>
            <form onSubmit={submitUsernameForLogin}>
              <label className="username-input-label">Username:
                <input className="username-input" type="text" onChange={trackUsername}/>
              </label>
              <input className="username-submit" type="submit" value="Log In" />
            </form>
            {!usernameIsValid && <p className="username-not-found-error">Username not found</p>}
          </>
          }
        </>
      }
    </section>);
}

export default LoginPage ;