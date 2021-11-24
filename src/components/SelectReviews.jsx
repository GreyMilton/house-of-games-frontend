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

  function handleChange(event) {
    props.setCurrentCategory(event.target.value);
  }

  return (
    <section className="select-reviews">
      <select className="categories-select" onChange={handleChange}>
        <option value="all-categories">All categories</option>
        {allCategories.map((category, index) => {
          return (
            <option key={index} value={category.slug}>{category.slug}</option>
          )
        })}
      </select>
      <select className="sort-by-select" onChange={handleChange}>
        <option value="created_at">Created at</option>
        <option value="title">Title</option>
        <option value="designer">Designer</option>
        <option value="owner">Owner</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
        <option value="length">Length</option>
        <option value="category">Category</option>
      </select>
      <select className="order-select" onChange={handleChange}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </section>
    );
}

export default SelectReviews ;