import ReviewDisplay from "./ReviewDisplay";
import NewComment from "./NewComment";
import SortComments from "./SortComments";
import DisplayComments from "./DisplayComments";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function ReviewPage () {
  const params = useParams();
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
      <ReviewDisplay params={params} />
      <h3>Comments:</h3>
      <NewComment params={params}/>
      <SortComments setCurrentCommentsSortBy={setCurrentCommentsSortBy} setCurrentCommentsOrder={setCurrentCommentsOrder} />
      <DisplayComments params={params} currentCommentsSortBy={currentCommentsSortBy} currentCommentsOrder={currentCommentsOrder} />
    </section>);
}

export default ReviewPage ;