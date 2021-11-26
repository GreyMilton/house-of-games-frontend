import { useContext, useEffect, useState } from "react";
import { getCommentsByReviewId } from "../utils/api"
import { sortAndOrderArrayOfObjects } from "../utils/array-utils"
import { UserContext } from "../contexts/user-context"

function DisplayComments (props) {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [currentComments, setCurrentComments] = useState();
  const [commentsIsLoading, setCommentsIsLoading] = useState(true);

  useEffect(() => {
    setCommentsIsLoading(true);
    getCommentsByReviewId(props.params.review_id).then((res) => {
      console.log("res:", res);
      setCurrentComments(res);
      setCommentsIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setCommentsIsLoading(false);
    })
  },[props.params.review_id])

  useEffect(() => {
    setCurrentComments((prevCurrentComments) => {
      const newCurrentComments = sortAndOrderArrayOfObjects(prevCurrentComments, props.currentCommentsSortBy, props.currentCommentsOrder);
      return newCurrentComments;
    })
  }, [props.currentCommentsSortBy, props.currentCommentsOrder])

  function deleteComment(event) {
    console.log("delete comment ", event.target.value);
  }

  return (
    <section className="display-comments">
      {commentsIsLoading && <p>loading...</p>}
      {currentComments && currentComments.map((comment) => {
        return (
          <section key={comment.comment_id} className="comment-card">
            <h4>{comment.author}{( comment.author === currentUser) && " (you)"}</h4>
            <p>At: {comment.created_at}</p>
            <p>{comment.body}</p>
            <p>Votes:{comment.votes} <button onClick={() =>{console.log("up")}}>+</button><button onClick={() => {console.log("down")}}>-</button></p>
            {( comment.author === currentUser) && <button value={comment.comment_id} onClick={deleteComment}>Delete comment</button>}
            <p></p>
          </section>
        );
      })}
    </section>);
}
export default DisplayComments ;