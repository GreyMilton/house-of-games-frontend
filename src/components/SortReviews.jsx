function SortReviews (props) {

  function selectNewSortBy(event) {
    props.setCurrentSortBy(event.target.value);
  }
  function selectNewOrder(event) {
    props.setCurrentOrder(event.target.value);
  }
  return (
    <section className="sort-reviews">
      <label>Sorting:
        <select className="sort-by-select" onChange={selectNewSortBy}>
          <option value="created_at">Created at</option>
          <option value="title">Title</option>
          <option value="designer">Designer</option>
          <option value="owner">Reviewer</option>
          <option value="votes">Votes</option>
          <option value="review_body">Length</option>
          <option value="comment_count">Comments</option>
          {(props.currentLocation === "/" || props.currentLocation === "/reviews" )? <option value="category">Category</option> : null}
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

export default SortReviews ;