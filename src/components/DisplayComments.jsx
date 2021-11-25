import { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../utils/api"
import { sortAndOrderArrayOfObjects } from '../utils/array-utils'

function DisplayComments (props) {
  const [currentComments, setCurrentComments] = useState();

  useEffect(() => {
    getCommentsByReviewId(props.params.review_id).then((res) => {
      console.log(res);
      setCurrentComments(res);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  useEffect(() => {
    sortAndOrderArrayOfObjects(currentComments, props.currentCommentsSortBy, props.currentCommentsOrder);
  }, [props.currentCommentsSortBy, props.currentCommentsOrder])

  return (
    <section className="display-comments">
      {currentComments && currentComments.map((comment) => {
        return (
          <section key={comment.comment_id} className="comment-card">
            <h4>{comment.author}</h4>
            <p>At: {comment.created_at}</p>
            <p>{comment.body}</p>
            <p>Votes:{comment.votes} <button onClick={() =>{console.log("up")}}>+</button><button onClick={() => {console.log("down")}}>-</button></p>
          </section>
        );
      })}
    </section>);
}
export default DisplayComments ;