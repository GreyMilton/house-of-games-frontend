import ReviewDisplay from "./ReviewDisplay";
import NewComment from "./NewComment";
import SortComments from "./SortComments";
import DisplayComments from "./DisplayComments";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviewById } from "../utils/api";


function ReviewPage () {

  const [currentReview, setCurrentReview] = useState();

  useEffect(() => {
    console.log("currentReview has been set:", currentReview);
  }, [currentReview])

  const params = useParams();

  useEffect(() => {
    getReviewById(params.review_id).then((res) => {
      setCurrentReview(res);
    }).catch((err) => {console.log(err)});
  }, [])

  return (
    <section className="review-page">
      <ReviewDisplay currentReview={currentReview} />
      <NewComment />
      <SortComments />
      <DisplayComments />
    </section>);
}

export default ReviewPage ;