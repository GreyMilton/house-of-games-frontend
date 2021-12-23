import { useContext, useEffect, useState } from "react";
import { deleteComment, getCommentsByReviewId } from "../utils/api"
import { sortAndOrderArrayOfObjects } from "../utils/array-utils"
import { UserContext } from "../contexts/user-context"

function DisplayComments ({ params, currentCommentsSortBy, currentCommentsOrder, newCommentCount, setNewCommentCount, isNetworkErrorReviewPage, setIsNetworkErrorReviewPage }) {
  const { currentUser } = useContext(UserContext)
  const [currentComments, setCurrentComments] = useState([]);
  const [commentsIsLoading, setCommentsIsLoading] = useState(true);
  const [triggerRerender, setTriggerRerender] = useState(0);

  useEffect(() => {
    setCommentsIsLoading(true);
    getCommentsByReviewId(params.review_id).then((res) => {
      const sortedResponse = sortAndOrderArrayOfObjects(res, currentCommentsSortBy, currentCommentsOrder);
      setCurrentComments(sortedResponse);
      setCommentsIsLoading(false);
      setIsNetworkErrorReviewPage({});
    })
    .catch((err) => {
      setCommentsIsLoading(false);
      if (err.response && err.response.data.msg === "No comments found") {
        setCurrentComments([]);
        setIsNetworkErrorReviewPage({});
      } else if (err.message === "Network Error") {
        setIsNetworkErrorReviewPage({comments: true});
      }
      
    })
  },[params.review_id, newCommentCount, currentCommentsSortBy, currentCommentsOrder, triggerRerender, setIsNetworkErrorReviewPage])

  function removeComment(event) {
    setCommentsIsLoading(true);
    deleteComment(event.target.value).then((res) => {
      setNewCommentCount(prevCommentCount => prevCommentCount - 1);
      setCommentsIsLoading(false);
      setIsNetworkErrorReviewPage({});
    }).catch((err) => {
      if (err.response && err.response.data.msg === "Comment not found") {
        setTriggerRerender(prevState => prevState + 1);
        setIsNetworkErrorReviewPage({});
      } else if (err.message === "Network Error") {
        setCommentsIsLoading(false);
        setIsNetworkErrorReviewPage(prevState => {
          const newObject = { ...prevState }
          newObject.comments = true;
          return newObject;
        });
      }
    })
  }

  // NOTE: The commented-out code in this file is the logic needed for buttons to vote on comments. As I do not yet have the required backend functionality to implement this, I have commented it out.

  // const [additionalVotes, setAdditionalVotes] = useState({});
  // const [hasIncrementedVote, setHasIncrementedVote] = useState({});
  // const [hasDecrementedVote, setHasDecrementedVote] = useState({});

  // function addVotesToComment (event) {
  //   event.preventDefault();
  //   console.log(this);
  //   if (!hasIncrementedVote[this]) {
  //     setHasIncrementedVote(prevState => {
  //       const newState = { ...prevState };
  //       newState[this] = true;
  //       return newState;
  //     });
  //     setAdditionalVotes((prevCount) => {
  //       const newVotesCount = { ...prevCount };
  //       if (newVotesCount[this] === -1) newVotesCount[this] += 1;
  //       else newVotesCount[this] = 1;
  //       return newVotesCount;
  //     });
  //     // patchComment(this, 1)
  //     //   .catch ((err) => {
  //     //   console.log(err);
  //     //   });
  //   }
  // }

  // function subtractVotesFromComment (event) {
  //   event.preventDefault();
  //   console.log(this);
  //   if (!hasDecrementedVote[this]) {
  //     setHasDecrementedVote(prevState => {
  //       const newState = { ...prevState };
  //       newState[this] = true;
  //       return newState;
  //     });
  //     setAdditionalVotes((prevCount) => {
  //       const newVotesCount = { ...prevCount };
  //       if (newVotesCount[this] === 1) newVotesCount[this] -= 1;
  //       else newVotesCount[this] = -1;
  //       return newVotesCount;
  //     });
  //   //   patchComment(this, -1)
  //   //     .catch ((err) => {
  //   //     console.log(err);
  //   //     });
  //   }
  // }

  return (
    <section className="display-comments">
      {isNetworkErrorReviewPage.comments && <p className="error-message">Network Error. Are you connected to the internet?</p>}
      {commentsIsLoading && <p>loading...</p>}
      {currentComments.length > 0 ? currentComments.map((comment) => {
        return (
          <section key={comment.comment_id} className="comment-card">
            <h4>{comment.author}{( comment.author === currentUser) && " (you)"}</h4>
            <p>{comment.body}</p>
            <p className="date-and-time">{new Date(comment.created_at).toString().substring(0, 21) + " " + new Date(comment.created_at).toString().substring(34)}</p>
            <p><strong>Votes:</strong> {comment.votes}{/*{ additionalVotes[comment.comment_id] ? comment.votes + additionalVotes[comment.comment_id] : comment.votes} <button className="comment-voting-button" onClick={addVotesToComment.bind(comment.comment_id)}>+</button><button className="comment-voting-button" onClick={subtractVotesFromComment.bind(comment.comment_id)}>-</button>*/}</p>
            {( comment.author === currentUser) && <button className="delete-comment-button" value={comment.comment_id} onClick={removeComment}>Delete comment</button>}
            <p></p>
          </section>
        );
      })
      :
      null
    }
    </section>);
}
export default DisplayComments ;