import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";

function DisplayReviews (props) {
  const [currentReviews, setCurrentReviews] = useState([{review_id: 100, title: "loading...", review_body: "loading...", created_at: 213}]);

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
          <section key={review.review_id} className={"review-card " + review.category}>
            <h2>{review.title}</h2>
            <p>{review.review_body.length < 199 ? review.review_body : review.review_body.substring(0, 200) + "..."}</p>
            <p>Reviewer: {review.owner}</p>
            <p>At: {review.created_at}</p>
            <p>Game designer: {review.designer}</p>
            <p>Category: {review.category}</p>
            <p>Comments: {review.comment_count}</p>
            <p>Votes: {review.votes}</p>
            <img className="review-image" src={review.review_img_url} alt={review.title} /><br/>
            <Link to={`/reviews/${review.review_id}`}>View</Link>
          </section >
        );
      })
      }
    </section>);
}

export default DisplayReviews ;