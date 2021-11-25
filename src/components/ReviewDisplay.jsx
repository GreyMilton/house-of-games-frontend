
import { capitaliseAndReplaceDashes } from "../utils/string-utils"

function ReviewDisplay (props) {
  
  return (
    <section className="review-display">
      {props.reviewDisplayIsLoading ? <p className="loading">loading...</p> : null}
      { props.currentReview ?
      <>
        <img className="review-image" src={props.currentReview.review_img_url} alt={props.currentReview.title} /><br/>
        <h2>{props.currentReview.title }</h2>
        <p>{props.currentReview.review_body}</p>
        <p>Reviewer: {props.currentReview.owner}</p>
        <p>At: {props.currentReview.created_at}</p>
        <p>Game designer: {props.currentReview.designer}</p>
        <p>Category: {capitaliseAndReplaceDashes(props.currentReview.category)}</p>
        <p>Votes: {props.currentReview.votes} <button onClick={() =>{console.log("up")}}>+</button><button onClick={() => {console.log("down")}}>-</button></p>
        <p>Comments: {props.currentReview.comment_count}</p>
      </>
      : null}
    </section>);
}

export default ReviewDisplay ;