import { useEffect, useState } from "react";
import DisplayReviews from "./DisplayReviews";
import SelectReviews from "./SelectReviews";

function CategoryPage () {

  const [currentCategory, setCurrentCategory] = useState("all-categories");
  useEffect(() => {
    console.log("currentCategory has been set:", currentCategory);
  }, [currentCategory]);

  return (
    <section className="category-page">
      <SelectReviews setCurrentCategory={setCurrentCategory} />
      <DisplayReviews currentCategory={currentCategory} />
    </section>);
}

export default CategoryPage ;