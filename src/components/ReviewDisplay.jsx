import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviewById } from "../utils/api";
import { capitaliseAndReplaceDashes } from "../utils/string-utils"

function ReviewDisplay () {
  const [currentReview, setCurrentReview] = useState();
  const [reviewDisplayIsLoading, setReviewDisplayIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    console.log("reviewDisplayIsLoading:", reviewDisplayIsLoading);
  }, [reviewDisplayIsLoading])

  useEffect(() => {
    console.log("currentReview has been set:", currentReview);
  }, [currentReview])

  useEffect(() => {
    setReviewDisplayIsLoading(true);
    getReviewById(params.review_id).then((res) => {
      setCurrentReview(res);
      setReviewDisplayIsLoading(false);
    }).catch((err) => {console.log(err)});
  }, [])

  return (
    <section className="review-display">
      {reviewDisplayIsLoading ? <p className="loading">loading...</p> : null}
      { currentReview ?
      <>
        <img className="review-image" src={currentReview.review_img_url} alt={currentReview.title} /><br/>
        <h2>{currentReview.title }</h2>
        <p>{currentReview.review_body}</p>
        <p>Reviewer: {currentReview.owner}</p>
        <p>At: {currentReview.created_at}</p>
        <p>Game designer: {currentReview.designer}</p>
        <p>Category: {capitaliseAndReplaceDashes(currentReview.category)}</p>
        <p>Votes: {currentReview.votes} <button onClick={() =>{console.log("up")}}>+</button><button onClick={() => {console.log("down")}}>-</button></p>
        <p>Comments: {currentReview.comment_count}</p>
      </>
      : null}
    </section>);
}

export default ReviewDisplay ;