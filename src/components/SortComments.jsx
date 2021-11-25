import { useEffect, useState } from "react";

function SortComments (props) {

  function selectNewCommentsSortBy(event) {
    props.setCurrentCommentsSortBy(event.target.value);
  }

  function selectNewCommentsOrder(event) {
    props.setCurrentCommentsOrder(event.target.value);
  }

  return (
    <section className="sort-comments">
      <label>Sort comments:
        <select className="sort-by-select" onChange={selectNewCommentsSortBy}>
          <option value="created_at">Created at</option>
          <option value="votes">Votes</option>
          <option value="author">Author</option>
          <option value="body">Body</option>
          <option value="comment_id">Comment id</option>
        </select>
        <select className="order-select" onChange={selectNewCommentsOrder}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </section>);
}

export default SortComments ;