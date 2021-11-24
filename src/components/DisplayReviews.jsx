import { Link } from "react-router-dom";

function DisplayReviews () {
  return (
    <section className="display-reviews">
      <p className="review-card">Review card 1 <Link to="/reviews/:review_id">Go to single review</Link></p>
      <p className="review-card">Review card 2</p>
      <p className="review-card">Review card 3</p>
      <p className="review-card">Review card 4</p>
      <p className="review-card">Review card 5</p>
      <p className="review-card">Review card 6</p>
      <p className="review-card">Review card 7</p>
      <p className="review-card">Review card 8</p>
      <p className="review-card">Review card 9</p>
      <p className="review-card">Review card 10</p>
      <p className="review-card">Review card 11</p>

    </section>);
}

export default DisplayReviews ;