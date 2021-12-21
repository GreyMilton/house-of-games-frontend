import { useContext, useState } from "react";
import { postNewComment } from "../utils/api";
import { UserContext } from "../contexts/user-context"

function NewComment (props) {
  const { currentUser } = useContext(UserContext)
  const [newCommentDraft, setNewCommentDraft] = useState();

  const trackNewComment = (event) => {
    setNewCommentDraft(event.target.value);
  }

  const submitNewComment = (event) => {
    event.preventDefault();
    postNewComment(props.params.review_id, currentUser, newCommentDraft).then
    .catch((err) => {
      console.log(err)
    });
  }

  return (
    <section className="new-comment">
      <form onSubmit={submitNewComment}>
        <label className="new-comment-label">New comment:
          <input className="new-comment-input" type="text" onChange={trackNewComment} />
        </label>
        <input className="new-comment-submit" type="submit" value="Submit" />
      </form>
    </section>);
}

export default NewComment ;