import { Link } from "react-router-dom";

function DisplayReviews () {
  return (
    <section className="display-reviews">
      <h2>DisplayReviews</h2>
      <Link to="/reviews/:review_id">Go to single review</Link>
    </section>);
}

export default DisplayReviews ;