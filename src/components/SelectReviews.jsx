import { capitaliseAndReplaceDashes } from "../utils/string-utils";

function SelectReviews (props) {

  function selectNewCategory(event) {
    props.setCurrentCategory(event.target.value);
  }

  function selectNewSortBy(event) {
    props.setCurrentSortBy(event.target.value);
  }

  function selectNewOrder(event) {
    props.setCurrentOrder(event.target.value);
  }

  return (
    <section className="select-reviews">
      {/* <label>Category:
        <select name="select-category" className="categories-select" onChange={selectNewCategory}>
          {props.allCategories.map((category, index) => {
            return (
              <option key={category.slug} value={category.slug}>{capitaliseAndReplaceDashes(category.slug)}</option>
            )
          })}
        </select>
      </label> */}
      <label>Sorting:
        <select className="sort-by-select" onChange={selectNewSortBy}>
          <option value="created_at">Created at</option>
          <option value="title">Title</option>
          <option value="designer">Designer</option>
          <option value="owner">Owner</option>
          <option value="votes">Votes</option>
          <option value="review_body">Length</option>
          <option value="comment_count">Comments</option>
          {props.currentCategory === "all-categories" ? <option value="category">Category</option> : null}
        </select>
      </label>
      <label>Order:
        <select className="order-select" onChange={selectNewOrder}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </section>
    );
}

export default SelectReviews ;