import { useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

function SelectReviews () {
  const [currentCategory, setCurrentCategory] = useState("All reviews");

  function handleChange(event) {
    getCategories();
    console.log("this is the event.target.value:", event.target.value);
  }

  return (
    <section className="select-reviews">
      <select className="categories-select" onChange={handleChange}>
        <option value="All">All categories</option>
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="four">4</option>
      </select>
      <select className="sort-by-select" onChange={handleChange}>
        <option value="created_at">Created at</option>
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="four">4</option>
      </select>
      <select className="order-select" onChange={handleChange}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </section>);
}

export default SelectReviews ;