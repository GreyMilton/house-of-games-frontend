import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviewById } from "../utils/api";

function ReviewDisplay () {
  const params = useParams();
  const [currentReview, setCurrentReview] = useState(params.review_id);
  const [reviewDisplayIsLoading, setReviewDisplayIsLoading] = useState(true);

  useEffect(() => {
    console.log("reviewDisplayIsLoading:", reviewDisplayIsLoading);
  }, [reviewDisplayIsLoading])

  useEffect(() => {
    console.log("currentReview has been set:", currentReview);
  }, [currentReview])

  useEffect(() => {
    setReviewDisplayIsLoading(true);
    getReviewById(currentReview).then((res) => {
      setCurrentReview(res);
      setReviewDisplayIsLoading(false);
    }).catch((err) => {console.log(err)});
  }, [])

  return (
    <section className="review-display">
      {reviewDisplayIsLoading ? <p className="loading">loading...</p> : null}
       <h2>{currentReview && currentReview.title }</h2> 
    </section>);
}

export default ReviewDisplay ;