import { useEffect, useState } from "react";
import DisplayReviews from "./DisplayReviews";
import SelectReviews from "./SelectReviews";

function CategoryPage () {
  const [currentCategory, setCurrentCategory] = useState("all-categories");
  const [currentSortBy, setCurrentSortBy] = useState("created_at");
  const [currentOrder, setCurrentOrder] = useState("desc");
  
  useEffect(() => {
    console.log("currentCategory has been set:", currentCategory);
  }, [currentCategory]);

  useEffect(() => {
    console.log("currentSortBy has been set:", currentSortBy);
  }, [currentSortBy]);

  useEffect(() => {
    console.log("currentOrder has been set:", currentOrder);
  }, [currentOrder]);

  return (
    <section className="category-page">
      <SelectReviews currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} setCurrentSortBy={setCurrentSortBy} setCurrentOrder={setCurrentOrder} />
      <DisplayReviews currentCategory={currentCategory} currentSortBy={currentSortBy} currentOrder={currentOrder} />
    </section>);
}

export default CategoryPage ;