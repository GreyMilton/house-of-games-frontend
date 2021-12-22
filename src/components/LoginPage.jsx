import { Link, useNavigate } from "react-router-dom";
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
      setCurrentUser('hello!');
      navigate('/lkjlkjlkjlkjlj')
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
            <button to="/" onClick={handleLogInClick}>Log In</button>
            <br />
            <button onClick={handleNewUserClick}>New User</button>
          </>
          :
          <>
            <p>Please log in with a valid username</p>
            <form onSubmit={submitUsernameForLogin}>
              <label className="username-input-label">Username:
                <input className="username-input" type="text" onChange={trackUsername}/>
              </label>
              <input className="username-submit" type="submit" value="Log In" />
            </form>
            {!usernameIsValid && <p>Username in not valid!</p>}
          </>
          }
        </>
      }
    </section>);
}

export default LoginPage ;

{/* <form onSubmit={submitNewComment}>
<label className="new-comment-label">New comment:
  <input className="new-comment-input" type="text" onChange={trackNewComment} />
</label>
<input className="new-comment-submit" type="submit" value="Submit" />
</form> */}