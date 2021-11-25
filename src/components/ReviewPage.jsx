import ReviewDisplay from "./ReviewDisplay";
import NewComment from "./NewComment";
import SortComments from "./SortComments";
import DisplayComments from "./DisplayComments";

function ReviewPage () {

  return (
    <section className="review-page">
      <ReviewDisplay />
      <NewComment />
      <SortComments />
      <DisplayComments />
    </section>);
}

export default ReviewPage ;