import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getReviewById } from "../utils/api";
import ReviewDisplay from "./ReviewDisplay";
import NewComment from "./NewComment";
import SortComments from "./SortComments";
import DisplayComments from "./DisplayComments";

function ReviewPage () {
  const [currentReview, setCurrentReview] = useState();
  const [currentCommentsSortBy, setCurrentCommentsSortBy] = useState("created_at");
  const [currentCommentsOrder, setCurrentCommentsOrder] = useState("desc");
  const [reviewDisplayIsLoading, setReviewDisplayIsLoading] = useState(true);
  const params = useParams();
  const [newCommentCount, setNewCommentCount] = useState(0);
  const [isNetworkErrorReviewPage, setIsNetworkErrorReviewPage] = useState({});

  useEffect(() => {
    setReviewDisplayIsLoading(true);
    getReviewById(params.review_id).then((res) => {
      setCurrentReview(res);
      setReviewDisplayIsLoading(false);
    }).catch((err) => {console.log(err)});
  }, [params.review_id, newCommentCount])

  return (
    <section className={currentReview ? "review-page " + currentReview.category : "review-page"}>
      <ReviewDisplay params={params} reviewDisplayIsLoading={reviewDisplayIsLoading} currentReview={currentReview} isNetworkErrorReviewPage={isNetworkErrorReviewPage} setIsNetworkErrorReviewPage={setIsNetworkErrorReviewPage}/>
      {currentReview && <h3 className="comments-count">This review has {currentReview.comment_count} comment{currentReview.comment_count !== 1 ? 's' : null}.</h3>}
      <NewComment params={params} setNewCommentCount={setNewCommentCount} isNetworkErrorReviewPage={isNetworkErrorReviewPage} setIsNetworkErrorReviewPage={setIsNetworkErrorReviewPage}/>
      {(currentReview && currentReview.comment_count > 1) ? <SortComments setCurrentCommentsSortBy={setCurrentCommentsSortBy} setCurrentCommentsOrder={setCurrentCommentsOrder} /> : null}
      <DisplayComments params={params} currentCommentsSortBy={currentCommentsSortBy} currentCommentsOrder={currentCommentsOrder} newCommentCount={newCommentCount} setNewCommentCount={setNewCommentCount} isNetworkErrorReviewPage={isNetworkErrorReviewPage} setIsNetworkErrorReviewPage={setIsNetworkErrorReviewPage}/>
    </section>);
}

export default ReviewPage ;