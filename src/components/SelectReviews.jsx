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
        <option value="strategy">Strategy</option>
        <option value="hidden-roles">Hidden roles</option>
        <option value="dexterity">Dexterity</option>
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