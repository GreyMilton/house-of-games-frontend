import { useContext, useEffect, useState } from "react";
import { deleteComment, getCommentsByReviewId } from "../utils/api"
import { sortAndOrderArrayOfObjects } from "../utils/array-utils"
import { UserContext } from "../contexts/user-context"

function DisplayComments (props) {
  const { currentUser } = useContext(UserContext)
  const [currentComments, setCurrentComments] = useState();
  const [commentsIsLoading, setCommentsIsLoading] = useState(true);
  const [commentHasBeenDeleted, setCommentHasBeenDeleted] = useState(false);

  useEffect(() => {
    setCommentsIsLoading(true);
    getCommentsByReviewId(props.params.review_id).then((res) => {
      setCurrentComments(res);
      setCommentsIsLoading(false);
    })
    .catch((err) => {
      setCommentsIsLoading(false);
      console.log(err);
    })
  },[props.params.review_id])

  useEffect(() => {
    setCommentHasBeenDeleted(false);
    setCurrentComments((prevCurrentComments) => {
      const newCurrentComments = sortAndOrderArrayOfObjects(prevCurrentComments, props.currentCommentsSortBy, props.currentCommentsOrder);
      return newCurrentComments;
    })
  }, [commentHasBeenDeleted, props.currentCommentsSortBy, props.currentCommentsOrder])

  function removeComment(event) {
    deleteComment(event.target.value).then((res) => {
      setCommentHasBeenDeleted(true);
    }).catch((err) => {
      console.log(err);
    })
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
            {( comment.author === currentUser) && <button value={comment.comment_id} onClick={removeComment}>Delete comment</button>}
            <p></p>
          </section>
        );
      })}
    </section>);
}
export default DisplayComments ;