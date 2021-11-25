import ReviewDisplay from "./ReviewDisplay";
import NewComment from "./NewComment";
import SortComments from "./SortComments";
import DisplayComments from "./DisplayComments";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getReviewById } from "../utils/api";

function ReviewPage () {
  const [currentReview, setCurrentReview] = useState();
  const [reviewDisplayIsLoading, setReviewDisplayIsLoading] = useState(true);

  useEffect(() => {
    console.log("reviewDisplayIsLoading:", reviewDisplayIsLoading);
  }, [reviewDisplayIsLoading])

  useEffect(() => {
    console.log("currentReview has been set:", currentReview);
  }, [currentReview])


  const params = useParams();

  useEffect(() => {
    setReviewDisplayIsLoading(true);
    getReviewById(params.review_id).then((res) => {
      setCurrentReview(res);
      setReviewDisplayIsLoading(false);
    }).catch((err) => {console.log(err)});
  }, [])

  const [currentCommentsSortBy, setCurrentCommentsSortBy] = useState("created_at");
  const [currentCommentsOrder, setCurrentCommentsOrder] = useState("desc");

  useEffect(() => {
    console.log("currentCommentsSortBy has been set:", currentCommentsSortBy);
  }, [currentCommentsSortBy]);

  useEffect(() => {
    console.log("currentCommentsOrder has been set:", currentCommentsOrder);
  }, [currentCommentsOrder]);

  return (
    <section className="review-page">
      <ReviewDisplay params={params} reviewDisplayIsLoading={reviewDisplayIsLoading} currentReview={currentReview} />
      {currentReview && <h3 className="comments-count">This review has {currentReview.comment_count} comment{currentReview.comment_count !== 1 ? 's' : null}.</h3>}
      <NewComment params={params}/>
      {currentReview && currentReview.comments > 1 ? <SortComments setCurrentCommentsSortBy={setCurrentCommentsSortBy} setCurrentCommentsOrder={setCurrentCommentsOrder} /> : null}
      <DisplayComments params={params} currentCommentsSortBy={currentCommentsSortBy} currentCommentsOrder={currentCommentsOrder} />
    </section>);
}

export default ReviewPage ;