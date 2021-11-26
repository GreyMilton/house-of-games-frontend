
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { capitaliseAndReplaceDashes } from "../utils/string-utils"

function ReviewDisplay (props) {
  const [newVotesCount, setNewVotesCount] = useState(0);

  useEffect(() => {
    console.log("newVotesCount has been set:", newVotesCount)
  }, [newVotesCount])

  function addVotesToReview () {
    setNewVotesCount((prevCount) => {
      return prevCount + 1;
    })
  }

  function subtractVotesFromReview () {
    setNewVotesCount((prevCount) => {
      return prevCount - 1;
    })
  }

  return (
    <section className="review-display">
      {props.reviewDisplayIsLoading ? <p className="loading">loading...</p> : null}
      { props.currentReview ?
      <>
        <img className="review-image" src={props.currentReview.review_img_url} alt={props.currentReview.title} /><br/>
        <h2>{props.currentReview.title }</h2>
        <p>{props.currentReview.review_body}</p>
        <p>Reviewer: {props.currentReview.owner}</p>
        <p>At: {props.currentReview.created_at}</p>
        <p>Game designer: {props.currentReview.designer}</p>
        <p>Category: {capitaliseAndReplaceDashes(props.currentReview.category)}</p>
        <p>Votes: {props.currentReview.votes + newVotesCount} <button onClick={addVotesToReview}>+</button><button onClick={subtractVotesFromReview}>-</button></p>
      </>
      : null}
    </section>);
}

export default ReviewDisplay ;