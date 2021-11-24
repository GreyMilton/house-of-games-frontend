import { useEffect } from "react";
import { useParams } from "react-router";
import { getReviewById } from "../utils/api";

function ReviewDisplay () {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    getReviewById(params.review_id).then((res) => {
      console.log(res);
    }).catch((err) => {console.log(err)});
  }, [])


  return (
    <section className="review-display">
      <h2>ReviewDisplay</h2> 
    </section>);
}

export default ReviewDisplay ;