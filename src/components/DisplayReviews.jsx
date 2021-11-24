import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";

function DisplayReviews (props) {
  const [currentReviews, setCurrentReviews] = useState([{}]);

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