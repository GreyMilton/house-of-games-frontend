import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

function SelectReviews (props) {
  const [allCategories, setAllCategories] = useState([{}]);

  useEffect(() => {
    getCategories().then((res) => {
      setAllCategories(res);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  useEffect(() => {
    console.log("allCategories has been set:", allCategories);
  }, [allCategories]);

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
      <select className="categories-select" onChange={selectNewCategory}>
        <option value="all-categories">All categories</option>
        {allCategories.map((category, index) => {
          return (
            <option key={index} value={category.slug}>{category.slug}</option>
          )
        })}
      </select>
      <select className="sort-by-select" onChange={selectNewSortBy}>
        <option value="created_at">Created at</option>
        <option value="title">Title</option>
        <option value="designer">Designer</option>
        <option value="owner">Owner</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
        <option value="length">Length</option>
        {props.currentCategory === "all-categories" ? <option value="category">Category</option> : null}
      </select>
      <select className="order-select" onChange={selectNewOrder}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </section>
    );
}

export default SelectReviews ;