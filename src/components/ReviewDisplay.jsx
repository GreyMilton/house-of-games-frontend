
function ReviewDisplay (props) {

  return (
    <section className="review-display">
      <h2>{props.currentReview && props.currentReview.title }</h2> 
    </section>);
}

export default ReviewDisplay ;