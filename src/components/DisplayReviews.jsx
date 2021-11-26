import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../utils/api";
import { sortAndOrderArrayOfObjectsByLengthOfGivenValue } from "../utils/array-utils";
import { capitaliseAndReplaceDashes } from "../utils/string-utils";

function DisplayReviews (props) {
  const [currentReviews, setCurrentReviews] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("currentReviews has been set:", currentReviews);
  }, [currentReviews])

  useEffect(() => {
    console.log("isLoading:", isLoading)
  }, [isLoading])

  useEffect(() => {
    setIsLoading(true)
    getReviews(props.currentCategory, props.currentSortBy, props.currentOrder).then((res) => {
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
  }, [props.currentCategory, props.currentSortBy, props.currentOrder]);


  return (
    <>
    {isLoading ? <p className="loading">loading...</p> : null}
    <section className="display-reviews">

      { currentReviews ? currentReviews.map((review) => {
        return (
          <section key={review.review_id} className={"review-card " + review.category}>
            <h2>{review.title}</h2>
            <p>{review.review_body.length < 199 ? review.review_body : review.review_body.substring(0, 200) + "..."}</p>
            <p>Reviewer: {review.owner}</p>
            <p>At: {review.created_at}</p>
            <p>Game designer: {review.designer}</p>
            <p>Category: {capitaliseAndReplaceDashes(review.category)}</p>
            <p>Comments: {review.comment_count}</p>
            <p>Votes: {review.votes}</p>
            <img className="review-image" src={review.review_img_url} alt={review.title} /><br/>
            <Link to={`/reviews/${review.review_id}`}>View</Link>
          </section >
        );
      })
      : null}
    </section>
    </>);
}

export default DisplayReviews ;