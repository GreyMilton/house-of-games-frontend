import { useContext, useState } from "react";
import { postNewComment } from "../utils/api";
import { UserContext } from "../contexts/user-context";

function NewComment (props) {
  const { currentUser } = useContext(UserContext)
  const [newCommentDraft, setNewCommentDraft] = useState("");
  const [newCommentIsBlank, setNewCommentIsBlank] = useState(false);
  const [notLoggedInError, setNotLoggedInError] = useState(false);

  const trackNewComment = (event) => {
    setNewCommentDraft(event.target.value);
    if (event.target.value !== "") {
      setNewCommentIsBlank(false);
    }
  }

  const submitNewComment = (event) => {
    event.preventDefault();
    if (!currentUser) {
      setNotLoggedInError(true);
    } else if (newCommentDraft === undefined || newCommentDraft.length < 1) {
      setNewCommentIsBlank(true);
    } else {
      postNewComment(props.params.review_id, currentUser, newCommentDraft).then((res) => {
        props.setNewCommentCount(prevCommentCount => prevCommentCount + 1);
        setNewCommentDraft();
        event.target.reset();
        props.setIsNetworkErrorReviewPage({});
      })
      .catch((err) => {
        if (err.response && err.response.data.msg === "Incomplete request") {
          setNewCommentIsBlank(true);
          props.setIsNetworkErrorReviewPage({});
        } else if (err.message === "Network Error") {
          setNewCommentIsBlank(false);
          props.setIsNetworkErrorReviewPage(prevState => {
            const newObject = { ...prevState }
            newObject.newComment = true;
            return newObject;
          });
        }
      });
    }
  }

  return (
    <section className="new-comment-container">
      { notLoggedInError && <p className="error-message">You must be logged in to add a new comment</p>}
      {props.isNetworkErrorReviewPage.newComment && <p className="error-message">Network Error</p>}
      {newCommentIsBlank && <p className="error-message">Your new comment is empty. You cannot post an empty comment.</p>}
      <section className="new-comment">
        <form onSubmit={submitNewComment}>
          <label className="new-comment-label">New comment:
            <input className="new-comment-input" type="text" onChange={trackNewComment} />
          </label>
          <input className="new-comment-submit" type="submit" value="Submit" />
        </form>
      </section>
    </section>);
}

export default NewComment ;