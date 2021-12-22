import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";
import { sortAndOrderArrayOfObjectsByLengthOfGivenValue } from "../utils/array-utils";
import { capitaliseAndReplaceDashes } from "../utils/string-utils";

function DisplayReviews (props) {

  const [currentReviews, setCurrentReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getReviews(props.currentLocation, props.currentSortBy, props.currentOrder).then((res) => {
      setIsLoading(false);
      if (props.currentSortBy !== "review_body") setCurrentReviews(res);
      else {
        const arraySortedByLength = sortAndOrderArrayOfObjectsByLengthOfGivenValue(res, props.currentSortBy, props.currentOrder);
        setCurrentReviews(arraySortedByLength);
      }
    }).catch((err) => {
      console.log(err);
      setIsLoading(false);
    })
  }, [props.currentLocation, props.currentSortBy, props.currentOrder]);

  function handleClick() {
    props.setDropdownCategoryIsClicked(false);
  }

  return (
    <>
    {isLoading ? <p className="loading">loading...</p> : null}
    <section className="display-reviews">
      { currentReviews ? currentReviews.map((review) => {
        return (
          <section key={review.review_id} className={"review-card " + review.category}>
            <Link onClick={handleClick} to={`/reviews/${review.review_id}`}>
              <h2>{review.title}</h2>
            </Link>
            <Link onClick={handleClick} to={`/reviews/${review.review_id}`}>
              <p>{review.review_body.length < 199 ? review.review_body : review.review_body.substring(0, 100) + "..."}</p>
            </Link>
            <p><strong>Reviewer:</strong> {review.owner}</p>
            <p className="date-and-time">{new Date(review.created_at).toString().substring(0, 21)}</p>
            <p><strong>Game designer:</strong> {review.designer}</p>
            <p><strong>Category:</strong> {capitaliseAndReplaceDashes(review.category)}</p>
            <p><strong>Comments:</strong> {review.comment_count}</p>
            <p><strong>Votes:</strong> {review.votes}</p>
            <Link onClick={handleClick} to={`/reviews/${review.review_id}`}>
              <img className="review-image" src={review.review_img_url} alt={review.title} /><br/>
            </Link>
            <Link onClick={handleClick} to={`/reviews/${review.review_id}`}>
              <p>Click to see full review</p>
            </Link>
          </section >
        );
      })
      : null}
    </section>
    </>);
}

export default DisplayReviews ;