import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";

function DisplayReviews (props) {
  const [currentReviews, setCurrentReviews] = useState([{review_id: 100, title: "loading..."}]);

  useEffect(() => {
    console.log("currentReviews has been set:", currentReviews);
  }, [currentReviews])

  useEffect(() => {
    getReviews(props.currentCategory, props.currentSortBy, props.currentOrder).then((res) => {
      setCurrentReviews(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [props.currentCategory, props.currentSortBy, props.currentOrder]);


  return (
    <section className="display-reviews">
      {currentReviews.map((review) => {
        return (
          <p key={review.review_id} className="review-card">{review.title}<Link to={`/reviews/${review.review_id}`}>Go to single review</Link></p>
        );
      })}
    </section>);
}

export default DisplayReviews ;