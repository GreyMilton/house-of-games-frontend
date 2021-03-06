import { useState, useContext } from "react";
import { patchReview } from "../utils/api";
import { capitaliseAndReplaceDashes } from "../utils/string-utils"
import { UserContext } from "../contexts/user-context";

function ReviewDisplay (props) {
  const { currentUser } = useContext(UserContext)
  const [newVotesCount, setNewVotesCount] = useState(0);
  const [hasIncrementedVote, setHasIncrementedVote] = useState(false);
  const [hasDecrementedVote, setHasDecrementedVote] = useState(false);
  // const [showCantVoteMessage, setShowCantVoteMessage] = useState();

  function addVotesToReview (event) {
    event.preventDefault();
    if (currentUser) {
      if (!hasIncrementedVote) {
        setHasIncrementedVote(true);
        setNewVotesCount((prevCount) => {
          return prevCount + 1;
        });
        patchReview(props.params.review_id, 1)
          .catch ((err) => {
          console.log(err);
          });
      }
    }
  }

  function subtractVotesFromReview (event) {
    event.preventDefault();
    if (currentUser) {
      if (!hasDecrementedVote) {
        setHasDecrementedVote(true);
        setNewVotesCount((prevCount) => {
          return prevCount - 1;
        });
        patchReview(props.params.review_id, -1)
          .catch ((err) => {
          console.log(err);
          });
      }
    }
  }

  return (
    <section className="review-display">
      {props.reviewRequestIsBad &&
        <>
          <h2>400</h2>
          <p>Bad request: review id not in the required format.</p>
        </>}
      {props.reviewWasNotFound &&
        <>
          <h2>404</h2>
          <p>Review not found.</p>
        </>}
      {props.isNetworkErrorReviewPage.review && <p className="error-message">Network Error</p>}
      {(!props.isNetworkErrorReviewPage.review && props.reviewDisplayIsLoading) ? <p className="loading">loading...</p> : null}
      { props.currentReview ?
      <>
        <img className="review-image-on-review-page" src={props.currentReview.review_img_url} alt={props.currentReview.title} /><br/>
        <h2>{props.currentReview.title }</h2>
        <p>{props.currentReview.review_body}</p>
        <p><strong>Reviewer:</strong> {props.currentReview.owner}</p>
        <p className="date-and-time">{new Date(props.currentReview.created_at).toString().substring(0, 21) + " " + new Date(props.currentReview.created_at).toString().substring(34)}</p>
        <p><strong>Game designer:</strong> {props.currentReview.designer}</p>
        <p><strong>Category:</strong> {capitaliseAndReplaceDashes(props.currentReview.category)}</p>
        <p><strong>Votes:</strong> {props.currentReview.votes + newVotesCount} <button className={currentUser ? "voting-button" : "disabled"} onClick={addVotesToReview}>+</button><button className={currentUser ? "voting-button" : "disabled"} onClick={subtractVotesFromReview}>-</button></p>
      </>
      : null}
    </section>);
}

export default ReviewDisplay ;