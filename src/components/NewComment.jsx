import { useContext, useEffect, useState } from "react";
import { postNewComment } from "../utils/api";
import { UserContext } from "../contexts/user-context"

function NewComment (props) {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const [newCommentDraft, setNewCommentDraft] = useState();

  useEffect(() => {
    console.log(newCommentDraft);
  },[newCommentDraft])


  const trackNewComment = (event) => {
    setNewCommentDraft(event.target.value);
  }

  const submitNewComment = (event) => {
    postNewComment(props.params.review_id, currentUser, newCommentDraft);
  }

  return (
    <section className="new-comment">
      <form onSubmit={submitNewComment}>
        <label>New comment:
          <input type="text" onChange={trackNewComment} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>);
}

export default NewComment ;