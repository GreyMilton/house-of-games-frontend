import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";
import { sortAndOrderArrayOfObjectsByLengthOfGivenValue } from "../utils/array-utils";
import { capitaliseAndReplaceDashes } from "../utils/string-utils";

function DisplayReviews ({currentLocation, currentSortBy, currentOrder, setIsNetworkErrorCategoryPage, setDropdownCategoryIsClicked}) {

  const [currentReviews, setCurrentReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getReviews(currentLocation, currentSortBy, currentOrder).then((res) => {
      setIsLoading(false);
      setIsNetworkErrorCategoryPage(false);
      if (currentSortBy !== "review_body") setCurrentReviews(res);
      else {
        const arraySortedByLength = sortAndOrderArrayOfObjectsByLengthOfGivenValue(res, currentSortBy, currentOrder);
        setCurrentReviews(arraySortedByLength);
      }
    }).catch((err) => {
      console.log(err);
      setIsLoading(false);
      if (err.message === "Network Error") {
        setIsNetworkErrorCategoryPage(true);
      }
    })
  }, [currentLocation, currentSortBy, currentOrder, setIsNetworkErrorCategoryPage]);

  function handleClick() {
    setDropdownCategoryIsClicked(false);
  }

  return (
    <>
    {isLoading ? <p className="loading">loading...</p> : null}
    <section className="display-reviews">
      { currentReviews ? currentReviews.map((review) => {
        return (
          <section key={review.review_id} className={"review-card " + review.category}>
            <Link onClick={handleClick} to={`/review/${review.review_id}`}>
              <h2 className="click-through">{review.title}</h2>
            </Link>
            <Link onClick={handleClick} to={`/review/${review.review_id}`}>
              <p className="click-through">{review.review_body.length < 199 ? review.review_body : review.review_body.substring(0, 100) + "..."}</p>
            </Link>
            <p><strong>Reviewer:</strong> {review.owner}</p>
            <p className="date-and-time">{new Date(review.created_at).toString().substring(0, 21)}</p>
            <p><strong>Game designer:</strong> {review.designer}</p>
            <p><strong>Category:</strong> {capitaliseAndReplaceDashes(review.category)}</p>
            <p><strong>Comments:</strong> {review.comment_count}</p>
            <p><strong>Votes:</strong> {review.votes}</p>
            <Link  className="click-through-img" onClick={handleClick} to={`/review/${review.review_id}`}>
              <img className="review-image" src={review.review_img_url} alt={review.title} /><br/>
            </Link>
            <Link onClick={handleClick} to={`/review/${review.review_id}`}>
              <p className="click-through-link">Click to see full review</p>
            </Link>
          </section >
        );
      })
      : null}
    </section>
    </>);
}

export default DisplayReviews ;